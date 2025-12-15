import React from 'react';
import { ArrowRight, MessageCircle, Check, X } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 pb-16 md:pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
      
      {/* Text Content */}
      <div className="flex flex-col gap-6 pt-8 lg:pt-16 items-center lg:items-start text-center lg:text-left max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C3C50] leading-tight">
          Inteligência artificial humanizada que converte seus leads melhor do que qualquer humano.
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
          Focada em disponibilizar todas as soluções que seu negócio precisa para aumentar a eficiência e conversão por meio de Inteligência Artificial de última geração.
        </p>
        
        <div className="flex flex-col gap-4 mt-4 items-center lg:items-start w-full">
          <button className="bg-page-navy hover:bg-page-darknavy transition-colors text-white text-lg font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 w-full md:w-fit shadow-lg shadow-blue-200">
            Ver demonstração
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Visual Mockup - Dark UI */}
      <div className="relative w-full max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0 flex-shrink-0">
         
         {/* Floating Stats Cards */}
         <div className="absolute -top-6 -left-2 z-20 bg-[#1e293b] p-4 rounded-2xl shadow-2xl border border-slate-700 animate-bounce-slow">
            <div className="text-white font-bold text-2xl">+140</div>
            <div className="text-slate-400 text-[10px] font-semibold tracking-wider uppercase">Novos Leads</div>
         </div>

         <div className="absolute top-20 -right-2 z-20 bg-[#1e293b] p-4 rounded-2xl shadow-2xl border border-slate-700 animate-bounce-slow" style={{animationDelay: '1s'}}>
            <div className="text-white font-bold text-2xl">+35</div>
            <div className="text-slate-400 text-[10px] font-semibold tracking-wider uppercase">Agendamentos</div>
         </div>

         {/* Main Dark Phone/Card UI */}
         <div className="bg-[#0f172a] rounded-[2.5rem] p-6 pt-12 pb-8 shadow-2xl border-[6px] border-[#1e293b] relative overflow-hidden">
            {/* Background Gradient Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1e293b] to-[#020617] opacity-100 z-0"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-10 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
               
               {/* Date & Time */}
               <div className="text-center mb-10 w-full">
                  <h2 className="text-6xl font-bold text-white tracking-tighter drop-shadow-lg">22:49</h2>
               </div>

               {/* Notifications Header */}
               <div className="w-full flex justify-between items-center px-1 mb-4">
                  <span className="text-slate-200 font-medium text-sm">Notificações</span>
                  <button className="text-slate-500 hover:text-white transition-colors"><X size={16}/></button>
               </div>

               {/* Notification List */}
               <div className="w-full space-y-3">
                  
                  {/* Notification Card 1 */}
                  <div className="bg-[#1e293b]/80 backdrop-blur-md rounded-2xl p-4 border border-slate-700 shadow-lg flex gap-3 items-start transform transition-transform hover:scale-[1.02]">
                     <div className="bg-blue-500 p-2 rounded-xl flex-shrink-0 relative">
                        <Check className="w-5 h-5 text-white" />
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-[#1e293b]">7</div>
                     </div>
                     <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-0.5">
                           <h4 className="text-white font-semibold text-sm truncate pr-2">Nova reunião agendada!</h4>
                           <span className="text-[10px] text-slate-400 whitespace-nowrap">agora</span>
                        </div>
                        <p className="text-slate-300 text-xs leading-snug">Um novo cliente agendou uma reunião.</p>
                     </div>
                  </div>

                  {/* Notification Card 2 */}
                  <div className="bg-[#1e293b]/80 backdrop-blur-md rounded-2xl p-4 border border-slate-700 shadow-lg flex gap-3 items-start transform transition-transform hover:scale-[1.02]">
                     <div className="bg-[#25D366] p-2 rounded-xl flex-shrink-0 relative">
                        <MessageCircle className="w-5 h-5 text-white" />
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-[#1e293b]">22</div>
                     </div>
                     <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-0.5">
                           <h4 className="text-white font-semibold text-sm truncate pr-2">Mensagem do WhatsApp</h4>
                           <span className="text-[10px] text-slate-400 whitespace-nowrap">agora</span>
                        </div>
                        <p className="text-slate-300 text-xs leading-snug">Certo, pode confirmar minha compra</p>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;