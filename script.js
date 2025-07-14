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
                'About Beni Yakini',
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

        // Hide native caret
        this.terminalInput.style.caretColor = 'transparent';

        // Add fake blinking cursor logic
        this.fakeCursor = document.querySelector('.cursor');
        this.terminalInput.addEventListener('focus', () => {
            this.fakeCursor.style.display = 'inline';
            this.moveFakeCursor();
        });
        this.terminalInput.addEventListener('blur', () => {
            this.fakeCursor.style.display = 'none';
        });

        // Auto-focus terminal input
        document.addEventListener('click', () => {
            if (!this.isTyping) {
                this.terminalInput.focus();
            }
        });

        // Initial focus
        setTimeout(() => this.terminalInput.focus(), 100);
    }

    moveFakeCursor() {
        // Move the fake cursor horizontally to match the input text length using getBoundingClientRect
        const input = this.terminalInput;
        const cursor = this.fakeCursor;
        // Create a temp span to measure the text width
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.whiteSpace = 'pre';
        tempSpan.style.font = window.getComputedStyle(input).font;
        tempSpan.style.fontFamily = input.style.fontFamily || 'inherit';
        tempSpan.style.fontSize = input.style.fontSize || 'inherit';
        tempSpan.style.fontWeight = input.style.fontWeight || 'inherit';
        tempSpan.style.fontStyle = input.style.fontStyle || 'inherit';
        tempSpan.style.letterSpacing = input.style.letterSpacing || 'inherit';
        tempSpan.textContent = input.value;
        document.body.appendChild(tempSpan);
        // Get the bounding rect of the input and the span
        const inputRect = input.getBoundingClientRect();
        const spanRect = tempSpan.getBoundingClientRect();
        // Calculate left offset relative to input
        // Use input.scrollLeft to account for horizontal scroll
        const left = spanRect.width + input.offsetLeft + input.scrollLeft;
        cursor.style.left = `${left}px`;
        cursor.style.top = `${input.offsetTop + (input.offsetHeight / 2) - (cursor.offsetHeight / 2)}px`;
        document.body.removeChild(tempSpan);
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
        } else {
            this.addCommand(this.currentInput, command);
        }
        
        this.terminalInput.value = '';
        this.currentInput = '';
        this.historyIndex = -1;
        this.commandHistory.push(command);
    }
    
    // --- Welcome message typing with blinking cursor ---
    typeOutput(container, lines, withCursor = false) {
        this.isTyping = true;
        this.terminalInput.disabled = true;
        // Hide the main input cursor while typing welcome message
        if (withCursor && this.fakeCursor) {
            this.fakeCursor.style.display = 'none';
        }
        let lineIndex = 0;
        let charIndex = 0;
        const typeChar = () => {
            if (lineIndex >= lines.length) {
                this.isTyping = false;
                this.terminalInput.disabled = false;
                this.terminalInput.focus();
                this.scrollToBottom();
                // Show the main input cursor after welcome message is done
                if (withCursor && this.fakeCursor) {
                    this.fakeCursor.style.display = 'inline';
                }
                // Remove the animated cursor from the welcome message
                const allMovingCursors = container.querySelectorAll('.cursor');
                allMovingCursors.forEach(c => c.remove());
                return;
            }
            const currentLine = lines[lineIndex];
            let lineDiv = container.children[lineIndex] || document.createElement('div');
            if (!lineDiv.parentNode) {
                lineDiv.className = 'output-line';
                if (currentLine.startsWith('=')) {
                    lineDiv.className += ' header';
                } else if (currentLine.includes('████')) {
                    lineDiv.className += ' skill-bar';
                }
                container.appendChild(lineDiv);
            }
            // Create wrapper span if not exists
            if (withCursor) {
                if (!lineDiv.querySelector('.text-with-cursor')) {
                    const spanWrap = document.createElement('span');
                    spanWrap.className = 'text-with-cursor';
                    lineDiv.appendChild(spanWrap);
                }
                const spanWrap = lineDiv.querySelector('.text-with-cursor');
                spanWrap.innerHTML = currentLine.substring(0, charIndex) + '<span class="cursor">▋</span>';
            } else {
                lineDiv.textContent = currentLine.substring(0, charIndex);
            }
            this.scrollToBottom();
            if (charIndex === currentLine.length) {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeChar, 50);
            } else {
                charIndex++;
                setTimeout(typeChar, Math.random() * 30 + 10);
            }
        };
        typeChar();
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
        this.scrollToBottom();
        // Type output
        const output = this.commands[command] || [
            `<span class=\"error-line\">❗ Command not recognized: ${inputCommand}</span>`,
            `<span class=\"hint-line\">Type <b>help</b> to see available commands.</span>`
        ];
        this.typeOutputHTML(outputDiv, output);
    }

    // New: typeOutputHTML for HTML output (error/hint)
    typeOutputHTML(container, lines) {
        this.isTyping = true;
        this.terminalInput.disabled = true;
        let lineIndex = 0;
        let charIndex = 0;
        const typeChar = () => {
            if (lineIndex >= lines.length) {
                this.isTyping = false;
                this.terminalInput.disabled = false;
                this.terminalInput.focus();
                this.scrollToBottom();
                return;
            }
            const currentLine = lines[lineIndex];
            let lineDiv = container.children[lineIndex] || document.createElement('div');
            if (!lineDiv.parentNode) {
                lineDiv.className = 'output-line';
                container.appendChild(lineDiv);
            }
            lineDiv.innerHTML = currentLine.substring(0, charIndex);
            this.scrollToBottom();
            if (charIndex === currentLine.length) {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeChar, 50);
            } else {
                charIndex++;
                setTimeout(typeChar, Math.random() * 30 + 10);
            }
        };
        typeChar();
    }
    
    showWelcomeMessage() {
        const welcomeLines = [
            "Welcome to my interactive 'AI powered' portfolio terminal!",
            "Type 'help' to see available commands.",
            '',
        ];
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'command-output';
        const outputDiv = document.createElement('div');
        outputDiv.className = 'output-text';
        welcomeDiv.appendChild(outputDiv);
        this.terminalOutput.appendChild(welcomeDiv);
        this.typeOutput(outputDiv, welcomeLines, true); // pass true for blinking cursor
    }
    
    clearTerminal() {
        this.terminalOutput.innerHTML = '';
        this.scrollToBottom();
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
