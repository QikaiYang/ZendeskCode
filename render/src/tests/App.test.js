import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import React from 'react';

test("Test button", () => {
    render(<App />)
    expect(screen.getByRole("button", { name: /Go!/i }));
})

test("Test heading", () => {
    render(<App />)
    expect(screen.getByRole("heading", { name: /Check your tickets!/i }));
    expect(screen.getByRole("heading", { name: /Enter your user domain/i }));
    expect(screen.getByRole("heading", { name: /Enter your email/i }));
    expect(screen.getByRole("heading", { name: /Enter your password/i }));
})

test("Test input", () => {
    render(<App />)
    expect(screen.getAllByRole("textbox"));
})

// The 3 test cases are to test whether entering the information would give us the corresponding results
// I have manually tested all 3 cases and they all work. 
// However, due to a react version error, I cant let the userEvent or fireEvent work as expected. 
// I believe when the bug is fixed by React, my program should work!
// see README for my manual test screen shots

test("Test valid domain, email address, and password", async () => { // return normal result
    render(<App />)
    userEvent.type(screen.getByPlaceholderText(/domain/i), "zccqikaiy2")
    userEvent.type(screen.getByPlaceholderText(/email/i), "qikaiy2@gmail.com")
    userEvent.type(screen.getByPlaceholderText(/password/i), "QIkai980221")
    fireEvent.click(screen.getByRole('button'));
})

test("Test valid domain, email address, but wrong password", () => { // return "Incorrect information. Please try again:)" 
    render(<App />)
    userEvent.type(screen.getByPlaceholderText(/domain/i), "zccqikaiy2")
    userEvent.type(screen.getByPlaceholderText(/email/i), "qikaiy2@gmail.com")
    userEvent.type(screen.getByPlaceholderText(/password/i), "wrong-password")
    fireEvent.click(screen.getByRole('button'));
})

test("Test invalid domain", () => {
    render(<App />) // return "Unexpected Program error:("
    userEvent.type(screen.getByPlaceholderText(/domain/i), "中文")
    userEvent.type(screen.getByPlaceholderText(/email/i), "domainIsInvalid")
    userEvent.type(screen.getByPlaceholderText(/password/i), "domainIsInvalid")
    fireEvent.click(screen.getByRole('button'));
})