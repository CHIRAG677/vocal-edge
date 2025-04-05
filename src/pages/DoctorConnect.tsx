import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  MessageSquare,
  Calendar,
  Clock,
  FileText,
  Send,
  Phone,
  Video,
  Stethoscope,
  X,
  ChevronRight,
  User,
  CheckCircle
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'doctor';
  content: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  available: boolean;
  nextSlot: string;
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialty: 'ENT Specialist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60',
    available: true,
    nextSlot: '2:30 PM Today'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Speech Therapist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=60',
    available: true,
    nextSlot: '3:15 PM Today'
  },
  {
    id: '3',
    name: 'Dr. Emily Brooks',
    specialty: 'Voice Specialist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop&q=60',
    available: false,
    nextSlot: '10:00 AM Tomorrow'
  }
];

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'doctor',
    content: 'Hello! How can I help you today?',
    timestamp: '9:00 AM',
    status: 'read'
  },
  {
    id: '2',
    sender: 'user',
    content: 'Hi Doctor, I\'ve been experiencing difficulty with my voice lately.',
    timestamp: '9:01 AM',
    status: 'read'
  },
  {
    id: '3',
    sender: 'doctor',
    content: 'I understand. Can you describe your symptoms in more detail?',
    timestamp: '9:02 AM',
    status: 'read'
  }
];

const DoctorConnect = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [showAppointment, setShowAppointment] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Simulate doctor's response
    setTimeout(() => {
      const doctorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'doctor',
        content: "I'll help you with that. Let's schedule a detailed consultation to better understand your condition.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };
      setMessages(prev => [...prev, doctorMessage]);
    }, 1000);
  };

  const handleBookAppointment = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setShowAppointment(false);
      setSelectedDoctor(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Connect with Voice & Speech Specialists
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctors List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-indigo-600" />
                Available Specialists
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {doctors.map((doctor) => (
                  <motion.div
                    key={doctor.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 cursor-pointer"
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                        <p className="text-sm text-gray-600">{doctor.specialty}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`} />
                          <span className="text-sm text-gray-600">
                            {doctor.available ? 'Available Now' : 'Next Available: ' + doctor.nextSlot}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-indigo-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDoctor(doctor);
                          setShowAppointment(true);
                        }}
                      >
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-purple-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Chat Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full bg-indigo-100 text-indigo-700 p-4 rounded-xl flex items-center gap-3 hover:bg-indigo-200 transition-colors">
                  <Video className="w-5 h-5" />
                  Start Video Consultation
                </button>
                <button className="w-full bg-purple-100 text-purple-700 p-4 rounded-xl flex items-center gap-3 hover:bg-purple-200 transition-colors">
                  <Phone className="w-5 h-5" />
                  Voice Call
                </button>
                <button className="w-full bg-green-100 text-green-700 p-4 rounded-xl flex items-center gap-3 hover:bg-green-200 transition-colors">
                  <FileText className="w-5 h-5" />
                  Upload Medical Records
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
              <div className="bg-red-50 p-4 rounded-xl">
                <p className="text-red-700 font-medium">24/7 Emergency Helpline</p>
                <p className="text-2xl font-bold text-red-600">1-800-VOICE-HELP</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {selectedDoctor && !showAppointment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-2xl h-[600px] flex flex-col"
            >
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedDoctor.name}</h3>
                    <p className="text-sm text-gray-600">{selectedDoctor.specialty}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl p-4 ${
                        message.sender === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p>{message.content}</p>
                      <div className="flex items-center justify-end gap-2 mt-1">
                        <span className="text-xs opacity-70">{message.timestamp}</span>
                        {message.sender === 'user' && (
                          <CheckCircle className="w-3 h-3" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-100 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    className="bg-indigo-600 text-white p-2 rounded-xl"
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Appointment Modal */}
      <AnimatePresence>
        {showAppointment && selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-lg p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Book Appointment</h3>
                <button
                  onClick={() => setShowAppointment(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{selectedDoctor.name}</h4>
                    <p className="text-gray-600">{selectedDoctor.specialty}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Select Time Slot</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:00 PM', '5:30 PM'].map((time) => (
                      <motion.button
                        key={time}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg border ${
                          selectedTime === time
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'border-gray-200 hover:border-indigo-600'
                        }`}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBookAppointment}
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold"
                >
                  Confirm Booking
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h3>
              <p className="text-gray-600">
                Your appointment has been scheduled successfully. We'll send you a confirmation email shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DoctorConnect;