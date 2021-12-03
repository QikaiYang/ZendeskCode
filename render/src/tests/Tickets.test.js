import { render, screen } from "@testing-library/react";
import Tickets from "../components/Tickets";
import React from 'react';

test("One ticket", () => {
    render(<Tickets tickets={[{
        subject: "testme",
        description: "This is a test",
        created_at: "2018-08-18",
        updated_at: "2022-02-21"
    }]} />)

    expect(screen.getByRole("button", { name: /testme/i }));
})

test("Multiple tickets", () => {
    render(<Tickets tickets={[{
        subject: "testme",
        description: "This is a test",
        created_at: "2018-08-18",
        updated_at: "2022-02-21"
    }, {
        subject: "testhim",
        description: "This is A test",
        created_at: "2018-08-19",
        updated_at: "2022-02-22"
    }]} />)

    expect(screen.getByRole("button", { name: /testme/i }));
    expect(screen.getByRole("button", { name: /testhim/i }));
})