import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1C3C50] mb-4">
          Escolha o plano ideal
        </h2>
        <p className="text-gray-500 text-lg">
          Soluções escaláveis para o tamanho do seu negócio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Starter Plan */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <h3 className="text-2xl font-bold text-page-navy mb-6">Starter</h3>
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
            <div className="mb-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">SETUP (ÚNICO)</p>
                <p className="text-2xl font-bold text-gray-700">R$ 497</p>
            </div>
            <div className="w-full h-px bg-gray-200 my-4"></div>
            <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">MENSALIDADE</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-page-navy">R$ 297</span>
                    <span className="text-gray-500">/mês</span>
                </div>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">1 Agente de IA (Base própria)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Atendimento 24/7 (WhatsApp/Site)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Histórico de conversas</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Foco: Tira-dúvidas (Nível 1)</span>
            </li>
          </ul>

          <div className="mt-auto">
            <button className="w-full bg-page-navy hover:bg-page-darknavy text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-100">
                Falar com consultor
            </button>
          </div>
        </div>

        {/* Plus Plan - Highlighted */}
        <div className="bg-white rounded-3xl p-8 border-2 border-page-navy shadow-xl relative flex flex-col">
          <h3 className="text-2xl font-bold text-page-navy mb-6">Plus</h3>
          <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100">
            <div className="mb-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">SETUP (ÚNICO)</p>
                <p className="text-2xl font-bold text-gray-700">R$ 997</p>
            </div>
            <div className="w-full h-px bg-blue-200 my-4"></div>
            <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">MENSALIDADE</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-page-navy">R$ 497</span>
                    <span className="text-gray-500">/mês</span>
                </div>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Tudo do Start</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Agente Vendedor Persuasivo</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Agendamento automático (Agenda)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Envio de Leads Qualificados</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Foco: Pré-vendas e Conversão</span>
            </li>
          </ul>

          <div className="mt-auto">
            <button className="w-full bg-page-navy hover:bg-page-darknavy text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-200">
                Falar com consultor
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
          <h3 className="text-2xl font-bold text-page-navy mb-6">Enterprise</h3>
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
            <div className="mb-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">SETUP (ÚNICO)</p>
                <p className="text-2xl font-bold text-gray-700">R$ 2.000</p>
            </div>
            <div className="w-full h-px bg-gray-200 my-4"></div>
            <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">MENSALIDADE</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-page-navy">R$ 997</span>
                    <span className="text-gray-500">/mês</span>
                </div>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Múltiplos Agentes Especializados</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Integração profunda (CRM/ERPs)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Automação de Processos (BPA)</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-page-navy mt-0.5 flex-shrink-0" strokeWidth={3} />
              <span className="text-gray-700 font-medium">Dashboard Avançado</span>
            </li>
          </ul>

          <div className="mt-auto">
            <button className="w-full bg-page-navy hover:bg-page-darknavy text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-100">
                Falar com consultor
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;