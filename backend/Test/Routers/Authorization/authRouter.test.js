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
    it("Throw error when username is too short", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send({
          "username": "te",
          "email": "test@email.com",
          "password1": "testPassword",
          "password2": "testPassword",
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it("Throw error when email is invalid", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send({
          "username": "testUserName",
          "email": "wrong.com",
          "password1": "testPassword",
          "password2": "testPassword",
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it("Throw error when password is too short", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send({
          "username": "testUserName",
          "email": "test@email.com",
          "password1": "te",
          "password2": "te",
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it("Throw error when passwords not the same", (done) => {
      chai
        .request(app)
        .post("/api/auth/register")
        .send({
          "username": "testUserName",
          "email": "test@email.com",
          "password1": "testPassword1",
          "password2": "testPassword2",
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  //LOGIN
  describe("/POST login", () => {
    beforeEach((done) => {
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
    it("Login user and return an object", (done) => {
      chai
        .request(app)
        .post("/api/auth/login")
        .send({
          "email": "test@email.com",
          "password": "testPassword",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("Throw error when login or email incorrect", (done) => {
      chai
        .request(app)
        .post("/api/auth/login")
        .send({
          "email": "incorrect@email.com",
          "password": "testPassword",
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
