import React from 'react';
import { useNavigate } from 'react-router-dom';
import downloadImage from '../images/java.jpeg';
import downloadPython from '../images/python.png';

const Image = () => {
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    navigate('/generate');
  };
  const handleGenerateClick2 = () => {
    navigate('/generatepython');
  };

  return (
    <>
      <div className="slider-container">
        <div className="image-slider">
          <div id="slider-img1" className="slider-image"></div>
          <div id="slider-img2" className="slider-image"></div>
          <div id="slider-img3" className="slider-image"></div>
        </div>
      </div>

      <div className="container">
        <div className="img-container">
          <img src={downloadImage} alt="Java Programming" />
          <button onClick={handleGenerateClick}>Click here</button>
        </div>
        <div className="img-container">
          <img src={downloadPython} alt="Java Programming" />
          <button onClick={handleGenerateClick2}>Click here</button>
        </div>
        
      </div>

      
    </>
  );
};

export default Image;
