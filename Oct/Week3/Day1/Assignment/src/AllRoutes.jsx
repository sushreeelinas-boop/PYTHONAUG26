import { Routes, Route, Navigate } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Profile from "./components/Profile";

function Home() {
  return (
    <div className="home-content">
      <h1>Welcome to Our Website!</h1>
    </div>
  );
}

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />

      <Route path="/profile/:id" element={<Profile />} />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default AllRoutes;
