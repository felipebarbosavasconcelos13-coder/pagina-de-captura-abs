import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wrench, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Turnaround() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.turn-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_70%)] opacity-50"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="turn-content">
          <div className="inline-flex items-center gap-2 bg-[#D00000]/10 border border-[#D00000]/30 px-6 py-2 rounded-full mb-10">
            <Wrench size={16} className="text-[#D00000]" />
            <span className="text-[#D00000] font-data font-bold text-[10px] tracking-widest uppercase">A Grande Virada</span>
          </div>

          <h2 className="font-heading font-black text-4xl md:text-7xl text-white mb-10 uppercase leading-none italic">
            Existe uma forma mais <br/>
            <span className="text-[#D00000] font-drama italic lowercase">simples e prática</span> de resolver isso
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 bg-[#111] rounded-[2rem] border border-[#222]">
              <p className="text-[#ADB5BD] font-body italic text-lg">Você não precisa decorar teoria complexa</p>
            </div>
            <div className="p-8 bg-[#111] rounded-[2rem] border border-[#222]">
              <p className="text-[#ADB5BD] font-body italic text-lg">Não precisa depender de tentativa e erro</p>
            </div>
            <div className="p-8 bg-[#111] rounded-[2rem] border border-[#222]">
              <p className="text-[#ADB5BD] font-body italic text-lg">Você precisa de um método que funcione dentro da oficina</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-white font-body font-light mb-12 leading-relaxed">
              E é exatamente isso que você vai aprender na <span className="font-bold text-[#D00000]">Imersão 360° em Freios ABS.</span>
            </p>
            
            <a 
              href="#captura" 
              className="group relative inline-flex items-center justify-center gap-6 bg-white text-black px-12 py-6 rounded-full font-heading font-black uppercase tracking-[0.2em] text-sm md:text-lg hover:bg-[#D00000] hover:text-white transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10">Quero aprender passo a passo</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
