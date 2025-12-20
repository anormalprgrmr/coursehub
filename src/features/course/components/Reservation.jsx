import React, { useState } from 'react';
import './Reservation.css'; // We'll create a simple CSS file next

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reservationDate: '',
    numberOfPeople: 1,
  });

  const [errors, setErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Full Name is required.';
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is not valid.';
      isValid = false;
    }

    if (!formData.reservationDate) {
      tempErrors.reservationDate = 'Reservation Date is required.';
      isValid = false;
    } 
    else if (new Date(formData.reservationDate) < new Date(new Date().setHours(0,0,0,0))) {
        tempErrors.reservationDate = 'Cannot reserve for a past date.';
        isValid = false;
    }


    const numPeople = parseInt(formData.numberOfPeople);
    if (numPeople < 1 || numPeople > 20) {
      tempErrors.numberOfPeople = 'Must reserve for 1 to 20 people.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      console.log('Reservation Data Submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', reservationDate: '', numberOfPeople: 1 });

      setTimeout(() => setIsSubmitted(false), 5000); 

    } else {
      console.log('Validation Failed');
    }
  };

  if (isSubmitted) {
    return (
      <div className="reservation-container success">
        <h2>Reservation Successful!</h2>
        <p>Thank you, {formData.name || 'Guest'}! Your details have been received.</p>
        <p>We will confirm your booking for **{formData.reservationDate}** shortly.</p>
        <button onClick={() => setIsSubmitted(false)} className="back-button">Make Another Reservation</button>
      </div>
    );
  }

  return (
    <div className="reservation-container">
      <h2>Book Your Spot</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
            placeholder="example@domain.com"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="reservationDate">Reservation Date</label>
          <input
            type="date"
            id="reservationDate"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            className={errors.reservationDate ? 'input-error' : ''}
          />
          {errors.reservationDate && <p className="error-message">{errors.reservationDate}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="numberOfPeople">Number of People</label>
          <input
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            min="1"
            max="20"
            value={formData.numberOfPeople}
            onChange={handleChange}
            className={errors.numberOfPeople ? 'input-error' : ''}
          />
          {errors.numberOfPeople && <p className="error-message">{errors.numberOfPeople}</p>}
        </div>

        <button type="submit" className="submit-button">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}
