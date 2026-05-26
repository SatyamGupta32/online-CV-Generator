import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Dashboard from "../pages/Home/Dashboard";
import axiosInstance from "../utils/axiosInstance";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../utils/axiosInstance", () => ({
  __esModule: true,
  default: { get: jest.fn() },
}));

jest.mock("../utils/apiPath", () => ({
  __esModule: true,
  API_PATHS: {
    RESUME: {
      GET_ALL: "/api/resume",
    },
  },
}));

jest.mock("../components/layouts/DashboardLayout", () => {
  return function MockDashboardLayout({ children }) {
    return <div data-testid="dashboard-layout">{children}</div>;
  };
});

jest.mock("../components/Modal", () => {
  return function MockModal({ isOpen, children }) {
    return isOpen ? <div data-testid="modal">{children}</div> : null;
  };
});

jest.mock("../pages/Home/CreateResumeForm", () => {
  return function MockCreateResumeForm() {
    return <div>Create Resume Form</div>;
  };
});

describe("Dashboard component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders resume list after API success", async () => {
    axiosInstance.get.mockResolvedValueOnce({
      data: [{ _id: "1", title: "Frontend Resume", updated_at: "2026-04-20" }],
    });

    render(<Dashboard />);

    await waitFor(() => {
      expect(axiosInstance.get).toHaveBeenCalledWith("/api/resume");
    });

    expect(screen.getByText("Add new Resume")).toBeInTheDocument();
    expect(await screen.findByText("Frontend Resume")).toBeInTheDocument();
  });

  test("opens create resume modal when add card is clicked", async () => {
    axiosInstance.get.mockResolvedValueOnce({ data: [] });
    render(<Dashboard />);

    await waitFor(() => {
      expect(axiosInstance.get).toHaveBeenCalledWith("/api/resume");
    });
    fireEvent.click(screen.getByText("Add new Resume"));
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByText("Create Resume Form")).toBeInTheDocument();
  });

  test("navigates to resume details when a resume card is clicked", async () => {
    axiosInstance.get.mockResolvedValueOnce({
      data: [{ _id: "abc123", title: "Backend Resume", updated_at: "2026-04-20" }],
    });
    render(<Dashboard />);

    const resumeCardText = await screen.findByText("Backend Resume");
    fireEvent.click(resumeCardText);

    expect(mockNavigate).toHaveBeenCalledWith("/resume/abc123");
  });
});
