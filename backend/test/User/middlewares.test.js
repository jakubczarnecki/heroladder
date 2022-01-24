import mongoose from "mongoose";
import User from "../../Schema/User.js";

import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import app from "../../index.js";

chai.use(chaiHttp);

describe("--- USERS MIDDLEWARES ---", () => {
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

  describe("checkIfUserExists()", () => {
    it("Throw error when user does not exist", (done) => {
      chai
        .request(app)
        .get(`/api/users/61ee1243eb4f6f3c04eb281b`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
