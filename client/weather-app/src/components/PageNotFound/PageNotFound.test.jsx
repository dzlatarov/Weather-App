import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { MemoryRouter } from 'react-router-dom';
import { PageNotFound } from "./PageNotFound";


describe('Custom error component should show 404 page not found', () => {
    it('Should contain correct text for the error', () => {
         render(
            <MemoryRouter initialEntries={['/error']}>
                <PageNotFound />
            </MemoryRouter>
        )

        expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    });
});