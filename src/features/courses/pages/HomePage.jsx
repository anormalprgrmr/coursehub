import { data } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SpecialOffers from "../components/SpecialOffers";
import Categories from "../components/Categories";

function HomePage() {
  const data = [
    {
      discount: 60,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfo7LEk8qN2KQDowGgMtb6s4ChmhvvXVhWpQ&s",
      description: "bluyub blub",
      title: "offer 1",
      originalPrice: 1500,
      price: 1000,
      validUntil: "3 days",
    },
    {
      discount: 60,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfo7LEk8qN2KQDowGgMtb6s4ChmhvvXVhWpQ&s",
      description: "bluyub blub",
      title: "offer 1",
      originalPrice: 1500,
      price: 1000,
      validUntil: "3 days",
    },{
      discount: 60,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfo7LEk8qN2KQDowGgMtb6s4ChmhvvXVhWpQ&s",
      description: "bluyub blub",
      title: "offer 1",
      originalPrice: 1500,
      price: 1000,
      validUntil: "3 days",
    },{
      discount: 60,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfo7LEk8qN2KQDowGgMtb6s4ChmhvvXVhWpQ&s",
      description: "bluyub blub",
      title: "offer 1",
      originalPrice: 1500,
      price: 1000,
      validUntil: "3 days",
    },{
      discount: 60,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfo7LEk8qN2KQDowGgMtb6s4ChmhvvXVhWpQ&s",
      description: "bluyub blub",
      title: "offer 1",
      originalPrice: 1500,
      price: 1000,
      validUntil: "3 days",
    },
  ];

  const Categoriesdata = ["Programming","Cooking"] 

  return (
    <>
      <div className="container">
        <div className="row">
          <SearchBar />
        </div>
        <div className="row">
          <SpecialOffers data={data} />
        </div>
        <div className="row">
          <Categories data={Categoriesdata} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
