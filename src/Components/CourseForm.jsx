import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

function CourseForm({ addCourse, editingCourse, updateCourse }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (editingCourse) {
      setTitle(editingCourse.title);
      setPrice(editingCourse.price);
      setDuration(editingCourse.duration);
    }
  }, [editingCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !duration) {
      toast.error("Please fill all fields");
      return;
    }

    const courseData = {
      title,
      price: Number(price),
      duration,
    };

    if (editingCourse) {
      updateCourse({ ...courseData, id: editingCourse.id });
    } else {
      addCourse(courseData);
    }

    setTitle("");
    setPrice("");
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit} className="course-form">
      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration (e.g. 10 hours)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button type="submit">{editingCourse ? "Update" : "Add"} Course</button>
    </form>
  );
}

export default CourseForm;
