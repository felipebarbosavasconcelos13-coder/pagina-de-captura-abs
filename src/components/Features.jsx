import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
  const [items, setItems] = useState([
    { id: 1, text: "SCANNER COM CÓDIGO", color: "text-[#ADB5BD]" },
    { id: 2, text: "TROCA DE PEÇAS", color: "text-[#D00000]" },
    { id: 3, text: "DIAGNÓSTICO EXATO", color: "text-white" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#111111] rounded-[2rem] border border-[#222222] p-6 md:p-8 relative overflow-hidden group hover:border-[#D00000]/50 transition-colors shadow-2xl">
      <img 
        src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=85&w=800" 
        alt="Sistema de Freio"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.03] group-hover:opacity-[0.05] transition-opacity"
      />
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
      </div>
      
      <div className="font-data text-[10px] text-[#D00000] tracking-widest mb-6">01 // DIAGNÓSTICO GUIADO</div>
      <h3 className="font-heading font-bold text-2xl mb-4">O Fim do Achismo</h3>
      <p className="text-[#ADB5BD] font-light text-sm mb-8">
        Pare de depender de scanners que só mostram o "possível erro" e entenda o que realmente está acontecendo no sistema ABS.
      </p>

      <div className="relative h-[120px] w-full perspective-[1000px] mt-auto">
        {items.map((item, index) => {
          const isTop = index === 0;
          return (
            <div 
              key={item.id}
              className={`absolute w-full p-4 rounded-xl border border-white/10 bg-[#1A1A1A] font-data text-xs tracking-wider transition-all duration-[800ms] ${item.color}`}
              style={{
                transform: `translateY(${index * 15}px) scale(${1 - index * 0.05})`,
                opacity: 1 - index * 0.3,
                zIndex: 10 - index,
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {isTop && <span className="inline-block w-2 h-2 rounded-full bg-[#D00000] mr-2 animate-pulse"></span>}
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TypewriterCard = () => {
  const fullText = "> ERRO: FALTA DE MÉTODO...\n> STATUS: TENTATIVA E ERRO.\n> SOLUÇÃO LOCALIZADA.\n> STATUS: APLICAÇÃO PRÁTICA.";
  const [text, setText] = useState("");
  const index = useRef(0);

  useEffect(() => {
    const typeWriter = () => {
      if (index.current < fullText.length) {
        setText(prev => prev + fullText.charAt(index.current));
        index.current++;
        setTimeout(typeWriter, Math.random() * 50 + 20);
      } else {
        setTimeout(() => {
          setText("");
          index.current = 0;
          typeWriter();
        }, 4000);
      }
    };
    
    // Start with delay
    const startTimeout = setTimeout(typeWriter, 1000);
    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div className="bg-[#111111] rounded-[2rem] border border-[#222222] p-6 md:p-8 relative overflow-hidden group hover:border-[#D00000]/50 transition-colors shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <div className="font-data text-[10px] text-[#D00000] tracking-widest">02 // PRECISÃO NA BANCADA</div>
        <div className="flex items-center gap-2 bg-[#D00000]/10 px-2 py-1 rounded">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D00000] animate-pulse"></div>
          <span className="font-data text-[9px] text-[#D00000]">LIVE FEED</span>
        </div>
      </div>
      
      <h3 className="font-heading font-bold text-2xl mb-4">Diagnóstico Guiado</h3>
      <p className="text-[#ADB5BD] font-light text-sm mb-8">
        Como chegar no defeito antes mesmo de desmontar meio carro. Execute serviços de forma cirúrgica.
      </p>

      <div className="bg-black rounded-xl p-4 border border-[#222222] h-[120px] font-data text-xs text-[#00FF41] leading-relaxed relative flex flex-col justify-end">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
        <pre className="whitespace-pre-wrap">{text}<span className="inline-block w-2 bg-[#00FF41] animate-pulse">_</span></pre>
      </div>
    </div>
  );
};

const SchedulerCard = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Reset
      tl.set('.cursor-svg', { x: -20, y: 50, opacity: 0 })
        .set('.cell-sat', { backgroundColor: 'transparent' })
        .set('.btn-save', { scale: 1 });

      // Move in
      tl.to('.cursor-svg', { x: 30, y: -20, opacity: 1, duration: 1, ease: 'power2.out' })
        // Hover day
        .to('.cursor-svg', { x: 74, y: 15, duration: 0.6, ease: 'power2.inOut' })
        // Click
        .to('.cursor-svg', { scale: 0.8, duration: 0.1 })
        .to('.cell-sat', { backgroundColor: '#D00000', duration: 0.1 }, "<")
        .to('.cursor-svg', { scale: 1, duration: 0.1 })
        // Move to Save
        .to('.cursor-svg', { x: 120, y: 55, duration: 0.7, ease: 'power2.inOut' }, "+=0.3")
        // Click save
        .to('.cursor-svg', { scale: 0.8, duration: 0.1 })
        .to('.btn-save', { scale: 0.95, duration: 0.1 }, "<")
        .to('.cursor-svg', { scale: 1, duration: 0.1 })
        .to('.btn-save', { scale: 1, duration: 0.1 }, "<")
        // Fade out
        .to('.cursor-svg', { opacity: 0, duration: 0.3 }, "+=0.5");
        
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#111111] rounded-[2rem] border border-[#222222] p-6 md:p-8 relative overflow-hidden group hover:border-[#D00000]/50 transition-colors shadow-2xl">
      <div className="font-data text-[10px] text-[#D00000] tracking-widest mb-6">03 // RENTABILIDADE ÁGIL</div>
      <h3 className="font-heading font-bold text-2xl mb-4">Lucro Real</h3>
      <p className="text-[#ADB5BD] font-light text-sm mb-8">
        Cada vez que você passa dias procurando um defeito para no fim cobrar pouco, você paga para trabalhar. Transforme isso em lucro rápido.
      </p>

      <div className="relative h-[120px] bg-[#1A1A1A] rounded-xl border border-white/10 p-4 flex flex-col justify-between">
        
        <div className="flex justify-between font-data text-[10px] text-[#ADB5BD]">
          {['S','M','T','W','T','F','S'].map((day, i) => (
            <div key={i} className={`w-6 h-6 flex items-center justify-center rounded-sm ${i === 2 ? 'cell-sat' : ''}`}>
              {day}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-end">
          <div className="font-data text-[9px] text-[#ADB5BD]">DIAG_PROFIT_READY</div>
          <div className="btn-save bg-white text-black px-4 py-1.5 rounded text-[10px] font-heading font-bold uppercase transition-transform origin-center">
            Aplicar
          </div>
        </div>

        {/* Cursor SVG */}
        <div className="cursor-svg absolute top-10 left-4 pointer-events-none drop-shadow-xl z-10 origin-top-left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L11.071 22.3848L13.7845 14L22.1693 11.2865L4 4Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="conteudo" ref={containerRef} className="py-12 md:py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading font-black text-3xl md:text-5xl mb-12 md:mb-24 text-center">
          <span className="block text-[#ADB5BD] text-lg md:text-2xl font-light mb-2 uppercase tracking-widest">E ENTENDA O MÉTODO DEFINITIVO</span>
          VOCÊ VAI TER O DOMÍNIO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <div className="feature-card"><ShufflerCard /></div>
          <div className="feature-card"><TypewriterCard /></div>
          <div className="feature-card"><SchedulerCard /></div>
        </div>
      </div>
    </section>
  );
}
