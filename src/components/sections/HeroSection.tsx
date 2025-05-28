import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Global Leaders in{' '}
            <span className="text-emerald-400">Recycled Materials</span> Export
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-delay">
            Infinite Italia S.R.L. transforms waste into valuable resources,
            exporting recycled paper, rubber, metals, and organic materials to
            markets worldwide. Join us in building a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
            <a
              href="#materials"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-medium transition-colors"
            >
              Explore Materials
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-emerald-800 rounded-md font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;