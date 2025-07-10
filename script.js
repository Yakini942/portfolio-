// Terminal Portfolio JavaScript

class TerminalPortfolio {
    constructor() {
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isTyping = false;
        this.currentInput = '';
        
        this.terminalInput = document.getElementById('terminal-input');
        this.terminalOutput = document.getElementById('terminal-output');
        this.terminalContent = document.getElementById('terminal-content');
        this.floatingCard = document.getElementById('floating-card');
        this.clockElement = document.getElementById('clock-time');
        
        this.commands = {
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
                '   • Python                 ███████████  90%',
                '   • Java                   ████████     80%',
                '   • Go                     ███████      70%',
                '',
                '🌐 Web Technologies:',
                '   • React/Next.js         ████████████ 95%',
                '   • Node.js/Express       ███████████  90%',
                '   • HTML5/CSS3            ████████████ 95%',
                '   • GraphQL/REST APIs     ██████████   85%',
                '',
                '🗄️  Databases:',
                '   • PostgreSQL            ██████████   85%',
                '   • MongoDB               █████████    80%',
                '   • Redis                 ████████     75%',
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
                '🚀 Available for: Full-time opportunities,',
                '    consulting, and interesting projects',
                '',
                'Let\'s build something amazing together! 🎉',
            ]
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.startClock();
        this.setupFloatingCard();
        this.createFloatingParticles();
        this.showWelcomeMessage();
    }
    
    setupEventListeners() {
        // Terminal input handling
        this.terminalInput.addEventListener('keydown', (e) => this.handleKeyDown(e));
        this.terminalInput.addEventListener('input', (e) => {
            this.currentInput = e.target.value;
            this.moveFakeCursor();
        });
        this.terminalInput.addEventListener('click', () => this.moveFakeCursor());
        // Auto-focus terminal input
        document.addEventListener('click', () => {
            if (!this.isTyping) {
                this.terminalInput.focus();
            }
        });
        // Initial focus
        setTimeout(() => this.terminalInput.focus(), 100);
        // Move fake cursor on focus
        this.terminalInput.addEventListener('focus', () => this.moveFakeCursor());
    }

    moveFakeCursor() {
        // Find the input-line and cursor
        const inputLine = this.terminalInput.parentElement;
        const cursor = inputLine.querySelector('.cursor');
        // Get input value and measure width
        const value = this.terminalInput.value;
        // Create a hidden span to measure text width
        let measureSpan = document.getElementById('measure-span');
        if (!measureSpan) {
            measureSpan = document.createElement('span');
            measureSpan.id = 'measure-span';
            measureSpan.style.visibility = 'hidden';
            measureSpan.style.position = 'absolute';
            measureSpan.style.whiteSpace = 'pre';
            measureSpan.style.fontFamily = getComputedStyle(this.terminalInput).fontFamily;
            measureSpan.style.fontSize = getComputedStyle(this.terminalInput).fontSize;
            document.body.appendChild(measureSpan);
        }
        measureSpan.textContent = value;
        // Get the left offset of the input
        const inputRect = this.terminalInput.getBoundingClientRect();
        const lineRect = inputLine.getBoundingClientRect();
        const offset = measureSpan.offsetWidth;
        // Move the cursor
        cursor.style.position = 'absolute';
        cursor.style.left = (this.terminalInput.offsetLeft + offset + 2) + 'px';
        cursor.style.top = this.terminalInput.offsetTop + 'px';
        cursor.style.height = this.terminalInput.offsetHeight + 'px';
        cursor.style.lineHeight = this.terminalInput.offsetHeight + 'px';
        cursor.style.display = 'inline-block';
    }
    
    handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.executeCommand();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateHistory('up');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateHistory('down');
        }
    }
    
    navigateHistory(direction) {
        const commands = this.commandHistory.filter(cmd => cmd !== 'init');
        
        if (direction === 'up' && commands.length > 0 && this.historyIndex < commands.length - 1) {
            this.historyIndex++;
            this.terminalInput.value = commands[commands.length - 1 - this.historyIndex];
            this.currentInput = this.terminalInput.value;
        } else if (direction === 'down') {
            if (this.historyIndex > 0) {
                this.historyIndex--;
                this.terminalInput.value = commands[commands.length - 1 - this.historyIndex];
                this.currentInput = this.terminalInput.value;
            } else if (this.historyIndex === 0) {
                this.historyIndex = -1;
                this.terminalInput.value = '';
                this.currentInput = '';
            }
        }
    }
    
    executeCommand() {
        if (this.currentInput.trim() === '' || this.isTyping) return;

        const command = this.currentInput.toLowerCase().trim();

        if (command === 'clear') {
            this.clearTerminal();
            // After clear, show a new prompt
            this.addNewPrompt();
        } else {
            this.addCommand(this.currentInput, command);
        }

        this.terminalInput.value = '';
        this.currentInput = '';
        this.historyIndex = -1;
        this.commandHistory.push(command);
        // Hide placeholder after command
        this.terminalInput.setAttribute('placeholder', '');
    }

    addNewPrompt() {
        // Remove the old input line
        const oldInputLine = document.querySelector('.input-line');
        if (oldInputLine) oldInputLine.remove();
        // Create a new input line at the bottom
        const inputLine = document.createElement('div');
        inputLine.className = 'input-line';
        inputLine.innerHTML = `
            <span class="prompt">yakini@portfolio:~$</span>
            <input type="text" id="terminal-input" class="terminal-input" placeholder="Type a command..." autocomplete="off" spellcheck="false">
            <span class="cursor">▋</span>
        `;
        this.terminalContent.appendChild(inputLine);
        this.terminalInput = inputLine.querySelector('.terminal-input');
        this.setupEventListeners();
        setTimeout(() => this.terminalInput.focus(), 100);
    }

    addCommand(inputCommand, command) {
        // Add command prompt
        const commandDiv = document.createElement('div');
        commandDiv.className = 'command-output';
        
        const promptDiv = document.createElement('div');
        promptDiv.className = 'command-prompt';
        promptDiv.innerHTML = `<span class="prompt-text">yakini@portfolio:~$</span> <span class="command-text">${inputCommand}</span>`;
        
        commandDiv.appendChild(promptDiv);
        
        // Add output container
        const outputDiv = document.createElement('div');
        outputDiv.className = 'output-text';
        commandDiv.appendChild(outputDiv);
        
        this.terminalOutput.appendChild(commandDiv);
        
        // Type output
        const output = this.commands[command] || [
            `Command not found: ${inputCommand}`,
            'Type "help" to see available commands.'
        ];
        
        this.typeOutput(outputDiv, output);
    }
    
    typeOutput(container, lines) {
        this.isTyping = true;
        this.terminalInput.disabled = true;
        let lineIndex = 0;
        let charIndex = 0;
        const typeChar = () => {
            if (lineIndex >= lines.length) {
                this.isTyping = false;
                this.terminalInput.disabled = false;
                // After output, add a new prompt/input line
                this.addNewPrompt();
                this.scrollToBottom();
                return;
            }
            
            const currentLine = lines[lineIndex];
            
            if (charIndex <= currentLine.length) {
                const lineDiv = container.children[lineIndex] || document.createElement('div');
                if (!lineDiv.parentNode) {
                    lineDiv.className = 'output-line';
                    if (currentLine.startsWith('=')) {
                        lineDiv.className += ' header';
                    } else if (currentLine.includes('████')) {
                        lineDiv.className += ' skill-bar';
                    }
                    container.appendChild(lineDiv);
                }
                
                lineDiv.textContent = currentLine.substring(0, charIndex);
                
                if (charIndex === currentLine.length) {
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeChar, 50);
                } else {
                    charIndex++;
                    setTimeout(typeChar, Math.random() * 30 + 10);
                }
            }
        };
        
        typeChar();
    }
    
    clearTerminal() {
        this.terminalOutput.innerHTML = '';
    }
    
    showWelcomeMessage() {
        const welcomeLines = [
            'Welcome to my interactive \'AI powered\' portfolio terminal!',
            'Type \'help\' to see available commands.',
            '',
        ];
        
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'command-output';
        
        const outputDiv = document.createElement('div');
        outputDiv.className = 'output-text';
        welcomeDiv.appendChild(outputDiv);
        
        this.terminalOutput.appendChild(welcomeDiv);
        this.typeOutput(outputDiv, welcomeLines);
    }
    
    scrollToBottom() {
        this.terminalContent.scrollTop = this.terminalContent.scrollHeight;
    }
    
    startClock() {
        const updateClock = () => {
            const now = new Date();
            const timeString = now.toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            this.clockElement.textContent = timeString;
        };
        
        updateClock();
        setInterval(updateClock, 1000);
    }
    
    setupFloatingCard() {
        let mousePosition = { x: 0, y: 0 };
        let isHovered = false;
        
        const handleMouseMove = (e) => {
            if (!isHovered) return;
            
            const rect = this.floatingCard.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) / (rect.width / 2);
            const deltaY = (e.clientY - centerY) / (rect.height / 2);
            
            mousePosition.x = deltaX * 15;
            mousePosition.y = deltaY * 15;
            
            this.floatingCard.style.transform = `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.05)`;
        };
        
        this.floatingCard.addEventListener('mouseenter', () => {
            isHovered = true;
            document.addEventListener('mousemove', handleMouseMove);
        });
        
        this.floatingCard.addEventListener('mouseleave', () => {
            isHovered = false;
            mousePosition = { x: 0, y: 0 };
            this.floatingCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            document.removeEventListener('mousemove', handleMouseMove);
        });
    }
    
    createFloatingParticles() {
        const particlesContainer = document.getElementById('floating-particles');
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.animationDuration = (2 + Math.random() * 3) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }
}

// Initialize the terminal portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TerminalPortfolio();
});
