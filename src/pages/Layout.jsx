
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sparkles, BookOpen, Library } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navItems = [
    { name: "Experience", path: "Analyzer", icon: "yinyang" },
    { name: "Learn", path: "Learn", icon: Sparkles }
  ];

  const isActive = (path) => location.pathname === createPageUrl(path);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');
        
        :root {
          --ice-blue: #E0F2FE;
          --sky-blue: #38BDF8;
          --deep-blue: #0C4A6E;
          --royal-blue: #1E40AF;
        }

        body {
          font-family: 'Cormorant Garamond', serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Cinzel', serif;
        }

        input::placeholder,
        textarea::placeholder {
          color: #2563EB !important;
          opacity: 0.8;
        }

        .ornate-border {
          border: 2px solid var(--sky-blue);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
        }

        .magical-glow {
          animation: magical-pulse 3s ease-in-out infinite;
        }

        @keyframes magical-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.4); }
          50% { box-shadow: 0 0 40px rgba(56, 189, 248, 0.8); }
        }

        .parchment-bg {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.95));
          position: relative;
        }

        .parchment-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.02) 3px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.02) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.02) 3px);
          pointer-events: none;
        }

        .scroll-decoration {
          position: relative;
        }

        .scroll-decoration::before,
        .scroll-decoration::after {
          content: '◆';
          color: var(--sky-blue);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.75rem;
          opacity: 0.6;
        }

        .scroll-decoration::before {
          left: -1.5rem;
        }

        .scroll-decoration::after {
          right: -1.5rem;
        }

        @keyframes star-flicker {
          0%, 100% { opacity: 1; transform: scale(1); }
          25% { opacity: 0.7; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
          75% { opacity: 0.8; transform: scale(0.98); }
        }

        .star-flicker {
          animation: star-flicker 3s ease-in-out infinite;
        }

        .flip-yin-yang {
          transform: scaleX(-1);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes rotate-yin-yang {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .rotate-yin-yang {
          animation: rotate-yin-yang 8s linear infinite;
        }

        .rotate-yin-yang.flip-yin-yang {
          animation: rotate-yin-yang-flipped 8s linear infinite;
        }

        @keyframes rotate-yin-yang-flipped {
          from { transform: scaleX(-1) rotate(0deg); }
          to { transform: scaleX(-1) rotate(360deg); }
        }
      `}</style>

      {/* Mystical particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="border-b-2 border-sky-500/30 bg-blue-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-12">
            {/* Experience Button - Left */}
            <Link
              to={createPageUrl("Analyzer")}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive("Analyzer")
                  ? "text-sky-200"
                  : "text-blue-200 hover:text-sky-300"
              }`}
            >
              <svg className="w-12 h-12 flip-yin-yang" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="48" fill="currentColor" />
                <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                <circle cx="50" cy="26" r="8" fill="white" />
                <circle cx="50" cy="74" r="8" fill="currentColor" />
              </svg>
              <span className="font-medium text-xs">Experience</span>
            </Link>

            {/* Center - Logo and Yin Yang */}
            <Link to={createPageUrl("Analyzer")} className="flex flex-col items-center gap-1 group">
              <div>
                <h1 className="text-2xl font-bold text-sky-300 tracking-wide text-center relative inline-block">
                  The Spirit Story
                  <span className="absolute -top-0.5 -right-4 inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-sky-300 text-[7px] font-normal leading-none">TM</span>
                </h1>
                <p className="text-xs text-blue-200 italic text-center">Increase Spiritual Knowledge</p>
              </div>
              <div className="relative mt-1">
                <svg className="w-20 h-20 text-sky-300 rotate-yin-yang flip-yin-yang" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="48" fill="currentColor" />
                  <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                  <circle cx="50" cy="26" r="8" fill="white" />
                  <circle cx="50" cy="74" r="8" fill="currentColor" />
                </svg>
                <Sparkles className="w-4 h-4 text-blue-200 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </Link>

            {/* Learn Button - Right */}
            <Link
              to={createPageUrl("Learn")}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive("Learn")
                  ? "text-sky-200"
                  : "text-blue-200 hover:text-sky-300"
              }`}
            >
              <Sparkles className="w-12 h-12 star-flicker" />
              <span className="font-medium text-xs">Learn</span>
            </Link>
          </div>

          {/* Mobile - Title and Yin Yang */}
          <div className="md:hidden flex flex-col items-center gap-2">
            <div>
              <h1 className="text-3xl font-bold text-sky-300 tracking-wide text-center relative inline-block">
                The Spirit Story
                <span className="absolute -top-1 -right-4 inline-flex items-center justify-center w-4 h-4 rounded-full border border-sky-300 text-[8px] font-normal leading-none">TM</span>
              </h1>
              <p className="text-xs text-blue-200 italic text-center">Increase Spiritual Knowledge</p>
            </div>
            <div className="relative">
              <svg className="w-16 h-16 text-sky-300 rotate-yin-yang flip-yin-yang" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="48" fill="currentColor" />
                <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                <circle cx="50" cy="26" r="8" fill="white" />
                <circle cx="50" cy="74" r="8" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex justify-around mt-4 gap-2">
            {navItems.map((item) => {
              const isYinYang = item.icon === "yinyang";
              const Icon = isYinYang ? null : item.icon;
              const isLearn = item.path === "Learn";
              return (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 flex-1 ${
                    isActive(item.path)
                      ? "bg-sky-500/20 text-sky-200"
                      : "text-blue-200"
                  }`}
                >
                  {isYinYang ? (
                    <svg className="w-7 h-7 flip-yin-yang" viewBox="0 0 100 100" fill="currentColor">
                      <circle cx="50" cy="50" r="48" fill="currentColor" />
                      <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                      <circle cx="50" cy="26" r="8" fill="white" />
                      <circle cx="50" cy="74" r="8" fill="currentColor" />
                    </svg>
                  ) : (
                    <Icon className={`w-7 h-7 ${isLearn ? 'star-flicker' : ''}`} />
                  )}
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t-2 border-sky-500/30 bg-blue-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center space-y-4">
          {/* Library Link */}
          <div className="py-2">
            <Link 
              to={createPageUrl("Library")} 
              className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors text-xl font-medium"
            >
              <BookOpen className="w-6 h-6" />
              Library
            </Link>
          </div>


          <div className="flex items-center justify-center gap-3 text-xs pt-4 border-t border-sky-500/20">
            <p className="text-sky-300 font-medium">
              © {new Date().getFullYear()} Spirit Story
            </p>
            <span className="text-sky-400">•</span>
            <Link 
              to={createPageUrl("Terms")} 
              className="text-sky-300 hover:text-sky-200 transition-colors font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
