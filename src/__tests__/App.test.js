import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _____`", () => {
    render(<App />);

    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    expect(topLevelHeading).toBeInTheDocument();
})
test("displays an image of yourself with al text identiying the content of the image", () => {
    render(<App />);

    const imageInScreen = screen.getByRole("img", {
        alt: /image of/i,
        exact: false,
    })

    expect(imageInScreen).toBeInTheDocument();
})
test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);

    const secondLevelHeading = screen.getByRole("heading", {
        name: /About me/i,
        exact: false,
        level: 2,
    })

    expect(secondLevelHeading).toBeInTheDocument();
})
test("A paragraph of your biography", () => {
    render(<App />);

    const bioParagraph = screen.getByText(/my name is/i)

    expect(bioParagraph).toBeInTheDocument();
})
test("A link to my github", () => {
    render(<App />);

    const github = screen.getByRole("link", {
        name: /github/i,
        exact: false
    })

    expect(github).toHaveAttribute("href", expect.stringContaining("github"))
})
test("A link to my linkedIn", () => {
    render(<App />);

    const linkedIn = screen.getByRole("link", {
        name: /linkedin/i,
        exact: false
    })

    expect(linkedIn).toHaveAttribute("href", expect.stringContaining("linkedin"))
})
