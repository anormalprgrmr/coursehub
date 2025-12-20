import SpecialOfferCard from '../components/SpecialOfferCard'

export default function SpecialOffers({ data }) {
  return (
    <>
      <h5>Special Offers</h5>
      {data?.map((offer, index) => (
        <SpecialOfferCard data={offer}/>
      ))}
    </>
  );
}
