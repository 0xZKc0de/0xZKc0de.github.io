import { ReactNode } from "react";

interface TerminalBlockProps {
  children: ReactNode;
  title?: string;
}

export const TerminalBlock = ({ children, title = "Shell" }: TerminalBlockProps) => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="text-xs text-muted-foreground ml-2">{title}</span>
      </div>
      <div className="text-terminal-text">
        {children}
      </div>
    </div>
  );
};

interface CommandLineProps {
  command: string;
  output?: ReactNode;
  lineNumber?: number;
}

export const CommandLine = ({ command, output, lineNumber }: CommandLineProps) => {
  return (
    <div className="mb-2">
      <div className="flex">
        {lineNumber && (
          <span className="text-muted-foreground mr-2 select-none text-right w-6">
            {lineNumber}
          </span>
        )}
        <span className="text-primary">$ </span>
        <span className="highlight-command">{command}</span>
      </div>
      {output && (
        <div className="ml-8 mt-1 text-foreground">
          {output}
        </div>
      )}
    </div>
  );
};