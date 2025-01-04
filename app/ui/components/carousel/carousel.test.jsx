import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Carousel } from "./carousel";

describe("Carousel component", () => {
    const mockData = [
        {
            image_url: "/images/circles.jpg",
            title: "Circles",
            description: "Circles in the sky",
        },
        {
            image_url: "/images/lines.jpg",
            title: "Lines",
            description: "Lines in the sky",
        },
        {
            image_url: "/images/squares.jpg",
            title: "Squares",
            description: "Squares in the sky",
        },
    ];

    test("should render the current image correctly", () => {
        render(<Carousel imageData={mockData} />);
        const carouselImage = screen.getByTestId("image-component");
        expect(carouselImage).toBeInTheDocument();
    });

    test("should render the carousel with the first image", () => {
        render(<Carousel imageData={mockData} />);
        const carouselImage = screen.getByTestId("image-component");
        expect(carouselImage).toHaveStyle(`background-image: url(${mockData[0].image_url})`);
    });

    test("should navigate to the next image on Next button click", () => {
        render(<Carousel imageData={mockData} />);
        const nextButton = screen.getByText("Next");
        fireEvent.click(nextButton);
        const carouselImage = screen.getByTestId("image-component");
        expect(carouselImage).toHaveStyle(`background-image: url(${mockData[1].image_url})`);
    });

    test("should navigate to the previous image on Prev button click", () => {
        render(<Carousel imageData={mockData} />);
        const prevButton = screen.getByText("Prev");
        fireEvent.click(prevButton);
        const carouselImage = screen.getByTestId("image-component");
        expect(carouselImage).toHaveStyle(`background-image: url(${mockData[mockData.length - 1].image_url})`);
    });
});
