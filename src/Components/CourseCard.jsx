import React from "react";

function CourseCard({ course, setEditingCourse, deleteCourse }) {
  return (
    <div className="course-card">
      <h4>{course.title}</h4>
      <p>Price: ${course.price}</p>
      <p>Duration: {course.duration}</p>
      <button onClick={() => setEditingCourse(course)}>Edit</button>
      <button onClick={() => deleteCourse(course.id)}>Delete</button>
    </div>
  );
}

export default CourseCard;
