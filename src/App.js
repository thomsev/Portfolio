import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import HomePage from './components/HomePage/HomePage';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css'; // Make sure this import is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        {/* Add padding here to push the content down */}
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactForm />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
