import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const maskWhatsApp = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength <= 2) return phoneNumber;
    if (phoneNumberLength <= 6) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    if (phoneNumberLength <= 10) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    if (id === 'whatsapp') {
      const maskedValue = maskWhatsApp(value);
      if (value.length > 15 && value.replace(/\D/g, '').length > 11) return; // Limita o tamanho
      setFormData(prev => ({
        ...prev,
        [id]: maskedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validação básica de WhatsApp (DDD + 8 ou 9 dígitos)
    const rawWhatsapp = formData.whatsapp.replace(/\D/g, '');
    if (rawWhatsapp.length < 10 || rawWhatsapp.length > 11) {
      alert('Por favor, insira um número de WhatsApp válido com DDD.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Enviar para o Webhook
      await fetch('https://webhook.veralscastro.com.br/webhook/ABS_novo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // 2. Configurar Camada de Dados (Data Layer) para o GTM
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submission',
        nome: formData.nome,
        email: formData.email,
        whatsapp: formData.whatsapp
      });

      // 3. Redirecionar
      window.location.href = 'https://alextadeucursos.com.br/lp_obrg_lancamento11_05';
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      // Mesmo com erro, redirecionamos para não frustrar o usuário (comportamento comum em LPs)
      window.location.href = 'https://alextadeucursos.com.br/lp_obrg_lancamento11_05';
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex items-start md:items-center pt-[4.5rem] pb-2 md:pt-28 md:pb-12 overflow-hidden bg-black">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture className="w-full h-full">
          <source media="(max-width: 768px)" srcSet="/hero_alex_mobile.webp" />
          <img 
            src="/hero_alex_descktop.webp" 
            alt="Alex Tadeu - Imersão 360"
            className="w-full h-full object-cover opacity-80"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-12 items-center">
        {/* Left Content (Text) */}
        <div className="flex flex-col justify-end h-full mt-1 lg:mt-0">
          <div className="hero-elem font-data text-[#D00000] tracking-widest text-[9px] md:text-sm mb-2 md:mb-6 flex items-center gap-1 md:gap-3">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#D00000] rounded-full animate-pulse shadow-[0_0_10px_#D00000]"></span>
            11, 12 E 13 DE MAIO | EVENTO ONLINE E GRATUITO
          </div>
          
          <h1 className="hero-elem font-heading text-white text-[1.6rem] sm:text-[2rem] leading-[1.1] md:text-6xl lg:text-7xl font-black md:leading-[1.1] uppercase mb-2 md:mb-6 drop-shadow-2xl">
            IMERSÃO 360° EM FREIOS ABS CARRO E MOTO
            <span className="block text-[#D00000] font-drama italic text-[1.4rem] sm:text-[1.6rem] leading-tight md:text-5xl lg:text-6xl mt-1 md:mt-4 normal-case">
              O SERVIÇO QUE MAIS FATURA NA OFICINA MODERNA
            </span>
          </h1>

          <p className="hero-elem font-body text-[#ADB5BD] text-xs md:text-xl max-w-lg mb-4 md:mb-8 leading-relaxed">
            Em 3 dias, você vai aprender como diagnosticar com segurança e transformar serviços complexos em lucro dentro da sua oficina.
          </p>
        </div>

        {/* Right Content (Form) */}
        <div id="captura" className="hero-elem bg-[#0a0a0c]/80 backdrop-blur-xl border border-[#222] rounded-3xl p-4 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D00000]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
          
          <h3 className="font-heading text-base md:text-2xl font-bold text-white mb-1 md:mb-2 relative z-10">
            Garanta sua vaga gratuita agora
          </h3>
          <p className="text-[#ADB5BD] text-[10px] md:text-sm mb-3 md:mb-6 relative z-10">
            Após se inscrever, você será direcionado para o grupo exclusivo no WhatsApp.
          </p>

          <form className="relative z-10 flex flex-col gap-2 md:gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="nome" className="text-[9px] md:text-xs text-[#ADB5BD] font-data tracking-wider">NOME COMPLETO</label>
              <input 
                id="nome"
                required
                type="text" 
                value={formData.nome}
                onChange={handleChange}
                placeholder="Ex: João da Silva"
                className="w-full bg-[#111] border border-[#333] rounded-lg md:rounded-xl px-3 py-1.5 md:px-4 md:py-3 outline-none text-white focus:border-[#D00000] transition-colors text-xs md:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[9px] md:text-xs text-[#ADB5BD] font-data tracking-wider">E-MAIL</label>
              <input 
                id="email"
                required
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: joao@oficina.com"
                className="w-full bg-[#111] border border-[#333] rounded-lg md:rounded-xl px-3 py-1.5 md:px-4 md:py-3 outline-none text-white focus:border-[#D00000] transition-colors text-xs md:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="whatsapp" className="text-[9px] md:text-xs text-[#ADB5BD] font-data tracking-wider">WHATSAPP</label>
              <input 
                id="whatsapp"
                required
                type="tel" 
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="w-full bg-[#111] border border-[#333] rounded-lg md:rounded-xl px-3 py-1.5 md:px-4 md:py-3 outline-none text-white focus:border-[#D00000] transition-colors text-xs md:text-sm"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`mt-1 md:mt-4 w-full group relative inline-flex items-center justify-center gap-3 bg-[#D00000] hover:bg-[#A00000] text-white px-6 py-2.5 md:px-8 md:py-4 rounded-lg md:rounded-xl font-heading font-bold uppercase tracking-widest text-[10px] md:text-sm transition-all shadow-[0_0_20px_-5px_#D00000] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span className="relative z-10 w-full text-center whitespace-normal md:whitespace-nowrap leading-tight">
                {isSubmitting ? 'ENVIANDO...' : 'QUERO PARTICIPAR DO EVENTO GRATUITO'}
              </span>
            </button>
            <p className="text-center text-[9px] md:text-xs text-[#ADB5BD] mt-0.5 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-3 md:h-3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Seus dados estão seguros.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
