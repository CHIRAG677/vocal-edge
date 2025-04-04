import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Book, CheckCircle, Clock, HandMetal, Volume2, ChevronRight, ChevronLeft, X } from 'lucide-react';

interface SignLanguageExample {
  word: string;
  description: string;
  imageUrl: string;
  category: string;
}

const signLanguageExamples: SignLanguageExample[] = [
  {
    word: "Hello",
    description: "Wave your open hand side to side",
    imageUrl: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=60",
    category: "Greetings"
  },
  {
    word: "Thank You",
    description: "Touch your chin with your fingertips, then extend your hand forward",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=60",
    category: "Courtesy"
  },
  {
    word: "Please",
    description: "Rub your chest in a circular motion with your open hand",
    imageUrl: "https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?w=800&auto=format&fit=crop&q=60",
    category: "Courtesy"
  },
  {
    word: "Family",
    description: "Both hands together, fingers spread, moving in a circle",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60",
    category: "Family"
  },
  {
    word: "Love",
    description: "Cross arms over chest, hands in fists",
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=60",
    category: "Emotions"
  },
  {
    word: "Happy",
    description: "Brush your chest upward with both hands",
    imageUrl: "https://images.unsplash.com/photo-1492681290082-e932832941e6?w=800&auto=format&fit=crop&q=60",
    category: "Emotions"
  },
  {
    word: "Eat",
    description: "Bring your hand to your mouth, as if eating",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
    category: "Food"
  },
  {
    word: "Drink",
    description: "Thumb to mouth, like drinking from a cup",
    imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=60",
    category: "Food"
  },
  {
    word: "Hot",
    description: "Fan your face with your hand",
    imageUrl: "https://images.unsplash.com/photo-1517241034903-9a4c3ab12f00?w=800&auto=format&fit=crop&q=60",
    category: "Weather"
  },
  {
    word: "Cold",
    description: "Arms crossed, shoulders hunched, shivering motion",
    imageUrl: "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60",
    category: "Weather"
  }
];

const categories = ["Greetings", "Courtesy", "Numbers", "Colors", "Family", "Food", "Animals", "Weather", "Emotions", "Time"];

const AICoaching = () => {
  const [currentCategory, setCurrentCategory] = useState("Greetings");
  const [selectedExample, setSelectedExample] = useState<SignLanguageExample | null>(null);
  const [page, setPage] = useState(0);
  const [isPracticing, setIsPracticing] = useState(false);
  const [currentPracticeIndex, setCurrentPracticeIndex] = useState(0);
  const itemsPerPage = 6;

  const practiceCards = [
    "The quick brown fox jumps over the lazy dog",
    "She sells seashells by the seashore",
    "Peter Piper picked a peck of pickled peppers",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const practiceVariants = {
    enter: { x: 1000, opacity: 0 },
    center: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { x: -1000, opacity: 0 }
  };

  const startPractice = () => {
    setIsPracticing(true);
    setCurrentPracticeIndex(0);
  };

  const nextPractice = () => {
    if (currentPracticeIndex < signLanguageExamples.length - 1) {
      setCurrentPracticeIndex(prev => prev + 1);
    } else {
      setIsPracticing(false);
      setCurrentPracticeIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          AI Speech & Sign Language Coach
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startPractice}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <Brain className="w-5 h-5" />
          Start Practice
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        {isPracticing ? (
          <motion.div
            key="practice"
            initial="enter"
            animate="center"
            exit="exit"
            variants={practiceVariants}
            className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50"
          >
            <div className="max-w-2xl w-full p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Practice Session ({currentPracticeIndex + 1}/{signLanguageExamples.length})
                </h2>
                <button
                  onClick={() => setIsPracticing(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <motion.div
                key={currentPracticeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={signLanguageExamples[currentPracticeIndex].imageUrl}
                    alt={signLanguageExamples[currentPracticeIndex].word}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {signLanguageExamples[currentPracticeIndex].word}
                  </h3>
                  <p className="text-xl text-gray-600">
                    {signLanguageExamples[currentPracticeIndex].description}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextPractice}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold shadow-lg"
                >
                  {currentPracticeIndex < signLanguageExamples.length - 1 ? "Next Sign" : "Finish Practice"}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Sign Language Section */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl p-8 shadow-xl backdrop-blur-lg bg-opacity-90"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <HandMetal className="w-6 h-6 text-indigo-600" />
                    Sign Language Learning
                  </h2>

                  {/* Category Navigation */}
                  <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentCategory(category)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                          currentCategory === category
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>

                  {/* Sign Language Examples Grid */}
                  <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {signLanguageExamples
                      .filter(example => example.category === currentCategory)
                      .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                      .map((example, index) => (
                        <motion.div
                          key={example.word}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 cursor-pointer"
                          onClick={() => setSelectedExample(example)}
                        >
                          <div className="aspect-square rounded-lg overflow-hidden mb-4">
                            <img 
                              src={example.imageUrl} 
                              alt={example.word}
                              className="w-full h-full object-cover transform transition-transform hover:scale-110"
                            />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{example.word}</h3>
                          <p className="text-sm text-gray-600">{example.description}</p>
                        </motion.div>
                      ))}
                  </motion.div>

                  {/* Pagination */}
                  <div className="flex justify-center gap-4 mt-8">
                    <button
                      onClick={() => setPage(Math.max(0, page - 1))}
                      disabled={page === 0}
                      className="p-2 rounded-lg bg-gray-100 disabled:opacity-50"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setPage(page + 1)}
                      disabled={(page + 1) * itemsPerPage >= signLanguageExamples.length}
                      className="p-2 rounded-lg bg-gray-100 disabled:opacity-50"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>

                {/* Practice Phrases Section */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl p-8 shadow-xl backdrop-blur-lg bg-opacity-90"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Volume2 className="w-6 h-6 text-indigo-600" />
                    Practice Phrases
                  </h2>
                  <div className="space-y-4">
                    {practiceCards.map((phrase, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Book className="w-5 h-5 text-indigo-600" />
                            <span className="font-medium text-gray-900">Phrase #{index + 1}</span>
                          </div>
                          <span className="text-sm text-gray-500">Difficulty: Medium</span>
                        </div>
                        <p className="text-lg text-gray-700">{phrase}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {phrase.split(' ').map((word, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-sm"
                            >
                              {word}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Progress and Tips Section */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-xl backdrop-blur-lg bg-opacity-90"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Progress</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Completed Exercises</p>
                        <p className="text-3xl font-bold text-indigo-600">12/15</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-indigo-100 p-3 rounded-xl">
                        <Clock className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Practice Time</p>
                        <p className="text-3xl font-bold text-indigo-600">45 mins</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-xl backdrop-blur-lg bg-opacity-90"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Coach Tips</h2>
                  <div className="space-y-4">
                    {[
                      "Take deep breaths before starting",
                      "Practice in front of a mirror",
                      "Record yourself and review",
                      "Focus on one sign at a time",
                      "Practice daily for best results"
                    ].map((tip, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl"
                      >
                        <Brain className="w-5 h-5 text-indigo-600" />
                        <span className="text-gray-700">{tip}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Example Modal */}
      <AnimatePresence>
        {selectedExample && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExample(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-lg w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedExample.imageUrl}
                alt={selectedExample.word}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedExample.word}</h3>
              <p className="text-gray-600 mb-4">{selectedExample.description}</p>
              <button
                onClick={() => setSelectedExample(null)}
                className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AICoaching;