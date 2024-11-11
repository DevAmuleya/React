import React, { useState } from "react";
import { SendHorizontal } from "lucide-react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative flex flex-col items-center justify-center mt-[20rem] mb-[2rem] mx-auto w-[60%]">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type your message..."
        className="px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none bg-black/50 focus:border-blue-500 transition text-gray-300 w-full"
      />
      <SendHorizontal className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
  </div>

  );
};

export default TextInput;
