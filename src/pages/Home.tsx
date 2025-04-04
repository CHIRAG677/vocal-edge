import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Activity, Brain, Award, ChevronRight, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  const stats = [
    { icon: Activity, label: 'Confidence Score', value: '85%', color: 'text-green-600' },
    { icon: Brain, label: 'Pitch Stability', value: '92%', color: 'text-blue-600' },
    { icon: Award, label: 'Fluency Level', value: '78%', color: 'text-purple-600' },
  ];

  const features = [
    {
      icon: Mic,
      title: 'Real-time Voice Analysis',
      description: 'Get instant feedback on pitch, tone, and clarity as you speak.',
      link: '/voice-analysis',
    },
    {
      icon: Brain,
      title: 'AI Speech Coaching',
      description: 'Personalized exercises and tips to improve your speaking skills.',
      link: '/ai-coaching',
    },
    {
      icon: Users,
      title: 'Sign Language Translation',
      description: 'Break communication barriers with real-time sign language interpretation.',
      link: '/sign-language',
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered Voice Training</span>
        </motion.div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Master Your Voice with VocalEdge AI
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your personal AI voice coach for better speech, confidence, and communication
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            icon={<Mic className="w-5 h-5" />}
            className="bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Start New Session
          </Button>
          <Button
            size="lg"
            variant="secondary"
            icon={<Brain className="w-5 h-5" />}
          >
            Take Assessment
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={stat.label}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 bg-indigo-50 rounded-lg">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </motion.div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <Link key={feature.title} to={feature.link}>
            <Card className="h-full group hover:shadow-md transition-shadow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="p-3 bg-indigo-50 rounded-lg w-fit">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                <div className="flex items-center text-indigo-600 font-medium">
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Recent Progress
          </h2>
          <Button variant="secondary" size="sm">
            View All
          </Button>
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Voice analysis chart will be displayed here</p>
        </div>
      </Card>
    </div>
  );
};

export default Home;