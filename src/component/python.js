import React from 'react';
import '../App.css';
import pythonsyllabus from '../images/python-syllabus.webp'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const GeneratePagePython = () => {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    navigate('/generatedpython'); // Navigate to the '/generated' page
  };

  return (
    <div>
      <h1>Pyhton Syllabus</h1>
      <div className="Syllabus">
        <img src={pythonsyllabus} alt="Java Syllabus" />
        <button onClick={handleGenerateClick}>Generate</button>
      </div>
    </div>
  );
};

export default GeneratePagePython;
