import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollToForm = (e) => {
    e.preventDefault();
    const element = document.getElementById('final-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col lg:justify-center pt-8 pb-10 md:pt-28 md:pb-12 overflow-x-hidden bg-black">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture className="w-full h-full">
          <source media="(max-width: 768px)" srcSet="images/hero.webp" />
          <img 
            src="images/hero.webp" 
            alt="Alex Tadeu - Imersão 360"
            className="w-full h-full object-cover opacity-80"
            fetchpriority="high"
            width="1920"
            height="1080"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 flex-1">
          {/* Left Content (Text) */}
          <div className="flex flex-col justify-between lg:justify-center h-full py-4 md:py-0">
            {/* Top Content (Date & Main Title) */}
            <div className="flex flex-col">
              <div className="hero-elem font-data text-[#D00000] tracking-widest text-[9px] md:text-sm mb-2 md:mb-6 flex items-center gap-1 md:gap-3">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#D00000] rounded-full animate-pulse shadow-[0_0_10px_#D00000]"></span>
                11, 12 E 13 DE MAIO | EVENTO ONLINE E GRATUITO
              </div>
              
              <h1 className="hero-elem font-heading text-white text-[1.5rem] sm:text-[2rem] leading-[1.1] md:text-6xl lg:text-7xl font-black md:leading-[1.1] uppercase mb-2 md:mb-6 drop-shadow-2xl">
                IMERSÃO 360° EM FREIOS ABS CARRO E MOTO
              </h1>
            </div>

            {/* Bottom Content (Subtitle, Desc & Button) */}
            <div className="flex flex-col mt-auto lg:mt-0">
              <span className="hero-elem block text-[#D00000] font-drama italic text-[1.25rem] sm:text-[1.6rem] leading-tight md:text-5xl lg:text-6xl mb-2 md:mb-4 normal-case">
                O SERVIÇO QUE MAIS FATURA NA OFICINA MODERNA
              </span>

              <p className="hero-elem font-body text-[#ADB5BD] text-[11px] sm:text-xs md:text-xl max-w-lg mb-4 md:mb-8 leading-relaxed">
                Em 3 dias, você vai aprender como diagnosticar com segurança e transformar serviços complexos em lucro dentro da sua oficina.
              </p>

              {/* CTA Button */}
              <div className="hero-elem">
                <a 
                  href="#final-form"
                  onClick={scrollToForm}
                  className="group relative inline-flex items-center justify-center gap-4 bg-[#D00000] text-white px-8 py-4 md:px-12 md:py-6 rounded-xl md:rounded-full font-heading font-black uppercase tracking-widest text-xs md:text-lg shadow-[0_20px_40px_-10px_rgba(208,0,0,0.5)] hover:scale-105 transition-all duration-300 w-full md:w-auto"
                >
                  <span className="relative z-10">Quero garantir minha vaga gratuita</span>
                  <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content (Empty or Visual) */}
          <div className="hidden lg:flex items-center justify-center">
            {/* Podemos deixar vazio para focar no texto ou colocar algum elemento visual */}
          </div>
        </div>
      </div>
    </section>
  );
}

