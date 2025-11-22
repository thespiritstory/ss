import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Flower2, Sword, Wand2, RefreshCw, Sparkles, Ghost, ScrollText, CircleDot, Moon, Users, X } from "lucide-react";
import InteractiveYinYang from "../components/learn/InteractiveYinYang";

export default function Learn() {
  const [activeModal, setActiveModal] = useState(null);

  const renderModal = () => {
    if (!activeModal) return null;

    const modalContent = {
      gateway: (
        <>
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Gateway to Spiritual Experience</h2>
          <div className="text-center space-y-4 pb-8">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Fairy Tales, Mythology, Religion
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Imagination, Fantasy
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Dreams and Narrative
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              These stories are the gateway
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              To spiritual experience
            </p>
            <p className="text-2xl font-bold text-blue-800 leading-relaxed mt-6">
              These are all Spirit Stories
            </p>
          </div>
          {/* Bottom spacing for scroll */}
          <div className="h-96"></div>
        </>
      ),
      stories: (
        <>
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">What Spirit Stories Do</h2>
          <div className="space-y-4 text-xl text-gray-700 leading-relaxed text-center pb-8">
            <p>Our mind makes Spirit Stories</p>
            <p>Stories that show our mind</p>
            <p>How to overcome</p>
            <p>The Spirits in our world</p>
            <div className="border-t-2 border-sky-400/30 my-6 pt-6">
              <p className="text-lg">The Spirit Story shows how to overcome different parts of the unknown in a Spirit</p>
              <p className="text-lg mt-3">Each part of the unknown must be formed into knowledge</p>
              <p className="text-lg mt-3">When one part becomes knowledge</p>
              <p className="text-lg">The yinyang cycle restarts</p>
              <p className="text-lg mt-3">And the next part of the unknown</p>
              <p className="text-lg">Begins its journey to knowledge</p>
            </div>
          </div>
          {/* Bottom spacing for scroll */}
          <div className="h-96"></div>
        </>
      ),
      spirit: (
        <>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            What is Spirit?
          </h2>
          <div className="space-y-4 text-xl text-gray-700 leading-relaxed text-center pb-8">
            <p>Spirit is the non-physical energy</p>
            <p>Of the physical</p>
            <p className="pt-4">Human Spirit forms Spirit energy into knowledge</p>
            <p className="pt-4">Unknown in Spirits breaks down knowledge</p>
            <p>Back to unformed energy</p>
            <div className="border-t-2 border-sky-400/30 my-6 pt-6">
              <p className="text-lg">The Spirit has many parts of unknown</p>
              <p className="text-lg mt-3">Each part is formless energy</p>
              <p className="text-lg mt-3">Waiting to become knowledge</p>
              <p className="text-lg mt-3">The Spirit Story shows</p>
              <p className="text-lg">How each part moves</p>
              <p className="text-lg">From unknown to known</p>
              <p className="text-lg">From energy to form</p>
            </div>
          </div>
          {/* Bottom spacing for scroll */}
          <div className="h-96"></div>
        </>
      ),
      cycle: (
        <>
          <div className="text-center mb-8">
            <svg className="w-16 h-16 text-sky-500 mx-auto" viewBox="0 0 100 100" fill="currentColor" style={{ transform: 'scaleX(-1)' }}>
              <circle cx="50" cy="50" r="48" fill="currentColor" />
              <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
              <path d="M 50 2 A 48 48 0 0 0 50 98 A 24 24 0 0 0 50 50 A 24 24 0 0 1 50 2" fill="#1e3a8a" />
              <circle cx="50" cy="26" r="8" fill="#1e3a8a" />
              <circle cx="50" cy="74" r="8" fill="white" />
            </svg>
            <h2 className="text-3xl font-bold text-blue-900 mt-4">
              The Eternal Cycle
            </h2>
          </div>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-center pb-8">
            <p>The light of knowledge and darkness of unknown</p>
            <p>Are in a yinyang cycle</p>
            <p className="pt-4">This cycle never ends</p>
            <p>It only restarts</p>
            <p className="pt-4">When the monster of unknown</p>
            <p>Becomes the knowledge of the hero</p>
            <p>The cycle completes</p>
            <p className="pt-4">But if the Spirit has more unknown parts</p>
            <p>The cycle begins again</p>
            <p className="pt-4">The new unknown becomes the new monster</p>
            <p>The mother begins forming it</p>
            <p>The hero will bring it to full form</p>
            <p>The magician will one day break it down</p>
            <p>Back to monster</p>
            <p>Back to unknown</p>
            <p className="pt-4 font-semibold text-blue-800">And the cycle continues</p>
            <p className="font-semibold text-blue-800">Each time overcoming</p>
            <p className="font-semibold text-blue-800">Another part of the unknown</p>
          </div>
          {/* Bottom spacing for scroll */}
          <div className="h-96"></div>
        </>
      ),
      characters: (
        <>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            The Four Characters
          </h2>
          <p className="text-xl text-gray-700 text-center leading-relaxed mb-8">
            The Spirit Story has classic characters representing each portion of the yinyang
          </p>

          <div className="grid md:grid-cols-2 gap-6 pb-8">
            {/* Mother - Spring */}
            <div className="relative overflow-hidden rounded-xl border-4 border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 p-6">
              <div className="absolute top-0 right-0 opacity-10">
                <Flower2 className="w-32 h-32 text-green-600" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <Flower2 className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800">The Mother</h3>
                    <p className="text-green-600 font-semibold">Yang rising</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                  <p className="font-semibold">Spring</p>
                  <p>Knowledge forming energy</p>
                  <p className="pt-2">The mother takes the unknown</p>
                  <p>And begins to give it form</p>
                  <p>The darkness starts to have shape</p>
                  <p>Energy begins organizing</p>
                  <p>Into the first structures of knowledge</p>
                  <p className="pt-2 italic">If the Spirit is food</p>
                  <p className="italic">The mother is being fed</p>
                  <p className="pt-2">The mother is the beginning</p>
                  <p>Of overcoming this part of the unknown</p>
                </div>
              </div>
            </div>

            {/* Hero - Summer */}
            <div className="relative overflow-hidden rounded-xl border-4 border-amber-500 bg-gradient-to-br from-amber-50 to-yellow-50 p-6">
              <div className="absolute top-0 right-0 opacity-10">
                <Sword className="w-32 h-32 text-amber-600" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center">
                    <Sword className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-800">The Hero</h3>
                    <p className="text-amber-600 font-semibold">Yang</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                  <p className="font-semibold">Summer</p>
                  <p>The formed knowledge structure</p>
                  <p className="pt-2">The hero is knowledge complete</p>
                  <p>What was unknown is now fully known</p>
                  <p>What was energy is now fully formed</p>
                  <p>The structure stands whole</p>
                  <p className="pt-2 italic">If the Spirit is food</p>
                  <p className="italic">The hero is being full</p>
                  <p className="pt-2">The hero has overcome</p>
                  <p>This part of the unknown</p>
                  <p>The monster has been defeated</p>
                  <p>For now</p>
                </div>
              </div>
            </div>

            {/* Magician - Autumn */}
            <div className="relative overflow-hidden rounded-xl border-4 border-blue-500 bg-gradient-to-br from-blue-50 to-sky-50 p-6">
              <div className="absolute top-0 right-0 opacity-10">
                <Wand2 className="w-32 h-32 text-blue-600" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center">
                    <Wand2 className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">The Magician</h3>
                    <p className="text-blue-600 font-semibold">Yin rising</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                  <p className="font-semibold">Autumn</p>
                  <p>Knowledge breaking down</p>
                  <p className="pt-2">The magician takes what was known</p>
                  <p>And begins to break it apart</p>
                  <p>The structure loosens</p>
                  <p>The form becomes energy again</p>
                  <p>Knowledge returns toward unknown</p>
                  <p className="pt-2 italic">If the Spirit is food</p>
                  <p className="italic">The magician is becoming hungry</p>
                  <p className="pt-2">The magician prepares</p>
                  <p>For the cycle to restart</p>
                  <p>Breaking down the old knowledge</p>
                  <p>To make space for new knowledge</p>
                </div>
              </div>
            </div>

            {/* Monster - Winter */}
            <div className="relative overflow-hidden rounded-xl border-4 border-slate-500 bg-gradient-to-br from-slate-50 to-gray-50 p-6">
              <div className="absolute top-0 right-0 opacity-10">
                <Ghost className="w-32 h-32 text-slate-600" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                    <Ghost className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">The Monster</h3>
                    <p className="text-slate-600 font-semibold">Yin</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
                  <p className="font-semibold">Winter</p>
                  <p>Unknown unformed energy</p>
                  <p className="pt-2">The monster is pure unknown</p>
                  <p>Formless energy</p>
                  <p>Chaos without structure</p>
                  <p>The dark that has no light</p>
                  <p className="pt-2 italic">If the Spirit is food</p>
                  <p className="italic">The monster is the hunger</p>
                  <p className="pt-2">The monster is what must be overcome</p>
                  <p>The unknown that must become known</p>
                  <p>The next part of the Spirit</p>
                  <p>Waiting for the mother to begin</p>
                  <p>Forming it into knowledge</p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom spacing for scroll */}
          <div className="h-96"></div>
        </>
      ),
      restart: (
        <>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-900">
              Each Cycle Overcomes One Part of The Unknown
            </h2>
          </div>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-center pb-8">
            <p>Each Spirit Story shows</p>
            <p>One monster being overcome</p>
            <p>One part of unknown</p>
            <p>Becoming knowledge</p>
            <p className="pt-4">The Story starts with monster</p>
            <p>Unknown energy that needs form</p>
            <p className="pt-2">The mother begins the work</p>
            <p>Forming the energy</p>
            <p>Giving shape to darkness</p>
            <p className="pt-2">The hero completes the work</p>
            <p>The unknown is now known</p>
            <p>The monster is defeated</p>
            <p className="pt-2">But time moves forward</p>
            <p>The magician breaks down this knowledge</p>
            <p>Back to energy</p>
            <p className="pt-2">And a new monster appears</p>
            <p>A new part of the unknown</p>
            <p>Needs to become knowledge</p>
            <p className="pt-4 font-semibold text-blue-800">The yinyang cycle restarts</p>
            <p className="font-semibold text-blue-800">Mother begins again</p>
            <p className="font-semibold text-blue-800">Hero will rise again</p>
            <p className="font-semibold text-blue-800">Overcoming the next part</p>
            <p className="font-semibold text-blue-800">Of the unknown in the Spirit</p>
          </div>
          {/* Bottom spacing for scroll */}
          <div className="h-96"></div>
        </>
      ),
      dreams: (
        <>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            Spirit Stories in Dreams
          </h2>
          
          <div className="space-y-8 text-lg text-gray-700 pb-8">
            <div className="border-l-4 border-sky-500 pl-6 py-2 space-y-3 text-center">
              <p className="font-semibold text-sky-800">The Starving Man</p>
              <p className="leading-relaxed">
                The starving man dreams about the hero bringing him food
              </p>
              <p className="leading-relaxed">
                The monster of hunger is defeated by the hero of food
              </p>
              <p className="leading-relaxed pt-2 text-base italic">
                This part of the unknown—the hunger—becomes known as fullness. The cycle completes. Later, the magician will make him hungry again, and a new cycle begins with a new meal to find.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2 space-y-3 text-center">
              <p className="font-semibold text-blue-800">The Crashing Plane</p>
              <p className="leading-relaxed">
                The man whose knowledge structure is breaking down
              </p>
              <p className="leading-relaxed">
                Has a dream his plane is crashing
              </p>
              <p className="leading-relaxed">
                The knowledge structure is represented as the plane being broken down
              </p>
              <p className="leading-relaxed pt-2 text-base italic">
                The magician is active. What was known becomes unknown again. The structure falls apart. When it crashes completely, it becomes the monster—pure unknown. Then the mother must begin building new knowledge from this energy.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 space-y-3 text-center">
              <p className="font-semibold text-green-800">The Student with No Clothes</p>
              <p className="leading-relaxed">
                The student who doesn't know enough
              </p>
              <p className="leading-relaxed">
                Dreams they go to school with no clothes
              </p>
              <p className="leading-relaxed">
                The knowledge structure is not formed
              </p>
              <p className="leading-relaxed">
                They don't have clothes
              </p>
              <p className="leading-relaxed pt-2 text-base italic">
                The monster is present—the unknown of what they need to learn. The mother has not yet formed this unknown into knowledge. No clothes means no structure. The cycle must begin. The mother must start forming this part of the unknown.
              </p>
            </div>
          </div>
          {/* Bottom spacing for scroll */}
          <div className="h-96"></div>
        </>
      ),
      classic: (
        <>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            Did These Stories Happen?
          </h2>
          
          <div className="space-y-4 text-xl text-gray-700 text-center pb-8">
            <p className="leading-relaxed">Did the tortoise and the hare ever race?</p>
            <p className="leading-relaxed">Did three pigs ever build three houses?</p>
            <p className="leading-relaxed">Did Goldilocks eat the bears porridge?</p>
            <p className="leading-relaxed">Have those stories actually happened?</p>
            <p className="font-bold text-blue-800 text-2xl my-4">No</p>
            <p className="font-bold text-sky-600 text-2xl my-4">But the message of the Story remains</p>
            <div className="space-y-6 mt-8 pl-6 border-l-4 border-sky-500 text-center">
              <div className="space-y-2 text-center">
                <p className="leading-relaxed font-semibold">The yin tortoise overcomes the rushed yang hare</p>
                <p className="text-base leading-relaxed text-gray-600">
                  This shows one part of unknown in our Spirit—how to balance speed and patience. The monster is the chaos of rushing. The hero tortoise defeats it with steady movement. This part of unknown becomes knowledge. Then the cycle restarts with a new part.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <p className="leading-relaxed font-semibold">The three pigs show when yang is needed to overcome the yin wolf</p>
                <p className="text-base leading-relaxed text-gray-600">
                  This shows another part of unknown—how to build structures that last. The monster is the wolf's destruction. The hero is the brick house. Each pig represents one attempt at overcoming this part of the unknown. The cycle completes when the third pig succeeds.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <p className="leading-relaxed font-semibold">Goldilocks shows result of too much yin</p>
                <p className="text-base leading-relaxed text-gray-600">
                  This shows the part of unknown about finding balance. The monster is the chaos of extremes. The hero is "just right." Each attempt—too hot, too cold, too hard, too soft—is the mother forming knowledge. "just right" is when the knowledge becomes complete, and this part of the unknown is overcome.
                </p>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="border-t-4 border-sky-400/30 pt-8 mt-8">
            <div className="text-center space-y-6">
              <Sparkles className="w-12 h-12 text-sky-400 mx-auto animate-pulse" />
              <div className="space-y-4 text-xl text-gray-700 leading-relaxed">
                <p>The Spirit Story and classic characters</p>
                <p>Shows our Spirit</p>
                <p>How to overcome</p>
                <p>The Spirits in our world</p>
                <p className="pt-6 text-lg italic">One part at a time</p>
                <p className="text-lg italic">One cycle at a time</p>
                <p className="text-lg italic">Each unknown becoming known</p>
                <p className="text-lg italic">Then the cycle restarts</p>
                <p className="text-lg italic">And the next part of unknown</p>
                <p className="text-lg italic">Begins its journey to knowledge</p>
              </div>
            </div>
          </div>
          {/* Bottom spacing for scroll */}
          <div className="h-96"></div>
        </>
      )
    };

    return (
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={() => setActiveModal(null)}
      >
        <div className="max-w-4xl w-full my-8" onClick={(e) => e.stopPropagation()}>
          <Card className="parchment-bg ornate-border p-8 space-y-6 max-h-[85vh] overflow-y-auto relative">
            <Button
              onClick={() => setActiveModal(null)}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 hover:bg-red-100 z-10"
            >
              <X className="w-6 h-6" />
            </Button>
            {modalContent[activeModal]}
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-sky-200 scroll-decoration">
            The Spirit Story
          </h1>
          <p className="text-xl text-blue-200 italic max-w-2xl mx-auto">
            Gateway to spiritual experience
          </p>
        </div>

        {/* Interactive Yin-Yang - Standalone */}
        <Card className="parchment-bg ornate-border p-8 space-y-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            The Classic Character Yin-Yang
          </h2>
          <InteractiveYinYang />
        </Card>

        {/* Tab Buttons Grid */}
        <Card className="parchment-bg ornate-border p-6">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
            Explore The Spirit Story
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => setActiveModal('gateway')}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 border-2 border-sky-400/30 hover:border-sky-500 rounded-xl transition-all duration-300 group"
            >
              <Sparkles className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-blue-900">Gateway</span>
            </button>

            <button
              onClick={() => setActiveModal('stories')}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 border-2 border-sky-400/30 hover:border-sky-500 rounded-xl transition-all duration-300 group"
            >
              <BookOpen className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-blue-900">Stories</span>
            </button>

            <button
              onClick={() => setActiveModal('spirit')}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 border-2 border-sky-400/30 hover:border-sky-500 rounded-xl transition-all duration-300 group"
            >
              <Ghost className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-blue-900">Spirit</span>
            </button>

            <button
              onClick={() => setActiveModal('cycle')}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 border-2 border-sky-400/30 hover:border-sky-500 rounded-xl transition-all duration-300 group"
            >
              <svg className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" viewBox="0 0 100 100" fill="currentColor" style={{ transform: 'scaleX(-1)' }}>
                <circle cx="50" cy="50" r="48" fill="currentColor" />
                <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                <circle cx="50" cy="26" r="8" fill="white" />
                <circle cx="50" cy="74" r="8" fill="currentColor" />
              </svg>
              <span className="text-lg font-semibold text-blue-900">Cycle</span>
            </button>

            <button
              onClick={() => setActiveModal('classic')}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 border-2 border-sky-400/30 hover:border-sky-500 rounded-xl transition-all duration-300 group"
            >
              <ScrollText className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-blue-900">Classic</span>
            </button>

            <button
              onClick={() => setActiveModal('restart')}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 border-2 border-sky-400/30 hover:border-sky-500 rounded-xl transition-all duration-300 group"
            >
              <Flower2 className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-blue-900">Restart</span>
            </button>

            <button
              onClick={() => setActiveModal('dreams')}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 border-2 border-sky-400/30 hover:border-sky-500 rounded-xl transition-all duration-300 group"
            >
              <Moon className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-blue-900">Dreams</span>
            </button>

            <button
              onClick={() => setActiveModal('characters')}
              className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 border-2 border-sky-400/30 hover:border-sky-500 rounded-xl transition-all duration-300 group"
            >
              <Users className="w-8 h-8 text-sky-600 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-blue-900">Characters</span>
            </button>
          </div>
        </Card>
      </div>

      {/* Render Modal */}
      {renderModal()}
    </div>
  );
}