import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, Activity, Brain, Award, ChevronRight, Sparkles, 
  Users, PlayCircle, MessageCircle, Target, Rocket, 
  HeartHandshake, Mail, Phone, MapPin 
} from 'lucide-react';
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

  const howItWorks = [
    {
      icon: Target,
      title: 'Set Your Goals',
      description: 'Define your speaking objectives and areas for improvement.',
    },
    {
      icon: Mic,
      title: 'Practice Speaking',
      description: 'Record your voice and get real-time feedback from our AI.',
    },
    {
      icon: Brain,
      title: 'Receive Analysis',
      description: 'Get detailed insights and personalized recommendations.',
    },
    {
      icon: Rocket,
      title: 'Track Progress',
      description: 'Monitor your improvement over time with detailed analytics.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Voice Training</span>
          </motion.div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Master Your Voice with VocalEdge AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your personal AI voice coach for better speech, confidence, and communication. Transform your speaking abilities with cutting-edge technology.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Button
              size="lg"
              icon={<Mic className="w-5 h-5" />}
              className="bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              icon={<PlayCircle className="w-5 h-5" />}
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ">
          {stats.map((stat, index) => (
            <Card key={stat.label} 
            className='bg-black'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-lg">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-200">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-400">{stat.value}</p>
                </div>
              </motion.div>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Voice Mastery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive suite of tools designed to enhance your speaking abilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={feature.title} to={feature.link}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300 bg-black">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-lg w-fit">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-purple-600 font-medium">
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How VocalEdge Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to start improving your speaking skills today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <Card key={step.title} className="relative bg-black">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className="mx-auto p-3 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-full w-16 h-16 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-500">
                    {step.description}
                  </p>
                </motion.div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Video Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See VocalEdge in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how our AI-powered platform helps users improve their speaking skills.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
              alt="VocalEdge Demo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about VocalEdge? Our team is here to help you get started on your journey to better speech.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-lg font-medium text-gray-900">contact@vocaledge.ai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-lg font-medium text-gray-900">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-lg font-medium text-gray-900">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-white to-purple-50  bg-gradient-to-r from-indigo-600 to-purple-800">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your message"
                  />
                </div>
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;