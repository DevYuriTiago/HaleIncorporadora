import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Sustainability from './pages/Sustainability';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHeaderVisible(true);
  };

  return (
    <Router>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div className="min-h-screen flex flex-col">
        {headerVisible && <Header />}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;