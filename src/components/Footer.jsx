import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] rounded-t-[4rem] text-white pt-24 pb-12 px-6 border-t border-[#222]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24">
        
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://alextadeucursos.com.br/wp-content/uploads/2024/11/logoarb-150x150.png" 
              alt="ARB Treinamentos" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-heading font-black text-2xl tracking-tighter text-white">ARB TREINAMENTOS</span>
          </div>
          <p className="font-body text-[#ADB5BD] max-w-sm">
            Elevando o padrão do diagnóstico automotivo no Brasil. Do achismo à precisão absoluta.
          </p>
          
          <div className="flex items-center gap-3 bg-[#111] px-4 py-2 rounded border border-[#222] mt-4">
            <div className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse shadow-[0_0_10px_#00FF41]"></div>
            <span className="font-data text-[10px] uppercase tracking-widest text-[#ADB5BD]">Sistema Operacional</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 flex-1">
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-lg">Links</h4>
            <a href="#metodo" className="font-body text-[#ADB5BD] hover:text-white transition-colors text-sm">O Método</a>
            <a href="#conteudo" className="font-body text-[#ADB5BD] hover:text-white transition-colors text-sm">O Que Vai Aprender</a>
            <a href="#garantir-vaga" className="font-body text-[#ADB5BD] hover:text-white transition-colors text-sm">Garantir Vaga</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-lg">Legal</h4>
            <a href="#" className="font-body text-[#ADB5BD] hover:text-white transition-colors text-sm">Políticas de Privacidade</a>
            <a href="#" className="font-body text-[#ADB5BD] hover:text-white transition-colors text-sm">Termos de Uso</a>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-data text-xs text-[#ADB5BD]">
          © {new Date().getFullYear()} ARB Treinamentos. Todos os direitos reservados.
        </p>
        <p className="font-data text-xs text-[#ADB5BD]">
          Construído para Performance.
        </p>
      </div>
    </footer>
  );
}
