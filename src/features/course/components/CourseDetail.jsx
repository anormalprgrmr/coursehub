import React from "react";
import "./CourseDetail.css"; 

export default function CourseDetail({ data }) {

  if (!data) {
    return <div className="course-detail-container error">Course data not available.</div>;
  }

  const { name, description, instructor, duration, imageUrl, price, rating, courseNumber } = data;

  return (
    <div className="course-detail-container">
      
      <div className="row course-header">
        
        <div className="col-md-4 course-image-wrapper">
          <img src={imageUrl || "https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=No+Image"} alt={name} className="course-image" />
        </div>
        
        <div className="col-md-8 course-info-header">
          <h2 className="course-title">{name}</h2>
          <p className="course-instructor">Taught by: {instructor || "N/A"}</p>
          <div className="course-meta">
            <span>Duration: {duration || "N/A"}</span> | 
            <span>Courses: {courseNumber || "N/A"}</span>
          </div>
        </div>
      </div>

      <div className="course-body">
        <h3>About this Course</h3>
        <p className="course-description">{description || "No description available."}</p>
      </div>

      <div className="row course-footer">
        <div className="col-sm-4 course-price-col">
            <div className="course-price">
                <strong>Price:</strong> {price || "Free"}
            </div>
        </div>
        <div className="col-sm-4 course-rating-col">
            <div className="course-rating">
                <strong>Rating:</strong> {rating ? `${rating}/5.0` : "N/A"}
            </div>
        </div>
        <div className="col-sm-4 course-button-col">
            <button className="enroll-button">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}
