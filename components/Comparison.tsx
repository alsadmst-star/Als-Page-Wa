import React from 'react';
import { X, Check } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C3C50] max-w-2xl mx-auto leading-tight">
          Automatize seu WhatsApp e <br/>
          <span className="text-page-navy">atenda apenas leads qualificados</span>
        </h2>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        
        {/* Left Side - Other Solutions */}
        <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
           <h3 className="text-2xl font-bold text-page-navy mb-8 text-center">Outros</h3>
           <ul className="space-y-8">
             <li className="flex items-start gap-4">
               <div className="mt-1 w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center flex-shrink-0 text-red-500">
                 <X size={14} strokeWidth={3} />
               </div>
               <span className="text-[#1C3C50] font-medium text-lg">Tom robotizado</span>
             </li>
             <li className="flex items-start gap-4">
               <div className="mt-1 w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center flex-shrink-0 text-red-500">
                 <X size={14} strokeWidth={3} />
               </div>
               <span className="text-[#1C3C50] font-medium text-lg">Tratam todos os leads da mesma forma</span>
             </li>
             <li className="flex items-start gap-4">
               <div className="mt-1 w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center flex-shrink-0 text-red-500">
                 <X size={14} strokeWidth={3} />
               </div>
               <span className="text-[#1C3C50] font-medium text-lg">Respondem com frases prontas e engessadas</span>
             </li>
             <li className="flex items-start gap-4">
               <div className="mt-1 w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center flex-shrink-0 text-red-500">
                 <X size={14} strokeWidth={3} />
               </div>
               <span className="text-[#1C3C50] font-medium text-lg">Apenas tiram dúvidas</span>
             </li>
           </ul>
        </div>

        {/* Right Side - IA Humanizada */}
        <div className="flex-1 p-8 md:p-12 bg-[#F0F7FF]">
           <div className="flex items-center justify-center gap-2 mb-8">
              <h3 className="text-2xl font-bold text-page-navy">IA Humanizada</h3>
           </div>
           <ul className="space-y-8">
             <li className="flex items-start gap-4">
               <div className="mt-1 w-6 h-6 rounded-full border-2 border-page-navy flex items-center justify-center flex-shrink-0 text-page-navy bg-white">
                 <Check size={14} strokeWidth={3} />
               </div>
               <span className="text-[#1C3C50] font-medium text-lg">Conversa como um humano, com naturalidade</span>
             </li>
             <li className="flex items-start gap-4">
               <div className="mt-1 w-6 h-6 rounded-full border-2 border-page-navy flex items-center justify-center flex-shrink-0 text-page-navy bg-white">
                 <Check size={14} strokeWidth={3} />
               </div>
               <span className="text-[#1C3C50] font-medium text-lg">Entende áudio, imagens e documentos</span>
             </li>
             <li className="flex items-start gap-4">
               <div className="mt-1 w-6 h-6 rounded-full border-2 border-page-navy flex items-center justify-center flex-shrink-0 text-page-navy bg-white">
                 <Check size={14} strokeWidth={3} />
               </div>
               <span className="text-[#1C3C50] font-medium text-lg">Conduz a conversa com estratégia comercial</span>
             </li>
             <li className="flex items-start gap-4">
               <div className="mt-1 w-6 h-6 rounded-full border-2 border-page-navy flex items-center justify-center flex-shrink-0 text-page-navy bg-white">
                 <Check size={14} strokeWidth={3} />
               </div>
               <span className="text-[#1C3C50] font-medium text-lg">Agenda, qualifica, vende e acompanha</span>
             </li>
           </ul>
        </div>

      </div>
    </section>
  );
};

export default Comparison;