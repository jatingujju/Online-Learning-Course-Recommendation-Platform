import { useEffect, useState } from "react";
import axios from "axios";

function MyEnrollments() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:5000/api/enrollments/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEnrollments(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load enrollments");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Enrollments 📚</h1>

      {enrollments.map((item) => (
        <div
          key={item._id}
          style={{
            background: "#fff",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{item.course.title}</h2>

          <p>{item.course.description}</p>

          <p>
            <strong>Instructor:</strong>{" "}
            {item.course.instructor}
          </p>

          <p>
            <strong>Level:</strong>{" "}
            {item.course.level}
          </p>

          <p>
            <strong>Duration:</strong>{" "}
            {item.course.duration}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyEnrollments;