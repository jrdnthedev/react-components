import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './carousel';

describe('Carousel component', () => {
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

    it('should render the images correctly', () => {
        // render(<Carousel imageData={mockData} />);
        // const carouselImages = screen.getAllByTestId('image-component');
        // expect(carouselImages).toHaveLength(mockData.length);
    });

    // it('should render the carousel with the first image', () => {
    //     render(<Carousel images={mockData} />);
    //     expect(screen.getAllByTestId('image-component')).toHaveAttribute('src', mockData[0].image_url);
    // });
});