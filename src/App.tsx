import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import VoiceAnalysis from './pages/VoiceAnalysis';
import SignLanguage from './pages/SignLanguage';
import AICoaching from './pages/AICoaching';
import Progress from './pages/Progress';
import DoctorConnect from './pages/DoctorConnect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="voice-analysis" element={<VoiceAnalysis />} />
          <Route path="sign-language" element={<SignLanguage />} />
          <Route path="ai-coaching" element={<AICoaching />} />
          <Route path="progress" element={<Progress />} />
          <Route path="dr-Connect" element={<DoctorConnect/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <DoctorConnect/>
  );
}

export default App;