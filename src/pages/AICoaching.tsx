import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Book, CheckCircle, Clock } from 'lucide-react';

const AICoaching = () => {
  const practiceCards = [
    "The quick brown fox jumps over the lazy dog",
    "She sells seashells by the seashore",
    "Peter Piper picked a peck of pickled peppers",
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">AI Speech Coaching</h1>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg flex items-center gap-2"
          >
            <Brain className="w-5 h-5" />
            Start Practice
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Practice Phrases</h2>
            <div className="space-y-4">
              {practiceCards.map((phrase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Book className="w-5 h-5 text-indigo-600" />
                      <span className="font-medium text-gray-900">Phrase #{index + 1}</span>
                    </div>
                    <span className="text-sm text-gray-500">Difficulty: Medium</span>
                  </div>
                  <p className="text-lg text-gray-700">{phrase}</p>
                  <div className="mt-4 flex gap-2">
                    {phrase.split(' ').map((word, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded bg-green-100 text-green-700 text-sm"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Progress</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-medium text-gray-900">Completed Exercises</p>
                  <p className="text-2xl font-bold text-indigo-600">12/15</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo-500" />
                <div>
                  <p className="font-medium text-gray-900">Practice Time</p>
                  <p className="text-2xl font-bold text-indigo-600">45 mins</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">AI Coach Tips</h2>
            <div className="space-y-3">
              {[
                "Focus on breath control",
                "Maintain steady pace",
                "Emphasize key words",
              ].map((tip, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 bg-indigo-50 p-3 rounded-lg"
                >
                  <Brain className="w-4 h-4 text-indigo-600" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoaching;