"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Cpu, Database, HelpCircle, Power, Play, Search } from "lucide-react";

export function CRTMainframe() {
  const [input, setInput] = useState("");
  const [power, setPower] = useState(true);
  const [history, setHistory] = useState<string[]>([
    "=== IBM z/OS V2.5 DFSMS SYSTEM READY ===",
    "CURRENT USER: ARYAN.GUPTA",
    "CURRENT JOB: SYSTEMS.ENGINEER.INFOSYS.COBOL",
    "TYPE 'HELP' FOR A LIST OF AVAILABLE mainframe COMMANDS.",
    "READY"
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, power]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];

    switch (trimmed) {
      case "help":
        response = [
          "> HELP",
          "AVAILABLE MAINFRAME COMMANDS:",
          "  HELP     - DISPLAY THIS MANUAL",
          "  CLEAR    - CLEAR SYSTEM LOG",
          "  INFOSYS  - RETRIEVE SYSTEMS ENGINEER TRAINING & JOB DETAILS",
          "  COBOL    - RUN SAMPLE MAINFRAME COMPILATION TEST",
          "  JCL      - DISPLAY ACTIVE JOB CONTROL LANGUAGE SCRIPT",
          "  DB2      - EXECUTE TEST QUERY AGAINST DB2 TRANSACTION STORAGE",
          "  SKILLS   - LIST CORE ENTERPRISE SKILLS",
          "  SYSINFO  - REVEAL SYSTEM SPECIFICATIONS"
        ];
        break;
      case "clear":
        setHistory([]);
        return;
      case "sysinfo":
        response = [
          "> SYSINFO",
          "HOSTING PLATFORM: IBM System z16 Enterprise Server",
          "OPERATING SYSTEM: IBM z/OS V2R5",
          "ACTIVE PROTOCOLS: TCP/IP v4/v6, DB2 Connect",
          "JOB CARD STATUS : ACTIVE",
          "CPU LOAD        : 12.4% (DFSMS Optimal)",
          "SYSTEM DATE     : 2026.142 (HEURISTIC CALIBRATION)"
        ];
        break;
      case "infosys":
        response = [
          "> INFOSYS",
          "--- JOB: SYSTEMS ENGINEER (MAINFRAME DEVELOPER) ---",
          "COMPANY  : INFOSYS",
          "TENURE   : FEB 2026 - PRESENT",
          "ALLOCATION: CORE RDBMS & TRANSACTION SYSTEMS",
          "HIGHLIGHTS:",
          " • WRITING AND MAINTAINING HIGHLY OPTIMIZED COBOL MODULES ON IBM z/OS.",
          " • DESIGNING & EXECUTING COMPLEX JCL FLOWS TO RUN ENTERPRISE BATCH JOBS.",
          " • MASTERING HIGH-PERFORMANCE DATA TRANSACTION MANAGEMENT IN DB2 SQL.",
          " • COMPLETED EXHAUSTIVE ENTERPRISE TRAINING IN JAVA & RDBMS SYSTEM ARCHITECTURE.",
          "STATUS   : COMPILING METRICS (DFSMS OPTIMAL)"
        ];
        break;
      case "cobol":
        response = [
          "> COBOL RUN COBTEST.CBL",
          "IDENTIFICATION DIVISION.",
          "PROGRAM-ID. HELLO-WORLD.",
          "PROCEDURE DIVISION.",
          "   DISPLAY 'COMPILING ENTERPRISE MAIN SYSTEM...'.",
          "   DISPLAY 'TEST RUN SUCCESSFUL! ARYAN GUPTA IS A CERTIFIED MAINFRAME DEV.'.",
          "   GOBACK.",
          "",
          "** COMPILING WORKSPACE...",
          "** LINK-EDITING LOAD MODULE...",
          "** PROCESSING CONVERGED LOGIC...",
          "COBTEST - COMPLETED - RETURN CODE: 0000 (SUCCESS)"
        ];
        break;
      case "jcl":
        response = [
          "> JCL VIEW JOB00128",
          "//ARYANGPT JOB (INFOSYS),'BATCH JOB',CLASS=A,MSGCLASS=X",
          "//STEP01   EXEC PGM=COBTEST",
          "//STEPLIB  DD DSN=SYS1.USER.LOADLIB,DISP=SHR",
          "//SYSIN    DD DSN=SYS1.USER.DATA(INPUT),DISP=SHR",
          "//SYSOUT   DD SYSOUT=*",
          "//SYSDB2   DD DSN=SYS1.DB2.TRANS(ACTIVE),DISP=SHR",
          "//*" ,
          "** JCL SUBMITTED SUCCESSFULLY.",
          "** WAITING FOR EXECUTION...",
          "** STEP01 COMPLETED - COND CODE 0000"
        ];
        break;
      case "db2":
        response = [
          "> DB2 SELECT * FROM PORTFOLIO.EXPERIENCE WHERE SKILL='COBOL';",
          "EXECUTING QUERY ON PORTFOLIO DB2 SUBSYSTEM...",
          "",
          "+-------------+------------+----------------------+",
          "| DEVELOPER   | EXPERIENCE | CURRENT_ALLOCATION   |",
          "+-------------+------------+----------------------+",
          "| ARYAN GUPTA | ACTIVE     | SYSTEMS ENG INFOSYS  |",
          "+-------------+------------+----------------------+",
          "ROW RETRIEVED: 1 OF 1",
          "SPEED: 0.0004 SECS (CACHED BUFFER OVERFLOW PREVENTED)"
        ];
        break;
      case "skills":
        response = [
          "> SKILLS",
          "--- ENTERPRISE SKILLS RETRIEVED ---",
          "MAINFRAME TECHS : COBOL, JCL, IBM z/OS, DB2, CICS",
          "DEVELOPMENT     : JAVA, SQL, FLUTTER, DART, PYTHON, NEXT.JS",
          "AI CORE         : GEN AI, LANGCHAIN, PHIDATA, RAG ENGINE",
          "PLATFORMS       : FIREBASE, AWS, LINUX HOMELAB, ARDUINO IOT",
          "READY"
        ];
        break;
      default:
        response = [
          `> ${cmd.toUpperCase()}`,
          "COMMAND NOT RECOGNIZED IN THIS CONTROL BLOCK.",
          "TYPE 'HELP' TO LIST LOGICAL OPERANDS.",
          "READY"
        ];
    }

    setHistory((prev) => [...prev, ...response, "READY"]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        executeCommand(input);
        setInput("");
      }
    }
  };

  return (
    <div className="flex flex-col bg-[#141416] border border-zinc-800 rounded-xl p-5 w-full h-[380px] shadow-2xl relative overflow-hidden group">
      {/* Gloss reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 pointer-events-none z-20" />

      {/* Control panel header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">SYSIN.CRT.CONSOLE</span>
        </div>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
        </div>
      </div>

      {/* CRT Screen Outer Box */}
      <div className="flex-1 bg-black border-4 border-zinc-900 rounded-lg relative overflow-hidden flex flex-col p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.9)]">
        
        {/* Screen Flicker / Scanlines Overlay */}
        {power && (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(to_right,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.4))] pointer-events-none z-10" />
            {/* Soft phosphor glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(34,197,94,0.15)] pointer-events-none z-10" />
          </>
        )}

        {/* Screen Content */}
        {power ? (
          <div className="flex-1 overflow-y-auto font-mono text-[11px] leading-relaxed text-emerald-500 scrollbar-none pr-1 select-text selection:bg-emerald-500 selection:text-black">
            <div className="space-y-1">
              {history.map((line, idx) => (
                <div key={idx} className={line.startsWith(">") ? "text-emerald-300 font-bold" : ""}>
                  {line}
                </div>
              ))}
            </div>
            
            {/* Input prompt line */}
            <div className="flex items-center mt-2 text-emerald-400">
              <span className="mr-1.5 font-bold animate-pulse">&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none font-mono text-[11px] text-emerald-300 focus:ring-0 p-0"
                placeholder="TYPE A COMMAND (E.G. 'HELP', 'INFOSYS')..."
              />
            </div>
            <div ref={terminalEndRef} />
          </div>
        ) : (
          <div className="flex-1 flex flex-col justify-center items-center font-mono text-zinc-800 text-[10px]">
            <span className="tracking-widest uppercase mb-1">=== CONSOLE OFFLINE ===</span>
            <span>PRESS POWER KEY TO ACTIVATE</span>
          </div>
        )}
      </div>

      {/* Hardware Buttons Panel */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-800/80">
        {/* Mainframe Micro Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => power && executeCommand("help")}
            className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 active:bg-zinc-900 border-b-2 border-zinc-950 px-2.5 py-1.5 rounded text-[10px] font-mono transition-all disabled:opacity-30 disabled:pointer-events-none"
            disabled={!power}
            title="Help Manual"
          >
            <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
            HELP
          </button>
          
          <button
            onClick={() => power && executeCommand("cobol")}
            className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 active:bg-zinc-900 border-b-2 border-zinc-950 px-2.5 py-1.5 rounded text-[10px] font-mono transition-all disabled:opacity-30 disabled:pointer-events-none"
            disabled={!power}
            title="Execute COBOL Program"
          >
            <Play className="w-3.5 h-3.5 text-amber-500" />
            COBOL.RUN
          </button>

          <button
            onClick={() => power && executeCommand("jcl")}
            className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 active:bg-zinc-900 border-b-2 border-zinc-950 px-2.5 py-1.5 rounded text-[10px] font-mono transition-all disabled:opacity-30 disabled:pointer-events-none"
            disabled={!power}
            title="Submit JCL Card"
          >
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            JCL.SUBMIT
          </button>

          <button
            onClick={() => power && executeCommand("db2")}
            className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 active:bg-zinc-900 border-b-2 border-zinc-950 px-2.5 py-1.5 rounded text-[10px] font-mono transition-all disabled:opacity-30 disabled:pointer-events-none"
            disabled={!power}
            title="Run DB2 Query"
          >
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            DB2.QUERY
          </button>
        </div>

        {/* Master Power Toggle Button */}
        <button
          onClick={() => setPower(!power)}
          className={`flex items-center gap-1 font-mono text-[9px] px-3 py-1.5 rounded transition-all active:scale-95 shadow-md ${
            power 
              ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30" 
              : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30"
          }`}
        >
          <Power className="w-3 h-3" />
          {power ? "PWR OFF" : "PWR ON"}
        </button>
      </div>
    </div>
  );
}
