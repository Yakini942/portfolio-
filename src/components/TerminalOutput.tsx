
import React, { useState, useEffect } from 'react';

interface TerminalOutputProps {
  command: string;
  output: string[];
  showPrompt?: boolean;
  onTypingStart?: () => void;
  onTypingComplete?: () => void;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({
  command,
  output,
  showPrompt = true,
  onTypingStart,
  onTypingComplete
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (output.length === 0) {
      setIsComplete(true);
      onTypingComplete?.();
      return;
    }

    onTypingStart?.();
    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    setIsComplete(false);

    const typeText = () => {
      if (currentLineIndex >= output.length) {
        setIsComplete(true);
        onTypingComplete?.();
        return;
      }

      const currentLine = output[currentLineIndex];
      
      if (currentCharIndex <= currentLine.length) {
        const partialLine = currentLine.substring(0, currentCharIndex);
        
        setDisplayedLines(prev => {
          const newLines = [...prev];
          newLines[currentLineIndex] = partialLine;
          return newLines;
        });

        if (currentCharIndex === currentLine.length) {
          // Move to next line
          setTimeout(() => {
            setCurrentLineIndex(prev => prev + 1);
            setCurrentCharIndex(0);
          }, 50);
        } else {
          // Continue typing current line
          setTimeout(() => {
            setCurrentCharIndex(prev => prev + 1);
          }, Math.random() * 30 + 10); // Variable typing speed
        }
      }
    };

    const timer = setTimeout(typeText, 20);
    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, output, onTypingStart, onTypingComplete]);

  return (
    <div className="mb-2">
      {showPrompt && (
        <div className="text-green-400 mb-1">
          <span className="text-green-400/70">gatere@portfolio:~$</span>{' '}
          <span className="text-green-300">{command}</span>
        </div>
      )}
      
      <div className="text-green-300/90 whitespace-pre-wrap">
        {displayedLines.map((line, index) => (
          <div 
            key={index} 
            className={`${
              line.startsWith('=') ? 'text-green-400 font-bold' :
              line.includes('●') || line.includes('•') ? 'text-green-300' :
              line.includes('████') ? 'text-green-400' :
              line.includes('🏢') || line.includes('💼') || line.includes('👨‍💻') || 
              line.includes('🎓') || line.includes('🏆') || line.includes('👥') ||
              line.includes('📧') || line.includes('📱') ? 'text-green-300' :
              'text-green-300/80'
            }`}
          >
            {line}
            {index === currentLineIndex && !isComplete && (
              <span className="animate-pulse text-green-400">▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
