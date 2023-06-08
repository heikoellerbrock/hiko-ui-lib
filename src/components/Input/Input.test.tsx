import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from '@testing-library/react'

import Input from "./Input";

describe("Running Test for Input", () => {
    
    test("Check placeholder in Input", () => {
        render(<Input placeholder="Hello"/>)
        expect(screen.getByPlaceholderText('Hello')).toHaveAttribute('placeholder', 'Hello');
    });
    
    test("renders the Input component", async () => {
        render(<Input placeholder="hello"/>);
        const input = screen.getByPlaceholderText("hello") as HTMLInputElement;
        userEvent.type(input, "Hello world!");
        await waitFor(() => expect(input.value).toBe("Hello world!"));
    });
});
