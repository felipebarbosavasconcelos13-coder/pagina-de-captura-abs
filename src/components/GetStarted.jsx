import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function GetStarted() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gs-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const benefits = [
    "Acesso a 3 dias de treinamento de alto nível",
    "Material de apoio exclusivo",
    "Sorteios e bônus no grupo VIP",
    "Passo a passo do método de diagnóstico"
  ];

  return (
    <section id="garantir-vaga" ref={containerRef} className="py-24 md:py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto bg-[#0a0a0c] border border-[#222] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D00000]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 gs-content">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6 uppercase">
              Você não vai aprender teoria solta. <br/>
              <span className="text-[#D00000] font-drama italic text-4xl md:text-5xl pt-2 inline-block">Vai aprender um método</span>
            </h2>
            <div className="text-[#ADB5BD] font-body text-lg mb-8 max-w-md space-y-4">
              <p>Durante a imersão, você vai entender:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                  Como funciona o sistema ABS na prática
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                  Como interpretar corretamente códigos de falha
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                  Como usar scanner de forma profissional
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                  Como identificar falhas com precisão
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#D00000] rounded-full"></span>
                  Como transformar diagnóstico em faturamento
                </li>
              </ul>
              <p className="border-t border-[#222] pt-4 text-white font-bold">
                Você sai com clareza e segurança para aplicar no dia seguinte na sua oficina
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto gs-content flex flex-col items-center gap-4 bg-[#111] p-8 rounded-[2rem] border border-[#222] text-center">
            <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-[#222] mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D00000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1"/></svg>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mt-4 text-center">IMERSÃO GRATUITA</h3>
            <p className="text-[#ADB5BD] text-sm mb-6 max-w-[200px] text-center">Domine o método agora.</p>
            
            <a 
              href="#captura" 
              className="w-full group relative inline-flex items-center justify-center gap-3 bg-[#D00000] text-white px-8 py-4 rounded-full font-heading font-bold uppercase tracking-widest text-sm magnetic-btn shadow-[0_0_30px_-5px_#D00000]"
            >
              <span className="relative z-10 w-full text-center whitespace-nowrap text-xs md:text-sm">Quero aprender esse método</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform absolute right-4 hidden sm:block" />
            </a>
            <p className="font-data text-[10px] text-[#ADB5BD] mt-4 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              ACESSO IMEDIATO APÓS INSCRIÇÃO
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
