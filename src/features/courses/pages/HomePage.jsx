import SearchBar from "../components/SearchBar";
import SpecialOffers from "../components/SpecialOffers";
import Categories from "../components/Categories";
import Reviews from "../components/Reviews";
import {Categoriesdata,offerData,reviewsdata} from '../data'

function HomePage() {
  

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <SearchBar />
        </div>
        <div className="row">
          <SpecialOffers data={offerData} />
        </div>
        <div className="row">
          <Categories data={Categoriesdata} />
        </div>
        <div className="row">
          <Reviews data={reviewsdata} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
