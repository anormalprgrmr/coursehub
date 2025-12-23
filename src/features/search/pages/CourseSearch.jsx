import { useLocation } from "react-router-dom";
import { useState } from "react";
import {mockCourses} from '../../courses/data'
export default function CourseSearch() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("search") || "";

  const [level, setLevel] = useState("");
  const [instructor, setInstructor] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredCourses = mockCourses
    .filter(course =>
      course.title.toLowerCase().includes(query.toLowerCase())
    )
    .filter(course => (level ? course.level === level : true))
    .filter(course =>
      instructor ? course.instructor === instructor : true
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="container my-4">
      <h4 className="mb-4">
        Search results for: <span className="text-primary">{query}</span>
      </h4>

      <div className="row">
        
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="mb-3">Filters</h6>

             
              <label className="form-label">Level</label>
              <select
                className="form-select mb-3"
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="">All</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <label className="form-label">Instructor</label>
              <select
                className="form-select mb-3"
                onChange={(e) => setInstructor(e.target.value)}
              >
                <option value="">All</option>
                <option value="John Doe">John Doe</option>
                <option value="Sarah Smith">Sarah Smith</option>
                <option value="Ali Reza">Ali Reza</option>
              </select>

              <label className="form-label">Sort By</label>
              <select
                className="form-select"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Default</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div key={course.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{course.title}</h5>
                      <p className="text-muted mb-1">
                        {course.level} • {course.instructor}
                      </p>
                      <p className="mb-1">⭐ {course.rating}</p>
                      <p className="fw-bold">${course.price}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted">No courses found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
