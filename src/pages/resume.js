import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/comps/resume/resume.module.css';
import Character from '../components/resume/character';



const CybersecurityResume = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [commandLine, setCommandLine] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeSection, setActiveSection] = useState('about');
  const [isScanning, setIsScanning] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({
    linesOfCode: 0,
    bugsFixed: 0,
    systemsProtected: 0,
    threatsBlocked: 1337,
    yearsofCoding: 0,
    projectsCompleted: 0,
    leadershipRoles: 0
  });
  const [output, setOutput] = useState([]);
  const canvasRef = useRef(null);
  const matrixCanvasRef = useRef(null);

  const bootSequence = [
    'INITIALIZING SECURE CONNECTION...',
    'ESTABLISHING ENCRYPTED TUNNEL...',
    'LOADING ENCRYPTION PROTOCOLS...',
    'RSA-4096 KEY EXCHANGE COMPLETE',
    'VERIFYING DIGITAL SIGNATURE...',
    'AUTHENTICATING USER CREDENTIALS...',
    'BIOMETRIC SCAN: VERIFIED',
    'LOADING FIREWALL RULES...',
    'STARTING INTRUSION DETECTION SYSTEM...',
    'MOUNTING SECURE FILE SYSTEM...',
    'INITIALIZING THREAT MONITORING...',
    'ALL SYSTEMS NOMINAL',
    'ACCESS GRANTED',
  ];

  const themes = {
    green: { primary: '#00ff00', shadow: 'rgba(0, 255, 0, 0.3)' }
  };

  useEffect(() => {
    // Animate stats counting
    const intervals = [];
    intervals.push(setInterval(() => {
      setStats(prev => ({ ...prev, linesOfCode: Math.min(prev.linesOfCode + 157, 30000) }));
    }, 50));
    intervals.push(setInterval(() => {
      setStats(prev => ({ ...prev, bugsFixed: Math.min(prev.bugsFixed + 3, 300) }));
    }, 100));
    intervals.push(setInterval(() => {
      setStats(prev => ({ ...prev, systemsProtected: Math.min(prev.systemsProtected + 1, 50) }));
    }, 150));
    intervals.push(setInterval(() => {
      setStats(prev => ({ ...prev, yearsofCoding: Math.min(prev.yearsofCoding + 1, 6) }));
    }, 150));
    intervals.push(setInterval(() => {
      setStats(prev => ({ ...prev, projectsCompleted: Math.min(prev.projectsCompleted + 1, 6) }));
    }, 150));
    intervals.push(setInterval(() => {
      setStats(prev => ({ ...prev, leadershipRoles: Math.min(prev.leadershipRoles + 1, 3) }));
    }, 150));

    setTimeout(() => setFadeOut(true), 6000);
    setTimeout(() => setIsBooted(true), 6500);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle network
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const particleCount = 80;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5
        });
      }

      const animate = () => {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        const currentTheme = themes.green;
        ctx.fillStyle = currentTheme.primary;
        ctx.strokeStyle = currentTheme.shadow;

        particles.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();

          particles.slice(i + 1).forEach(p2 => {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          });
        });

        requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      intervals.forEach(clearInterval);
    };
  }, []);

  // Matrix rain effect (always on)
  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = themes.green.primary;
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    setCommandHistory([...commandHistory, cmd]);
    setHistoryIndex(-1);

    let response = '';

    switch (command) {
      case 'help':
        response = `Available commands:
> help - Show this help menu
> clear - Clear terminal output
> whoami - Display user info
> ls - List sections
> stats - Show statistics
> hack - Initiate hacking sequence
> nuke - Launch cyber nuke
> about/skills/experience/certs/contact - Navigate to section`;
        break;
      case 'clear':
        setOutput([]);
        setCommandLine('');
        return;
      case 'whoami':
        response = '> User: Raymond Lin\n> Clearance: Top Secret//SCI\n> Role: Cybersecurity Specialist';
        break;
      case 'ls':
        response = '> about  skills  experience  certs  contact';
        break;
      case 'stats':
        response = `> Lines of Code: ${stats.linesOfCode.toLocaleString()}
> Bugs Fixed: ${stats.bugsFixed}
> Systems Protected: ${stats.systemsProtected}
> Threats Blocked: ${stats.threatsBlocked}`;
        break;
      case 'hack':
        response = '> Initiating penetration test...\n> Target acquired: 192.168.1.1\n> Exploiting vulnerabilities...\n> [████████████] 100%\n> ACCESS GRANTED ✓';
        break;
      case 'nuke':
        response = '> ⚠️  CYBER NUKE ARMED ⚠️\n> Target locked...\n> Launching in 3... 2... 1...\n> 💥 FIREWALL OBLITERATED 💥';
        break;
      default:
        if (['about', 'skills', 'experience', 'certs', 'contact'].includes(command)) {
          setActiveSection(command);
          response = `> Navigating to ${command.toUpperCase()} section...`;
        } else {
          response = `> Command not found: ${cmd}\n> Type 'help' for available commands`;
        }
    }

    setOutput([...output, { command: cmd, response }]);
    setCommandLine('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(commandLine);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommandLine(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommandLine(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setCommandLine('');
      }
    }
  };

const sections = {
    about: {
      title: '$ cat profile.txt',
      content: (
        <div className={styles.sectionContent}>
          <p className={styles.highlight}>&gt; IDENTITY: Raymond Lin</p>
          <p className={styles.highlight}>&gt; ROLE: Cybersecurity Analyst | Malware Analyst</p>
          <p className={styles.highlight}>&gt; CLEARANCE: Top Secret // SCI</p>
          <p style={{marginTop: '16px'}}>
            Welcome to my digital resume! I'm passionate about creating solutions, leading teams, and exploring new technology. From different game experiences to intelligent AI tools, I transform hard challenges into beautiful, functional code.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stats.linesOfCode.toLocaleString()}</div>
              <div className={styles.statLabel}>Lines of Code</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stats.bugsFixed}</div>
              <div className={styles.statLabel}>Bugs Fixed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stats.systemsProtected}</div>
              <div className={styles.statLabel}>Systems Protected</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stats.yearsofCoding}</div>
              <div className={styles.statLabel}>Years Of Coding</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stats.projectsCompleted}</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stats.leadershipRoles}</div>
              <div className={styles.statLabel}>Leadership Roles</div>
            </div>
          </div>
        </div>
      )
    },
    skills: {
      title: '$ ls skills/',
      content: (
        <div className={styles.skillsGrid}>
          <div>
            <p className={styles.highlight} style={{marginBottom: '8px'}}>./offensive/</p>
            <div className={styles.skillTree}>
              <p>├── penetration_testing</p>
              <p>├── exploit_development</p>
              <p>├── social_engineering</p>
              <p>└── red_team_operations</p>
            </div>
          </div>
          <div>
            <p className={styles.highlight} style={{marginBottom: '8px'}}>./defensive/</p>
            <div className={styles.skillTree}>
              <p>├── threat_hunting</p>
              <p>├── incident_response</p>
              <p>├── malware_analysis</p>
              <p>└── SIEM_management</p>
            </div>
          </div>
          <div>
           <p className={styles.highlight} style={{marginBottom: '8px'}}>./tools/</p>
            <div className={styles.skillTree}>
              <p>├── VS Code | IntelliJ | PyCharm</p>
              <p>├── Unity | GitHub | Replit</p>
              <p>└── Postman | Figma</p>
            </div>

          </div>
          <div>
            <p className={styles.highlight} style={{marginBottom: '8px'}}>./languages/</p>
            <div className={styles.skillTree}>
              <p>├── Python | Java | JavaScript</p>
              <p>├── C# | Unity | React</p>
              <p>└── SQL | AI/ML</p>
            </div>
          </div>
        </div>
      )
    },
    experience: {
      title: '$ cat work_history.log',
      content: (
        <div className={styles.sectionContent}>
          <div className={styles.experienceItem}>
            <p className={styles.experienceTitle}>█ Ice Cream Scooper</p>
            <p className={styles.experienceDate}>[2025 - PRESENT]</p>
            <p style={{marginBottom: '8px'}}>Work at a icecream shop scooping icecream and couting customers cash</p>
            <ul className={styles.experienceList}>
              <li>&gt; Scoop IceCream</li>
              <li>&gt; Count Money</li>
              <li>&gt; Eat IceCream</li>
            </ul>
          </div>
          <div className={styles.experienceItem}>
            <p className={styles.experienceTitle}>█ Game Developer</p>
            <p className={styles.experienceDate}>[2024 - PRESENT]</p>
            <p style={{marginBottom: '8px'}}>Using unity and vs code creating simple 2d and 3d games.</p>
            <ul className={styles.experienceList}>
              <li>&gt; creating games</li>
              <li>&gt; testing animations</li>
              <li>&gt; supplementing </li>
            </ul>
          </div>
        </div>
      )
    },
    certs: {
      title: '$ ls achievements/',
      content: (
        <div className={styles.sectionContent}>
          <div className={styles.certCard}>
            <span className={styles.certCheckmark}>✓</span>
            <div>
              <p className={styles.highlight}>Grade 8 Honours</p>
              <p className={styles.textGray}>Academic excellence recognition</p>
            </div>
          </div>
          <div className={styles.certCard}>
            <span className={styles.certCheckmark}>✓</span>
            <div>
              <p className={styles.highlight}>Grade 9 Honour Roll</p>
              <p className={styles.textGray}>Academic achievement recognition</p>
            </div>
          </div>
          <div className={styles.certCard}>
            <span className={styles.certCheckmark}>✓</span>
            <div>
              <p className={styles.highlight}>CCC J1/J2 Perfect Score</p>
              <p className={styles.textGray}>Canadian Computing Competition achievement</p>
            </div>
          </div>

          <div className={styles.certCard}>
            <span className={styles.certCheckmark}>✓</span>
            <div>
              <p className={styles.highlight}>Leadership Roles in SAC & MAC</p>
              <p className={styles.textGray}>Student leadership positions</p>
            </div>
          </div>

          <div className={styles.certCard}>
            <span className={styles.certCheckmark}>✓</span>
            <div>
              <p className={styles.highlight}>Top 10 in LeetCode Contests</p>
              <p className={styles.textGray}>Placed in top 10 in competitive programming</p>
            </div>
          </div>

          <div className={styles.certCard}>
            <span className={styles.certCheckmark}>✓</span>
            <div>
              <p className={styles.highlight}>Top 3 Placement in MSEO (2 Categories)</p>
              <p className={styles.textGray}>Mackenzie Science & Engineering Olympiad</p>
            </div>
          </div>

          <div className={styles.certCard}>
            <span className={styles.certCheckmark}>✓</span>
            <div>
              <p className={styles.highlight}>Top 3 Placement in DIY4Youth Hackathon</p>
              <p className={styles.textGray}>Competitive youth tech innovation challenge</p>
            </div>
          </div>
        </div>

      )
    },
    contact: {
      title: '$ echo $CONTACT_INFO',
      content: (
        <div className={styles.sectionContent}>
          <div className={styles.contactCard}>
            <p className={styles.contactLabel}>&gt; EMAIL:</p>
            <p className={styles.contactValue}>toronto4raymond2010@gmail.com</p>
          </div>
          <div className={styles.contactCard}>
            <p className={styles.contactLabel}>&gt; PGP KEY:</p>
            <p className={styles.contactValue}>4096R/A1B2C3D4</p>
          </div>
          <div className={styles.contactCard}>
            <p className={styles.contactLabel}>&gt; GITHUB:</p>
            <p className={styles.contactValue}>https://github.com/SussyBungus</p>
          </div>
          <div className={styles.contactCard}>
            <p className={styles.contactLabel}>&gt; LINKEDIN:</p>
            <p className={styles.contactValue}>https://www.linkedin.com/in/raymond-lin-11b335376/</p>
          </div>
        </div>
      )
    },
    profile: {
      title: '$dir profile',
      content: (
       <div className={styles.sectionContent}>
          <Character />
</div>
      )
    }
  };

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  if (!isBooted) {
    return (
      <div className={`${styles.bootScreen} ${fadeOut ? styles.fadeOut : ''}`}>
        <div className={styles.bootSequence}>
          <div className={styles.bootHeader}>
            <pre className={styles.asciiLogo}>{` ██████╗██╗   ██╗██████╗ ███████╗██████╗     ███████╗███████╗ ██████╗██╗   ██╗██████╗ ██╗████████╗██╗   ██╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗    ██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██║╚══██╔══╝╚██╗ ██╔╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝    ███████╗█████╗  ██║     ██║   ██║██████╔╝██║   ██║    ╚████╔╝ 
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗    ╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██║   ██║     ╚██╔╝  
╚██████╗   ██║   ██████╔╝███████╗██║  ██║    ███████║███████╗╚██████╗╚██████╔╝██║  ██║██║   ██║      ██║   
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝  

            `}</pre>
            <p className={styles.bootSubtitle}>SECURE BOOT SEQUENCE v3.2.1</p>
            <p className={styles.bootTimestamp}>[{new Date().toISOString()}]</p>
          </div>
          
          <div className={styles.bootProgress}>
            {bootSequence.map((text, i) => (
              <div key={i} className={styles.bootLineWrapper} style={{animationDelay: `${i * 0.4}s`}}>
                <span className={styles.bootBracket}>[</span>
                <span className={styles.bootStatus}>OK</span>
                <span className={styles.bootBracket}>]</span>
                <span className={styles.bootText}>{text}</span>
                <span className={styles.bootDots}>...</span>
              </div>
            ))}
          </div>

          <div className={styles.bootProgressBar}>
            <div className={styles.progressBarFill}></div>
          </div>
          
          <div className={styles.bootFooter}>
            <span className={styles.bootLoading}>LOADING</span>
            <span className={styles.bootSpinner}>█▓▒░</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.cyberResume} ${styles.fadeIn}`} data-theme="green">
      <canvas ref={canvasRef} className={styles.particlesCanvas} />
      <canvas ref={matrixCanvasRef} className={styles.matrixCanvas} />
      
      <div 
        className={styles.cursorGlow}
        style={{
          left: mousePos.x - 128 + 'px',
          top: mousePos.y - 128 + 'px',
        }}
      />

      <div className={styles.container}>
        <div className={styles.terminal}>
          
          <div className={styles.terminalHeader}>
            <div className={styles.terminalButtons}>
              <div className={styles.terminalBtn}></div>
              <div className={styles.terminalBtn}></div>
              <div className={styles.terminalBtn}></div>
            </div>
            <span className={styles.terminalTitle}>SECURE_TERMINAL v2.4.1</span>
            <div className={styles.terminalStatus}>
              <span className={styles.textXs}>ENCRYPTED</span>
              <div className={styles.statusIndicator}></div>
            </div>
          </div>

          <div className={styles.terminalBody}>
            <div className={styles.sidebar}>
              <div className={styles.sidebarTitle}>[ NAVIGATION ]</div>

              {Object.keys(sections).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`${styles.navButton} ${activeSection === key ? styles.active : ''}`}
                >
                  {key.toUpperCase()}
                </button>
              ))}
              
              <div className={styles.scanSection}>
                <button onClick={handleScan} className={styles.scanButton}>
                  {isScanning ? '[SCANNING...]' : '[RUN SCAN]'}
                </button>
              </div>

              {isScanning && (
                <div className={styles.scanOutput}>
                  <p>&gt; Scanning ports...</p>
                  <p>&gt; Checking vulnerabilities...</p>
                  <p className={styles.highlight}>&gt; System secure ✓</p>
                </div>
              )}

            </div>

            <div className={styles.content}>
              <div className={styles.contentHeader}>
                <p className={styles.contentTitle}>{sections[activeSection].title}</p>
                <div className={styles.contentDivider}></div>
              </div>
              
              {sections[activeSection].content}

              <div className={styles.terminalOutput}>
                {output.map((item, i) => (
                  <div key={i} className={styles.outputBlock}>
                    <div className={styles.outputCommand}>
                      <span className={styles.commandPrompt}>root@resume:~$</span> {item.command}
                    </div>
                    <div className={styles.outputResponse}>{item.response}</div>
                  </div>
                ))}
              </div>

              <div className={styles.commandLine}>
                <span className={styles.commandPrompt}>root@resume:~$</span>
                <input
                  type="text"
                  value={commandLine}
                  onChange={(e) => setCommandLine(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={styles.commandInput}
                  placeholder="Type 'help' for commands..."
                />
                <span className={styles.cursorBlink}>_</span>
              </div>
            </div>
          </div>

          <div className={styles.terminalFooter}>
            <div className={styles.footerStats}>
              <span>STATUS: ONLINE</span>
              <span>CONNECTIONS: 42</span>
              <span>THREATS BLOCKED: {stats.threatsBlocked}</span>
            </div>
            <div className={styles.footerStatus}>MONITORING...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityResume;
