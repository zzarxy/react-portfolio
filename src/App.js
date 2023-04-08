import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import HomePage from "./pages/Home/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import AboutPage from "./pages/About/AboutPage";
import ContactsPage from "./pages/Contacts/ContactsPage";
import Burger from "./components/burger/Burger";

function App() {
  return (
    <div className="App min-h-[100vh] flex flex-col justify-between">
      <Router >
        <Navbar />
        <Burger />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
