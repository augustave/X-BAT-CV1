import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const BOOT_LINES = [
  { text: 'SYS INIT .............. OK', delay: 0 },
  { text: 'BIOS  DEADLIGHT-CVA/ARM64  v3.2.1', delay: 120 },
  { text: 'MEM   262144K ......... VERIFIED', delay: 80 },
  { text: '', delay: 60 },
  { text: 'LOADING HULL GEOMETRY .............. CVA-001-GA', delay: 100 },
  { text: 'LOADING HANGAR ARRANGEMENT ........ CVA-003-HD', delay: 80 },
  { text: 'LOADING SIDE ELEVATION ............ CVA-002-SE', delay: 80 },
  { text: 'LOADING MIDSHIP SECTION ........... CVA-004-MS', delay: 80 },
  { text: '', delay: 40 },
  { text: 'HIVEMIND INFERENCE STACK .......... STANDBY', delay: 120 },
  { text: 'EDGE COMPUTE NODE ................. ONLINE', delay: 80 },
  { text: 'SWARM AUTONOMY LAYER .............. ARMED', delay: 100 },
  { text: '', delay: 40 },
  { text: 'DRONE OPS  120+ AIRFRAMES  3-TIER MODULAR', delay: 100 },
  { text: 'SORTIE RATE  32/HR SUSTAINED', delay: 80 },
  { text: 'CREW  45  (AUTONOMOUS OPS)', delay: 80 },
  { text: '', delay: 60 },
  { text: 'DoDD 3000.09 COMPLIANCE ........... VERIFIED', delay: 120 },
  { text: 'CIC HUMAN-MACHINE TEAMING ......... ACTIVE', delay: 100 },
  { text: '', delay: 80 },
  { text: '// SHIELD AI x ANP STUDIO', delay: 60 },
  { text: '// X-BAT CVA-1 — DEADLIGHT CLASS', delay: 80 },
  { text: '// SYS VIEWER v1.0 READY', delay: 120 },
];

const CHAR_SPEED = 12; // ms per character

interface Props {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: Props) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);
  const [skipped, setSkipped] = useState(false);

  const skip = useCallback(() => {
    if (!skipped) {
      setSkipped(true);
      setLines(BOOT_LINES.map(l => l.text));
      setDone(true);
    }
  }, [skipped]);

  // Character-by-character typing
  useEffect(() => {
    if (skipped) return;
    if (currentLine >= BOOT_LINES.length) {
      setDone(true);
      return;
    }

    const line = BOOT_LINES[currentLine];

    if (line.text === '') {
      // Empty line — just add it and move on
      const timer = setTimeout(() => {
        setLines(prev => [...prev, '']);
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, line.delay);
      return () => clearTimeout(timer);
    }

    if (currentChar === 0) {
      // Start of a new line — add empty string, then start typing after delay
      if (lines.length <= currentLine) {
        setLines(prev => [...prev, '']);
      }
      const timer = setTimeout(() => {
        setCurrentChar(1);
      }, line.delay);
      return () => clearTimeout(timer);
    }

    if (currentChar <= line.text.length) {
      const timer = setTimeout(() => {
        setLines(prev => {
          const updated = [...prev];
          updated[currentLine] = line.text.slice(0, currentChar);
          return updated;
        });
        setCurrentChar(prev => prev + 1);
      }, CHAR_SPEED);
      return () => clearTimeout(timer);
    }

    // Line complete — move to next
    setCurrentLine(prev => prev + 1);
    setCurrentChar(0);
  }, [currentLine, currentChar, skipped, lines.length]);

  // Auto-dismiss after done
  useEffect(() => {
    if (done) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [done, onComplete]);

  // Skip on any key or click
  useEffect(() => {
    const handler = () => skip();
    window.addEventListener('keydown', handler);
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      window.removeEventListener('click', handler);
    };
  }, [skip]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-center film-grain"
      style={{ backgroundColor: '#0a0a0b' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines" />

      {/* Terminal output */}
      <div className="px-8 md:px-16 lg:px-24 max-w-[800px]">
        <div className="font-mono text-[11px] md:text-[13px] leading-[1.7] tracking-[0.06em]">
          {lines.map((line, i) => (
            <div key={i} style={{ minHeight: '1.7em' }}>
              {line === '' ? (
                <br />
              ) : (
                <span
                  style={{
                    color: line.startsWith('//')
                      ? '#8FA388'
                      : line.includes('ARMED') || line.includes('ACTIVE') || line.includes('READY')
                        ? '#8FA388'
                        : line.includes('OK') || line.includes('VERIFIED') || line.includes('ONLINE')
                          ? '#6b7264'
                          : '#4a4f44',
                  }}
                >
                  {line}
                  {i === currentLine && !done && (
                    <span
                      className="inline-block w-[7px] h-[13px] ml-[1px] align-middle"
                      style={{
                        backgroundColor: '#8FA388',
                        animation: 'cursor-blink 0.6s step-end infinite',
                      }}
                    />
                  )}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Skip hint */}
        {!done && (
          <div
            className="mt-8 font-mono text-[9px] tracking-[0.15em] uppercase"
            style={{ color: '#3a3b36' }}
          >
            PRESS ANY KEY TO SKIP
          </div>
        )}
      </div>

      {/* Hardware bezel border */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '3px solid #1F2022',
          boxShadow: 'inset 0 0 0 1px #2a2b2d',
        }}
      />
    </motion.div>
  );
}
