"use client"
import React from 'react';
//import {API_URL} from '../app/api/search'

const YouTubeMacro = () => {
  const startMacro = async () => {
    try {
      const response = await fetch('api/startpuppeteer', {
        method: 'POST',
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error starting the macro:', error);
    }
  };

  return (
    <div>
      <button onClick={startMacro}>Start YouTube Macro</button>
    </div>
  );
};

export default YouTubeMacro;
