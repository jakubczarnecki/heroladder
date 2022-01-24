import mongoose from "mongoose";
import User from "../../Schema/User.js";
import supertest from "supertest";

import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import app from "../../index.js";
import Tournament from "../../Schema/Tournament.js";

chai.use(chaiHttp);

describe("--- TOURNAMENTS ---", () => {
  let id;
  let token;
  beforeEach((done) => {
    Tournament.deleteMany({}, (err) => {});
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
        done();
      });
    chai
      .request(app)
      .post("/api/tournaments/create")
      .set({ "Authorization": `Bearer ${token}` })
      .send({
        "tournamentName": "testName",
        "discipline": "testDiscipline",
        "date": "2022-03-27",
        "bracketSize": "16",
        "location": {
          "latitude": "51.831210",
          "longitude": "18.198031",
        },
        "premium": true,
      })
      .end((err, res) => {
        id = res.body._id;
      });
  });

  describe("/POST /create", () => {
    it("Create new tournament and returns an object", (done) => {
      chai
        .request(app)
        .post("/api/tournaments/create")
        .set({ "Authorization": `Bearer ${token}` })
        .send({
          "tournamentName": "testName",
          "discipline": "testDiscipline",
          "date": "2022-03-27",
          "bracketSize": "4",
          "location": {
            "latitude": "51.831210",
            "longitude": "18.198031",
          },
          "premium": true,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("Throw error when tournamentName is too short", (done) => {
      chai
        .request(app)
        .post("/api/tournaments/create")
        .set({ "Authorization": `Bearer ${token}` })
        .send({
          "tournamentName": "t",
          "discipline": "testDiscipline",
          "date": "2022-03-27",
          "bracketSize": "16",
          "location": {
            "latitude": "51.831210",
            "longitude": "18.198031",
          },
          "premium": true,
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it("Throw error when discipline is invalid", (done) => {
      chai
        .request(app)
        .post("/api/tournaments/create")
        .set({ "Authorization": `Bearer ${token}` })
        .send({
          "tournamentName": "testName",
          "discipline": "t",
          "date": "2022-03-27",
          "bracketSize": "16",
          "location": {
            "latitude": "51.831210",
            "longitude": "18.198031",
          },
          "premium": true,
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  describe("/PUT /:id/init", () => {
    it("Initialize tournament with empty bracket", (done) => {
      chai
        .request(app)
        .put(`/api/tournaments/${id}/init`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
  describe("/GET /all", () => {
    it("Return array of all tournaments", (done) => {
      chai
        .request(app)
        .get(`/api/tournaments/all`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });
  describe("/GET /:id", () => {
    it("Return tournament object by id", (done) => {
      chai
        .request(app)
        .get(`/api/tournaments/${id}`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("/DELETE /:id", () => {
    it("Delete tournament", (done) => {
      chai
        .request(app)
        .delete(`/api/tournaments/${id}`)
        .set({ "Authorization": `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
