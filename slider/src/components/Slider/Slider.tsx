import React, { FC, useEffect, useState } from 'react';
import { Slide, SlideInfo, SliderWrapper, Caption, Pagination, PageDot, NavButton, Image } from './SliderStyle';

interface ISlide {
    img: string;
    text: string;
}

interface SliderProps {
    slides: ISlide[],
    loop?: boolean;
    navs?: boolean;
    pags?: boolean;
    auto?: boolean;
    stopMouseHover?: boolean;
    delay?: number;
}

const Slider: FC<SliderProps> = ({ slides, loop = false, auto = false, navs = false, pags = false, stopMouseHover = false, delay = 5 }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const totalSlides = slides.length;

    useEffect(() => {
        if (auto && !isMouseOver) {
          const interval = setInterval(() => {
            handleNext();
          }, (delay || 5) * 1000);
          return () => clearInterval(interval);
        }
      }, [currentSlide, isMouseOver]);


    const handleNext = () => {
        if (currentSlide === totalSlides - 1) {
            setCurrentSlide(loop ? 0 : currentSlide);
        }
        else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    const handlePrev = () => {
        if (currentSlide === 0) {
            setCurrentSlide(loop ? totalSlides - 1 : 0)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const getSlide = (index: number) => {
        setCurrentSlide(index);
    }



    return (
        <SliderWrapper
            onMouseEnter={() => stopMouseHover && setIsMouseOver(true)}
            onMouseLeave={() => stopMouseHover && setIsMouseOver(false)}
        >
            <Slide>
                <SlideInfo>
                    {currentSlide + 1} / {totalSlides}
                </SlideInfo>
                <Image src={slides[currentSlide].img} alt={`Slide ${currentSlide + 1}`} />
                {navs && (
                    <>
                        <NavButton onClick={handlePrev}>←</NavButton>
                        <NavButton onClick={handleNext}>→</NavButton>
                    </>
                )}
                <Caption>{slides[currentSlide].text}</Caption>
            </Slide>
            {pags && (
                <Pagination>
                    {slides.map((_, index) => (
                        <PageDot
                            key={index}
                            active={index === currentSlide}
                            onClick={() => getSlide(index)}
                        />
                    ))}
                </Pagination>
            )}

        </SliderWrapper>
    );
}

export default Slider;