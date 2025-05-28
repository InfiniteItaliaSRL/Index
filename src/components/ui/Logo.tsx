import React from 'react';
import { Recycle } from 'lucide-react';

interface LogoProps {
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ dark = false }) => {
  return (
    <div className="flex items-center">
      <Recycle
        size={28}
        className={`mr-2 ${dark ? 'text-emerald-700' : 'text-white'}`}
      />
      <div className="flex flex-col">
        <span
          className={`font-bold text-lg leading-tight ${
            dark ? 'text-gray-800' : 'text-white'
          }`}
        >
          Infinite Italia
        </span>
        <span
          className={`text-xs leading-tight ${
            dark ? 'text-gray-600' : 'text-gray-200'
          }`}
        >
          S.R.L.
        </span>
      </div>
    </div>
  );
};

export default Logo;