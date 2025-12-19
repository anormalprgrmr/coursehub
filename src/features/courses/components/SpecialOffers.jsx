import SpecialOfferCard from '../components/SpecialOfferCard'

export default function SpecialOffers({ data }) {
  return (
    <>
      <h5>Special Offers</h5>
      {data?.map((offer, index) => (
        <SpecialOfferCard data={offer}/>
        //   <li key={offer.id || index}>
        //     <h6>{offer.title}</h6>
        //     {/* <p>{offer.description}</p> */}
        //   </li>
      ))}
    </>
  );
}
