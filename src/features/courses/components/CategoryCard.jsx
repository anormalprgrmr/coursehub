import './SpecialOfferCard.css';

export default function SpecialOfferCard({ data }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <h5>{data}</h5>
    </div>
  );
}
