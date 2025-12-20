import React from "react";
import ReviewCard from "./ReviewCard";

export default function Reviews({ data }) {
  return (
    <>
      <div>Reviews</div>
      {data?.map((category, index) => (
        <ReviewCard data={data} />
      ))}
    </>
  );
}
