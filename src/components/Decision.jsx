import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, XCircle, CheckCircle2, AlertCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Decision() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.decision-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 1
      });

      gsap.from('.decision-card', {
        scrollTrigger: {
          trigger: '.decision-grid',
          start: 'top 85%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="decision-header text-center mb-20">
          <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 uppercase leading-tight">
            Agora a decisão está <br/>
            <span className="text-[#D00000] font-drama italic text-5xl md:text-7xl pt-2 inline-block lowercase">nas suas mãos</span>
          </h2>
          <div className="w-24 h-1 bg-[#D00000] mx-auto"></div>
        </div>

        <div className="decision-grid grid md:grid-cols-2 gap-8 mb-20">
          {/* Path A */}
          <div className="decision-card bg-[#0a0a0c] border border-[#222] p-10 rounded-[3rem] relative overflow-hidden group hover:border-[#D00000]/30 transition-all duration-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-950/30 flex items-center justify-center border border-red-900/50">
                <XCircle size={24} className="text-red-500" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Você pode continuar:</h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-[#ADB5BD] font-light">
                <div className="w-1.5 h-1.5 bg-red-900 rounded-full"></div>
                Perdendo dinheiro com diagnósticos que não resolve
              </li>
              <li className="flex items-center gap-4 text-[#ADB5BD] font-light">
                <div className="w-1.5 h-1.5 bg-red-900 rounded-full"></div>
                Dependendo de outros profissionais
              </li>
              <li className="flex items-center gap-4 text-[#ADB5BD] font-light">
                <div className="w-1.5 h-1.5 bg-red-900 rounded-full"></div>
                Trabalhando com insegurança
              </li>
            </ul>
          </div>

          {/* Path B */}
          <div className="decision-card bg-[#111] border border-[#D00000]/50 p-10 rounded-[3rem] relative overflow-hidden shadow-[0_0_50px_-20px_#D00000] transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-[#D00000] text-white px-6 py-2 rounded-bl-3xl font-data font-bold text-xs">RECOMENDADO</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-green-950/30 flex items-center justify-center border border-green-900/50">
                <CheckCircle2 size={24} className="text-green-500" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Ou você pode:</h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-white font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Aprender um método claro
              </li>
              <li className="flex items-center gap-4 text-white font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Resolver com confiança
              </li>
              <li className="flex items-center gap-4 text-white font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                E transformar isso em faturamento
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-[#D00000] mb-2 font-data font-bold tracking-widest text-sm">
              <AlertCircle size={20} />
              O MERCADO JÁ MUDOU
            </div>
            <p className="text-2xl md:text-3xl text-white font-body font-light italic mb-8 max-w-2xl px-4">
              A pergunta é: você vai acompanhar ou ficar para trás?
            </p>
            
            <a 
              href="#captura" 
              className="group relative inline-flex items-center justify-center gap-4 bg-[#D00000] text-white px-12 py-6 rounded-full font-heading font-black uppercase tracking-[0.2em] text-sm md:text-lg magnetic-btn shadow-[0_0_50px_-10px_#D00000]"
            >
              <span className="relative z-10">Quero participar da imersão</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
