import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'light'
}) => {
  const sizeClasses = {
    sm: {
      name: 'text-lg tracking-tight',
      sub: 'text-[10px]'
    },
    md: {
      name: 'text-2xl sm:text-[26px] tracking-tight leading-none',
      sub: 'text-xs mt-1'
    },
    lg: {
      name: 'text-3xl sm:text-4xl tracking-tight leading-none',
      sub: 'text-sm mt-1.5'
    }
  };

  const currentSize = sizeClasses[size];

  const firstTextColor = theme === 'dark' ? 'text-white' : 'text-slate-950';
  const subTextColor = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className={`font-black ${currentSize.name} flex items-baseline`}>
        <span className={firstTextColor}>Khaterine</span>
        <span className="text-[#00a8ff] ml-1.5">Costilla</span>
      </div>
      <span className={`font-medium ${subTextColor} ${currentSize.sub}`}>
        Diseño Publicitario
      </span>
    </div>
  );
};
