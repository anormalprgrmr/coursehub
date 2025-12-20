import ReviewCard from "./ReviewCard";

export default function Reviews({ data }) {
  return (
    <>
      <h4 className="text-center mt-5 mb-4">Reviews</h4>
      {data.map((review, index) => (
        <ReviewCard data={review} />
      ))}
    </>
  );
}
