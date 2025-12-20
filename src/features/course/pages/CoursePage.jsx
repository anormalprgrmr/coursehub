import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseDetail from "../components/CourseDetail";
import Reservation from "../components/Reservation";
import { getCourseDetail } from "../course.service";

export default function CoursePage() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    setCourseData(null); 

    if (id) {
      const data = getCourseDetail(id);
      console.log("dadsas");
      console.log(id, data);

      if (data) {
        setCourseData(data);
      } else {
        console.error(`Course with ID ${id} not found.`);
      }
      setLoading(false); 
    } else {
        setLoading(false);
    }
  }, [id]);


  return (
    <>
      <div>CoursePage {id}</div>
      <div className="row">
        {loading ? (
          <p>Loading course details...</p> 
        ) : courseData ? (
          <CourseDetail data={courseData} />
        ) : (
          <p>Course not found.</p>
        )}
      </div>
      <div className="row">
        <Reservation />
      </div>
    </>
  );
}
