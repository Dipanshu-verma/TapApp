import React from 'react';
import '../styles/Loader.css';  

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
