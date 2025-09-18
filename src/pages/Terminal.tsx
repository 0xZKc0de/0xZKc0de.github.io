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
  ╔══════════════════╗
  ║   0xZK.c0de     ║
  ║ -=-=-=-=-=-=-   ║
  ║ ZeRo KnOwLeDgE  ║
  ║ CoDe  MaStEr    ║
  ╚══════════════════╝
`;

const TerminalPage: React.FC = () => {
  const [history, setHistory] = React.useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to 0xZKc0de\'s Terminal' },
    { type: 'output', content: 'Type "help" for available commands' }
  ]);
  const [input, setInput] = React.useState('');
  const bottomRef = React.useRef<HTMLDivElement>(null);

  const commands = {
    help: () => `Available commands:
help     - Show this help message
about    - Who am I?
skills   - My technical skills
projects - View my projects
contact  - How to reach me
clear    - Clear terminal
exit     - Exit to dashboard`,
    
    about: () => `${aboutArt}
[IDENTITY VERIFIED]
===================
Codename: 0xZKc0de
Status: Active
Specialization: Cybersecurity Research
Mission: Breaking boundaries in digital security

"I navigate through the complex landscapes of digital security,
finding vulnerabilities where others see only code."`,
    
    skills: () => `[SKILL MATRIX LOADED]
=====================
OFFENSIVE SECURITY
└─⊳ Penetration Testing
└─⊳ Red Teaming
└─⊳ Exploit Development

DEFENSIVE MEASURES
└─⊳ Incident Response
└─⊳ Malware Analysis
└─⊳ Threat Hunting`,
    
    projects: () => `[PROJECT DATABASE]
=================
1. Project GHOST - Advanced Network Scanner
2. Binary Ninja - Exploitation Framework
3. Digital Fortress - Security Testing Lab

[ACCESS LEVEL: RESTRICTED]
More details available upon request...`,
    
    contact: () => `[SECURE CHANNELS]
=================
→ GitHub: github.com/0xZKc0de
→ Signal: [ENCRYPTED]
→ Matrix: @0xZKc0de:matrix.org

[TRANSMISSION ENDS]`,
    
    clear: () => {
      setHistory([]);
      return '';
    },
    
    exit: () => {
      window.location.href = '#/dashboard';
      return 'Exiting terminal...';
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    // Add the command to history
    setHistory(prev => [...prev, { type: 'input', content: cmd }]);
    
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
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
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
        <TerminalBody>
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