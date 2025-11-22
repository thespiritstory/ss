import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Flower2, Sword, Wand2, Ghost } from "lucide-react";

export default function StoryYinYang({ characters, title = "Classic Characters" }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characterConfig = {
    hero: {
      subtitle: "Yang • Summer",
      icon: Sword,
      bgGradient: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-500",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      textColor: "text-amber-900",
      subtitleColor: "text-amber-700",
      descriptionColor: "text-amber-800"
    },
    mother: {
      subtitle: "Yang rising • Spring",
      icon: Flower2,
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-emerald-500",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      textColor: "text-emerald-900",
      subtitleColor: "text-emerald-700",
      descriptionColor: "text-emerald-800"
    },
    magician: {
      subtitle: "Yin rising • Autumn",
      icon: Wand2,
      bgGradient: "from-blue-50 to-sky-50",
      borderColor: "border-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      textColor: "text-blue-900",
      subtitleColor: "text-blue-700",
      descriptionColor: "text-blue-800"
    },
    monster: {
      subtitle: "Yin • Winter",
      icon: Ghost,
      bgGradient: "from-slate-50 to-gray-50",
      borderColor: "border-slate-500",
      iconBg: "bg-slate-600",
      iconColor: "text-white",
      textColor: "text-slate-900",
      subtitleColor: "text-slate-700",
      descriptionColor: "text-slate-800"
    }
  };

  const renderCharacterModal = () => {
    if (!selectedCharacter) return null;
    const charType = selectedCharacter;
    const char = characters[charType];
    const config = characterConfig[charType];
    const Icon = config.icon;

    if (!char) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedCharacter(null)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Card className={`parchment-bg ornate-border max-w-lg w-full p-8 space-y-6 relative bg-gradient-to-br ${config.bgGradient}`}>
            <Button
              onClick={() => setSelectedCharacter(null)}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 hover:bg-red-100"
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-3">
              <div className={`w-16 h-16 rounded-full ${config.iconBg} flex items-center justify-center ${config.borderColor} border-2`}>
                <Icon className={`w-9 h-9 ${config.iconColor}`} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${config.textColor}`}>
                  {charType === 'hero' ? 'The Hero' : 
                   charType === 'mother' ? 'The Mother' : 
                   charType === 'magician' ? 'The Magician' : 
                   'The Monster'}
                </h3>
                <p className={`${config.subtitleColor} font-semibold`}>{config.subtitle}</p>
              </div>
            </div>

            <div className={`space-y-3 ${config.descriptionColor} text-lg leading-relaxed`}>
              <p className="font-bold text-xl">{char.name || char}</p>
              {char.description && (
                <p>{char.description}</p>
              )}
              {char.role && (
                <p className="italic">{char.role}</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Outer circle border */}
            <circle cx="100" cy="100" r="98" fill="none" stroke="#38BDF8" strokeWidth="3" />
            
            {/* White (light) side */}
            <path d="M 100 2 A 98 98 0 0 1 100 198 A 49 49 0 0 1 100 100 A 49 49 0 0 0 100 2" fill="white" stroke="none" />
            
            {/* Royal blue (dark) side */}
            <path d="M 100 2 A 98 98 0 0 0 100 198 A 49 49 0 0 0 100 100 A 49 49 0 0 1 100 2" fill="#1e3a8a" stroke="none" />
            
            {/* Small dots - blue on white side, white on blue side */}
            <circle cx="100" cy="51" r="16" fill="#1e3a8a" stroke="none" />
            <circle cx="100" cy="149" r="16" fill="white" stroke="none" />
            
            {/* Clickable areas */}
            <ellipse 
              cx="125" cy="51" rx="45" ry="35" 
              fill="transparent" 
              className="cursor-pointer hover:fill-amber-500/20 transition-all"
              onClick={() => setSelectedCharacter('hero')}
            />
            <ellipse 
              cx="150" cy="120" rx="35" ry="45" 
              fill="transparent" 
              className="cursor-pointer hover:fill-green-500/20 transition-all"
              onClick={() => setSelectedCharacter('mother')}
            />
            <ellipse 
              cx="50" cy="80" rx="35" ry="45" 
              fill="transparent" 
              className="cursor-pointer hover:fill-blue-500/20 transition-all"
              onClick={() => setSelectedCharacter('magician')}
            />
            <ellipse 
              cx="75" cy="149" rx="45" ry="35" 
              fill="transparent" 
              className="cursor-pointer hover:fill-slate-500/20 transition-all"
              onClick={() => setSelectedCharacter('monster')}
            />
          </svg>

          <button
            onClick={() => setSelectedCharacter('hero')}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-amber-600"
          >
            <Sword className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => setSelectedCharacter('mother')}
            className="absolute top-[62%] -translate-y-1/2 right-2 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-emerald-600"
          >
            <Flower2 className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => setSelectedCharacter('magician')}
            className="absolute top-[38%] -translate-y-1/2 left-2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-blue-600"
          >
            <Wand2 className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => setSelectedCharacter('monster')}
            className="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-slate-800"
          >
            <Ghost className="w-6 h-6 text-white" />
          </button>
        </div>
        <p className="text-sm text-blue-700 italic text-center">
          Click each character to see their role
        </p>
      </div>

      {renderCharacterModal()}
    </>
  );
}