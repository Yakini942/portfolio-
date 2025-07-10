
import React, { useState, useRef, useEffect } from 'react';
import { TerminalOutput } from './TerminalOutput';

interface Command {
  command: string;
  output: string[];
}

export const TerminalInterface = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: [
      'Available commands:',
      '',
      'about           - Learn about me',
      'projects        - View my projects', 
      'skills          - See my technical skills',
      'experience      - My work experience',
      'education       - My educational background',
      'certifications  - View my certifications',
      'leadership      - Leadership and community involvement',
      'contact         - How to reach me',
      'clear           - Clear the terminal',
      '',
      'Type any command to continue...'
    ],
    about: [
      'About Mark Gatere',
      '================',
      '',
      'Passionate Software Engineer with expertise in full-stack development.',
      'I love creating innovative solutions and building scalable applications.',
      '',
      '• 🚀 Focused on modern web technologies',
      '• 💡 Problem solver and continuous learner', 
      '• 🌍 Open to remote and global opportunities',
      '• 🤝 Collaborative team player',
      '',
      'Currently seeking new challenges and opportunities to grow!'
    ],
    projects: [
      'Featured Projects',
      '================',
      '',
      '📱 Project Alpha - Full-stack web application',
      '   Tech: React, Node.js, PostgreSQL',
      '   Description: E-commerce platform with real-time features',
      '',
      '🌐 Project Beta - Mobile-first PWA',
      '   Tech: Vue.js, Express, MongoDB',
      '   Description: Social networking app for developers',
      '',
      '⚙️  Project Gamma - DevOps Pipeline',
      '   Tech: Docker, Kubernetes, CI/CD',
      '   Description: Automated deployment and monitoring system',
      '',
      '🤖 Project Delta - AI Integration',
      '   Tech: Python, TensorFlow, FastAPI',
      '   Description: Machine learning model for data analysis',
    ],
    skills: [
      'Technical Skills',
      '===============',
      '',
      '💻 Programming Languages:',
      '   • JavaScript/TypeScript  ████████████ 95%',
      '   • Python                ███████████  90%',
      '   • Java                  ████████     80%',
      '   • Go                    ███████      70%',
      '',
      '🌐 Web Technologies:',
      '   • React/Next.js         ████████████ 95%',
      '   • Node.js/Express       ███████████  90%',
      '   • HTML5/CSS3           ████████████ 95%',
      '   • GraphQL/REST APIs     ██████████   85%',
      '',
      '🗄️  Databases:',
      '   • PostgreSQL            ██████████   85%',
      '   • MongoDB              █████████    80%',
      '   • Redis                ████████     75%',
      '',
      '☁️  Cloud & DevOps:',
      '   • AWS/GCP              █████████    80%',
      '   • Docker/Kubernetes    ████████     75%',
      '   • CI/CD Pipelines      █████████    80%',
    ],
    experience: [
      'Work Experience',
      '===============',
      '',
      '🏢 Senior Software Engineer @ TechCorp (2022 - Present)',
      '   • Led development of microservices architecture',
      '   • Mentored junior developers and conducted code reviews',
      '   • Improved application performance by 40%',
      '   • Tech: React, Node.js, AWS, PostgreSQL',
      '',
      '💼 Full Stack Developer @ StartupXYZ (2020 - 2022)',
      '   • Built MVP from scratch serving 10K+ users',
      '   • Implemented real-time features and payment integration',
      '   • Collaborated with cross-functional teams',
      '   • Tech: Vue.js, Express, MongoDB, Stripe API',
      '',
      '👨‍💻 Software Developer @ CodeStudio (2018 - 2020)',
      '   • Developed client applications and APIs',
      '   • Participated in agile development processes',
      '   • Maintained legacy systems and databases',
      '   • Tech: JavaScript, PHP, MySQL, jQuery',
    ],
    education: [
      'Education',
      '=========',
      '',
      '🎓 Bachelor of Science in Computer Science',
      '   University of Technology (2014 - 2018)',
      '   • GPA: 3.8/4.0',
      '   • Dean\'s List: 6 semesters',
      '   • Relevant Coursework:',
      '     - Data Structures and Algorithms',
      '     - Software Engineering',
      '     - Database Systems',
      '     - Computer Networks',
      '     - Machine Learning',
      '',
      '📚 Continuous Learning:',
      '   • Online courses and certifications',
      '   • Tech conferences and workshops',
      '   • Open source contributions',
      '   • Technical blog writing',
    ],
    certifications: [
      'Certifications',
      '==============',
      '',
      '🏆 AWS Certified Solutions Architect (2023)',
      '   • Cloud architecture and best practices',
      '   • Scalable and secure cloud solutions',
      '',
      '🔧 Google Cloud Professional Developer (2022)',
      '   • Application development on GCP',
      '   • Serverless and containerized applications',
      '',
      '⚛️  React Advanced Certification (2022)',
      '   • Advanced React patterns and performance',
      '   • State management and testing',
      '',
      '🐳 Docker Certified Associate (2021)',
      '   • Container orchestration and deployment',
      '   • DevOps best practices',
      '',
      '📊 MongoDB Certified Developer (2021)',
      '   • NoSQL database design and optimization',
      '   • Aggregation and indexing strategies',
    ],
    leadership: [
      'Leadership & Community',
      '=====================',
      '',
      '👥 Tech Community Leadership:',
      '   • Co-organizer of Local Developer Meetups',
      '   • Speaker at tech conferences and workshops',
      '   • Mentor in coding bootcamp programs',
      '',
      '🌟 Open Source Contributions:',
      '   • Maintainer of 3 open source projects',
      '   • 500+ GitHub contributions in the last year',
      '   • Active contributor to popular frameworks',
      '',
      '📝 Content Creation:',
      '   • Technical blog with 10K+ monthly readers',
      '   • YouTube channel on web development',
      '   • Podcast guest on developer topics',
      '',
      '🤝 Volunteer Work:',
      '   • Code for Good - Building apps for nonprofits',
      '   • Teaching programming to underserved communities',
      '   • Hackathon judge and mentor',
    ],
    contact: [
      'Contact Information',
      '==================',
      '',
      '📧 Email: mark.gatere@email.com',
      '🔗 LinkedIn: linkedin.com/in/markgatere',
      '🐙 GitHub: github.com/markgatere',
      '🌐 Portfolio: markgatere.dev',
      '📱 Phone: +1 (555) 123-4567',
      '',
      '📍 Location: Available for remote work worldwide',
      '⏰ Timezone: UTC-5 (EST)',
      '',
      '💬 Preferred contact: Email or LinkedIn',
      '🚀 Available for: Full-time opportunities',
      '    consulting, and interesting projects',
      '',
      'Let\'s build something amazing together! 🎉',
    ]
  };

  const welcomeMessage = [
    'Welcome to my interactive \'AI powered\' portfolio terminal!',
    'Type \'help\' to see available commands.',
    '',
  ];

  useEffect(() => {
    // Show welcome message on mount
    const initialCommand: Command = {
      command: 'init',
      output: welcomeMessage
    };
    setCommandHistory([initialCommand]);
  }, []);

  useEffect(() => {
    // Auto-focus input
    if (inputRef.current && !isTyping) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  useEffect(() => {
    // Scroll to bottom when new output is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleCommand = async (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    if (command === 'clear') {
      setCommandHistory([]);
      return;
    }

    const newCommand: Command = {
      command: cmd,
      output: commands[command as keyof typeof commands] || [
        `Command not found: ${cmd}`,
        'Type "help" to see available commands.'
      ]
    };

    setCommandHistory(prev => [...prev, newCommand]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() === '' || isTyping) return;

    handleCommand(currentInput);
    setCurrentInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const commandList = commandHistory.map(h => h.command).filter(c => c !== 'init');
      if (commandList.length > 0 && historyIndex < commandList.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandList[commandList.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const commandList = commandHistory.map(h => h.command).filter(c => c !== 'init');
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandList[commandList.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-black/50 rounded-lg border border-green-400/30 backdrop-blur-sm">
      {/* Terminal header */}
      <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-t-lg border-b border-green-400/30">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-green-400/70 text-sm">mark@portfolio-terminal</span>
      </div>

      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-green-400/30 scrollbar-track-transparent"
      >
        {commandHistory.map((cmd, index) => (
          <TerminalOutput
            key={index}
            command={cmd.command}
            output={cmd.output}
            showPrompt={cmd.command !== 'init'}
            onTypingComplete={() => setIsTyping(false)}
            onTypingStart={() => setIsTyping(true)}
          />
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-green-400 mr-2 select-none">
            gatere@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 outline-none font-mono caret-green-400"
            placeholder="Type a command..."
            disabled={isTyping}
            autoComplete="off"
            spellCheck="false"
          />
          <span className="text-green-400 animate-pulse ml-1">▋</span>
        </form>
      </div>

      {/* Help hint */}
      <div className="p-2 bg-gray-900/30 border-t border-green-400/20 text-center">
        <p className="text-green-400/60 text-xs">
          Type 'help' for commands • Use ↑↓ arrow keys for history • Tab for autocomplete
        </p>
      </div>
    </div>
  );
};
