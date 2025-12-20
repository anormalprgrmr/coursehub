import CategoryCard from "./CategoryCard";

export default function Categories({ data }) {
  return (
    <>
      <h5>Special Offers</h5>
      {data?.map((category, index) => (
        <CategoryCard data={category} />
      ))}
    </>
  );
}
