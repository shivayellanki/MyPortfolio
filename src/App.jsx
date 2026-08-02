import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import Experience from './components/Experience.jsx';
import TechStack from './components/TechStack.jsx';
import About from './components/About.jsx';
import Achievement from './components/Achievement.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Experience />
        <TechStack />
        <About />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
