import { render, screen } from "@testing-library/react";
import Pagination from "../components/Pagination";
import React from 'react';

test("Single page", () => {
    render(<Pagination
        ticketsPerPage={1}
        totalTickets={1}
        paginate={1}
    />)

    expect(screen.getByRole("link", { name: /1/i }));
})

test("Multiple pages", () => {
    render(<Pagination
        ticketsPerPage={10}
        totalTickets={76}
        paginate={1}
    />)

    expect(screen.getByRole("link", { name: /1/i }));
    expect(screen.getByRole("link", { name: /2/i }));
    expect(screen.getByRole("link", { name: /3/i }));
    expect(screen.getByRole("link", { name: /4/i }));
    expect(screen.getByRole("link", { name: /5/i }));
    expect(screen.getByRole("link", { name: /6/i }));
    expect(screen.getByRole("link", { name: /7/i }));
    expect(screen.getByRole("link", { name: /8/i }));
})