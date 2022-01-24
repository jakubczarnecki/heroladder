import mongoose from "mongoose";
import User from "../../Schema/User.js";

import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import app from "../../index.js";

chai.use(chaiHttp);

describe("--- AUTHORIZATION MIDDLEWARES ---", () => {
  let token;
  let id;
  beforeEach((done) => {
    chai.request(app).post("/api/auth/register").send({
      "username": "testUserName",
      "email": "test@email.com",
      "password1": "testPassword",
      "password2": "testPassword",
    });
    chai
      .request(app)
      .post("/api/auth/login")
      .send({
        "email": "test@email.com",
        "password": "testPassword",
      })
      .end((err, res) => {
        token = res.body.token;
        id = res.body._id;
        done();
      });
  });

  describe("authenticate()", () => {
    it("Throw error when token is missing", (done) => {
      chai
        .request(app)
        .get("/api/users/all")
        .set({ "Authorization": `Bearer ` })
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
    it("Throw error when token is invalid", (done) => {
      chai
        .request(app)
        .get("/api/users/all")
        .set({ "Authorization": `Bearer 21rwa123421sa241` })
        .end((err, res) => {
          res.should.have.status(403);
          done();
        });
    });
  });
});
