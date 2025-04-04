import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, Calendar } from 'lucide-react';

const Progress = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Your Progress</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Trophy, label: 'Total Sessions', value: '24' },
          { icon: Star, label: 'Achievements', value: '12' },
          { icon: TrendingUp, label: 'Improvement', value: '+45%' },
          { icon: Calendar, label: 'Streak', value: '7 days' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Progress</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Progress chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
          <div className="space-y-4">
            {[
              'Perfect Pitch Master',
              'Fluency Champion',
              'Weekly Goal Crusher',
            ].map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{achievement}</p>
                  <p className="text-sm text-gray-500">Earned 2 days ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Speech Journal</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((entry) => (
            <div
              key={entry}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <Calendar className="w-5 h-5 text-indigo-600" />
              <div className="flex-1">
                <p className="font-medium text-gray-900">Practice Session #{entry}</p>
                <p className="text-sm text-gray-500">Duration: 15 minutes</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-700">
                Play Recording
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;