import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Mic, Languages as SignLanguage, Brain, Trophy, Settings, MedalIcon } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Mic, label: 'Voice Analysis', path: '/voice-analysis' },
    { icon: MedalIcon, label: 'Dr.Connect', path: '/dr-connect' },
    { icon: SignLanguage, label: 'Sign Language', path: '/sign-language' },
    { icon: Brain, label: 'AI Coaching', path: '/ai-coaching' },
    { icon: Trophy, label: 'Progress', path: '/progress' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0 p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Mic className="w-8 h-8 text-indigo-600" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          VocalEdge AI
        </h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;