import CategoryCard from "./CategoryCard";
import "./Categories.css"

export default function Categories({ data }) {
  return (
    <>
      <h4 className="text-center mt-5 mb-5 categories-title">Popular Categories</h4>
      {data?.map((category, index) => (
        <CategoryCard data={category} />
      ))}
    </>
  );
}
