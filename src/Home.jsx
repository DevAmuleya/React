import React from 'react';
import { Link2 } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex items-center justify-center">
            <h1 className="text-[60px] font-bold text-white px-2 py-1 inline-flex items-center">
                FixAWorks ServicePro Chatbot
                <Link2 className="ml-10 text-white" />
            </h1>
        </div>  
    );
  };

export default Home