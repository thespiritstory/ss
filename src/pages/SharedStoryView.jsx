import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Flower2, Sword, Wand2, Ghost, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import StoryYinYang from "../components/analyzer/StoryYinYang";

export default function SharedStoryView() {
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadSharedStory();
  }, []);

  const loadSharedStory = async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const storyId = urlParams.get('id');
      
      if (!storyId) {
        setError("No story ID provided");
        setIsLoading(false);
        return;
      }

      const allStories = await base44.entities.StoryAnalysis.list();
      const foundStory = allStories.find(s => s.id === storyId && s.is_public_share === true);
      
      if (!foundStory) {
        setError("Story not found or is not publicly shared");
        setIsLoading(false);
        return;
      }

      setStory(foundStory);
    } catch (err) {
      console.error("Error loading shared story:", err);
      setError("Failed to load story");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="parchment-bg ornate-border p-12">
            <div className="text-center space-y-4">
              <Loader2 className="w-12 h-12 text-sky-600 mx-auto animate-spin" />
              <p className="text-blue-800 text-lg">Loading Spirit Story experience...</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="parchment-bg ornate-border p-12">
            <div className="text-center space-y-6">
              <Sparkles className="w-16 h-16 text-sky-400 mx-auto opacity-50" />
              <h2 className="text-3xl font-bold text-blue-900">Story Not Found</h2>
              <p className="text-gray-700 text-lg">{error || "This story may have been removed or made private."}</p>
              
              <div className="border-t-2 border-sky-400/30 pt-8 space-y-4">
                <h3 className="text-2xl font-bold text-blue-800">Experience Your Own Stories!</h3>
                <p className="text-gray-600">
                  Discover the Spirit Story in your favorite tales, myths, and narratives.
                </p>
                <Button
                  onClick={() => navigate(createPageUrl("Analyzer"))}
                  className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-8 py-6 text-lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Your Spirit Story Journey
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* CTA Banner for Non-Users */}
        <Card className="parchment-bg ornate-border p-8 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="text-center space-y-4">
            <Sparkles className="w-12 h-12 text-sky-600 mx-auto animate-pulse" />
            <h2 className="text-2xl font-bold text-blue-900">
              Experience Your Own Stories with The Spirit Story
            </h2>
            <p className="text-gray-700 text-lg">
              Discover the spiritual wisdom hidden in your favorite tales
            </p>
            <Button
              onClick={() => navigate(createPageUrl("Analyzer"))}
              className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-6 py-3 text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Create Your Own Experience
            </Button>
          </div>
        </Card>

        {/* Story Content */}
        <Card className="parchment-bg ornate-border p-8 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-2">{story.story_title}</h1>
            <div className="flex items-center gap-2 text-sm text-blue-600">
              <BookOpen className="w-4 h-4" />
              <span>Shared Spirit Story Experience</span>
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
            {story.mother_character && (
              <div className="border-2 border-green-500/30 rounded-lg p-4 bg-green-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <Flower2 className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-green-800">Mother</h4>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-blue-900">{story.mother_character.name}</p>
                  <p className="text-sm text-gray-700">{story.mother_character.description}</p>
                </div>
              </div>
            )}

            {story.hero_character && (
              <div className="border-2 border-amber-500/30 rounded-lg p-4 bg-amber-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <Sword className="w-5 h-5 text-amber-600" />
                  <h4 className="font-bold text-amber-800">Hero</h4>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-blue-900">{story.hero_character.name}</p>
                  <p className="text-sm text-gray-700">{story.hero_character.description}</p>
                </div>
              </div>
            )}

            {story.magician_character && (
              <div className="border-2 border-blue-500/30 rounded-lg p-4 bg-blue-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <Wand2 className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-blue-800">Magician</h4>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-blue-900">{story.magician_character.name}</p>
                  <p className="text-sm text-gray-700">{story.magician_character.description}</p>
                </div>
              </div>
            )}

            {story.monster_character && (
              <div className="border-2 border-slate-500/30 rounded-lg p-4 bg-slate-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <Ghost className="w-5 h-5 text-slate-600" />
                  <h4 className="font-bold text-slate-800">Monster</h4>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-blue-900">{story.monster_character.name}</p>
                  <p className="text-sm text-gray-700">{story.monster_character.description}</p>
                </div>
              </div>
            )}
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
        </Card>

        {/* Bottom CTA */}
        <Card className="parchment-bg ornate-border p-8 bg-gradient-to-br from-blue-50 to-sky-50">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-blue-900">
              Ready to Experience Your Own Stories?
            </h3>
            <p className="text-gray-700">
              Uncover the spiritual wisdom in any story - from fairy tales to modern movies, 
              from mythology to your own dreams.
            </p>
            <Button
              onClick={() => navigate(createPageUrl("Analyzer"))}
              className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-8 py-4 text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}