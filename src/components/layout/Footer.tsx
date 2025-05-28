import React from 'react';
import { footerLinks, socialLinks } from '../../constants';
import Logo from '../ui/Logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import SocialIcon from '../ui/SocialIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo dark={false} />
            <p className="mt-4 text-gray-400 max-w-md">
              Infinite Italia S.R.L. specializes in the recycling and global export of paper, rubber, metals, and organic waste, contributing to a more sustainable future through responsible resource management.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <Mail size={16} className="text-emerald-500 mr-2" />
                <a href="mailto:info@infiniteitalia.com" className="text-gray-400 hover:text-white transition-colors">
                  info@infiniteitalia.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-emerald-500 mr-2" />
                <a href="tel:+390123456789" className="text-gray-400 hover:text-white transition-colors">
                  +39 0123 456 789
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-emerald-500 mr-2 mt-1" />
                <address className="text-gray-400 not-italic">
                  Via Roma 123, 20121 Milan, Italy
                </address>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.id}>
              <h3 className="text-lg font-semibold mb-4">{section.category}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Infinite Italia S.R.L. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;