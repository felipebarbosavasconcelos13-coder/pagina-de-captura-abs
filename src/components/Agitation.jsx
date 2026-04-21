import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DollarSign, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Agitation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.agitation-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const items = [
    "Clientes perdem confiança",
    "Você deixa dinheiro na mesa",
    "Fica dependente de terceiros",
    "Trabalha com insegurança",
    "E sente que está ficando para trás"
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        <div className="agitation-card bg-[#D00000] p-12 md:p-20 rounded-[4rem] relative overflow-hidden shadow-[0_30px_100px_-20px_rgba(208,0,0,0.3)]">
          {/* Background Text Pattern */}
          <div className="absolute top-0 right-0 font-heading font-black text-[15rem] leading-none opacity-5 select-none pointer-events-none -translate-y-1/2 translate-x-1/4">
            $$$
          </div>

          <div className="relative z-10">
            <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-10 uppercase leading-none italic tracking-tighter">
              O problema não é só técnico. <br/>
              <span className="text-black/40">Ele está custando caro todos os dias.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-white/80 font-data font-bold tracking-widest text-sm mb-8 uppercase">
                  Enquanto você tenta resolver no erro e acerto:
                </p>
                <div className="space-y-4">
                  {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-white text-xl md:text-2xl font-body font-light">
                      <div className="w-8 h-[1px] bg-white opacity-40"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/20 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10">
                <p className="text-2xl md:text-3xl text-white font-drama italic mb-8 leading-tight">
                  "Cada diagnóstico que você não resolve é <span className="text-black">dinheiro que outro mecânico está ganhando.</span>"
                </p>
                <a 
                  href="#captura" 
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-heading font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300"
                >
                  Quero parar de perder dinheiro
                  <DollarSign size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
