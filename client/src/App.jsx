import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import MyEnrollments from "./MyEnrollments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/my-enrollments"
          element={<MyEnrollments />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;