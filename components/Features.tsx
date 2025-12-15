import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1C3C50] mb-4">
          Plataforma pensada para você <br/>
          <span className="text-page-navy">vender mais no Whatsapp</span>
        </h2>
        <p className="text-gray-500 text-lg">Escolha a melhor opção para sua operação</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Module 1 */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-5 bg-gray-200 rounded-full p-0.5">
                    <div className="w-4 h-4 bg-page-navy rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Módulo 1: Plataforma de atendimento</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#1C3C50] mb-8 pr-10">Centralize seus atendimentos em uma única plataforma</h3>
            
            <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-4 flex-grow flex flex-col gap-4">
                {/* Chat Item 1 */}
                <div className="flex gap-4 p-3 bg-white hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border-l-4 border-transparent hover:border-page-navy">
                   <div className="relative">
                     <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                     <div className="absolute bottom-0 right-0 w-3 h-3 bg-page-navy rounded-full border-2 border-white"></div>
                   </div>
                   <div>
                       <div className="font-bold text-gray-800">Lucas Araújo</div>
                       <div className="text-sm text-gray-500 flex items-center gap-1">
                          <span className="rotate-180">↩</span> Como posso te ajudar...
                       </div>
                   </div>
                </div>
                {/* Chat Item 2 */}
                <div className="flex gap-4 p-3 bg-white hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border-l-4 border-transparent hover:border-page-navy">
                   <div className="relative">
                     <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                     <div className="absolute bottom-0 right-0 w-3 h-3 bg-page-navy rounded-full border-2 border-white"></div>
                   </div>
                   <div className="flex-grow">
                       <div className="flex justify-between">
                         <div className="font-bold text-gray-800">Gilberto Souza</div>
                         <div className="bg-teal-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">1</div>
                       </div>
                       <div className="text-sm text-gray-500">
                          Meu email é gilberto.souza...
                       </div>
                   </div>
                </div>
                {/* Chat Item 3 */}
                <div className="flex gap-4 p-3 bg-white hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border-l-4 border-transparent hover:border-page-navy">
                   <div className="relative">
                     <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                     <div className="absolute bottom-0 right-0 w-3 h-3 bg-page-navy rounded-full border-2 border-white"></div>
                   </div>
                   <div className="flex-grow">
                       <div className="flex justify-between">
                          <div className="font-bold text-gray-800">Rafa Soares</div>
                          <div className="bg-teal-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">3</div>
                       </div>
                       <div className="text-sm text-gray-500 truncate">
                          Tenho um dúvida sobre a...
                       </div>
                   </div>
                </div>
                {/* Chat Item 4 */}
                 <div className="flex gap-4 p-3 bg-white hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border-l-4 border-transparent hover:border-page-navy">
                   <div className="relative">
                     <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                     <div className="absolute bottom-0 right-0 w-3 h-3 bg-page-navy rounded-full border-2 border-white"></div>
                   </div>
                   <div>
                       <div className="font-bold text-gray-800">Leticia Moreira</div>
                       <div className="text-sm text-gray-500 flex items-center gap-1">
                          <span className="rotate-180">↩</span> Qual é a sua dúvida?
                       </div>
                   </div>
                </div>
            </div>
        </div>

        {/* Module 2 */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-5 bg-gray-200 rounded-full p-0.5">
                    <div className="w-4 h-4 bg-page-navy rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Módulo 2: Chatbot de qualificação</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#1C3C50] mb-8 pr-10">Qualifique seus leads de forma automática</h3>
            
            <div className="bg-blue-50/50 rounded-xl overflow-hidden flex flex-col flex-grow relative">
                {/* Chat Header */}
                <div className="bg-[#0084FF] p-4 text-white flex items-center gap-4">
                    <div className="relative">
                         <img src="https://picsum.photos/100/100" className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar"/>
                         <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-page-navy rounded-full border border-[#0084FF]"></div>
                    </div>
                    <div>
                        <div className="font-bold text-sm">Ana da IA Humanizada</div>
                        <div className="text-xs opacity-80">Online agora</div>
                    </div>
                </div>
                
                {/* Chat Area */}
                <div className="p-4 space-y-4 flex-grow bg-slate-100 bg-opacity-50" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
                     {/* Bot Bubble 1 */}
                     <div className="flex gap-2">
                        <div className="bg-gray-200 p-3 rounded-lg rounded-tl-none text-xs text-transparent w-32 h-8 animate-pulse"></div>
                     </div>
                     {/* User Bubble */}
                     <div className="flex justify-end">
                        <div className="bg-[#0084FF] p-3 rounded-lg rounded-tr-none text-xs text-transparent w-40 h-16 animate-pulse opacity-20"></div>
                     </div>
                      {/* Bot Bubble 2 */}
                     <div className="flex gap-2">
                         <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-gray-600 max-w-[80%]">
                           Olá, boa tarde, tudo bem?
                        </div>
                     </div>
                     <div className="flex gap-2">
                         <div className="w-8 h-8 opacity-0 flex-shrink-0"></div>
                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-gray-600 max-w-[80%]">
                           Como posso te ajudar hoje?
                        </div>
                     </div>
                </div>

                {/* Simulated Input */}
                 <div className="p-3 bg-white border-t border-gray-200">
                    <div className="bg-white shadow-lg rounded-xl p-3 border border-gray-100">
                       <p className="text-sm font-bold text-gray-800 mb-1">Quer solicitar uma <span className="font-black">Demonstração</span> da <span className="font-black">Plataforma</span>?</p>
                       <div className="flex gap-2 mt-2">
                          <button className="bg-blue-500 text-white text-xs px-3 py-1.5 rounded font-bold">Sim</button>
                          <button className="bg-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded font-bold">Não</button>
                       </div>
                    </div>
                 </div>

                 {/* Absolute Floating Bubble */}
                  <div className="absolute bottom-20 right-4 z-10">
                     <div className="relative">
                         <img src="https://picsum.photos/101/101" className="w-12 h-12 rounded-full border-4 border-white shadow-lg" alt="User" />
                         <div className="absolute bottom-0 right-0 w-3 h-3 bg-page-navy rounded-full border-2 border-white"></div>
                     </div>
                  </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Features;