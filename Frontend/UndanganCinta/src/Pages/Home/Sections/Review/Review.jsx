import React from "react";

import Title from "../../../../Component/Title/Title";

import ReviewCard from "./ReviewCard/ReviewCard";
import "./Review.css";
const Review = () => {
  return (
    <div className="Review" id="Review">
      <Title
        title="Our Review"
        subtitle="Listen to what our customer has to say."
      />
      <div className="Container Review">
        <div className="Section-Review">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Review;
