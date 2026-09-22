'use client';
import React, { useState } from 'react';

const CostEstimation = () => {
  const constructionTypes = [
    {
      name: 'Basic',
      price: 1820,
      features: [
        'Standard quality cement & bricks',
        'Basic tiles & sanitaryware',
        'Regular electrical fittings'
      ]
    },
    {
      name: 'Standard',
      price: 2150,
      features: [
        'Birla/Bharathi cement',
        'Vitrified tiles (2x2)',
        'Hindware/Somany sanitaryware'
      ]
    },
    {
      name: 'Premium',
      price: 2650,
      features: [
        'ACC UltraTech cement',
        'Marble/imported tiles',
        'Jaquar/Grohe fittings'
      ]
    }
  ];

  const [selectedType, setSelectedType] = useState(0);
  const [area, setArea] = useState(1000);
  const [floors, setFloors] = useState(1);
  const [location, setLocation] = useState('Bangalore');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const cities = ['Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai'];

  const calculateTotal = () => {
    const baseCost = area * constructionTypes[selectedType].price;
    const floorMultiplier = floors > 1 ? 0.9 + (floors * 0.1) : 1;
    return (baseCost * floorMultiplier).toLocaleString('en-IN');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white my-[80px]">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Estimation for Your Dream Home</h2>
      
      {/* Construction Type Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {constructionTypes.map((type, index) => (
          <div 
            key={type.name}
            onClick={() => setSelectedType(index)}
            className={`p-4 rounded-lg cursor-pointer transition-all border-2 ${
              selectedType === index 
                ? 'border-[#E76969] bg-[#F6DCDC]' 
                : 'border-transparent hover:border-[#F6DCDC] bg-white'
            }`}
          >
            <h3 className="font-semibold text-lg text-gray-900">{type.name}</h3>
            <p className="text-[#E76969] font-bold my-2">₹{type.price}/sq.ft (Inc GST)</p>
            <ul className="text-sm text-gray-700 list-disc pl-5">
              {type.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <div className="bg-[#F6DCDC] p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Plot Area (sq.ft)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              onFocus={() => setFocusedInput('area')}
              onBlur={() => setFocusedInput(null)}
              className={`w-full p-2 border-2 rounded-md bg-white ${
                focusedInput === 'area' ? 'border-[#E76969]' : 'border-[#F6DCDC]'
              }`}
              min="500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Floors</label>
            <select
              value={floors}
              onChange={(e) => setFloors(Number(e.target.value))}
              onFocus={() => setFocusedInput('floors')}
              onBlur={() => setFocusedInput(null)}
              className={`w-full p-2 border-2 rounded-md bg-white ${
                focusedInput === 'floors' ? 'border-[#E76969]' : 'border-[#F6DCDC]'
              }`}
            >
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num} (G+{num-1})</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onFocus={() => setFocusedInput('location')}
              onBlur={() => setFocusedInput(null)}
              className={`w-full p-2 border-2 rounded-md bg-white ${
                focusedInput === 'location' ? 'border-[#E76969]' : 'border-[#F6DCDC]'
              }`}
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="bg-[#F6DCDC] p-6 rounded-lg border-2 border-[#E76969] mb-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">Estimated Construction Cost</h3>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gray-700">{constructionTypes[selectedType].name} Quality</p>
            <p className="text-3xl font-bold text-gray-900">₹{calculateTotal()}</p>
            <p className="text-sm text-gray-600 mt-1">For {area} sq.ft | {floors} floor(s)</p>
          </div>
          <button 
            className="bg-[#E76969] hover:bg-[#d45959] text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            Get Detailed Quote
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-xs text-gray-600">
        <p>Note: Prices are indicative. Final cost may vary based on design complexity, material availability, and local regulations. GST included in all prices.</p>
      </div>
    </div>
  );
};

export default CostEstimation;