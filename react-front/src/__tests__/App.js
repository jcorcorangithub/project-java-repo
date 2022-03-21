/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App.js";

it('renders the App comoponent', async () => {
    const { container, getByText } = render(<App />);
    expect(container.firstChild.classList.contains("app")).toBe(true);
});