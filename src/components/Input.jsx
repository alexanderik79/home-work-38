import './Input.css';
import { useState, useEffect } from 'react';

export default function Input({ placeholder, onChange }) {
  const [flash, setFlash] = useState(false);

  const handleChange = (e) => {
    setFlash(true);
    onChange(e);
  };

  useEffect(() => {
    if (flash) {
      const timer = setTimeout(() => setFlash(false), 300); 
      return () => clearTimeout(timer);
    }
  }, [flash]);

  return (
    <input
      className={`custom-input ${flash ? 'flash' : ''}`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
