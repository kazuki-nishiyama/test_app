import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";   // ← vitest からインポート
import TextInput from "./TextInput";     // ← コンポーネントのパスに合わせる

test("TextInput Component Test", async() => {
  // Test implementation goes here
  const user = userEvent.setup();
  render(<TextInput />);

  const textElement = screen.getByText("Entered Text:");
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText("Type something...");
  await user.type(inputElement, "Hello, World!");
  expect(screen.getByText("Entered Text: Hello, World!")).toBeInTheDocument();
});
