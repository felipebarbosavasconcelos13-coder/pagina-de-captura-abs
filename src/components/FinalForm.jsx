import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, ArrowRight, User, Mail, Phone, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FinalForm() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.final-content', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 1
      });
    }, containerRef);
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
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      const maskedValue = maskWhatsApp(value);
      if (value.length > 15 && value.replace(/\D/g, '').length > 11) return;
      setFormData(prev => ({
        ...prev,
        [name]: maskedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
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
      // Redirecionar mesmo com erro para não frustrar o usuário
      window.location.href = 'https://alextadeucursos.com.br/lp_obrg_lancamento11_05';
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={containerRef} className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D00000]/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="final-content">
            <h2 className="font-heading font-black text-5xl md:text-8xl text-white mb-8 uppercase leading-[0.9] italic tracking-tighter">
              Sua jornada <br/>
              <span className="text-[#D00000] font-drama lowercase">começa agora.</span>
            </h2>
            <p className="text-[#ADB5BD] text-xl font-body font-light mb-12 max-w-md leading-relaxed italic">
              Não deixe para amanhã o diagnóstico que pode transformar o faturamento da sua oficina hoje.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/60">
                <ShieldCheck className="text-[#D00000]" size={20} />
                <span className="font-data text-xs tracking-widest uppercase">Garantia de Conteúdo Prático</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <ShieldCheck className="text-[#D00000]" size={20} />
                <span className="font-data text-xs tracking-widest uppercase">Acesso Gratuito e Exclusivo</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0c] border border-[#222] p-10 md:p-14 rounded-[4rem] relative shadow-2xl">
            <div className="absolute -top-6 -right-6 bg-[#D00000] text-white p-4 rounded-3xl shadow-xl rotate-12">
              <Wrench size={32} />
            </div>
            
            <h3 className="font-heading font-black text-2xl text-white mb-10 uppercase tracking-widest text-center">
              Garanta sua vaga gratuita
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative group">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#D00000] transition-colors" size={20} />
                <input 
                  type="text" 
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu Nome" 
                  className="w-full bg-black/50 border border-[#222] rounded-3xl py-6 pl-16 pr-6 text-white font-body focus:border-[#D00000] outline-none transition-all"
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#D00000] transition-colors" size={20} />
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu melhor e-mail" 
                  className="w-full bg-black/50 border border-[#222] rounded-3xl py-6 pl-16 pr-6 text-white font-body focus:border-[#D00000] outline-none transition-all"
                />
              </div>

              <div className="relative group">
                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#D00000] transition-colors" size={20} />
                <input 
                  type="tel" 
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Seu WhatsApp" 
                  className="w-full bg-black/50 border border-[#222] rounded-3xl py-6 pl-16 pr-6 text-white font-body focus:border-[#D00000] outline-none transition-all"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full group relative flex items-center justify-center gap-4 bg-[#D00000] text-white py-8 rounded-3xl font-heading font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_20px_60px_-10px_rgba(208,0,0,0.5)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span>{isSubmitting ? 'ENVIANDO...' : 'Quero entrar para a imersão'}</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>

              <p className="text-center text-white/30 text-[10px] font-data tracking-widest uppercase pt-4">
                🔒 Seus dados estão seguros conosco
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


