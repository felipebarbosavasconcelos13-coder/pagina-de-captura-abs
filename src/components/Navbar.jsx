import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full flex justify-center z-50 px-3 md:px-4 pointer-events-none">
      <nav 
        ref={navRef}
        className={`pointer-events-auto flex items-center justify-between px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-500 w-full max-w-4xl border ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-xl border-[#222222]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center gap-3 group cursor-pointer hover:-translate-y-[1px] transition-transform">
          <img 
            src="https://alextadeucursos.com.br/wp-content/uploads/2024/11/logoarb-150x150.png" 
            alt="ARB Treinamentos" 
            className="w-8 h-8 object-contain"
          />
          <span className="font-heading font-bold text-sm md:text-lg tracking-wider text-white">ARB TREINAMENTOS</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-data text-[11px] uppercase tracking-widest text-[#ADB5BD]">
          <a href="#metodo" className="hover:text-white transition-colors hover:-translate-y-[1px]">O Método</a>
          <a href="#conteudo" className="hover:text-white transition-colors hover:-translate-y-[1px]">Conteúdo</a>
          <a href="#mentoria" className="hover:text-white transition-colors hover:-translate-y-[1px]">A Mentoria</a>
        </div>

        <a 
          href="#captura"
          className="bg-[#D00000] text-white px-5 py-2 font-heading font-bold uppercase tracking-wider text-xs rounded-full magnetic-btn flex items-center gap-2"
        >
          <span>Garantir Vaga</span>
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </a>
      </nav>
    </div>
  );
}
