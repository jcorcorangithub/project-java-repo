/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../views/Home";

it('renders the Home component to the ReactDOM', () => {
    const { container, getByText } = render(<Home />);
    expect(container.firstChild.classList.contains("login")).toBe(true);
});