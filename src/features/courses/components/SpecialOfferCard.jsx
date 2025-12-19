import './SpecialOfferCard.css';

export default function SpecialOfferCard({ data }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card special-offer-card h-100 shadow-sm">
        {data.discount && (
          <div className="offer-badge">
            <span className="badge bg-danger">{data.discount}% OFF</span>
          </div>
        )}
        
        {data.image && (
          <img 
            src={data.image} 
            className="card-img-top" 
            alt={data.title}
          />
        )}
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text text-muted">{data.description}</p>
          
          <div className="price-section mt-auto">
            {data.originalPrice && (
              <span className="original-price text-decoration-line-through text-muted me-2">
                ${data.originalPrice}
              </span>
            )}
            <span className="special-price fw-bold text-danger fs-4">
              ${data.price}
            </span>
          </div>
          
          <button className="btn btn-primary mt-3 w-100">
            Grab Offer
          </button>
        </div>
        
        {data.validUntil && (
          <div className="card-footer text-center bg-light">
            <small className="text-muted">
              Valid until: {data.validUntil}
            </small>
          </div>
        )}
      </div>
    </div>
  );
}
