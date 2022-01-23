import mongoose from "mongoose";
import User from "../../../Schema/User.js";

import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import app from "../../../index.js";

chai.use(chaiHttp);

describe("Users", () => {
  let token = "";
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
      });
    User.deleteMany({}, (err) => {
      done();
    });
  });

  describe("/GET all", () => {
    it("Return all users list", (done) => {
      chai
        .request(app)
        .get("/api/users/all")
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(401);
          res.body.should.be.a("array");
          done();
        });
    });
    // it("Return all users list", (done) => {
    //   chai
    //     .request(app)
    //     .get("/api/users/all")
    //     .set({ "Authorization": `Bearer ${token}` })
    //     .end((err, res) => {
    //       res.should.have.status(200);
    //       res.body.should.be.a("array");
    //       done();
    //     });
    // });
  });
});
