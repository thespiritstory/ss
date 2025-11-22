
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Flower2, Sword, Wand2, Ghost, Share2 } from "lucide-react";
import StoryYinYang from "../analyzer/StoryYinYang";
import ShareStoryModal from "./ShareStoryModal";

export default function StoryDetailModal({ story, onClose, onStoryUpdated }) {
  const [showShareModal, setShowShareModal] = useState(false);

  const handleShared = () => {
    setShowShareModal(false);
    if (onStoryUpdated) {
      onStoryUpdated();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <div className="max-w-4xl w-full my-8" onClick={(e) => e.stopPropagation()}>
          <Card className="parchment-bg ornate-border p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-blue-900">{story.story_title}</h2>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setShowShareModal(true)}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Story
                </Button>
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-red-100"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Spirit Story Summary */}
            {story.spirit_story_summary && (
              <div className="border-2 border-sky-500/30 rounded-lg p-6 bg-sky-50/50">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">Spirit Story Summary</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{story.spirit_story_summary}</p>
              </div>
            )}

            {/* Story Text */}
            <div className="border-2 border-sky-400/30 rounded-lg p-6 bg-white/30">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">The Story</h3>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                {story.story_text}
              </p>
            </div>

            {/* Spirit Story Explanation */}
            {story.spirit_story_explanation && (
              <div className="border-2 border-blue-500/30 rounded-lg p-6 bg-blue-50/50">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">What The Spirit Story Shows</h3>
                <p className="text-gray-700 leading-relaxed">{story.spirit_story_explanation}</p>
              </div>
            )}

            {/* Overall Yin Yang Connection */}
            {story.overall_yin_yang_connection && (
              <div className="border-2 border-sky-500/30 rounded-lg p-6 bg-gradient-to-r from-amber-50 to-indigo-50">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Overall Yin Yang Connection</h3>
                <p className="text-gray-700 leading-relaxed">{story.overall_yin_yang_connection}</p>
              </div>
            )}

            {/* Overall Classic Characters Yin Yang */}
            {story.mother_character && story.hero_character && story.magician_character && story.monster_character && (
              <div className="border-2 border-sky-500/30 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-sky-50">
                <StoryYinYang 
                  characters={{
                    mother: story.mother_character,
                    hero: story.hero_character,
                    magician: story.magician_character,
                    monster: story.monster_character
                  }}
                  title="Overall Classic Characters"
                />
              </div>
            )}

            {/* Characters Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Mother - Spring */}
              <div className="border-2 border-green-500/30 rounded-lg p-4 bg-green-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <Flower2 className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-green-800">Mother</h4>
                </div>
                {story.mother_character && (
                  <div className="space-y-2">
                    <p className="font-semibold text-blue-900">{story.mother_character.name}</p>
                    <p className="text-sm text-gray-700">{story.mother_character.description}</p>
                  </div>
                )}
              </div>

              {/* Hero - Summer */}
              <div className="border-2 border-amber-500/30 rounded-lg p-4 bg-amber-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <Sword className="w-5 h-5 text-amber-600" />
                  <h4 className="font-bold text-amber-800">Hero</h4>
                </div>
                {story.hero_character && (
                  <div className="space-y-2">
                    <p className="font-semibold text-blue-900">{story.hero_character.name}</p>
                    <p className="text-sm text-gray-700">{story.hero_character.description}</p>
                  </div>
                )}
              </div>

              {/* Magician - Autumn */}
              <div className="border-2 border-blue-500/30 rounded-lg p-4 bg-blue-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <Wand2 className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-blue-800">Magician</h4>
                </div>
                {story.magician_character && (
                  <div className="space-y-2">
                    <p className="font-semibold text-blue-900">{story.magician_character.name}</p>
                    <p className="text-sm text-gray-700">{story.magician_character.description}</p>
                  </div>
                )}
              </div>

              {/* Monster - Winter */}
              <div className="border-2 border-slate-500/30 rounded-lg p-4 bg-slate-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <Ghost className="w-5 h-5 text-slate-600" />
                  <h4 className="font-bold text-slate-800">Monster</h4>
                </div>
                {story.monster_character && (
                  <div className="space-y-2">
                    <p className="font-semibold text-blue-900">{story.monster_character.name}</p>
                    <p className="text-sm text-gray-700">{story.monster_character.description}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Major Characters */}
            {story.major_characters && story.major_characters.length > 0 && (
              <div className="border-2 border-indigo-500/30 rounded-lg p-6 bg-indigo-50/50">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Major Characters</h3>
                <div className="space-y-4">
                  {story.major_characters.map((character, index) => (
                    <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
                      <p className="font-semibold text-lg text-indigo-900 mb-2">{character.name}</p>
                      <p className="text-sm text-gray-700">{character.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Scene Breakdown */}
            {story.scene_breakdown && story.scene_breakdown.length > 0 && (
              <div className="border-2 border-blue-500/30 rounded-lg p-6 bg-blue-50/50">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Scene by Scene</h3>
                <div className="space-y-6">
                  {story.scene_breakdown.map((scene, index) => (
                    <div key={index} className="border-l-4 border-sky-500 pl-4 py-2 space-y-4">
                      <p className="font-semibold text-lg text-blue-900">Scene {index + 1}</p>
                      
                      {scene.visual_description && (
                        <div className="text-sm">
                          <span className="font-semibold">What Happens:</span> 
                          {scene.scene_title && <strong> {scene.scene_title}: </strong>}
                          {scene.visual_description}
                        </div>
                      )}

                      {/* Scene Yin Yang Visualization */}
                      <div className="my-4 bg-white/50 p-4 rounded-lg">
                        <StoryYinYang 
                          characters={{
                            mother: { name: scene.yang_rising_mother?.split(',')[0] || 'Mother', description: scene.yang_rising_mother },
                            hero: { name: scene.yang_hero?.split(',')[0] || 'Hero', description: scene.yang_hero },
                            magician: { name: scene.yin_rising_magician?.split(',')[0] || 'Magician', description: scene.yin_rising_magician },
                            monster: { name: scene.yin_monster?.split(',')[0] || 'Monster', description: scene.yin_monster }
                          }}
                          title={`Scene ${index + 1} Classic Characters`}
                        />
                      </div>

                      <div className="text-sm space-y-2">
                        {scene.yang_rising_mother && (
                          <p className="text-gray-600"><span className="font-semibold text-green-700">Mother (Yang rising):</span> {scene.yang_rising_mother}</p>
                        )}
                        {scene.yang_hero && (
                          <p className="text-gray-600"><span className="font-semibold text-amber-700">Hero (Yang):</span> {scene.yang_hero}</p>
                        )}
                        {scene.yin_rising_magician && (
                          <p className="text-gray-600"><span className="font-semibold text-blue-700">Magician (Yin rising):</span> {scene.yin_rising_magician}</p>
                        )}
                        {scene.yin_monster && (
                          <p className="text-gray-600"><span className="font-semibold text-slate-700">Monster (Yin):</span> {scene.yin_monster}</p>
                        )}
                        {scene.yin_yang_connection && (
                          <p className="text-gray-600 italic mt-2 whitespace-pre-wrap"><span className="font-semibold">Yin Yang Connection:</span> {scene.yin_yang_connection}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Messages */}
            {story.chat_messages && story.chat_messages.length > 0 && (
              <div className="border-2 border-sky-500/30 rounded-lg p-6 bg-sky-50/50">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Spirit Story Conversation</h3>
                <div className="space-y-3">
                  {story.chat_messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        msg.type === "user"
                          ? "bg-sky-100 border border-sky-300"
                          : "bg-blue-100 border border-blue-300"
                      }`}
                    >
                      <p className={`text-xs font-semibold mb-1 ${
                        msg.type === "user" ? "text-sky-800" : "text-blue-800"
                      }`}>
                        {msg.type === "user" ? "You" : "Spirit Story"}
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <ShareStoryModal
          story={story}
          onClose={() => setShowShareModal(false)}
          onShared={handleShared}
        />
      )}
    </>
  );
}
