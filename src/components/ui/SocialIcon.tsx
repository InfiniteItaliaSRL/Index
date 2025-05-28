import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

interface SocialIconProps {
  name: string;
  size?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, size = 20 }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Linkedin: <Linkedin size={size} />,
    Twitter: <Twitter size={size} />,
    Facebook: <Facebook size={size} />,
    Instagram: <Instagram size={size} />,
  };

  return <>{iconMap[name] || null}</>;
};

export default SocialIcon;