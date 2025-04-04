import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Hand, AudioWaveform as Waveform, Stethoscope, MessageSquare, Brain } from "lucide-react";

// Feature Card Component with TypeScript Props
interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20"
  >
    <Icon className="w-6 h-6 text-indigo-400 mb-2 " />
    <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </motion.div>
);

const SignLanguage: React.FC = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  const handleStartCamera = () => {
    alert("Camera functionality not implemented yet.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-pink-200 p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-800">
          Sign Language Predictor
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white px-6 py-2 rounded-lg flex items-center gap-2 shadow-lg shadow-indigo-500/30"
          onClick={handleStartCamera}
        >
          <Camera className="w-5 h-5" />
          Start Camera
        </motion.button>
      </div>

      {/* Camera Feed & Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          onMouseEnter={() => setShowFeatures(true)}
          onMouseLeave={() => setShowFeatures(false)}
        >
          <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl p-6 backdrop-blur-lg border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Camera className="w-6 h-6" />
              Camera Feed
            </h2>
            <div
              className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1715474788302-da2e32ade3ac?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Camera className="w-12 h-12 text-white/50" />
              </div>
            </div>
          </div>

          {showFeatures && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-indigo-900 rounded-xl p-6 grid grid-cols-2 gap-4"
            >
              <FeatureCard icon={Brain} title="AI Sign Interpreter" description="Real-time sign language interpretation powered by AI." />
              <FeatureCard icon={Waveform} title="Pitch Analysis" description="Advanced voice pitch analysis with detailed reports." />
              <FeatureCard icon={Stethoscope} title="Medical Consultation" description="Connect with speech specialists for professional guidance." />
              <FeatureCard icon={MessageSquare} title="Text Generation" description="Convert signs to natural language text in real-time." />
            </motion.div>
          )}
        </motion.div>

        {/* Predictions */}
        <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl p-6 backdrop-blur-lg border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Predictions</h2>
          <div className="space-y-4">
            {["Hello", "Thank You", "Please"].map((prediction, index) => (
              <motion.div
                key={prediction}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <Hand className="w-6 h-6 text-indigo-400" />
                <div className="flex-1">
                  <p className="font-medium text-white">{prediction}</p>
                  <div className="w-full h-2 bg-gray-800 rounded-full mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.random() * 100}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-indigo-800 to-purple-900 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Voice Analysis */}
      <div className="bg-indigo-800 rounded-xl p-6 backdrop-blur-lg border border-white/10">
        <h2 className="text-xl font-bold text-white mb-4">Voice Analysis</h2>
        <div className="aspect-[3/1] bg-black/20 rounded-lg p-4">
          <div className="h-full bg-[#001100] rounded border border-green-500/30 relative overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-0 w-1 bg-green-500"
                style={{ left: `${(i / 50) * 100}%` }}
                animate={{
                  height: ["20%", "90%", "40%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLanguage;
