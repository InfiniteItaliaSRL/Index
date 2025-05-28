import React, { useState } from 'react';
import { materials } from '../../constants';
import { MaterialType } from '../../types';
import MaterialIcon from '../ui/MaterialIcon';
import { CheckCircle } from 'lucide-react';

const MaterialsSection: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<string>(materials[0].id);

  const handleMaterialClick = (id: string) => {
    setActiveMaterial(id);
  };

  const selectedMaterial = materials.find((m) => m.id === activeMaterial) || materials[0];

  return (
    <section id="materials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recycled <span className="text-emerald-600">Materials</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We specialize in processing and exporting a variety of high-quality recycled materials 
            that meet international standards and contribute to global sustainability efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Materials</h3>
                <p className="text-gray-600 mb-6">
                  Select a material to learn about our processing methods and export specifications.
                </p>
                <ul className="space-y-2">
                  {materials.map((material) => (
                    <li key={material.id}>
                      <button
                        onClick={() => handleMaterialClick(material.id)}
                        className={`w-full text-left p-3 rounded-md flex items-center transition-colors ${
                          activeMaterial === material.id
                            ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <MaterialIcon name={material.icon} active={activeMaterial === material.id} />
                        <span className="ml-3 font-medium">{material.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 relative">
                  <div className="absolute inset-0 bg-emerald-900/30 flex items-center justify-center">
                    <MaterialIcon name={selectedMaterial.icon} size={80} active={true} white={true} />
                  </div>
                  <img
                    src={`https://images.pexels.com/photos/${
                      selectedMaterial.id === 'paper'
                        ? '4498362'
                        : selectedMaterial.id === 'rubber'
                        ? '4506532'
                        : selectedMaterial.id === 'metals'
                        ? '5622938'
                        : '1459826' // organic
                    }/pexels-photo-${
                      selectedMaterial.id === 'paper'
                        ? '4498362'
                        : selectedMaterial.id === 'rubber'
                        ? '4506532'
                        : selectedMaterial.id === 'metals'
                        ? '5622938'
                        : '1459826' // organic
                    }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={selectedMaterial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                    <MaterialIcon name={selectedMaterial.icon} active={true} />
                    <span className="ml-2">{selectedMaterial.name}</span>
                  </h3>
                  <p className="text-gray-600 mb-6">{selectedMaterial.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-3">Environmental Benefits</h4>
                  <ul className="space-y-2 mb-auto">
                    {selectedMaterial.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded transition-colors font-medium"
                    >
                      Request Specifications
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;