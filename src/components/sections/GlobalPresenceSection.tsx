import React from 'react';
import { Globe as GlobeEurope } from 'lucide-react';
import { globalLocations } from '../../constants';

const GlobalPresenceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global <span className="text-emerald-600">Presence</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our extensive network spans across continents, allowing us to connect recycled
            materials with manufacturers worldwide.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <GlobeEurope size={24} className="text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Worldwide Operations</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                With headquarters in Milan, Italy, and operations spanning Europe, Asia, and the
                Americas, we ensure efficient distribution of recycled materials to markets
                where they're needed most.
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-4">Key Export Regions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">Europe</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>Germany</li>
                      <li>France</li>
                      <li>Spain</li>
                      <li>United Kingdom</li>
                      <li>Netherlands</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">Asia</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>China</li>
                      <li>India</li>
                      <li>Japan</li>
                      <li>South Korea</li>
                      <li>Vietnam</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">Americas</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>United States</li>
                      <li>Canada</li>
                      <li>Mexico</li>
                      <li>Brazil</li>
                      <li>Chile</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">Middle East & Africa</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>UAE</li>
                      <li>Saudi Arabia</li>
                      <li>South Africa</li>
                      <li>Egypt</li>
                      <li>Morocco</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <a
                href="#contact"
                className="inline-block px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md transition-colors font-medium"
              >
                Become a Partner
              </a>
            </div>
            
            <div className="relative h-[400px] lg:h-auto">
              <div className="absolute inset-0 bg-emerald-800/10"></div>
              <img
                src="https://images.pexels.com/photos/1269344/pexels-photo-1269344.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Global Map"
                className="w-full h-full object-cover"
              />
              
              {/* Location markers - simplified representation */}
              {globalLocations.map((location) => (
                <div
                  key={location.id}
                  className="absolute w-4 h-4 bg-emerald-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${((location.position.lng + 180) / 360) * 100}%`,
                    top: `${((90 - location.position.lat) / 180) * 100}%`,
                  }}
                >
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white text-gray-800 text-xs font-medium py-1 px-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {location.city}, {location.country}
                  </div>
                  <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;