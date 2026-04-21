import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
  {
    id: "01",
    title: "11 de maio",
    subtitle: "Diagnóstico 360º em ABS, ESP e ADAS",
    desc: "Oportunidade em veículos premium. Você vai descobrir onde está o dinheiro que a maioria das oficinas não enxerga",
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
    title: "12 de maio",
    subtitle: "Ouro no chão da oficina",
    desc: "Manutenção do ABS que ninguém quer fazer. Aprenda a lucrar com serviços que outros mecânicos evitam",
    graphic: (
      <div className="relative w-full h-full p-4 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #555 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
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
    title: "13 de maio",
    subtitle: "O check-mate do ABS em carros e motos",
    desc: "Quem domina o conceito não teme a máquina. Você vai ganhar confiança para diagnosticar sem depender de tentativa e erro",
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
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
          animation: gsap.to(card, {
            scale: 0.9,
            filter: "blur(10px)",
            opacity: 0.5,
            ease: "none"
          }),
          scrub: true,
        });
      });

      // Fade in for footer
      gsap.from('.protocol-footer', {
        scrollTrigger: {
          trigger: '.protocol-footer',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="metodo" ref={containerRef} className="relative bg-black pt-20">
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <p className="font-data text-xs text-[#D00000] uppercase tracking-[0.3em] mb-4">Cronograma</p>
        <h2 className="font-heading font-black text-4xl md:text-6xl text-white uppercase">
          O que você vai aprender em cada dia da imersão
        </h2>
      </div>

      {protocols.map((protocol, i) => (
        <div 
          key={protocol.id} 
          className="protocol-card w-full h-[100dvh] flex items-center justify-center p-6 border-t border-[#111] bg-black"
          style={{ zIndex: i + 1 }}
        >
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0a0a0c] border border-[#222] rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
            
            <div className="w-full h-[300px] md:h-[500px] bg-[#111] rounded-[2rem] flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 tech-grid opacity-10 rounded-[2rem]"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                {protocol.graphic}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="font-data text-[#D00000] tracking-widest text-xl mb-4">
                [{protocol.id}]
              </div>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-2 uppercase">
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
      
      {/* Protocol Footer */}
      <div className="protocol-footer relative z-[10] py-32 px-6 flex flex-col items-center justify-center text-center bg-black">
        <h3 className="font-heading font-black text-2xl md:text-4xl text-white max-w-4xl mb-12">
          Ao final dos 3 dias, você vai enxergar o sistema ABS de forma completamente diferente
        </h3>
        <a 
          href="#captura"
          className="group relative inline-flex items-center justify-center gap-4 bg-[#D00000] hover:bg-[#A00000] text-white px-10 py-6 rounded-2xl font-heading font-bold uppercase tracking-widest text-base transition-all shadow-[0_20px_40px_-10px_#D00000] hover:scale-105 active:scale-95"
        >
          <span>Quero garantir minha vaga</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </section>
  );
}
