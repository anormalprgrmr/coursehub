import SpecialOfferCard from '../components/SpecialOfferCard'

export default function SpecialOffers({ data }) {
  return (
    <>
      <h5 className='mt-5 mb-5 text-center'>Special Offers</h5>
      {data?.map((offer, index) => (
        <SpecialOfferCard data={offer}/>
      ))}
    </>
  );
}
