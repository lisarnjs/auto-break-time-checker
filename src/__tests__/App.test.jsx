import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, expect, it } from "vitest";

describe("App Component", () => {
  it("공부 시간 텍스트 렌더링 테스트 🔥", () => {
    render(<App />);
    expect(screen.getByText("🔥 STUDY TIME")).toBeInTheDocument();
  });

  it("타이머 제목 렌더링 테스트", () => {
    render(<App />);
    expect(
      screen.getByText("Automation Timer For Groom Player")
    ).toBeInTheDocument();
  });
});
