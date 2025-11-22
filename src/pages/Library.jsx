import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Sparkles } from "lucide-react";

import StoryCard from "../components/library/StoryCard";
import StoryDetailModal from "../components/library/StoryDetailModal";

export default function Library() {
  const [stories, setStories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = async () => {
    const data = await base44.entities.StoryAnalysis.list("-created_date");
    setStories(data);
  };

  const deleteStory = async (storyId) => {
    await base44.entities.StoryAnalysis.delete(storyId);
    loadStories();
    if (selectedStory?.id === storyId) {
      setSelectedStory(null);
    }
  };

  const handleStoryUpdated = () => {
    loadStories();
  };

  const filteredStories = stories.filter(story =>
    story.story_title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.story_text?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 blur-2xl opacity-20 rounded-full" />
              <BookOpen className="w-16 h-16 text-sky-300 relative" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-sky-200 scroll-decoration">
            Story Library
          </h1>
          <p className="text-xl text-blue-200 italic max-w-2xl mx-auto">
            Your Spirit Story experiences
          </p>
        </div>

        {/* Search Bar */}
        <Card className="parchment-bg ornate-border p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search stories..."
              className="pl-12 bg-white/50 border-2 border-sky-400/30 focus:border-sky-500 text-lg"
            />
          </div>
        </Card>

        {/* Stories Grid */}
        {filteredStories.length === 0 ? (
          <Card className="parchment-bg ornate-border p-12">
            <div className="text-center space-y-4">
              <Sparkles className="w-16 h-16 text-sky-400 mx-auto opacity-50" />
              <h3 className="text-2xl font-semibold text-blue-800">
                {searchTerm ? "No stories found" : "Your library is empty"}
              </h3>
              <p className="text-blue-600 text-lg">
                {searchTerm
                  ? "Try different words"
                  : "Experience your first story"}
              </p>
            </div>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onView={() => setSelectedStory(story)}
                onDelete={() => deleteStory(story.id)}
              />
            ))}
          </div>
        )}

        {/* Detail Modal */}
        {selectedStory && (
          <StoryDetailModal
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
            onStoryUpdated={handleStoryUpdated}
          />
        )}
      </div>
    </div>
  );
}