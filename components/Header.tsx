import React from 'react';
import { Star } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 max-w-7xl mx-auto flex justify-start items-center">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#1C3C50] tracking-tight">IA Humanizada</span>
      </div>
    </header>
  );
};

export default Header;