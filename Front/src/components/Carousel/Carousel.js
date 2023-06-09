import React, { useEffect, useRef, useState } from "react";
import "../Carousel/Carousel.scss";

function Carousel({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const previousButton = useRef(null);
  const nextButton = useRef(null);

  const previousSlide = useRef(null);
  const currentSlide = useRef(null);
  const nextSlide = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextButton.current.click();
    }, Math.max(5000));

    return () => {
      clearTimeout(timeout);
    };
  });

  const getAnimationDuration = () =>
    getComputedStyle(currentSlide.current.parentElement.parentElement)
      .getPropertyValue("--slide-duration")
      .replace(/m?s/g, "");

  const removeClasses = () => {
    currentSlide.current.parentElement.childNodes.forEach((e) => {
      e.classList.remove("left");
      e.classList.remove("right");
      e.classList.remove("center");
    });
  };

  const onPreviousButtonClick = () => {
    if (animating) return;

    removeClasses();
    setAnimating(true);

    currentSlide.current.classList.add("right");
    previousSlide.current.classList.add("center");

    setTimeout(() => {
      setSlideIndex((index) => (index > 0 ? index - 1 : data.length - 1));
      setAnimating(false);
    }, getAnimationDuration());
  };

  const onNextButtonClick = () => {
    if (animating) return;

    removeClasses();
    setAnimating(true);

    currentSlide.current.classList.add("left");
    nextSlide.current.classList.add("center");

    setTimeout(() => {
      setSlideIndex((index) => (index < data.length - 1 ? index + 1 : 0));
      setAnimating(false);
    }, getAnimationDuration());
  };

  const isPreviousSlide = (i) =>
    i === (slideIndex > 0 ? slideIndex - 1 : data.length - 1);
  const isNextSlide = (i) =>
    i === (slideIndex < data.length - 1 ? slideIndex + 1 : 0);

  return (
    <div className="slider">
      <div className="controls">
        <div
          className="control previous"
          ref={previousButton}
          onClick={() => onPreviousButtonClick()}
        >
          &larr;
        </div>
        <div
          className="control next"
          ref={nextButton}
          onClick={() => onNextButtonClick()}
        >
          &rarr;
        </div>
      </div>

      <div className="slides">
        {data.map((e, i) => (
          <div
            className="slide"
            data-previous-slide={isPreviousSlide(i)}
            data-current-slide={i === slideIndex}
            data-next-slide={isNextSlide(i)}
            ref={
              isPreviousSlide(i)
                ? previousSlide
                : isNextSlide(i)
                ? nextSlide
                : i === slideIndex
                ? currentSlide
                : null
            }
            key={i}
          >
            <img src={e.imgUrl} alt="" />
            <div className="text-container">{e.textContent}</div>
          </div>
        ))}
      </div>

      <ul className="slide-pills">
        {data.map((e, i) => (
          <li
            className={`slide-pill ${i === slideIndex && "active"}`}
            key={i}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
