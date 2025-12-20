import CategoryCard from "./CategoryCard";
import "./Categories.css"

export default function Categories({ data }) {
  return (
    <>
      <h5 className="text-center mt-5 mb-5 categories-title">Special Offers</h5>
      {data?.map((category, index) => (
        <CategoryCard data={category} />
      ))}
    </>
  );
}
