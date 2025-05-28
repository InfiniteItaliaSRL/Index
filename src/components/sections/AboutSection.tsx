import React from 'react';
import { Recycle, Truck, Globe as GlobeEurope, Scale } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-emerald-600">Infinite Italia</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Founded with a vision of sustainable global trade, we specialize in processing and
            exporting high-quality recycled materials to markets worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission & Vision
            </h3>
            <p className="text-gray-600 mb-6">
              At Infinite Italia S.R.L., we're committed to transforming waste materials
              into valuable resources while reducing environmental impact globally. Our
              comprehensive approach combines innovative processing techniques with
              responsible trading practices.
            </p>
            <p className="text-gray-600 mb-8">
              By connecting waste generators with manufacturers worldwide, we create
              sustainable supply chains that benefit both business and the environment,
              contributing to a circular economy on a global scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Recycle size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Material Recovery</h4>
                  <p className="text-sm text-gray-600">
                    Advanced processing for maximum resource recovery
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Truck size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Global Distribution</h4>
                  <p className="text-sm text-gray-600">
                    Efficient logistics for worldwide material delivery
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <GlobeEurope size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">International Network</h4>
                  <p className="text-sm text-gray-600">
                    Partnerships across 45+ countries worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Scale size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">
                    Rigorous standards for all exported materials
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <img
              src="https://images.pexels.com/photos/6985132/pexels-photo-6985132.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Recycling facility"
              className="rounded-lg shadow-xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-8 -left-8 hidden lg:block">
              <div className="bg-emerald-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
                <h4 className="font-semibold text-xl mb-2">Industry Leaders</h4>
                <p className="text-sm">
                  With over 20 years of experience, we've established ourselves as
                  pioneers in the global recycled materials market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;