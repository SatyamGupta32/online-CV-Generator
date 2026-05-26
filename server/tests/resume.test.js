const request = require("supertest");
const express = require("express");
const resumeRoutes = require("../routes/resumeRoutes");

describe("Resume routes integration", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/resume", resumeRoutes);

  test("GET /api/resume without token returns unauthorized", async () => {
    const res = await request(app).get("/api/resume");
    expect([401, 403]).toContain(res.statusCode);
  });

  test("POST /api/resume without token returns unauthorized", async () => {
    const res = await request(app).post("/api/resume").send({ title: "My Resume" });
    expect([401, 403]).toContain(res.statusCode);
  });
});
