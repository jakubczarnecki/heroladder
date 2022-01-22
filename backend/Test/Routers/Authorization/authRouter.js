import mongoose from "mongoose";
import User from "../../../Schema/User.js";
import supertest from "supertest";

import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import app from "../../../index.js";

chai.use(chaiHttp);

describe("Authorization", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    User.deleteMany({}, (err) => {
      done();
    });
  });

  describe("/POST register", () => {
    it("Register new user and retrun an object", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send({
          "username": "testUserName",
          "email": "test@email.com",
          "password1": "testPassword",
          "password2": "testPassword",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
