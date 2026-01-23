"use client";

import { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CliShowcase() {
  const [copied, setCopied] = useState(false);
  const command = "curl -L lagaryan.click";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-4 flex items-center justify-center gap-3">
            <Terminal className="w-8 h-8" />
            Terminal Portfolio
          </h2>
          <p className="text-muted-foreground text-lg">
            Access my portfolio directly from your terminal. No browser required.
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl bg-[#1e1e1e] font-mono text-sm md:text-base">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-gray-400 text-xs">user@terminal:~</div>
            <div className="w-8" /> {/* Spacer for centering */}
          </div>

          {/* Terminal Content */}
          <div className="p-6 text-gray-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-400">$</span>
              <span className="typing-effect">{command}</span>
            </div>

            <div className="space-y-1 opacity-90">
              <div className="text-cyan-400 font-bold">
                {"   ░███    ░█████████  ░██     ░██    ░███    ░███    ░██ "}
              </div>
              <div className="text-cyan-400 font-bold">
                {"  ░██░██   ░██     ░██  ░██   ░██    ░██░██   ░████   ░██ "}
              </div>
              <div className="text-cyan-400 font-bold">
                {" ░██  ░██  ░██     ░██   ░██ ░██    ░██  ░██  ░██░██  ░██ "}
              </div>
              <div className="text-cyan-400 font-bold hidden sm:block">
                {"░█████████ ░█████████     ░████    ░█████████ ░██ ░██ ░██ "}
              </div>
              <div className="mt-4 text-gray-400">
                Welcome to the CLI portfolio...
              </div>
              <div>
                <span className="text-green-400">?</span> Loading projects... <span className="text-green-500">Done.</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Command
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
