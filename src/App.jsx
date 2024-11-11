import React from 'react';
import Home from './Home';
import TextInput from "./TextInput";
import Header from './Header';

const App = () => {
  return (
    <div className="bg-black bg-opacity-90 h-screen w-screen flex items-center justify-center p-4 text-center">
      <div className="w-full mx-5">
        <Home />
        <Header />
        <TextInput />
      </div>
    </div>

  );
};

export default App
