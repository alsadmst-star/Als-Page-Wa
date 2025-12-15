import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="bg-white py-20 border-t border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Stats Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C3C50]">
              Números que comprovam
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F8FAFC] p-8 rounded-3xl text-center border border-slate-100 hover:shadow-lg transition-shadow group">
              <div className="text-4xl md:text-5xl font-extrabold text-page-navy mb-3 group-hover:scale-110 transition-transform duration-300">+37%</div>
              <p className="text-gray-600 font-medium text-lg leading-tight">de aumento médio na taxa de conversão</p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-3xl text-center border border-slate-100 hover:shadow-lg transition-shadow group">
              <div className="text-4xl md:text-5xl font-extrabold text-page-navy mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <p className="text-gray-600 font-medium text-lg leading-tight">Resposta instantânea</p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-3xl text-center border border-slate-100 hover:shadow-lg transition-shadow group">
              <div className="text-4xl md:text-5xl font-extrabold text-page-navy mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
              <p className="text-gray-600 font-medium text-lg leading-tight">dos atendimentos automatizados com qualidade humana</p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-3xl text-center border border-slate-100 hover:shadow-lg transition-shadow group">
              <div className="text-3xl md:text-5xl font-extrabold text-page-navy mb-3 group-hover:scale-110 transition-transform duration-300">Até 80%</div>
              <p className="text-gray-600 font-medium text-lg leading-tight">de redução de custos com atendimento</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;