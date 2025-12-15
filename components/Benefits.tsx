import React from 'react';
import { TrendingUp, Wallet, Clock } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C3C50] max-w-3xl mx-auto leading-tight">
          Escale sua operação com <br />
          <span className="text-page-navy">inteligência</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Benefit 1 */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-page-navy group-hover:bg-page-navy group-hover:text-white transition-colors">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-xl font-bold text-[#1C3C50] mb-4">Aumento de Eficiência</h3>
          <p className="text-gray-600 leading-relaxed">
            Elimine gargalos no atendimento. A IA responde instantaneamente a centenas de leads simultâneos, garantindo que ninguém fique esperando.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-page-navy group-hover:bg-page-navy group-hover:text-white transition-colors">
            <Wallet size={28} />
          </div>
          <h3 className="text-xl font-bold text-[#1C3C50] mb-4">Redução de Custos</h3>
          <p className="text-gray-600 leading-relaxed">
            Reduza drasticamente o custo operacional (CAC). Substitua grandes equipes de pré-vendas por uma inteligência que qualifica e agenda 24h por dia.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-page-navy group-hover:bg-page-navy group-hover:text-white transition-colors">
            <Clock size={28} />
          </div>
          <h3 className="text-xl font-bold text-[#1C3C50] mb-4">Atendimento 24 Horas</h3>
          <p className="text-gray-600 leading-relaxed">
            Sua empresa nunca mais fecha. Capture e qualifique leads à noite, nos finais de semana e feriados, aproveitando cada oportunidade de venda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;