import React from 'react';
import { Newspaper, CircleDashed, Cog, Sprout } from 'lucide-react';

interface MaterialIconProps {
  name: string;
  active?: boolean;
  size?: number;
  white?: boolean;
}

const MaterialIcon: React.FC<MaterialIconProps> = ({
  name,
  active = false,
  size = 24,
  white = false,
}) => {
  const iconClass = white 
    ? 'text-white' 
    : active 
      ? 'text-emerald-600' 
      : 'text-gray-500';

  const iconMap: Record<string, React.ReactNode> = {
    Newspaper: <Newspaper size={size} className={iconClass} />,
    CircleDashed: <CircleDashed size={size} className={iconClass} />,
    Cog: <Cog size={size} className={iconClass} />,
    Sprout: <Sprout size={size} className={iconClass} />,
  };

  return <>{iconMap[name] || null}</>;
};

export default MaterialIcon;