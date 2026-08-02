import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, TERMINAL_COMMANDS_HELP } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

interface TerminalProps {
  mode: 'inline' | 'modal';
  onClose?: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
  className?: string;
}

interface OutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  text: string | React.ReactNode;
}

export const Terminal: React.FC<TerminalProps> = ({ mode, onClose, onShowToast, className = '' }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [theme, setTheme] = useState<'emerald' | 'monokai' | 'cyberpunk'>('emerald');
  const [outputLines, setOutputLines] = useState<OutputLine[]>([
    {
      id: 'welcome-1',
      type: 'output',
      text: `Maniraj Kyatham Portfolio CLI v2.4 [x86_64-linux]`
    },
    {
      id: 'welcome-2',
      type: 'output',
      text: `Type 'help' to view available commands or 'sudo hire' for recruiter fast-track.`
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const outputContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode === 'modal') {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [mode]);

  useEffect(() => {
    const handleFocusEvent = () => {
      inputRef.current?.focus();
    };
    if (mode === 'inline') {
      window.addEventListener('focus-hero-terminal', handleFocusEvent);
    }
    return () => {
      window.removeEventListener('focus-hero-terminal', handleFocusEvent);
    };
  }, [mode]);

  useEffect(() => {
    const outputContainer = outputContainerRef.current;
    if (outputContainer) {
      outputContainer.scrollTop = outputContainer.scrollHeight;
    }
  }, [outputLines]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newHistory = [...history, trimmed];
    setHistory(newHistory);
    setHistoryIndex(-1);

    const inputLine: OutputLine = {
      id: Math.random().toString(),
      type: 'input',
      text: `maniraj@portfolio:~$ ${trimmed}`
    };

    const lower = trimmed.toLowerCase();
    let resultLine: OutputLine | OutputLine[];

    switch (lower) {
      case 'help':
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1 my-1">
              <div className="text-amber-300 font-semibold mb-1">Available Commands:</div>
              {TERMINAL_COMMANDS_HELP.map((c) => (
                <div key={c.command} className="grid grid-cols-12 gap-2 text-[11px]">
                  <span className="col-span-3 text-emerald-400 font-bold">{c.command}</span>
                  <span className="col-span-9 text-zinc-400">{c.description}</span>
                </div>
              ))}
            </div>
          )
        };
        break;

      case 'about':
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}.\nLocation: ${PERSONAL_INFO.location}\nBio: ${PERSONAL_INFO.bio}\nStatus: ${PERSONAL_INFO.status}`
        };
        break;

      case 'skills':
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1 my-1 text-xs">
              <div className="text-emerald-400 font-semibold">Programming & APIs:</div>
              <div className="text-zinc-300">Python, FastAPI, Flask, REST API Development, HTML5, CSS3, JavaScript, React.js</div>
              <div className="text-emerald-400 font-semibold mt-2">Databases & Querying:</div>
              <div className="text-zinc-300">SQLite, PostgreSQL, Relational DB Design, SQL Query Optimization, CTEs & Window Functions</div>
              <div className="text-emerald-400 font-semibold mt-2">Machine Learning & Tooling:</div>
              <div className="text-zinc-300">Scikit-Learn, Pandas, NumPy, LangChain, ChromaDB, Git, GitHub, Postman, VS Code</div>
            </div>
          )
        };
        break;

      case 'projects':
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-2 my-1 text-xs">
              {PROJECTS.map((p, idx) => (
                <div key={p.id} className="border-b border-zinc-800 pb-1.5">
                  <div className="text-emerald-300 font-bold">
                    {idx + 1}. {p.title} <span className="text-zinc-500 font-normal">[{p.category}]</span>
                  </div>
                  <div className="text-zinc-400 text-[11px]">{p.tagline}</div>
                  <div className="text-zinc-500 text-[10px] font-mono mt-0.5">Stack: {p.tags.join(', ')}</div>
                </div>
              ))}
            </div>
          )
        };
        break;

      case 'exp':
      case 'experience':
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-2 my-1 text-xs">
              {EXPERIENCES.map((e) => (
                <div key={e.id} className="border-b border-zinc-800 pb-1.5">
                  <div className="text-emerald-400 font-bold">{e.role} @ {e.company}</div>
                  <div className="text-zinc-500 text-[11px]">{e.period} • {e.location}</div>
                  <div className="text-zinc-300 text-[11px] mt-0.5">{e.description}</div>
                </div>
              ))}
            </div>
          )
        };
        break;

      case 'contact':
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: `Email: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nGitHub: ${PERSONAL_INFO.github}\nLinkedIn: ${PERSONAL_INFO.linkedin}`
        };
        break;

      case 'cat resume':
      case 'resume':
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: `=== MANIRAJ KYATHAM RESUME SUMMARY ===\nEducation: B.Tech IT (ACE Engineering College, CGPA: 8.36)\nSpecialties: Python, FastAPI, Flask, REST API Development, ML & SQL Query Optimization\nContact: ${PERSONAL_INFO.email}\nStatus: Open to Software Engineering & Python Developer Roles`
        };
        break;

      case 'sudo hire':
        sounds.playSuccess();
        onShowToast('🎉 Recruiter Fast-Track Activated! Contacting Maniraj...', 'success');
        resultLine = {
          id: Math.random().toString(),
          type: 'success',
          text: `[SUCCESS 200 OK] Fast-track recruiter dispatch signal sent!\nManiraj Kyatham is available for hire. Email directly at: ${PERSONAL_INFO.email}`
        };
        break;

      case 'clear':
        setOutputLines([]);
        setInputVal('');
        return;

      case 'quote':
        const quotes = [
          `"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra`,
          `"First, solve the problem. Then, write the code." — John Johnson`,
          `"Make it work, make it right, make it fast." — Kent Beck`
        ];
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: quotes[Math.floor(Math.random() * quotes.length)]
        };
        break;

      case 'theme':
        const nextTheme = theme === 'emerald' ? 'monokai' : theme === 'monokai' ? 'cyberpunk' : 'emerald';
        setTheme(nextTheme);
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: `Terminal color scheme set to: [${nextTheme.toUpperCase()}]`
        };
        break;

      case 'date':
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: new Date().toUTCString()
        };
        break;

      case 'whoami':
        resultLine = {
          id: Math.random().toString(),
          type: 'output',
          text: `maniraj@portfolio`
        };
        break;

      case 'exit':
        if (mode === 'modal' && onClose) {
          onClose();
        } else {
          resultLine = {
            id: Math.random().toString(),
            type: 'output',
            text: `Exit command is only available in modal/popup mode.`
          };
        }
        break;

      default:
        resultLine = {
          id: Math.random().toString(),
          type: 'error',
          text: `Command not found: '${trimmed}'. Type 'help' for available commands.`
        };
        break;
    }

    setOutputLines((prev) => [...prev, inputLine, ...(Array.isArray(resultLine) ? resultLine : [resultLine])]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    sounds.playKeypress();
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      } else {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const themeClasses = {
    emerald: 'bg-[#0D0D0D] text-zinc-200 border-[#222222]',
    monokai: 'bg-stone-950 text-amber-100 border-stone-800',
    cyberpunk: 'bg-slate-950 text-cyan-200 border-purple-800'
  }[theme];

  const terminalBody = (
    <div className={`w-full h-full flex flex-col overflow-hidden ${mode === 'inline' ? 'rounded-2xl border' : ''} ${themeClasses}`}>
      {/* Terminal Header Bar */}
      <div className="px-4 py-3 bg-[#141414] border-b border-[#222222] flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          {mode === 'modal' && onClose ? (
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:opacity-80 transition-opacity flex items-center justify-center text-[10px] text-black font-bold focus:outline-none focus:ring-1 focus:ring-[#D1FF26]"
              aria-label="Close Terminal"
            />
          ) : (
            <div className="w-3.5 h-3.5 rounded-full bg-zinc-700" />
          )}
          <button
            onClick={() => handleCommand('theme')}
            className="w-3.5 h-3.5 rounded-full bg-amber-500 hover:opacity-80 transition-opacity focus:outline-none focus:ring-1 focus:ring-[#D1FF26]"
            aria-label="Toggle Theme"
          />
          <button
            onClick={() => handleCommand('clear')}
            className="w-3.5 h-3.5 rounded-full bg-[#D1FF26] hover:opacity-80 transition-opacity focus:outline-none focus:ring-1 focus:ring-[#D1FF26]"
            aria-label="Clear Screen"
          />
          <span className="min-w-0 text-xs font-mono text-zinc-400 ml-2 flex items-center gap-1">
            <TerminalIcon className="w-3.5 h-3.5 text-[#D1FF26]" />
            <span className="text-zinc-200 font-bold truncate">maniraj@portfolio:~ (bash)</span>
          </span>
        </div>

        {mode === 'modal' && onClose && (
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-[#D1FF26]"
            aria-label="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Terminal Body */}
      <div
        onClick={() => inputRef.current?.focus()}
        ref={outputContainerRef}
        className="flex-1 p-5 overflow-y-auto font-mono text-xs leading-relaxed space-y-2 cursor-text bg-[#0D0D0D]"
      >
        {outputLines.map((line) => (
          <div
            key={line.id}
            className={`whitespace-pre-wrap ${
              line.type === 'input'
                ? 'text-zinc-400 font-semibold'
                : line.type === 'error'
                ? 'text-rose-400 font-bold'
                : line.type === 'success'
                ? 'text-[#D1FF26] font-extrabold'
                : 'text-zinc-300'
            }`}
          >
            {line.text}
          </div>
        ))}

        {/* Interactive Input Line */}
        <div className="flex items-center gap-2 text-[#D1FF26] pt-1">
          <span className="font-extrabold shrink-0">maniraj@portfolio:~$</span>
          <label htmlFor={`terminal-input-${mode}`} className="sr-only">Terminal Input</label>
          <input
            id={`terminal-input-${mode}`}
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent border-none outline-none text-zinc-100 font-mono text-xs focus:ring-0 p-0 font-bold"
            autoFocus={mode === 'modal'}
            spellCheck={false}
            autoComplete="off"
          />
        </div>

      </div>

      {/* Footer Quick Commands */}
      <div className="px-4 py-2 bg-[#141414] border-t border-[#222222] text-[11px] font-mono text-zinc-400 flex flex-wrap gap-2 items-center justify-between">
        <div>
          Try: <button onClick={() => handleCommand('help')} className="text-[#D1FF26] font-bold underline cursor-pointer">help</button> • <button onClick={() => handleCommand('projects')} className="text-[#D1FF26] font-bold underline cursor-pointer">projects</button> • <button onClick={() => handleCommand('sudo hire')} className="text-[#D1FF26] font-black underline cursor-pointer">sudo hire</button>
        </div>
        <div>Theme: {theme}</div>
      </div>
    </div>
  );

  return mode === 'modal' ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className={`w-full max-w-3xl h-[520px] shadow-2xl flex flex-col overflow-hidden ${className}`}>
        {terminalBody}
      </div>
    </div>
  ) : (
    <div className={`w-full h-full min-h-[400px] lg:h-[450px] flex flex-col overflow-hidden ${className}`} id="hero-terminal">
      {terminalBody}
    </div>
  );
};
