import React, { useEffect } from 'react';
import gsap from 'gsap';

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

  return (
    <section className="relative min-h-[100dvh] w-full flex items-start md:items-center pt-[5.5rem] pb-4 md:pt-28 md:pb-12 overflow-hidden bg-black">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/a-z-do-diagnostico.appspot.com/o/LANDINGS%2Fcaptura_nova_abs%2Fimg_abs.webp?alt=media&token=db2bb9c5-2882-4166-9e9b-46a482d61d19" 
          alt="Oficina Manutenção ABS" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center">
        {/* Left Content (Text) */}
        <div className="flex flex-col justify-end h-full mt-2 lg:mt-0">
          <div className="hero-elem font-data text-[#D00000] tracking-widest text-[10px] md:text-sm mb-3 md:mb-6 flex items-center gap-2 md:gap-3">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#D00000] rounded-full animate-pulse shadow-[0_0_10px_#D00000]"></span>
            11, 12 E 13 DE MAIO | EVENTO ONLINE E GRATUITO
          </div>
          
          <h1 className="hero-elem font-heading text-white text-[2rem] leading-tight md:text-6xl lg:text-7xl font-black md:leading-[1.1] uppercase mb-4 md:mb-6 drop-shadow-2xl">
            DOMINE O DIAGNÓSTICO DE ABS, ESP E EPB
            <span className="block text-[#D00000] font-drama italic text-[1.6rem] leading-tight md:text-5xl lg:text-6xl mt-2 md:mt-4 normal-case">
              e pare de perder dinheiro com diagnósticos que você não resolve.
            </span>
          </h1>

          <p className="hero-elem font-body text-[#ADB5BD] text-sm md:text-xl max-w-lg mb-6 md:mb-8 leading-relaxed">
            Em 3 dias, você vai aprender como diagnosticar com segurança e transformar serviços complexos em lucro dentro da sua oficina.
          </p>
        </div>

        {/* Right Content (Form) */}
        <div id="captura" className="hero-elem bg-[#0a0a0c]/80 backdrop-blur-xl border border-[#222] rounded-3xl p-5 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D00000]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
          
          <h3 className="font-heading text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 relative z-10">
            Garanta sua vaga gratuita agora
          </h3>
          <p className="text-[#ADB5BD] text-xs md:text-sm mb-4 md:mb-6 relative z-10">
            Após se inscrever, você será direcionado para o grupo exclusivo no WhatsApp.
          </p>

          <form className="relative z-10 flex flex-col gap-3 md:gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[10px] md:text-xs text-[#ADB5BD] font-data tracking-wider">NOME COMPLETO</label>
              <input 
                id="name"
                required
                type="text" 
                placeholder="Ex: João da Silva"
                className="w-full bg-[#111] border border-[#333] rounded-lg md:rounded-xl px-3 outline-none py-2 md:px-4 md:py-3 text-white focus:border-[#D00000] transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[10px] md:text-xs text-[#ADB5BD] font-data tracking-wider">E-MAIL</label>
              <input 
                id="email"
                required
                type="email" 
                placeholder="Ex: joao@oficina.com"
                className="w-full bg-[#111] border border-[#333] rounded-lg md:rounded-xl px-3 outline-none py-2 md:px-4 md:py-3 text-white focus:border-[#D00000] transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="whatsapp" className="text-[10px] md:text-xs text-[#ADB5BD] font-data tracking-wider">WHATSAPP</label>
              <input 
                id="whatsapp"
                required
                type="tel" 
                placeholder="(11) 99999-9999"
                className="w-full bg-[#111] border border-[#333] rounded-lg md:rounded-xl px-3 outline-none py-2 md:px-4 md:py-3 text-white focus:border-[#D00000] transition-colors text-sm"
              />
            </div>

            <button 
              type="submit"
              className="mt-2 md:mt-4 w-full group relative inline-flex items-center justify-center gap-3 bg-[#D00000] hover:bg-[#A00000] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-heading font-bold uppercase tracking-widest text-[11px] md:text-sm transition-all shadow-[0_0_20px_-5px_#D00000]"
            >
              <span className="relative z-10 w-full text-center text-[10px] md:text-sm whitespace-normal md:whitespace-nowrap leading-tight">QUERO PARTICIPAR DO EVENTO GRATUITO</span>
            </button>
            <p className="text-center text-[10px] md:text-xs text-[#ADB5BD] mt-1 md:mt-2 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-3 md:h-3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Seus dados estão seguros.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
