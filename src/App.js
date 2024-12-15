
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Image from './component/image';
import GeneratePage from './component/java-genrate';
import './App.css';
import './app-generate.css';
import GeneratePaged from './component/generated-page';
import GeneratePagePython from './component/python';
import GeneratePython from './component/python-generated';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Image />} />
        
        {/* Route for the Generate Page */}
        <Route path="/generate" element={<GeneratePage />} />
        <Route path="/generatepython" element={<GeneratePagePython />} />
        <Route path="/generated" element={<GeneratePaged/>}/>
        <Route path="/generatedpython" element={<GeneratePython/>}/>
      </Routes>
      
    </Router>
    
  );
}

export default App;

