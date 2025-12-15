import React from 'react';
import { ArrowRight } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <section className="py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1C3C50] mb-4 leading-tight">
          Fale com nossa equipe e <br/>
          <span className="text-page-navy">ative em sua operação</span>
        </h2>
        <div className="mt-10 flex justify-center">
            <button className="bg-page-navy hover:bg-page-darknavy transition-colors text-white text-lg font-bold py-4 px-10 rounded-full flex items-center gap-2 shadow-xl shadow-blue-200 transform hover:scale-105 duration-200">
                Ver demonstração
                <ArrowRight className="w-6 h-6" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;