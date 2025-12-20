import React from 'react';

export default function ReviewCard({ data }) {
  return (
    <div className='col-12 col-sm-6 col-md-4 mb-4'>
      

      <div className='card h-100 shadow-sm border-0 transition hover-effect'> 
        
        <div className='card-body p-4 d-flex flex-column'>
          
          <div className="d-flex align-items-center mb-3">
            <img 
                src={data.userImage} 
                alt={`Profile picture of ${data.user}`} 
                className='img-fluid rounded-circle me-3' 
                style={{ width: '60px', height: '60px', objectFit: 'cover' }} 
            />
            <div>
                <h5 className='card-title mb-0 text-primary'>{data.user}</h5> 
                <h6 className='card-subtitle text-muted mt-1'>{data.course}</h6>
            </div>
          </div>

          <p className='card-text flex-grow-1 text-dark'>
            <i className="bi bi-quote me-1"></i>
            {data.review}
          </p>
          
          <small className='text-end text-black-50 mt-2'>
            Reviewed Today
          </small>
        </div>
      </div>
    </div>
  )
}
