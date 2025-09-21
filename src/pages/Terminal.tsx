import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Terminal = styled.div`
  width: 90vw;
  max-width: 800px;
  height: 80vh;
  background-color: rgba(0, 20, 0, 0.9);
  border-radius: 10px;
  border: 1px solid #00ff00;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const TerminalHeader = styled.div`
  background-color: #1a1a1a;
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #00ff00;
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 15px;
`;

const Button = styled.span<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const Title = styled.div`
  color: #00ff00;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
`;

const TerminalBody = styled.div`
  flex: 1;
  padding: 20px;
  font-family: 'JetBrains Mono', monospace;
  color: #00ff00;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.8);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  &::-webkit-scrollbar-thumb {
    background: #00ff00;
    border-radius: 4px;
  }
`;

const Output = styled.div`
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
`;

const Prompt = styled.span`
  color: #00ff00;
  margin-right: 8px;
`;

const InputField = styled.input`
  background: transparent;
  border: none;
  color: #00ff00;
  font-family: 'JetBrains Mono', monospace;
  font-size: inherit;
  flex-grow: 1;
  outline: none;
`;

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
}

const aboutArt = `
  ██████╗ ██╗  ██╗██╗  ██╗ ██████╗ ██████╗ ██████╗ ███████╗
  ╚══███╔╝╚██╗██╔╝╚██╗██╔╝██╔═══██╗██╔══██╗██╔══██╗██╔════╝
    ███╔╝  ╚███╔╝  ╚███╔╝ ██║   ██║██║  ██║██║  ██║█████╗  
   ███╔╝   ██╔██╗  ██╔██╗ ██║   ██║██║  ██║██║  ██║██╔══╝  
  ███████╗██╔╝ ██╗██╔╝ ██╗╚██████╔╝██████╔╝██████╔╝███████╗
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
`;

const TerminalPage: React.FC = () => {
  const [history, setHistory] = React.useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to 0xZKc0de\'s Terminal' },
    { type: 'output', content: 'Type "help" for available commands' }
  ]);
  const [input, setInput] = React.useState('');
  const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const terminalBodyRef = React.useRef<HTMLDivElement>(null);

  const commands = {
    help: () => `Available commands:
help     - Show this help message
about    - Who am I?
skills   - My technical skills
projects - View my projects
clear    - Clear terminal
exit     - Exit to dashboard`,
    
    about: () => `${aboutArt}
[PROFILE LOADED]
================
Name: 0xZKc0de
Status: Active Developer
Interests: High-Quality Software Development
Passion: Problem Solving & System Optimization

[FOCUS AREAS]
=============
• Developing robust and efficient software solutions
• Solving complex technical challenges
• Low-level system programming and optimization
• Creating clean, maintainable code
• Exploring the depths of computer systems
• PWN (Binary Exploitation)
• Cryptography and Security Protocols

"From the silent pulse of the binary tide,
a universe of logic awakens in the halls of memory,
where every address is a world waiting to be built or broken."`,
    
    skills: () => `[SKILL MATRIX LOADED]
=====================
CYBER SECURITY
└─⊳ PWN
└─⊳ Reverse Engineering

WEB DEVELOPMENT
└─⊳ Backend Development
└─⊳ Spring Boot Framework
└─⊳ RESTful APIs

COMPETITIVE PROGRAMMING
└─⊳ Algorithm Design
└─⊳ Data Structures
└─⊳ Problem Solving

CRYPTOGRAPHY
└─⊳ Cryptographic Algorithms
└─⊳ Security Protocols
└─⊳ Digital Signatures`,
    
    projects: () => {
      // Open GitHub in new tab
      window.open('https://github.com/0xZKc0de', '_blank');
      return `[PROJECT DATABASE]
=================
All projects are available on GitHub!

[REDIRECTING TO GITHUB...]
==========================
Opening: github.com/0xZKc0de
in a new tab to explore repositories and projects.

[ACCESS LEVEL: PUBLIC]
All source code and documentation available.`;
    },
    
    
    clear: () => {
      setHistory([]);
      return '';
    },
    
    exit: () => {
      window.location.href = '#/dashboard';
      return 'Exiting terminal...';
    }
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    // Add the command to history
    setHistory(prev => [...prev, { type: 'input', content: cmd }]);
    
    // Add to command history if not empty
    if (cmd.trim() !== '') {
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
    }
    
    // Process the command
    if (command in commands) {
      const output = commands[command as keyof typeof commands]();
      if (output) {
        setHistory(prev => [...prev, { type: 'output', content: output }]);
      }
    } else if (command !== '') {
      setHistory(prev => [...prev, { type: 'output', content: `Command not found: ${cmd}` }]);
    }
    
    setInput('');
    scrollToBottom();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <Background>
      <Terminal>
        <TerminalHeader>
          <Buttons>
            <Button color="#ff5f56" />
            <Button color="#ffbd2e" />
            <Button color="#27c93f" />
          </Buttons>
          <Title>0xZKc0de@terminal:~$</Title>
        </TerminalHeader>
        <TerminalBody ref={terminalBodyRef}>
          {history.map((line, index) => (
            <Output key={index}>
              {line.type === 'input' ? (
                <Input>
                  <Prompt>$</Prompt>
                  {line.content}
                </Input>
              ) : (
                line.content
              )}
            </Output>
          ))}
          <Input>
            <Prompt>$</Prompt>
            <InputField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </Input>
          <div ref={bottomRef} />
        </TerminalBody>
      </Terminal>
    </Background>
  );
};

export default TerminalPage;