import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Instructor from './components/Instructor';
import Protocol from './components/Protocol';
import GetStarted from './components/GetStarted';
import Imagine from './components/Imagine';
import Decision from './components/Decision';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-black text-white selection:bg-[#D00000] selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Instructor />
      <Protocol />
      <GetStarted />
      <Imagine />
      <Decision />
      <Footer />
    </main>
  );
}

export default App;
