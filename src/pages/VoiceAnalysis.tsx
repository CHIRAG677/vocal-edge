import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mic, Volume2, AlertCircle, Pause, Activity } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';

const VoiceAnalysis = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [volume, setVolume] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [clarity, setClarity] = useState(0);
  const [pace, setPace] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);
      
      analyserRef.current.fftSize = 2048;
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      
      const updateMetrics = () => {
        if (!analyserRef.current || !isRecording) return;
        
        analyserRef.current.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / bufferLength;
        
        setVolume(Math.min(average / 128 * 100, 100));
        setPitch(Math.min((average / 128 * 100 + Math.random() * 20), 100));
        setClarity(Math.min((average / 128 * 100 + Math.random() * 10), 100));
        setPace(Math.min((average / 128 * 100 + Math.random() * 15), 100));
        
        requestAnimationFrame(updateMetrics);
      };
      
      setIsRecording(true);
      updateMetrics();
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
    setIsRecording(false);
  };

  const tips = [
    { text: 'Speak clearly and at a steady pace', icon: Activity },
    { text: 'Maintain consistent volume', icon: Volume2 },
    { text: 'Take natural pauses between phrases', icon: Pause },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Live Voice Analysis</h1>
        <Button
          variant={isRecording ? 'danger' : 'primary'}
          icon={<Mic className="w-5 h-5" />}
          onClick={isRecording ? stopRecording : startRecording}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Button>
      </div>

      <Card>
        <div className="relative h-48 bg-gray-50 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
          {isRecording ? (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-indigo-500 rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.1, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Mic className="w-12 h-12 text-indigo-600 relative z-10" />
              </div>
            </motion.div>
          ) : (
            <Volume2 className="w-12 h-12 text-gray-400" />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <ProgressBar
              label="Volume"
              value={volume}
              color={volume > 80 ? 'red' : volume > 60 ? 'green' : 'indigo'}
            />
          </div>
          <div className="space-y-2">
            <ProgressBar
              label="Pitch"
              value={pitch}
              color={pitch > 80 ? 'red' : pitch > 60 ? 'green' : 'indigo'}
            />
          </div>
          <div className="space-y-2">
            <ProgressBar
              label="Clarity"
              value={clarity}
              color={clarity > 80 ? 'green' : clarity > 60 ? 'indigo' : 'red'}
            />
          </div>
          <div className="space-y-2">
            <ProgressBar
              label="Pace"
              value={pace}
              color={pace > 80 ? 'red' : pace > 60 ? 'green' : 'indigo'}
            />
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Real-time Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-indigo-50 rounded-lg p-4 flex items-center gap-3"
            >
              <tip.icon className="w-5 h-5 text-indigo-600" />
              <p className="text-indigo-700 font-medium">{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default VoiceAnalysis;