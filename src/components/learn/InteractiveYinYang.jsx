import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Flower2, Sword, Wand2, Ghost } from "lucide-react";

export default function InteractiveYinYang() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = {
    hero: {
      name: "The Hero",
      subtitle: "Yang • Summer",
      icon: Sword,
      color: "amber",
      bgGradient: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-500",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      textColor: "text-amber-900",
      subtitleColor: "text-amber-700",
      descriptionColor: "text-amber-800",
      season: "Summer",
      phase: "Yang",
      description: "Knowledge fully formed. What was unknown is now fully known. What was energy is now fully formed. The structure stands whole.",
      example: "If the Spirit is food, the hero is being full.",
      meaning: "The hero has overcome this part of the unknown. The monster has been defeated for now."
    },
    mother: {
      name: "The Mother",
      subtitle: "Yang rising • Spring",
      icon: Flower2,
      color: "green",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-emerald-500",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      textColor: "text-emerald-900",
      subtitleColor: "text-emerald-700",
      descriptionColor: "text-emerald-800",
      season: "Spring",
      phase: "Yang rising",
      description: "Knowledge forming from energy. The mother takes the unknown and begins to give it form. The darkness starts to have shape. Energy begins organizing into the first structures of knowledge.",
      example: "If the Spirit is food, the mother is being fed.",
      meaning: "The mother is the beginning of overcoming this part of the unknown."
    },
    magician: {
      name: "The Magician",
      subtitle: "Yin rising • Autumn",
      icon: Wand2,
      color: "blue",
      bgGradient: "from-blue-50 to-sky-50",
      borderColor: "border-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      textColor: "text-blue-900",
      subtitleColor: "text-blue-700",
      descriptionColor: "text-blue-800",
      season: "Autumn",
      phase: "Yin rising",
      description: "Knowledge breaking down. The magician takes what was known and begins to break it apart. The structure loosens. The form becomes energy again. Knowledge returns toward unknown.",
      example: "If the Spirit is food, the magician is becoming hungry.",
      meaning: "The magician prepares for the cycle to restart. Breaking down the old knowledge to make space for new knowledge."
    },
    monster: {
      name: "The Monster",
      subtitle: "Yin • Winter",
      icon: Ghost,
      color: "slate",
      bgGradient: "from-slate-50 to-gray-50",
      borderColor: "border-slate-500",
      iconBg: "bg-slate-600",
      iconColor: "text-white",
      textColor: "text-slate-900",
      subtitleColor: "text-slate-700",
      descriptionColor: "text-slate-800",
      season: "Winter",
      phase: "Yin",
      description: "Unknown unformed energy. The monster is pure unknown. Formless energy. Chaos without structure.",
      example: "If the Spirit is food, the monster is the hunger.",
      meaning: "The monster is what must be overcome. The unknown that must become known. The next part of the Spirit waiting for the mother to begin forming it into knowledge."
    }
  };

  const renderCharacterModal = () => {
    if (!selectedCharacter) return null;
    const char = characters[selectedCharacter];
    const Icon = char.icon;

    return (
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedCharacter(null)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Card className={`parchment-bg ornate-border max-w-lg w-full p-8 relative bg-gradient-to-br ${char.bgGradient} max-h-[80vh] flex flex-col`}>
            <Button
              onClick={() => setSelectedCharacter(null)}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 hover:bg-red-100 z-10"
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-3 mb-6">
              <div className={`w-16 h-16 rounded-full ${char.iconBg} flex items-center justify-center ${char.borderColor} border-2`}>
                <Icon className={`w-9 h-9 ${char.iconColor}`} />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${char.textColor}`}>{char.name}</h3>
                <p className={`${char.subtitleColor} font-semibold`}>{char.subtitle}</p>
              </div>
            </div>

            <div className={`space-y-3 ${char.descriptionColor} text-lg leading-relaxed overflow-y-auto pb-16`}>
              <p className="font-semibold">{char.season}</p>
              <p>{char.description}</p>
              <p className="pt-2 italic">{char.example}</p>
              <p className="pt-2">{char.meaning}</p>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="relative w-80 h-80">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="98" fill="none" stroke="#38BDF8" strokeWidth="3" />
            <path d="M 100 2 A 98 98 0 0 1 100 198 A 49 49 0 0 1 100 100 A 49 49 0 0 0 100 2" fill="white" stroke="none" />
            <path d="M 100 2 A 98 98 0 0 0 100 198 A 49 49 0 0 0 100 100 A 49 49 0 0 1 100 2" fill="#1e3a8a" stroke="none" />
            <circle cx="100" cy="51" r="16" fill="#1e3a8a" stroke="none" />
            <circle cx="100" cy="149" r="16" fill="white" stroke="none" />
            
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
            className="absolute top-10 right-12 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-amber-600"
          >
            <Sword className="w-7 h-7 text-white" />
          </button>

          <button
            onClick={() => setSelectedCharacter('mother')}
            className="absolute top-[62%] -translate-y-1/2 right-4 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-emerald-600"
          >
            <Flower2 className="w-7 h-7 text-white" />
          </button>

          <button
            onClick={() => setSelectedCharacter('magician')}
            className="absolute top-[38%] -translate-y-1/2 left-4 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-blue-600"
          >
            <Wand2 className="w-7 h-7 text-white" />
          </button>

          <button
            onClick={() => setSelectedCharacter('monster')}
            className="absolute bottom-10 left-12 w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-slate-800"
          >
            <Ghost className="w-7 h-7 text-white" />
          </button>
        </div>
      </div>

      <p className="text-center text-blue-200 italic mt-4">
        Click on each classic character to learn more
      </p>

      {renderCharacterModal()}
    </>
  );
}