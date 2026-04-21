import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
      gsap.to('.philo-bg', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: '20%',
        ease: 'none'
      });

      // Text reveal
      const textElements = gsap.utils.toArray('.philo-text');
      
      textElements.forEach(el => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        });
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[50vh] py-8 md:py-24 px-6 flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-start gap-8 md:gap-24">
        
        <div className="philo-text flex flex-col gap-4 max-w-2xl w-full">
          <p className="font-data text-xs text-[#D00000] uppercase tracking-widest">
            O Problema
          </p>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white leading-tight mb-4">
            O problema não é só técnico. Ele está custando caro todos os dias
          </h2>
          <div className="font-body text-[#ADB5BD] text-lg md:text-xl leading-relaxed space-y-4">
            <p>Enquanto você tenta resolver no erro e acerto:</p>
            <ul className="space-y-2 border-l-2 border-[#D00000]/30 pl-6">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                Clientes perdem confiança
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                Você deixa dinheiro na mesa
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                Fica dependente de terceiros
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                Trabalha com insegurança
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                E sente que está ficando para trás
              </li>
            </ul>
          </div>
        </div>

        <div className="philo-text flex flex-col gap-8 w-full">
          <div className="max-w-3xl">
            <p className="font-data text-xs text-[#D00000] uppercase tracking-widest mb-4">
              Impacto Financeiro
            </p>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white leading-tight">
              Cada diagnóstico que você não resolve é <span className="font-drama italic text-4xl md:text-6xl text-[#D00000] block md:inline mt-2 md:mt-0">dinheiro que outro mecânico está ganhando.</span>
            </h2>
          </div>
          
          <div className="flex justify-start">
            <a 
              href="#captura"
              className="group relative inline-flex items-center justify-center gap-4 bg-[#D00000] hover:bg-[#A00000] text-white px-8 py-5 rounded-2xl font-heading font-bold uppercase tracking-widest text-sm transition-all shadow-[0_10px_30px_-10px_#D00000] hover:scale-105 active:scale-95"
            >
              <span>Quero parar de perder dinheiro</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
