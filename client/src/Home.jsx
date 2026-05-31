import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [courses, setCourses] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/courses"
      );

      setCourses(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load courses");
    }
  };

  const fetchRecommendations = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const res = await axios.get(
        `http://localhost:5000/api/recommendations/${userId}`
      );

      setRecommendedCourses(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load recommendations");
    }
  };

  const enrollCourse = async (courseId) => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/enrollments",
        {
          userId,
          courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Enrollment Failed"
      );
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Welcome to EduNova 🚀
      </h1>

      <p
        style={{
          fontSize: "24px",
          marginBottom: "30px",
        }}
      >
        Online Learning Course Recommendation Platform
      </p>

      <input
        type="text"
        placeholder="Search Courses..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          width: "350px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "25px",
          fontSize: "16px",
        }}
      />

      <div style={{ marginBottom: "30px" }}>
        <button
          onClick={fetchCourses}
          style={{
            padding: "15px 30px",
            fontSize: "20px",
            borderRadius: "10px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          View Courses
        </button>

        <button
          onClick={fetchRecommendations}
          style={{
            padding: "15px 30px",
            fontSize: "20px",
            borderRadius: "10px",
            border: "none",
            background: "#9333ea",
            color: "white",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          Recommended Courses
        </button>

        <button
          onClick={() =>
            navigate("/my-enrollments")
          }
          style={{
            padding: "15px 30px",
            fontSize: "20px",
            borderRadius: "10px",
            border: "none",
            background: "#16a34a",
            color: "white",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          My Enrollments
        </button>

        <button
          onClick={handleLogout}
          style={{
            padding: "15px 30px",
            fontSize: "20px",
            borderRadius: "10px",
            border: "none",
            background: "#dc2626",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <h2>All Courses 📚</h2>

      <div style={{ marginTop: "20px" }}>
        {filteredCourses.map((course) => (
          <div
            key={course._id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "20px",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{course.title}</h2>
            <p>{course.description}</p>

            <p>
              <strong>Instructor:</strong>{" "}
              {course.instructor}
            </p>

            <p>
              <strong>Level:</strong>{" "}
              {course.level}
            </p>

            <p>
              <strong>Duration:</strong>{" "}
              {course.duration}
            </p>

            <button
              onClick={() =>
                enrollCourse(course._id)
              }
              style={{
                padding: "10px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "50px" }}>
        Recommended For You 🎯
      </h2>

      <div style={{ marginTop: "20px" }}>
        {recommendedCourses.map((course) => (
          <div
            key={course._id}
            style={{
              background: "#f3e8ff",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "20px",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{course.title}</h2>
            <p>{course.description}</p>

            <p>
              <strong>Instructor:</strong>{" "}
              {course.instructor}
            </p>

            <p>
              <strong>Level:</strong>{" "}
              {course.level}
            </p>

            <p>
              <strong>Duration:</strong>{" "}
              {course.duration}
            </p>

            <button
              onClick={() =>
                enrollCourse(course._id)
              }
              style={{
                padding: "10px 20px",
                background: "#9333ea",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;