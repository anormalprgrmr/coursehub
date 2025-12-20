import "./Categories.css";

export default function SpecialOfferCard({ data }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="categoty-card-main-wrapper">
        <h5 className="category-title m-3">{data.name}</h5>
        <img className="category-image" src={data.image} alt="" srcset="" />
        <p className="mt-3 text-center">Courses : {data.courseNumber}</p>
      </div>
    </div>
  );
}
