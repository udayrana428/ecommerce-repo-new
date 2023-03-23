import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Slider.css";
import { ApiSlides } from "../componentApi/SliderApi";
import { ApiCategories } from "../componentApi/CategoryApi";
import Category from "./Category";
const Categories = () => {
  // Styles
  const slideStyle = "slide flex items-center justify-center h-[100%]";
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer";

  //States
  const [slides] = useState(ApiCategories);
  const [activeSlide, setActiveSlide] = useState(0);
  
  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center flex-wrap p-5 mobile:hidden">
        {ApiCategories.map((category, index) => (
          <Category item={category} key={index} />
        ))}
      </div>
      <div className="slider relative mobile:h-64 mobile:w-[100%] sm:hidden bg-white flex items-center ">
        {/* left Arrow */}
        <div
          className={`absolute rounded-full bg-white text-purple-600 left-0 z-[2] items-center` + arrowStyle}
          onClick={prevSlide}
        >
          <ArrowLeftOutlined style={{ fontSize: "50px" }} />
        </div>

        {/* Slide */}

        {ApiCategories.map((category, index) => {
          if (index === activeSlide) {
            return (
              <Category item={category} key={index} />
            );
          }
        })}
        {/* Right Arrow */}

        <div
          className={`absolute rounded-full bg-white right-0 text-purple-600 items-center z-[3]` + arrowStyle}
          onClick={nextSlide}
        >
          <ArrowRightOutlined style={{ fontSize: "50px" }} />
        </div>
      </div>
    </>
  );
};

export default Categories;
