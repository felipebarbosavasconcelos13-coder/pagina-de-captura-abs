import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Instructor() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.inst-elem', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%'
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // Parallax effect on the image
      gsap.to('.inst-image', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: 40,
        ease: 'none'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="instrutor" className="relative py-12 md:py-32 bg-[#050505] overflow-hidden border-t border-[#111]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Left Side: Image Container */}
        <div className="lg:col-span-5 relative h-[350px] md:h-[650px] w-full rounded-[2rem] overflow-hidden border border-[#222] inst-elem">
          <div className="absolute inset-0 bg-[#D00000]/10 mix-blend-color z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-80"></div>
          
          <img 
            src="https://alextadeucursos.com.br/wp-content/uploads/2026/02/alex787-scaled.webp" 
            alt="Alex Tadeu - Referência Nacional em Diagnóstico" 
            className="inst-image w-full h-[120%] object-cover object-top absolute top-[-10%]"
          />
          
          <div className="absolute bottom-6 left-6 z-20 flex flex-col">
            <span className="font-data text-[#D00000] text-xs tracking-widest uppercase mb-1">
              Instrutor Master
            </span>
            <span className="font-heading font-black text-3xl text-white uppercase">
              Alex Tadeu
            </span>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center" ref={textRef}>
          <h2 className="inst-elem font-heading font-black text-4xl md:text-5xl text-white mb-6 md:mb-8 uppercase leading-[1.1]">
            Você não vai aprender com um teórico. <br className="hidden md:block" />
            <span className="text-[#ADB5BD] font-drama italic lowercase text-3xl md:text-5xl font-light">
              Vai aprender com quem vive isso todo dia.
            </span>
          </h2>

          <div className="inst-elem space-y-6 font-body text-[#ADB5BD] text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-[#D00000]/30 pl-6">
            <p>
              "Eu comecei na mecânica muito cedo. Ao longo de três décadas de oficina vivi grandes desafios: cheguei a falir e a perder o primeiro scanner que conquistei com muita dificuldade. Mas nunca desisti. Me reergui e me especializei, tornando-me referência em diagnóstico em todo o Brasil."
            </p>
            <p>
              "Hoje, além de palestrar para grandes marcas e montar as provas que avaliam os profissionais do setor pelo ASE, divido essa experiência de diagnóstico dia a dia na bancada com alunos."
            </p>
            <p>
              "<strong className="text-white font-medium">Não de teoria, mas de PRÁTICA</strong>, com o conhecimento necessário para qualquer reparador <strong className="text-[#D00000] font-medium">não depender de adivinhações e ganhar dinheiro na oficina.</strong>"
            </p>
          </div>

          <div className="inst-elem mt-10 p-6 bg-[#111] rounded-2xl border border-[#222]">
            <p className="font-body text-white font-medium italic text-lg leading-snug">
              "Se você quer continuar trocando peça, aprenda com qualquer um. Se quer pensar como analista, aprenda com quem vive isso há mais de 30 anos."
            </p>
          </div>
          
          <div className="inst-elem mt-10">
            <a 
              href="#captura"
              className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-heading font-bold uppercase tracking-widest text-sm border border-[#333] hover:border-[#D00000] hover:text-[#D00000] transition-colors"
            >
              Aprender com o Expert
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
