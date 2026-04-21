import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Identification() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.id-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 1
      });

      gsap.from('.id-item', {
        scrollTrigger: {
          trigger: '.id-list',
          start: 'top 85%'
        },
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const items = [
    "Scanner mostra código, mas você não sabe interpretar com segurança",
    "Já trocou peça sem certeza e teve prejuízo",
    "Já perdeu cliente porque não conseguiu resolver o problema",
    "Já ficou inseguro com carro mais moderno",
    "Já precisou mandar serviço para outra oficina"
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#0a0a0c] border-y border-[#222]">
      <div className="max-w-4xl mx-auto">
        <div className="id-header mb-16">
          <div className="flex items-center gap-3 text-[#D00000] mb-6 font-data font-bold tracking-[0.3em] text-xs">
            <AlertTriangle size={16} />
            DIAGNÓSTICO DE REALIDADE
          </div>
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-6 uppercase leading-tight">
            Se você é mecânico, isso provavelmente <br/>
            <span className="text-[#D00000] font-drama italic text-4xl md:text-6xl pt-2 inline-block lowercase">está travando seu crescimento</span>
          </h2>
          <p className="text-[#ADB5BD] font-body text-xl font-light italic">Você já passou por isso:</p>
        </div>

        <div className="id-list space-y-4 mb-16">
          {items.map((item, i) => (
            <div key={i} className="id-item flex items-start gap-4 p-6 bg-[#111] rounded-2xl border border-[#222] hover:border-[#D00000]/30 transition-colors">
              <div className="w-6 h-6 rounded-lg bg-red-950/20 border border-red-900/50 flex items-center justify-center shrink-0 mt-1">
                <div className="w-2 h-2 bg-[#D00000] rounded-full"></div>
              </div>
              <p className="text-[#E9ECEF] text-lg font-body font-light italic">{item}</p>
            </div>
          ))}
        </div>

        <div className="id-footer bg-[#D00000]/5 border border-[#D00000]/20 p-8 rounded-[2rem] text-center">
          <p className="text-white text-xl md:text-2xl font-body font-light mb-8">
            Isso não é falta de esforço. <br/>
            <span className="font-bold text-[#D00000]">É falta de um método claro.</span>
          </p>
          <a 
            href="#captura" 
            className="group inline-flex items-center gap-3 text-white font-data font-bold uppercase tracking-widest text-sm border-b border-[#D00000] pb-1 hover:text-[#D00000] transition-colors"
          >
            Quero aprender o método correto
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
