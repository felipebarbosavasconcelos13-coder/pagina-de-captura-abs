import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Imagine() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.imagine-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.imagine-item', {
        scrollTrigger: {
          trigger: '.imagine-list',
          start: 'top 85%'
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });

      gsap.from('.imagine-impact', {
        scrollTrigger: {
          trigger: '.imagine-impact',
          start: 'top 90%'
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const items = [
    "Resolver problemas que outros não conseguem",
    "Cobrar mais caro pelo seu serviço",
    "Ganhar respeito dos clientes",
    "Trabalhar com segurança e confiança",
    "Se tornar referência na sua cidade"
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#D00000]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1">
          <h2 className="imagine-title font-heading font-black text-4xl md:text-6xl text-white mb-6 md:mb-10 leading-tight uppercase">
            Imagine sua oficina <br/>
            <span className="text-[#D00000] font-drama italic text-5xl md:text-7xl pt-2 inline-block lowercase">depois de dominar isso</span>
          </h2>
          
          <div className="imagine-list space-y-4 md:space-y-6 mb-10 md:mb-12">
            <p className="text-[#ADB5BD] font-data text-sm tracking-widest uppercase mb-4 opacity-60">Você passa a:</p>
            {items.map((item, i) => (
              <div key={i} className="imagine-item flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-[#D00000] transition-colors">
                  <Wrench size={18} className="text-[#D00000]" />
                </div>
                <span className="text-xl md:text-2xl text-[#E9ECEF] font-body font-light group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <div className="imagine-impact bg-[#0a0a0c] border border-[#222] p-10 rounded-[3rem] relative mb-8 w-full">
            <div className="absolute -top-4 -left-4 bg-[#D00000] text-white px-4 py-1 rounded-full text-[10px] font-data font-bold tracking-tighter uppercase">
              O Salto de Nível
            </div>
            <p className="text-2xl md:text-3xl font-body font-light text-[#ADB5BD] leading-relaxed italic mb-4">
              "Não é sobre aprender ABS..."
            </p>
            <p className="text-3xl md:text-4xl font-drama text-white italic leading-tight">
              É sobre não ficar para trás no mercado.
            </p>
          </div>

          <a 
            href="#final-form" 
            className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full font-heading font-black uppercase tracking-widest text-sm hover:bg-[#D00000] hover:text-white transition-all duration-500 shadow-xl"
          >
            <span>Quero evoluir minha oficina</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
