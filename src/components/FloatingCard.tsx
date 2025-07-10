
import React, { useState, useRef, useEffect } from 'react';

export const FloatingCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      setMousePosition({ x: deltaX * 15, y: deltaY * 15 });
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div className="relative perspective-1000">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div
        ref={cardRef}
        className={`relative w-80 h-96 transition-all duration-300 ease-out transform-gpu ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        style={{
          transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) ${
            isHovered ? 'scale(1.05)' : 'scale(1)'
          }`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 0, y: 0 });
        }}
      >
        {/* Card glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
        
        {/* Main card */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-green-400/30 overflow-hidden shadow-2xl">
          {/* Card header */}
          <div className="p-4 bg-gradient-to-r from-green-400/10 to-transparent border-b border-green-400/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400/70 text-xs ml-4">gatere@portfolio</span>
            </div>
          </div>

          {/* Profile image container */}
          <div className="p-6 flex flex-col items-center justify-center h-full">
            <div className="relative group">
              {/* Image placeholder with grid pattern */}
              <div className="w-48 h-48 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-2 border-green-400/30 flex items-center justify-center overflow-hidden relative">
                <img
                  src="/lovable-uploads/1dbbae88-5abf-4980-b78c-83bedc3fc904.png"
                  alt="Mark Gatere"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-6xl text-green-400/50">👨‍💻</div>
                    `;
                  }}
                />
                
                {/* Scanning line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/20 to-transparent h-4 animate-pulse"></div>
              </div>

              {/* Holographic border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-green-400 via-blue-400 to-green-400 p-[2px] animate-spin-slow">
                <div className="w-full h-full rounded-full bg-transparent"></div>
              </div>
            </div>

            {/* Name and title */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">Mark Gatere</h3>
              <p className="text-green-300/70 text-sm">Software Engineer</p>
              <div className="mt-4 px-4 py-2 bg-green-400/10 rounded-lg border border-green-400/30">
                <p className="text-xs text-green-400/80">[Interactive 3D Card]</p>
              </div>
            </div>
          </div>

          {/* Bottom status bar */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 border-t border-green-400/20">
            <div className="flex justify-between items-center text-xs text-green-400/60">
              <span>● ONLINE</span>
              <span>Ready for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
