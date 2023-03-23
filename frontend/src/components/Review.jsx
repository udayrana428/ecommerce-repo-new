import { AccountCircleRounded } from "@material-ui/icons";
import React from "react";
import Rating from "./Rating";

const Review = (props) => {
  const { name, comment, createdAt, rating } = props.review;
  return (
    <>
      <div className="review">
        <div className="top mx-2">
          <div className="createdby">
            <AccountCircleRounded />
            <span>{name}</span>
          </div>
          <div className="createdat">Created at {createdAt}</div>
        </div>
        <div className="bottom">
          <Rating value={rating} />
          <div className="comment">{comment}</div>
        </div>
      </div>
    </>
  );
};

export default Review;
