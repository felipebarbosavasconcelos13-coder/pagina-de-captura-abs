import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
  {
    id: "01",
    title: "AULA 1 – O INÍCIO DE TUDO",
    subtitle: "ONDE 90% ERRAM E COMO NÃO SER UM DELES (DIA 05/05 ÀS 20:00)",
    desc: "A base onde 90% das oficinas erram. Como parar de usar o scanner como máquina de apagar defeitos.",
    graphic: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
        <circle cx="50" cy="50" r="30" fill="none" stroke="#D00000" strokeWidth="1" strokeDasharray="4 4" className="origin-center animate-[spin_10s_linear_infinite]" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="origin-center animate-[spin_20s_linear_infinite_reverse]" />
        <circle cx="50" cy="50" r="10" fill="#D00000" className="animate-pulse" />
      </svg>
    )
  },
  {
    id: "02",
    title: "AULA 2 – DIAGNÓSTICO PRÁTICO",
    subtitle: "SINAIS DE REDE E EQUIPAMENTOS NO ABS E EPB (DIA 06/05 ÀS 20:00)",
    desc: "Aplicando técnicas e equipamentos no ABS e EPB sem enrolação. Usando scanner, osciloscópio e literatura técnica.",
    graphic: (
      <div className="relative w-full h-full p-4 overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #555 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
        {/* Scanline */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D00000] shadow-[0_0_15px_#D00000] animate-[scan_2s_ease-in-out_infinite_alternate]"></div>
        <style>{`
          @keyframes scan {
            from { transform: translateY(0); }
            to { transform: translateY(100%); }
          }
        `}</style>
      </div>
    )
  },
  {
    id: "03",
    title: "AULA 3 – A ROTINA RENTÁVEL",
    subtitle: "PARA QUEM DOMINA ABS, ESP E EPB (DIA 07/05 ÀS 20:00)",
    desc: "Acelere a rentabilidade da sua oficina. Seja o perito em diagnóstico na sua região e pare de perder dinheiro.",
    graphic: (
      <svg viewBox="0 0 200 50" className="w-full h-full opacity-80" preserveAspectRatio="none">
        <path 
          d="M0,25 L50,25 L60,5 L70,45 L80,10 L90,25 L200,25" 
          fill="none" 
          stroke="#D00000" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="animate-[dash_2s_linear_infinite]"
          strokeDasharray="200"
          strokeDashoffset="200"
        />
        <style>{`
          @keyframes dash {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: -200; }
          }
        `}</style>
      </svg>
    )
  }
];

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only apply complex scroll pinning on non-mobile to avoid jitter, 
    // or we can use a simpler approach. Let's use standard GSAP pinning.
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "+=100%", // duration of pin
          pin: true,
          pinSpacing: false,
          // Optional: scale down when next card comes up
          animation: gsap.to(card, {
            scale: 0.9,
            filter: "blur(10px)",
            opacity: 0.5,
            ease: "none"
          }),
          scrub: true,
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="metodo" ref={containerRef} className="relative bg-black pt-20">
      {protocols.map((protocol, i) => (
        <div 
          key={protocol.id} 
          className="protocol-card w-full h-[100dvh] flex items-center justify-center p-6 border-t border-[#111] bg-black"
          style={{ zIndex: i + 1 }}
        >
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0a0a0c] border border-[#222] rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
            
            {/* Visual Column */}
            <div className="w-full h-[300px] md:h-[500px] bg-[#111] rounded-[2rem] flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 tech-grid opacity-10 rounded-[2rem]"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                {protocol.graphic}
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-center">
              <div className="font-data text-[#D00000] tracking-widest text-xl mb-4">
                [{protocol.id}]
              </div>
              <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-2 uppercase">
                {protocol.title}
              </h2>
              <h3 className="font-heading font-bold text-2xl text-[#ADB5BD] mb-8">
                {protocol.subtitle}
              </h3>
              <p className="font-body text-[#ADB5BD] text-lg leading-relaxed max-w-md">
                {protocol.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="h-[20vh] bg-black"></div> {/* Spacing at the bottom so the last card unpins smoothly */}
    </section>
  );
}
