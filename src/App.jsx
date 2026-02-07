import React, { useState, useEffect } from "react";
import CourseList from "./components/CourseList.jsx";
import CourseForm from "./components/CourseForm.jsx";
import Navbar from "./components/Navbar.jsx";
import toast from "react-hot-toast";
import "./App.css";

function App() {
  const [courses, setCourses] = useState(() => {
    return JSON.parse(localStorage.getItem("courses")) || [];
  });

  const [editingCourse, setEditingCourse] = useState(null);

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.body.classList.toggle("dark", dark);
    document.body.classList.toggle("light", !dark);
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course) => {
    setCourses((prev) => [...prev, { ...course, id: Date.now() }]);
    toast.success("Course added!");
  };

  const updateCourse = (updatedCourse) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === updatedCourse.id ? updatedCourse : c))
    );
    setEditingCourse(null);
    toast.success("Course updated!");
  };

  const deleteCourse = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    toast.error("Course deleted!");
  };

  return (
    <div className={`app ${dark ? "dark" : "light"}`}>
      <Navbar dark={dark} setDark={setDark} />

      <div className="container">
        <h1>Course Manager App</h1>
        <h3>Total Courses: {courses.length}</h3>

        <CourseForm
          addCourse={addCourse}
          editingCourse={editingCourse}
          updateCourse={updateCourse}
        />

        <CourseList
          courses={courses}
          setEditingCourse={setEditingCourse}
          deleteCourse={deleteCourse}
        />
      </div>
    </div>
  );
}

export default App;
