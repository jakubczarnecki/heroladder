import mongoose from "mongoose";
import User from "../../Schema/User.js";
import supertest from "supertest";

import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import app from "../../index.js";
import Tournament from "../../Schema/Tournament.js";

chai.use(chaiHttp);

describe("--- TOURNAMENT MIDDLEWARES ---", () => {
  let id;
  let token;
  beforeEach((done) => {
    Tournament.deleteMany({}, (err) => {});
    chai.request(app).post("/api/auth/register").send({
      "username": "testUserName1",
      "email": "test@email1.com",
      "password1": "testPassword",
      "password2": "testPassword",
    });
    chai.request(app).post("/api/auth/register").send({
      "username": "testUserName2",
      "email": "test@email2.com",
      "password1": "testPassword",
      "password2": "testPassword",
    });
    chai
      .request(app)
      .post("/api/auth/login")
      .send({
        "email": "test@email1.com",
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

  describe("authorizeOrganizer()", () => {
    it("Throw error when user is not organizer of tournament", (done) => {
      let tokenTest;
      chai
        .request(app)
        .post("/api/auth/login")
        .send({
          "email": "test@email2.com",
          "password": "testPassword",
        })
        .end((err, res) => {
          tokenTest = res.body.token;
        });
      chai
        .request(app)
        .put(`/api/tournaments/${id}/init`)
        .set({
          "Authorization": `Bearer ${token}`,
        })
        .end((err, res) => {
          res.should.have.status(403);
          done();
        });
    });
  });
});
