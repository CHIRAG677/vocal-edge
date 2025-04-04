import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Hand } from 'lucide-react';

const SignLanguage = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Sign Language Predictor</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
        >
          <Camera className="w-5 h-5" />
          Start Camera
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Camera Feed</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Predictions</h2>
          <div className="space-y-4">
            {['Hello', 'Thank You', 'Please'].map((prediction) => (
              <div
                key={prediction}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <Hand className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="font-medium text-gray-900">{prediction}</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${Math.random() * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent History</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Hand className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-600">Sign #{item}</span>
              </div>
              <span className="text-sm text-gray-500">2m ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignLanguage;