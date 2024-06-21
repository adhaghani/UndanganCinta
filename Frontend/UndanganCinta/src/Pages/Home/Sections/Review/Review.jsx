import React from "react";

import Title from "../../../../Component/Title/Title";

import ReviewCard from "./ReviewCard/ReviewCard";
import "./Review.css";

import ReviewData from "./Review.json";
const Review = () => {
  const data = [];
  return (
    <div className="Review" id="Review">
      <Title
        title="Our Review"
        subtitle="Listen to what our customer has to say."
      />
      <div className="Container Review">
        <div className="Section-Review">
          {ReviewData.map((item) => {
            return <ReviewCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
