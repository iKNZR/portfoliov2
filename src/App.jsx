import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ContactPage from "./pages/contact/ContactPage";
import Loading from "./components/loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Cambia esto al tiempo que quieras que se muestre el GIF

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);
  return (
    <>
    {loading ? <Loading /> :
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </BrowserRouter>
    }
    </>
  );
}

export default App;
