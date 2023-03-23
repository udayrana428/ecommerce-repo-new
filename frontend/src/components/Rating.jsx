import React from "react";

const Rating = (props) => {
  return !props.value ? (
    <div className=""></div>
  ) : (
    <>
      <div className="ratingbox text-yellow-600">
        <span>
          <i
            className={
              props.value >= 1
                ? "fa fa-star"
                : props.value >= 0.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              props.value >= 2
                ? "fa fa-star"
                : props.value >= 1.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              props.value >= 3
                ? "fa fa-star"
                : props.value >= 2.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              props.value >= 4
                ? "fa fa-star"
                : props.value >= 3.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span>
          <i
            className={
              props.value >= 5
                ? "fa fa-star"
                : props.value >= 4.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
      </div>
    </>
  );
};

export default Rating;
