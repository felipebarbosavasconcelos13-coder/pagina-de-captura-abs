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
      className="relative min-h-screen py-24 px-6 flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="philo-bg absolute -top-[10%] left-0 w-full h-[120%] bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=2000")' }} 
        />
        {/* Unsplash abstract/concrete/mechanical texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-start gap-12 md:gap-24">
        
        <div className="philo-text flex flex-col gap-4 max-w-2xl">
          <p className="font-data text-xs text-[#ADB5BD] uppercase tracking-widest">
            O Problema
          </p>
          <h2 className="font-heading font-medium text-2xl md:text-3xl text-[#ADB5BD] leading-relaxed">
            Você liga o scanner e, em vez de uma resposta clara, ele te mostra um código vago. Você troca a peça que parecia óbvia, faz o teste e a luz do painel continua acesa.<br/><br/>
            De repente, o que seria um serviço simples se transforma em horas de dor de cabeça. O cliente pressiona, o carro ocupa espaço e o lucro vai pelo ralo.<br/><br/>
            Isso não é falta de esforço. É falta de: <span className="underline decoration-[#222]">um método claro para parar de perder tempo e dinheiro.</span>
          </h2>
        </div>

        <div className="philo-text flex flex-col gap-4 self-end text-right md:text-left md:self-start max-w-3xl">
          <p className="font-data text-xs text-[#D00000] uppercase tracking-widest">
            A Nossa Filosofia
          </p>
          <h2 className="font-heading font-black text-4xl md:text-6xl text-white leading-tight">
            Nós vamos te entregar: <span className="font-drama text-6xl md:text-[6rem] text-[#D00000] drop-shadow-lg inline-block pt-4"> Um Método Claro.</span>
          </h2>
        </div>

      </div>
    </section>
  );
}
