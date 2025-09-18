import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const TerminalComponent = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const matrix = `
  ▄████▄   ▒█████  ▓█████▄ ▓█████ 
  ▒██▀ ▀█  ▒██▒  ██▒▒██▀ ██▌▓█   ▀ 
  ▒▓█    ▄ ▒██░  ██▒░██   █▌▒███   
  ▒▓▓▄ ▄██▒▒██   ██░░▓█▄   ▌▒▓█  ▄ 
  ▒ ▓███▀ ░░ ████▓▒░░▒████▓ ░▒████▒
  ░ ░▒ ▒  ░░ ▒░▒░▒░  ▒▒▓  ▒ ░░ ▒░ ░
    ░  ▒     ░ ▒ ▒░  ░ ▒  ▒  ░ ░  ░
  ░        ░ ░ ░ ▒   ░ ░  ░    ░   
  ░ ░          ░ ░     ░       ░  ░
  ░                  ░             
  `;

  const commands = {
    help: () => `Available commands:
  whoami    - Learn about me
  skills    - My technical expertise
  secret    - Try to find the hidden message
  matrix    - Enter the matrix
  clear     - Clear terminal
  echo      - Repeat your message`,
    
    whoami: () => `Identity: 0xZKc0de
Status: Exploring the digital realm
Mission: Breaking boundaries in cybersecurity

I navigate through the complex landscapes of digital security,
finding vulnerabilities where others see only code.`,
    
    skills: () => `[SKILLS LOADED...]
=====================
OFFENSIVE SECURITY
└─⊳ Penetration Testing
└─⊳ Red Teaming
└─⊳ Exploit Development

DEFENSIVE MEASURES
└─⊳ Incident Response
└─⊳ Malware Analysis
└─⊳ Threat Hunting`,
    
    matrix: () => matrix,
    
    secret: () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
      let result = '';
      for(let i = 0; i < 50; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return `Decoding sequence initiated...
${result}
[ACCESS DENIED] - Nice try! 😉`;
    },

    clear: () => {
      setHistory([]);
      return '';
    },

    echo: (args: string) => args || ''
  };

  const handleCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().toLowerCase().split(' ');
    const output = commands[command as keyof typeof commands]?.(args.join(' ')) || 
      `Command not found: ${command}. Type 'help' for available commands.`;
    
    setHistory(prev => [...prev, `> ${cmd}`, output]);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
        <div className="terminal-title">0xZKc0de@cybersec:~</div>
      </div>
      
      <div className="terminal-body" ref={terminalRef}>
        <div className="boot-sequence">
          {`System booted successfully...
Type 'help' for available commands.
`}
        </div>
        
        {history.map((line, i) => (
          <div key={i} className={`terminal-line ${line.startsWith('>') ? 'command' : 'output'}`}>
            {line}
          </div>
        ))}
        
        <div className="terminal-prompt">
          <span className="prompt-symbol">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && currentCommand) {
                handleCommand(currentCommand);
                setCurrentCommand('');
              }
            }}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalComponent;