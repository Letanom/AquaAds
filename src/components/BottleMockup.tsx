import React from 'react';
import waterImg from '../water.png';

interface BottleMockupProps {
  adText: string;
  logoText: string;
}

const BottleMockup: React.FC<BottleMockupProps> = ({ adText, logoText }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-72 h-[380px] select-none">
        {/* Şişe görseli */}
        <img
          src={waterImg}
          alt="Su Şişesi"
          className="w-full h-full object-contain drop-shadow-xl"
          draggable={false}
        />
        {/* Etiket üzerine yazılar */}
        <div className="absolute left-1/2 top-[38%] w-[70%] -translate-x-1/2 text-center pointer-events-none">
          <div className="text-base font-bold text-gray-800 bg-white/80 rounded px-1 truncate shadow-sm">
            {logoText}
          </div>
          <div className="text-sm font-semibold text-primary-700 bg-white/70 rounded px-1 mt-1 truncate shadow-sm">
            {adText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottleMockup;