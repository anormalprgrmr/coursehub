import ReviewCard from "./ReviewCard";

export default function Reviews({ data }) {
  return (
    <>
      <div>Reviews</div>
      {data.map((review, index) => (
        <ReviewCard data={review} />
      ))}
    </>
  );
}
