import React from 'react';
import { Bot } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-start justify-between w-full max-w-screen-lg mx-auto p-4">  

      <div className="img w-auto bg-yellow-500 p-2 rounded-[10px]">
        <Bot className="text-black" />
      </div>

      <div className="text w-auto">
        <p className="text-white">
          Hello! It's nice to meet you. How can I assist you today? Is there anything specific you'd like to know about locks or locksmithing?
        </p>
      </div>
    </div>
  );
}

export default Header;
