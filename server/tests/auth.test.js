const request = require("supertest");
const express = require("express");
const authRoutes = require("../routes/authRoutes");

describe("Auth routes integration", () => {
  const app = express();
  app.use(express.json());
  app.use("/api/auth", authRoutes);

  test("GET /api/auth/profile without token returns unauthorized", async () => {
    const res = await request(app).get("/api/auth/profile");
    expect([401, 403]).toContain(res.statusCode);
  });

  test("POST /api/auth/upload-image without file returns 400", async () => {
    const res = await request(app).post("/api/auth/upload-image");
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message", "No file uploaded");
  });
});
