import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../pages/Auth/Login";
import { UserContext } from "../context/userContext";
import axiosInstance from "../utils/axiosInstance";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../utils/axiosInstance", () => ({
  __esModule: true,
  default: { post: jest.fn() },
}));

jest.mock("../utils/apiPath", () => ({
  __esModule: true,
  API_PATHS: {
    AUTH: {
      LOGIN: "/api/auth/login",
    },
  },
}));

describe("Login component", () => {
  const updateUser = jest.fn();
  const setCurrentPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  const renderLogin = () =>
    render(
      <UserContext.Provider value={{ user: null, updateUser, clearUser: jest.fn() }}>
        <Login setCurrentPage={setCurrentPage} />
      </UserContext.Provider>
    );

  test("renders login form with email and password inputs", () => {
    renderLogin();
    expect(screen.getByText("Welcome Back")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("john@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("•••••••••")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "LOGIN" })).toBeInTheDocument();
  });

  test("shows validation message for invalid email", async () => {
    renderLogin();
    fireEvent.change(screen.getByPlaceholderText("john@example.com"), {
      target: { value: "invalid-email" },
    });
    fireEvent.change(screen.getByPlaceholderText("•••••••••"), {
      target: { value: "12345678" },
    });
    fireEvent.click(screen.getByRole("button", { name: "LOGIN" }));

    expect(await screen.findByText("Please enter a valid email address")).toBeInTheDocument();
    expect(axiosInstance.post).not.toHaveBeenCalled();
  });

  test("submits valid credentials and navigates to dashboard", async () => {
    axiosInstance.post.mockResolvedValueOnce({
      data: {
        token: "test-token",
        name: "Satya",
      },
    });

    renderLogin();
    fireEvent.change(screen.getByPlaceholderText("john@example.com"), {
      target: { value: "satya@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("•••••••••"), {
      target: { value: "12345678" },
    });
    fireEvent.click(screen.getByRole("button", { name: "LOGIN" }));

    await waitFor(() => {
      expect(axiosInstance.post).toHaveBeenCalledWith("/api/auth/login", {
        email: "satya@test.com",
        password: "12345678",
      });
    });

    expect(localStorage.getItem("token")).toBe("test-token");
    expect(updateUser).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });
});
