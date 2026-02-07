import React from "react";
import CourseCard from "./CourseCard.jsx";

function CourseList({ courses, setEditingCourse, deleteCourse }) {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          setEditingCourse={setEditingCourse}
          deleteCourse={deleteCourse}
        />
      ))}
    </div>
  );
}

export default CourseList;
