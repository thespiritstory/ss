import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Copy, Check, Mail, Share2, Link2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function ShareStoryModal({ story, onClose, onShared }) {
  const [copied, setCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [emailTo, setEmailTo] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const shareUrl = `${window.location.origin}${window.location.pathname}?page=SharedStoryView&id=${story.id}`;

  const handleEnableSharing = async () => {
    setIsSharing(true);
    try {
      await base44.entities.StoryAnalysis.update(story.id, {
        ...story,
        is_public_share: true
      });
      if (onShared) onShared();
    } catch (error) {
      console.error("Error enabling sharing:", error);
      alert("Failed to enable sharing. Please try again.");
    } finally {
      setIsSharing(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSendEmail = async () => {
    if (!emailTo.trim()) {
      alert("Please enter an email address");
      return;
    }

    setIsSendingEmail(true);
    try {
      await base44.integrations.Core.SendEmail({
        to: emailTo,
        subject: `Check out this Spirit Story: ${story.story_title}`,
        body: `I wanted to share this Spirit Story experience with you!\n\n"${story.story_title}"\n\n${story.spirit_story_summary || 'A fascinating spiritual journey through this story.'}\n\nView the full experience here:\n${shareUrl}\n\nDiscover the Spirit Story in your own favorite tales at The Spirit Story app!`
      });
      alert("Email sent successfully!");
      setEmailTo("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setIsSendingEmail(false);
    }
  };

  const handleShareTwitter = () => {
    const text = `Check out my Spirit Story experience of "${story.story_title}"! ${story.spirit_story_summary || ''}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleShareFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  if (!story.is_public_share) {
    return (
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Card className="parchment-bg ornate-border max-w-lg w-full p-8 space-y-6 relative">
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 hover:bg-red-100"
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="text-center space-y-4">
              <Share2 className="w-16 h-16 text-sky-500 mx-auto" />
              <h2 className="text-2xl font-bold text-blue-900">Share This Story?</h2>
              <p className="text-gray-700 leading-relaxed">
                Enable sharing to create a public link that you can send to friends, 
                family, or share on social media. Anyone with the link will be able 
                to view this Spirit Story experience.
              </p>
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Once shared, this story will be publicly viewable 
                  by anyone with the link.
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                onClick={onClose}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleEnableSharing}
                disabled={isSharing}
                className="flex-1 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white"
              >
                {isSharing ? "Enabling..." : "Enable Sharing"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Card className="parchment-bg ornate-border max-w-lg w-full p-8 space-y-6 relative">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 hover:bg-red-100"
          >
            <X className="w-5 h-5" />
          </Button>

          <div className="text-center space-y-2">
            <Share2 className="w-12 h-12 text-sky-500 mx-auto" />
            <h2 className="text-2xl font-bold text-blue-900">Share Story</h2>
            <p className="text-sm text-gray-600">"{story.story_title}"</p>
          </div>

          {/* Copy Link */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-900">Shareable Link</label>
            <div className="flex gap-2">
              <Input
                value={shareUrl}
                readOnly
                className="bg-white/50 text-sm"
              />
              <Button
                onClick={handleCopyLink}
                variant="outline"
                className={copied ? "bg-green-50 border-green-500" : ""}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Send via Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-blue-900">Send via Email</label>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="friend@example.com"
                value={emailTo}
                onChange={(e) => setEmailTo(e.target.value)}
                className="bg-white/50"
              />
              <Button
                onClick={handleSendEmail}
                disabled={isSendingEmail}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-blue-900">Share on Social Media</label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleShareTwitter}
                variant="outline"
                className="w-full"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter / X
              </Button>
              <Button
                onClick={handleShareFacebook}
                variant="outline"
                className="w-full"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}