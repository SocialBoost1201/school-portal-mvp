'use client';

import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps {
  slides: ReactNode[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line no-shadow
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    // eslint-disable-next-line no-shadow
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]); // No need to add setPrevBtnDisabled, setNextBtnDisabled to deps as they are state setters

  useEffect(() => {
    if (!emblaApi) return;
    setTimeout(() => onSelect(), 0);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    // Cleanup function for event listeners
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          className="px-4 py-2 bg-gray-200 text-black rounded disabled:opacity-50"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-black rounded disabled:opacity-50"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          Next
        </button>
      </div>
    </div>
  );
}
