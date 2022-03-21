/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render, screen } from "@testing-library/react";
 import Header from "../components/Header";

it('checks for the app name text in the header compoent', () => {
    render(<Header />);
    expect(screen.getByText("App Name")).toBeInTheDocument();
});