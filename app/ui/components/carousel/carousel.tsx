"use client";

import { CarouselItems } from "@/app/lib/types";
import React ,{ useRef, useState } from "react";
import style from "./carousel.module.css";

interface CarouselProps {
    imageData: CarouselItems[];
}

export function Carousel({ imageData }: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    function handleNext() {
        setCurrentSlide((prev) => (prev + 1) % imageData.length);
    }

    function handlePrev() {
        setCurrentSlide((prev) => (prev - 1 + imageData.length) % imageData.length);
    }
    return (
        <>
            <h1>Carousel</h1>
            <div className={style.carousel} ref={carouselRef}>
                <div className={style.carouselInner}>
                    <div key={imageData[currentSlide].image_url} className={style.carouselItem} data-testid="image-component">
                        <div style={{backgroundImage: `url(${imageData[currentSlide].image_url})`}} className={style.carouselBackgroundImage}></div>
                    </div>
                </div>
                <div className={style.carouselControls}>
                    <button className={style.carouselControlPrev} onClick={handlePrev}>Prev</button>
                    <button className={style.carouselControlNext} onClick={handleNext}>Next</button>
                </div>
            </div>
        </>
    )
}