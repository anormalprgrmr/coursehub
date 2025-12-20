import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseDetail from "../components/CourseDetail";
import Reservation from "../components/Reservation";
import { getCourseDetail } from "../course.service";

export default function CoursePage() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    if (id) {
      const data = getCourseDetail(id);
      console.log("dadsas");
      console.log(id,data);
      
      setCourseData(data);
    }
  }, [id]);

  return (
    <>
      <div>CoursePage {id}</div>
      <div className="row">
        <CourseDetail data={courseData}/>
      </div>
      <div className="row">
        <Reservation />
      </div>
    </>
  );
}
