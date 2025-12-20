export default function ReviewCard({data}) {
  return (
    <div className='col'>
      <h5>{data.user}</h5>
    <img src={data.userImage} alt="" srcset="" />
      <h5>{data.course}</h5>
      <h5>{data.review}</h5>
    </div>
  )
}
