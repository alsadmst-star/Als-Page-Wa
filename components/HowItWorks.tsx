import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Text */}
      <div className="md:w-1/3 text-center md:text-right">
         <h2 className="text-4xl md:text-5xl font-bold text-[#1C3C50] mb-4">Na prática <br/> é assim:</h2>
         <p className="text-gray-400 text-xl font-medium">Fazemos todo esse processo para você</p>
      </div>

      {/* Right Timeline */}
      <div className="md:w-2/3 relative pl-8 border-l-2 border-gray-100 md:border-none">
         {/* Vertical line connecting steps */}
         <div className="absolute left-8 top-4 bottom-12 w-0.5 bg-blue-100 hidden md:block"></div>
         
         <div className="space-y-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 relative">
               <div className="flex-shrink-0 w-8 h-8 bg-page-navy rounded-full flex items-center justify-center text-white font-bold z-10">1</div>
               <div>
                  <h3 className="text-xl font-bold text-[#1C3C50] mb-2">Potencial cliente chama sua empresa no WhatsApp</h3>
                  <p className="text-gray-600">Alguém viu seu anúncio, clicou e chegou direto no seu WhatsApp Business. Até aqui nada muda do processo atual</p>
               </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 relative">
               <div className="flex-shrink-0 w-8 h-8 bg-page-navy rounded-full flex items-center justify-center text-white font-bold z-10">2</div>
               <div>
                  <h3 className="text-xl font-bold text-[#1C3C50] mb-2">Nós configuramos tudo para você</h3>
                  <p className="text-gray-600">Você escolhe os critérios de qualificação: orçamento, tipo de negócio, localização. <span className="text-page-navy font-semibold"></span></p>
               </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 relative">
               <div className="flex-shrink-0 w-8 h-8 bg-page-navy rounded-full flex items-center justify-center text-white font-bold z-10">3</div>
               <div>
                  <h3 className="text-xl font-bold text-[#1C3C50] mb-2">A IA Humanizada faz as perguntas como se fosse você</h3>
                  <p className="text-gray-600">A IA Humanizada conversa naturalmente, faz as perguntas certas e responde dúvidas <span className="text-page-navy font-semibold">usando o conhecimento que você treina.</span></p>
               </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 relative">
               <div className="flex-shrink-0 w-8 h-8 bg-page-navy rounded-full flex items-center justify-center text-white font-bold z-10">4</div>
               <div>
                  <h3 className="text-xl font-bold text-[#1C3C50] mb-2">Você assume quando o lead estiver qualificado</h3>
                  <p className="text-gray-600">Você só recebe lead que vale a pena. Seu tempo é focado apenas em <span className="text-page-navy font-semibold">oportunidades reais de venda.</span></p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default HowItWorks;