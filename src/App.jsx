import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Ви ввели: ${inputValue}`);
  };

  return (
    <div>
      <h1>React!</h1>
      <Input 
        placeholder="Введіть" 
        onChange={handleInputChange} 
      />
      <Button 
        text="Натисни" 
        onClick={handleButtonClick} 
      />
    </div>
  );
};

export default App;
