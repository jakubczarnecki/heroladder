import mongoose from "mongoose";
import User from "../../../Schema/User.js";

import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import app from "../../../index.js";

chai.use(chaiHttp);

describe("Users", () => {
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

  describe("/GET all", () => {
    it("Returns all users list", (done) => {
      chai
        .request(app)
        .get("/api/users/all")
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
  describe("/GET :id", () => {
    it("Returns user by id", (done) => {
      chai
        .request(app)
        .get(`/api/users/${id}`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("/GET :username", () => {
    it("Returns array of users by username part", (done) => {
      chai
        .request(app)
        .get(`/api/users/byUsername/test`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });

    it("Returns message when no users matching login", (done) => {
      chai
        .request(app)
        .get(`/api/users/byUsername/nonExistingUser`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          done();
        });
    });
  });
  describe("/GET :id/organizedTournaments", () => {
    it("Returns tournaments organized by user", (done) => {
      chai
        .request(app)
        .get(`/api/users/${id}/organizedTournaments`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
  describe("/GET /:id/participatedTournaments", () => {
    it("Returns tournaments participated by user", (done) => {
      chai
        .request(app)
        .get(`/api/users/${id}/participatedTournaments`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
  describe("/GET /:id/tournamentsHistory", () => {
    it("Returns tournament history by user", (done) => {
      chai
        .request(app)
        .get(`/api/users/${id}/participatedTournaments`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
});
