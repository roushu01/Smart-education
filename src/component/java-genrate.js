import React from 'react';
import '../App.css';
import Javasyllabus from '../images/java-syllabus.webp'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const GeneratePage = () => {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    navigate('/generated'); // Navigate to the '/generated' page
  };

  return (
    <div>
      <h1>Java Syllabus</h1>
      <div className="Syllabus">
        <img src={Javasyllabus} alt="Java Syllabus" />
        <button onClick={handleGenerateClick}>Generate</button>
      </div>
    </div>
  );
};

export default GeneratePage;

