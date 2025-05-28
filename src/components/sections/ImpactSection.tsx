import React from 'react';
import { stats } from '../../constants';
import { Recycle, Globe as GlobeEurope, Users, LeafyGreen } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Recycle: <Recycle size={36} className="text-emerald-500" />,
    GlobeEurope: <GlobeEurope size={36} className="text-emerald-500" />,
    Handshake: <Users size={36} className="text-emerald-500" />,
    LeafyGreen: <LeafyGreen size={36} className="text-emerald-500" />,
  };

  return (
    <section id="impact" className="py-20 bg-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Global <span className="text-emerald-300">Impact</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-emerald-100">
            Through our recycling and export operations, we're making a significant
            environmental impact worldwide, reducing waste and conserving natural resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-emerald-700 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                {iconMap[stat.icon]}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
              <p className="text-emerald-200">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Sustainability Commitment</h3>
              <p className="text-emerald-100 mb-6">
                Our dedication to sustainability extends beyond recycling. We continuously
                innovate to reduce our carbon footprint, enhance material recovery, and
                promote circular economy principles worldwide.
              </p>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-emerald-200">
                        Carbon Footprint Reduction
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-emerald-200">
                        78%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-900">
                    <div style={{ width: "78%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-400"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-emerald-200">
                        Material Recovery Rate
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-emerald-200">
                        92%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-900">
                    <div style={{ width: "92%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-400"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-emerald-200">
                        Renewable Energy Usage
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-emerald-200">
                        65%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-900">
                    <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-400"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-0">
              <img 
                src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Sustainability impact" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;