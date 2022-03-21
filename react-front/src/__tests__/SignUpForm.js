/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import SignUpForm from "../components/SignUpForm";

it('checks the SignUpForm Form.Label component to be of class HTMLInputElement', async () => {
    render(<SignUpForm />);
    expect(await screen.findByLabelText("Username")).toBeInstanceOf(HTMLInputElement);
});

it('checks the SignUpForm Form.Label component to be of class HTMLInputElement', async () => {
    render(<SignUpForm />);
    expect(await screen.findByLabelText("First name")).toBeInstanceOf(HTMLInputElement);
});

it('checks the SignUpForm Form.Label component to be of class HTMLInputElement', async () => {
    render(<SignUpForm />);
    expect(await screen.findByLabelText("Last name")).toBeInstanceOf(HTMLInputElement);
});

it('checks the SignUpForm Form.Label component to be of class HTMLInputElement', async () => {
    render(<SignUpForm />);
    expect(await screen.findByLabelText("Password")).toBeInstanceOf(HTMLInputElement);
});

it('renders the SignUpForm compnent to the ReactDOM', () => {
    render(<SignUpForm />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
});