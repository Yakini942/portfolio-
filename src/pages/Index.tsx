
import React, { useState, useEffect, useRef } from 'react';
import { TerminalInterface } from '../components/TerminalInterface';
import { FloatingCard } from '../components/FloatingCard';
import { Clock } from '../components/Clock';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
      
      {/* Header */}
      <header className="relative z-10 p-4 border-b border-green-400/30">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-green-400 text-xl font-bold">Mark Gatere</h1>
            <p className="text-green-300/70 text-sm">Software Engineer</p>
          </div>
          <Clock />
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left side - 3D Floating Card */}
        <div className="lg:w-2/5 p-8 flex items-center justify-center">
          <FloatingCard />
        </div>

        {/* Right side - Terminal Interface */}
        <div className="lg:w-3/5 p-4 lg:p-8 flex flex-col">
          <TerminalInterface />
        </div>
      </div>
    </div>
  );
};

export default Index;
