
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Trash2, Calendar } from "lucide-react";
import { format } from "date-fns";

export default function StoryCard({ story, onView, onDelete }) {
  return (
    <Card className="parchment-bg ornate-border p-6 space-y-4 hover:shadow-2xl transition-all duration-300 group">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-blue-900 group-hover:text-sky-700 transition-colors">
          {story.story_title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-blue-600">
          <Calendar className="w-4 h-4" />
          {format(new Date(story.created_date), "MMM d, yyyy")}
        </div>
      </div>

      <p className="text-gray-700 line-clamp-3">
        {story.story_text}
      </p>

      {story.spirit_story_summary && (
        <div className="border-t-2 border-sky-400/20 pt-3">
          <p className="text-sm text-blue-700 italic line-clamp-2">
            {story.spirit_story_summary}
          </p>
        </div>
      )}

      <div className="flex gap-2 pt-2">
        <Button
          onClick={onView}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Eye className="w-4 h-4 mr-2" />
          View
        </Button>
        <Button
          onClick={onDelete}
          variant="outline"
          className="border-red-300 text-red-600 hover:bg-red-50"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
