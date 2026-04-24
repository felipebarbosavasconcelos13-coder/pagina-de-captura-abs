import React, { Suspense, lazy } from 'react';
import Hero from './components/Hero';

import Identification from './components/Identification';
import Agitation from './components/Agitation';
import Turnaround from './components/Turnaround';
import Protocol from './components/Protocol';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Instructor from './components/Instructor';
import Imagine from './components/Imagine';
import Decision from './components/Decision';
import FinalForm from './components/FinalForm';

function App() {
  return (
    <div className="bg-black text-white selection:bg-[#D00000] selection:text-white">
      <Hero />
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <Identification />
        <Agitation />
        <Turnaround />
        <Protocol />
        <Features />
        <Philosophy />
        <Instructor />
        <Imagine />
        <Decision />
        <FinalForm />
      </Suspense>
    </div>
  );
}

export default App;
