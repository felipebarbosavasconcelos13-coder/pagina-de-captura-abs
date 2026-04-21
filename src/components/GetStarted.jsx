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
    <section id="garantir-vaga" ref={containerRef} className="py-12 md:py-32 px-6 bg-black">
      <div className="max-w-5xl mx-auto bg-[#0a0a0c] border border-[#222] rounded-[3rem] p-6 md:p-16 relative overflow-hidden shadow-2xl">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D00000]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
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



        </div>
      </div>
    </section>
  );
}
