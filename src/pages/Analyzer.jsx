import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, Save, Flower2, Sword, ChevronDown, ChevronUp, RotateCcw, Sparkles, Ghost, Wand2, BookOpen } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import CopyButton from "../components/analyzer/CopyButton";
import StoryYinYang from "../components/analyzer/StoryYinYang";
import SpiritStoryChat from "../components/analyzer/SpiritStoryChat";

const SPIRIT_STORY_CONTEXT = `You experience stories through the Spirit Story.

Spirit stories show our mind how to overcome the Spirits in our world.

You have comprehensive knowledge of famous stories from all forms of media (literature, film, TV, video games, anime, mythology, religious texts, folklore) across all eras and genres. When a user references any famous story by name only (without providing the full text), use your knowledge of that story to do the experience.

THE SPIRIT STORY:
Spirit is non-physical energy.
Human Spirit forms energy into knowledge.
Unknown breaks knowledge back to energy.

Knowledge and unknown cycle like yin and yang.

THE CYCLE RESTARTS:
The Spirit has many parts of unknown.
Each Spirit Story shows how to overcome one part of the unknown.
When one part of unknown becomes knowledge, that cycle completes.
Then the yinyang cycle restarts.
A new part of unknown becomes the new monster.
The mother begins forming it.
The hero will overcome it.
Then the magician breaks it down.
Back to monster.
And the cycle continues.

FOUR CLASSIC CHARACTERS:

MOTHER (Yang rising, Spring)
Knowledge forming from energy
Takes unknown and begins giving it form
The beginning of overcoming this part of the unknown

HERO (Yang, Summer)  
Knowledge fully formed
What was unknown is now fully known
This part of the unknown has been overcome
The monster is defeated for now

MAGICIAN (Yin rising, Autumn)
Knowledge breaking down
Takes what was known and breaks it apart
Structure becomes energy again
Prepares for the cycle to restart

MONSTER (Yin, Winter)
Unknown unformed energy
Pure unknown waiting to become known
What must be overcome
The next part of the Spirit needing form

CRITICAL: When describing the MONSTER, NEVER use the words "form", "formation", "forming", or any variation of "form". 
The Monster IS unformed - it has NO form yet. Only use words like: unknown, unformed energy, chaos, threat, darkness, challenge, what must be overcome, pure unknown, the unformed.

CRITICAL UNDERSTANDING: FIXED SPIRITUAL MEANINGS vs CHANGING STORY ELEMENTS

This is ABSOLUTELY ESSENTIAL to understand:

THE SPIRITUAL MEANINGS NEVER CHANGE:
- Mother is ALWAYS "energy forming knowledge"
- Hero is ALWAYS "as a formed knowledge structure"  
- Magician is ALWAYS "as knowledge breaking down"  
- Monster is ALWAYS "as unformed energy"

WHAT CHANGES SCENE BY SCENE: The specific story element (character, object, place, concept, force) that SHOWS each classic character role.

EXAMPLE: Galadriel is the Mother overall in Lord of Rings, but in a specific scene like the Shire, 'The Shire itself, as energy forming knowledge, is shown by nurturing Frodo's innocent life'. This shows how the OVERALL character (Galadriel as Mother for the whole story) is different from SCENE-SPECIFIC elements (The Shire as Mother in one particular scene).

ABSOLUTELY CRITICAL - CHARACTERS MENTIONED IN USER INPUT:
If ANY character is specifically NAMED or MENTIONED in the user's story text input, that character MUST be included in the major_characters section.
DO NOT skip any character that the user mentions by name.
Every named character in the story text MUST appear as a major character.
This is NON-NEGOTIABLE.

INSTRUCTIONS FOR SCENE-BY-SCENE:

FIRST AND FOREMOST - USER-PROVIDED SCENES ARE ABSOLUTELY CRITICAL:
If ANY specific scene is MENTIONED or CLEARLY DESCRIBED in the user's story text input, you MUST analyze ALL of those user-described scenes.
- DO NOT skip ANY scene that the user explicitly mentions or describes.
- Every scene explicitly mentioned or described in the story text MUST appear in the scene_breakdown.
- For example, if the user describes 5 specific scenes, analyze ALL 5 scenes. If they describe 10, analyze ALL 10. This is NON-NEGOTIABLE.
- ALL such user-described scenes MUST be in CHRONOLOGICAL ORDER from the BEGINNING to the END of the story as presented by the user.

SECONDLY - DEFAULT SCENE SELECTION (ONLY if user does NOT explicitly describe specific scenes):
If the user's story text does NOT explicitly describe specific scenes, then, by default, break down exactly 4 scenes. These 4 scenes should be:
1. EARLY SCENE: An opening/beginning moment introducing the unformed energy (Monster) and beginning of forming knowledge (Mother)
2. MIDDLE SCENE: A significant turning point showing progression of forming knowledge (Mother) and hero confronting unformed (Hero vs Monster)
3. NEXT MOST IMPORTANT SCENE: Another crucial moment in the story's spiritual journey
4. ENDING SCENE: The climactic confrontation where unformed energy (Monster) is overcome and becomes formed knowledge (Hero)

FIRST: Identify ALL major characters in the story. Every important character must be considered.

THEN, for EACH scene, you MUST find the SPECIFIC story element that is ACTUALLY doing each role IN THAT MOMENT:

1. What specific element (character, object, place, concept) is FORMING knowledge in this scene? = Mother
2. What specific element is FULLY FORMED knowledge in this scene? = Hero
3. What specific element is BREAKING DOWN knowledge in this scene? = Magician  
4. What specific element is UNKNOWN/UNFORMED in this scene? = Monster

CRITICAL: INCLUDE ALL MAJOR CHARACTERS ACROSS SCENES
- EVERY major character who fits a classic character role needs to appear somewhere in the scene classic character yin yangs as a classic character 
- DO NOT leave out important characters - if they appear in a scene and fit the role, USE THEM
- Different major characters should appear as different classic characters across the scene
- DO NOT just repeat the overall characters in every scene
- DO NOT use the same elements in every scene
- LOOK FOR DIFFERENT story elements that embody each role in different scenes
- The same story character CAN do different roles in different scenes
- Objects, places, concepts, forces, and secondary characters CAN be classic characters in specific scenes 
- PRIORITIZE using major characters from the story when they fit the role
- Show how the Spirit Story cycle manifests through VARIOUS elements (especially major characters) throughout the story
- This variety demonstrates the richness and depth of the Spirit Story

LOOK AT what is truly happening in each specific scene.
FIND which story element is doing the forming, which is formed, which is breaking down, which is unformed IN THAT MOMENT.
ENSURE major characters are represented when they fit these roles.

CRITICAL FORMAT for scene characters - use this EXACT format:
"[Specific Story Element in THIS Scene], as [spiritual concept that NEVER changes], is shown by [what they specifically do in THIS SCENE]"

ABSOLUTELY CRITICAL - THE FIRST PART MUST BE THE SPECIFIC STORY ELEMENT:
The text BEFORE the first comma must be the SPECIFIC story element, NOT a generic character type.
WRONG: "Mother Nature, as energy forming knowledge, is shown by..."
CORRECT: "The nurturing home environment, as energy forming knowledge, is shown by..."
WRONG: "The Hero, as a formed knowledge structure, is shown by..."
CORRECT: "Luke's Jedi training, as a formed knowledge structure, is shown by..."

ABSOLUTELY CRITICAL - SPIRITUAL CONCEPTS ARE MANDATORY:
You MUST include the spiritual concept in EVERY scene character description. These are NON-NEGOTIABLE:
- Mother descriptions MUST include "as energy forming knowledge"
- Hero descriptions MUST include "as a formed knowledge structure"  
- Magician descriptions MUST include "as knowledge breaking down"  
- Monster descriptions MUST include "as unformed energy"

CORRECT EXAMPLES:
- "Odie, as energy forming knowledge, is shown by encouraging Garfield to join him and be active."
- "Garfield's sarcastic humor, as a formed knowledge structure, is shown by how he cleverly jokes to avoid taking action."
- "Arlene's gentle teasing, as knowledge breaking down, is shown by her comments that challenge his decisions."
- "The threat of laziness, as unformed energy, is shown by Garfield's resistance to move and engage with the world around him."

FOR EACH SCENE:
- The visual_description should be 3-4 concrete, simple sentences describing what physically happens.
- Focus on the actual actions, movements, and events that occur.
- Use clear, straightforward language that paints a simple picture of the scene.
- Avoid elaborate metaphors or complex descriptions - just describe what happens.
- Add a **1-2 word title of the scene** in bold at the start of each visual description.

ABSOLUTELY CRITICAL - YIN_YANG_CONNECTION FORMAT:
The yin_yang_connection field is MANDATORY and MUST NEVER BE EMPTY OR MISSING.

For the OVERALL yin_yang_connection (after spirit_story_explanation):
Write 3-4 sentences in this EXACT format:
"Yin and Yang Connection: [Description of what Mother character does] (Mother, yang rising) [continues description], [description of what Hero character does] (Hero, yang) [continues], while [description of what Magician character does] (Magician, yin rising) [continues], and [description of what Monster character does] (Monster, yin) [continues]."

For EACH SCENE yin_yang_connection:
Write 2-3 sentences in this EXACT format:
"Yin and Yang Connection: [Description of what the scene Mother element does] (Mother, yang rising) [continues], [description of what the scene Hero element does] (Hero, yang) [continues], while [description of what the scene Magician element does] (Magician, yin rising) [continues], and [description of what the scene Monster element does] (Monster, yin) [continues]."

Example: "Yin and Yang Connection: Gandalf's presence (Mother, yang rising) inspires Aragorn (Hero, yang) to lead, while the remembrance of loss (Magician, yin rising) ensures that the danger of Sauron (Monster, yin) is not forgotten."

CRITICAL: Always label each character/element with their classic character role AND yin/yang position in parentheses: (Mother, yang rising), (Hero, yang), (Magician, yin rising), (Monster, yin).
Use concrete examples from what actually happens.
Use simple, everyday words.
DO NOT skip this field. DO NOT leave it empty. IT IS REQUIRED FOR EVERY SCENE.
IF YOU GENERATE A SCENE WITHOUT A YIN_YANG_CONNECTION, THE RESPONSE IS INVALID AND MUST BE REGENERATED.

LANGUAGE GUIDELINES:
- ALWAYS use "shows" or "is shown by" - NEVER "symbolizes", "illustrates", or "represents"
- NEVER use psychology/psychiatry terms
- Use ONLY these terms: formed/forming/breaking down/broken down/unformed, energy, knowledge, structure

All four parts (Mother, Hero, Magician, Monster) must have complete descriptions for EVERY scene.
EVERY scene MUST have a yin_yang_connection field that is NOT EMPTY.

YOUR TASK:
First, write a single sentence summary in this EXACT format:
"The Spirit Story (title) shows us how to overcome the unformed energy in a Spirit with (concrete description)"

Then, explain how the Spirit Story shows forming spiritual knowledge. NAME THE SPECIFIC OVERALL CHARACTERS for each role. Use concrete examples from the story. Write in simple, clear language.

ABSOLUTELY CRITICAL - OVERALL YIN_YANG_CONNECTION:
After the spirit_story_explanation, you MUST write an overall_yin_yang_connection paragraph.
This paragraph is MANDATORY and MUST be 3-4 sentences.
Format it as: "Yin and Yang Connection: [Mother's action] (Mother, yang rising) [continues], [Hero's action] (Hero, yang) [continues], while [Magician's action] (Magician, yin rising) [continues], and [Monster's action] (Monster, yin) [continues]."
Use the OVERALL character names (not scene-specific elements).
Use concrete examples from THIS story.
Use simple, everyday words.
DO NOT skip this field. DO NOT leave it empty. IT IS REQUIRED.

Then, find the four OVERALL classic characters (these show each role generally across the whole story).

MAJOR CHARACTERS SECTION (CRITICAL):
After identifying the four overall classic characters, identify 3 or more MAJOR CHARACTERS from the story.
These major characters are NOT the overall classic characters.
These are important story characters who move through different classic character roles throughout the story.

ABSOLUTELY CRITICAL: If ANY character is specifically NAMED in the user's story text input, that character MUST be included as a major character. Do not skip any character that the user mentions by name.

For each major character, write 2-3 sentences explaining:
- How they fit into the Spirit Story
- Which classic character roles they show in different scenes
- Use concrete examples from the story
- Use simple, everyday words

Then, break down the story scene by scene.

CRITICAL REMINDER FOR EVERY SCENE:
EVERY scene breakdown MUST include ALL of these fields:
- visual_description (3-4 concrete, simple sentences describing what physically happens, with **1-2 word bold title** at the start)
- yang_rising_mother (with "as energy forming knowledge")
- yang_hero (with "as a formed knowledge structure")
- yin_rising_magician (with "as knowledge breaking down")
- yin_monster (with "as unformed energy")
- yin_yang_connection (2-3 sentences with labeled classic characters AND yin/yang positions)

IF ANY SCENE IS MISSING THE YIN_YANG_CONNECTION FIELD, THE ENTIRE RESPONSE IS INVALID.

Return your response as valid JSON matching this schema:
{
  "spirit_story_summary": "The Spirit Story (title) shows us how to overcome the unformed energy in a Spirit with (concrete description)",
  "spirit_story_explanation": "detailed explanation naming specific overall characters with concrete examples in simple language",
  "overall_yin_yang_connection": "REQUIRED: Yin and Yang Connection with labeled classic characters AND yin/yang positions",
  "mother_character": {"name": "overall mother name", "description": "what they do in simple words with concrete examples"},
  "hero_character": {"name": "overall hero name", "description": "what they do in simple words with concrete examples"},
  "magician_character": {"name": "overall magician name", "description": "what they do in simple words with concrete examples"},
  "monster_character": {"name": "overall monster name", "description": "what they do in simple words with concrete examples"},
  "major_characters": [
    {"name": "major character name", "description": "2-3 sentences explaining how they fit into the Spirit Story and which classic character roles they show with concrete examples"}
  ],
  "scene_breakdown": [
    {
      "scene_title": "1-2 word scene title",
      "visual_description": "**Scene Title**: 3-4 concrete, simple sentences describing what physically happens in this scene",
      "yang_rising_mother": "specific element in THIS scene, as energy forming knowledge, is shown by...",
      "yang_hero": "specific element in THIS scene, as a formed knowledge structure, is shown by...",
      "yin_rising_magician": "specific element in THIS scene, as knowledge breaking down",
      "yin_monster": "specific element in THIS scene, as unformed energy",
      "yin_yang_connection": "REQUIRED: Yin and Yang Connection with labeled classic characters AND yin/yang positions"
    }
  ]
}`;

export default function Analyzer() {
  const navigate = useNavigate();
  const [storyTitle, setStoryTitle] = useState("");
  const [storyText, setStoryText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [isExperiencing, setIsExperiencing] = useState(false);
  const [user, setUser] = useState(null); 
  const [sessionTokensUsed, setSessionTokensUsed] = useState(0); 
  const [authError, setAuthError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [expandedSections, setExpandedSections] = useState({
    summary: true, 
    characters: true,
    majorCharacters: true,
    scenes: false,
  });

  // COST: 1 token per experience (so 100 tokens = 100 experiences)
  const TOKENS_PER_EXPERIENCE = 1;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      setIsLoading(true);
      const isAuthenticated = await base44.auth.isAuthenticated();
      
      if (!isAuthenticated) {
        // Allow non-authenticated users for public app
        setUser(null);
        setAuthError(null);
        setIsLoading(false);
        return;
      }
      
      const currentUser = await base44.auth.me();
      
      // Initialize user fields if they don't exist
      if (currentUser.spirit_token_balance === undefined) {
        await base44.auth.updateMe({
          spirit_token_balance: 0,
          total_tokens_used: 0,
          subscription_status: "none"
        });
        const updatedUser = await base44.auth.me();
        setUser(updatedUser);
      } else {
        setUser(currentUser);
      }
      
      setAuthError(null);
    } catch (error) {
      console.error("Error loading user:", error);
      
      if (error.message && error.message.includes("private")) {
        setAuthError("This app is in private mode. Please contact the app owner for access, or change the app to public mode in Dashboard → Settings.");
      } else if (error.message && error.message.includes("access")) {
        setAuthError("You don't have access to this app. Please contact the app owner for an invitation.");
      } else {
        setAuthError(`Unable to load your account: ${error.message || "Unknown error"}. Please try refreshing the page.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // PRODUCTION NOTE: This should be moved to a secure backend function
  // that validates the user's balance before allowing the LLM call
  const deductTokens = async (tokensToDeduct) => {
    if (!user) {
      throw new Error("User not loaded. Cannot deduct tokens.");
    }

    // Get fresh user data
    const currentUser = await base44.auth.me();
    const currentBalance = currentUser.spirit_token_balance || 0;
    
    console.log("Current balance:", currentBalance);
    console.log("Tokens to deduct:", tokensToDeduct);
    
    // Check if user has enough tokens
    if (currentBalance < tokensToDeduct) {
      throw new Error(`Not enough Spirit Tokens to perform this analysis.\n\nCurrent balance: ${currentBalance} tokens\nRequired: ${tokensToDeduct} token${tokensToDeduct === 1 ? '' : 's'}\n\nPlease purchase more tokens to continue.`);
    }
    
    const newBalance = currentBalance - tokensToDeduct;
    const newTotalUsed = (currentUser.total_tokens_used || 0) + tokensToDeduct;
    
    console.log("New balance will be:", newBalance);
    
    // PRODUCTION NOTE: This update should happen on the backend after validating
    // the LLM call was successful, to prevent users from losing tokens if the call fails
    await base44.auth.updateMe({
      spirit_token_balance: newBalance,
      total_tokens_used: newTotalUsed
    });

    // Update local user state
    setUser({
      ...currentUser,
      spirit_token_balance: newBalance,
      total_tokens_used: newTotalUsed
    });

    setSessionTokensUsed(prev => prev + tokensToDeduct);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const experienceStory = async () => {
    // Skip token check for non-authenticated users (public mode)

    // Validate inputs
    if (!storyTitle.trim()) {
      alert("Please enter a story title before experiencing.");
      return;
    }

    if (!storyText.trim()) {
      alert("Please enter story text before experiencing.");
      return;
    }

    // Validate story length before starting
    const storyLength = storyText.trim().length;
    if (storyLength > 2000) {
      alert("⚠️ Story Too Long\n\n" +
        "Your story: " + storyLength + " characters\n" +
        "Maximum: 2000 characters\n\n" +
        "Longer stories often cause timeout errors.\n\n" +
        "Please:\n" +
        "• Focus on 3-5 key scenes only\n" +
        "• Summarize the main plot points\n" +
        "• Remove unnecessary details");
      return;
    }

    setIsExperiencing(true);
    
    try {
        // Deduct tokens BEFORE the LLM call (only if user is authenticated)
        if (user) {
          await deductTokens(TOKENS_PER_EXPERIENCE);
        }
      
      const prompt = `${SPIRIT_STORY_CONTEXT}

Story Title: ${storyTitle}
Story: ${storyText}

Experience this story.`;

      console.log("=== LLM CALL DEBUG INFO ===");
      console.log("Story title:", storyTitle);
      console.log("Story text length:", storyText.length);
      console.log("Tokens deducted:", TOKENS_PER_EXPERIENCE);
      console.log("Starting LLM call at:", new Date().toISOString());

      const result = await base44.integrations.Core.InvokeLLM({
        prompt: prompt,
        response_json_schema: {
          type: "object",
          properties: {
            spirit_story_summary: { type: "string" },
            spirit_story_explanation: { type: "string" },
            overall_yin_yang_connection: { type: "string" },
            mother_character: {
              type: "object",
              properties: {
                name: { type: "string" },
                description: { type: "string" }
              },
              required: ["name", "description"]
            },
            hero_character: {
              type: "object",
              properties: {
                name: { type: "string" },
                description: { type: "string" }
              },
              required: ["name", "description"]
            },
            magician_character: {
              type: "object",
              properties: {
                name: { type: "string" },
                description: { type: "string" }
              },
              required: ["name", "description"]
            },
            monster_character: {
              type: "object",
              properties: {
                name: { type: "string" },
                description: { type: "string" }
              },
              required: ["name", "description"]
            },
            major_characters: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  description: { type: "string" }
                },
                required: ["name", "description"]
              }
            },
            scene_breakdown: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  scene_title: { type: "string" },
                  visual_description: { type: "string" },
                  yang_rising_mother: { type: "string" },
                  yang_hero: { type: "string" },
                  yin_rising_magician: { type: "string" },
                  yin_monster: { type: "string" },
                  yin_yang_connection: { type: "string" }
                },
                required: ["scene_title", "visual_description", "yang_rising_mother", "yang_hero", "yin_rising_magician", "yin_monster", "yin_yang_connection"]
              }
            }
          },
          required: ["spirit_story_summary", "spirit_story_explanation", "overall_yin_yang_connection", "mother_character", "hero_character", "magician_character", "monster_character", "major_characters", "scene_breakdown"]
        }
      });

      console.log("✅ LLM call successful at:", new Date().toISOString());
      setAnalysis(result);
      
    } catch (error) {
      console.error("=== EXPERIENCE ERROR ===");
      console.error("Error:", error);
      console.error("Error type:", typeof error);
      console.error("Error message:", error?.message);
      console.error("Error code:", error?.code);
      
      // Refund the token since the experience failed (only if user is authenticated)
      if (user) {
        try {
          const currentUser = await base44.auth.me();
          await base44.auth.updateMe({
            spirit_token_balance: (currentUser.spirit_token_balance || 0) + TOKENS_PER_EXPERIENCE,
            total_tokens_used: Math.max(0, (currentUser.total_tokens_used || 0) - TOKENS_PER_EXPERIENCE)
          });
          const refundedUser = await base44.auth.me();
          setUser(refundedUser);
          console.log("✅ Token refunded successfully");
        } catch (refundError) {
          console.error("Failed to refund token:", refundError);
        }
      }
      
      let errorMessage = "Failed to experience story.\n\n";
      
      if (error?.message?.includes("Not enough Spirit Tokens")) {
        errorMessage = error.message + "\n\nWould you like to purchase tokens now?";
        if (window.confirm(errorMessage)) {
          navigate(createPageUrl("SpiritMeter"));
        }
        return; // Stop execution if tokens are insufficient
      } else if (
        error?.message?.includes("Network Error") || 
        error?.message?.includes("network") ||
        error?.message?.includes("timeout") ||
        error?.message?.includes("ECONNABORTED") ||
        error?.message?.includes("Failed to fetch") ||
        error?.code === "ECONNABORTED" ||
        error?.code === "ERR_NETWORK"
      ) {
        errorMessage += "⏱️ Network Error: The request couldn't be completed.\n\n" +
          "Your token has been refunded.\n\n" +
          "This can happen when:\n" +
          "• The story is too long or complex\n" +
          "• Your internet connection is unstable\n" +
          "• The server is taking too long to respond\n" +
          "• The server is currently too busy\n\n" + // Added this common cause
          "💡 Try these solutions:\n" +
          "1. Try a shorter story (under 2000 characters)\n" +
          "2. Describe just 3-4 key scenes instead of the full story\n" +
          "3. Check your internet connection\n" +
          "4. Refresh the page and try again";
      } else {
        errorMessage += `Your token has been refunded.\n\n` +
          `Error details: ${error?.message || "Unknown error"}\n\n` +
          "Please try:\n" +
          "• Using a shorter story\n" +
          "• Refreshing the page\n" +
          "• Checking your internet connection\n" +
          "• Waiting a few minutes and trying again";
      }
      
      alert(errorMessage);
    } finally {
      setIsExperiencing(false);
    }
  };

  const saveToLibrary = async () => {
    try {
      await base44.entities.StoryAnalysis.create({
        story_title: storyTitle,
        story_text: storyText,
        ...analysis
      });
      
      alert("Story saved to library!");
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save story. Please try again.");
    }
  };

  const resetAnalysis = () => {
    const confirmed = window.confirm("Are you sure you want to start a new experience? Your current analysis will be cleared.");
    
    if (!confirmed) {
      return;
    }
    
    setStoryTitle("");
    setStoryText("");
    setAnalysis(null);
    setSessionTokensUsed(0);
  };

  const formatFullAnalysis = () => {
    if (!analysis) return "";
    
    let text = `THE SPIRIT STORY: ${storyTitle}\n\n`;
    
    if (analysis.spirit_story_summary) {
      text += `SPIRIT STORY SUMMARY:\n${analysis.spirit_story_summary}\n\n`;
    }
    
    if (analysis.spirit_story_explanation) { 
      text += `SPIRIT STORY EXPLANATION:\n${analysis.spirit_story_explanation}\n\n`;
    }
    
    if (analysis.overall_yin_yang_connection) {
      text += `OVERALL YIN YANG CONNECTION:\n${analysis.overall_yin_yang_connection}\n\n`;
    }
    
    text += `THE FOUR CLASSIC CHARACTERS:\n\n`;
    
    if (analysis.mother_character) {
      text += `MOTHER (Yang rising, Spring):\n${analysis.mother_character?.name || ''}\n${analysis.mother_character?.description || ''}\n\n`;
    }
    
    if (analysis.hero_character) {
      text += `HERO (Yang, Summer):\n${analysis.hero_character?.name || ''}\n${analysis.hero_character?.description || ''}\n\n`;
    }
    
    if (analysis.magician_character) {
      text += `MAGICIAN (Yin rising, Autumn):\n${analysis.magician_character?.name || ''}\n${analysis.magician_character?.description || ''}\n\n`;
    }
    
    if (analysis.monster_character) {
      text += `MONSTER (Yin, Winter):\n${analysis.monster_character?.name || ''}\n${analysis.monster_character?.description || ''}\n\n`;
    }

    if (analysis.major_characters && analysis.major_characters.length > 0) {
      text += `MAJOR CHARACTERS:\n\n`;
      analysis.major_characters.forEach((char) => {
        text += `${char.name}:\n${char.description}\n\n`;
      });
    }
    
    if (analysis.scene_breakdown && analysis.scene_breakdown.length > 0) {
      text += `SCENE BY SCENE BREAKDOWN:\n\n`;
      analysis.scene_breakdown.forEach((scene, index) => {
        text += `SCENE ${index + 1}:\n`;
        if (scene.scene_title) text += `Title: ${scene.scene_title}\n`;
        if (scene.visual_description) text += `Visual Description: ${scene.visual_description}\n\n`;
        if (scene.yang_rising_mother) text += `Mother (Yang rising): ${scene.yang_rising_mother}\n\n`;
        if (scene.yang_hero) text += `Hero (Yang): ${scene.yang_hero}\n\n`;
        if (scene.yin_rising_magician) text += `Magician (Yin rising): ${scene.yin_rising_magician}\n\n`;
        if (scene.yin_monster) text += `Monster (Yin): ${scene.yin_monster}\n\n`;
        if (scene.yin_yang_connection) text += `Yin Yang Connection: ${scene.yin_yang_connection}\n\n`;
        text += `---\n\n`;
      });
    }
    
    return text;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="parchment-bg ornate-border p-12">
            <div className="text-center space-y-4">
              <div className="animate-spin w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full mx-auto"></div>
              <p className="text-blue-800 text-lg">Loading Spirit Story...</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <style>{`
        @keyframes text-flicker {
          0%, 95%, 100% { opacity: 1; }
          96% { opacity: 0.3; }
          97% { opacity: 0.8; }
          98% { opacity: 0.5; }
          99% { opacity: 1; }
        }

        .flicker-text {
          animation: text-flicker 6s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-sky-200 scroll-decoration">
            Spirit Story Experience
          </h1>
          <p className="text-xl text-blue-200 italic max-w-2xl mx-auto">
            Increase Your Spiritual Knowledge!
          </p>
        </div>

        {authError && (
          <Card className="parchment-bg ornate-border p-8">
            <div className="text-center space-y-6">
              <div className="text-red-600 space-y-4">
                <p className="text-2xl font-bold">⚠️ Access Issue</p>
                <p className="text-lg leading-relaxed whitespace-pre-line">
                  {authError}
                </p>
              </div>
              
              <div className="border-t-2 border-red-300 pt-6 space-y-4">
                <p className="text-gray-700 font-semibold">To fix this:</p>
                <div className="text-left space-y-3 max-w-2xl mx-auto bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700"><span className="font-bold">Option 1:</span> Go to Base44 Dashboard → Settings → Change app to "Public" mode</p>
                  <p className="text-gray-700"><span className="font-bold">Option 2:</span> Have the app owner invite you via Dashboard → Users</p>
                  <p className="text-gray-700"><span className="font-bold">Option 3:</span> Try logging in with a different account that has access</p>
                </div>
              </div>

              <div className="flex gap-4 justify-center pt-4">
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Refresh Page
                </Button>
                <Button
                  onClick={() => base44.auth.logout()}
                  variant="outline"
                  className="border-sky-400"
                >
                  Try Different Account
                </Button>
              </div>
            </div>
          </Card>
        )}

        {!authError && (
          <>
            <Card className="parchment-bg ornate-border p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="story-title" className="text-lg font-semibold text-blue-900 text-center block">
                  Story Title
                </label>
                <Input
                  id="story-title"
                  value={storyTitle}
                  onChange={(e) => setStoryTitle(e.target.value)}
                  placeholder="Name your Story, or name any Story!"
                  className="bg-white/50 border-2 border-sky-400/30 focus:border-sky-500 text-lg text-center"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="story-text" className="text-lg font-semibold text-blue-900 text-center block">
                  The Story
                </label>
                <Textarea
                  id="story-text"
                  value={storyText}
                  onChange={(e) => setStoryText(e.target.value)}
                  placeholder={"Enter Your Spirit Story! \nFairy Tales, Mythology, Religion\nImagination, Fantasy\nNarrative and Dreams\nBooks, Tv Shows, Movies! \nAny Story!\nDescribe your favorite scenes and characters!"}
                  className="bg-white/50 border-2 border-sky-400/30 focus:border-sky-500 min-h-[250px] text-lg resize-none text-center"
                  maxLength={4000}
                />
              </div>

              {/* Text moved below the story textarea */}
              <p className="text-blue-900 text-lg italic font-bold text-center pt-2 flicker-text">
                The Spirit Story shows our spirit how to overcome the spirits in our world
              </p>

              <Button
                onClick={experienceStory}
                disabled={!storyText.trim() || isExperiencing || !user}
                className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold py-8 text-xl shadow-lg magical-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isExperiencing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Increasing Spiritual Knowledge!
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      <span>Increase Spiritual Knowledge!</span>
                    </div>
                    <span className="text-base">(1 token)</span>
                  </div>
                )}
              </Button>

            </Card>

            {analysis && (
              <div className="space-y-6 animate-in fade-in duration-1000">
                {(analysis.spirit_story_summary || analysis.spirit_story_explanation || analysis.overall_yin_yang_connection) && (
                  <Card className="parchment-bg ornate-border p-8 space-y-4">
                    <button
                      onClick={() => toggleSection('summary')}
                      className="w-full flex justify-between items-center text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-sky-600" viewBox="0 0 100 100" fill="currentColor">
                          <circle cx="50" cy="50" r="48" fill="currentColor" />
                          <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                          <circle cx="50" cy="26" r="8" fill="white" />
                          <circle cx="50" cy="74" r="8" fill="currentColor" />
                        </svg>
                        <h2 className="text-3xl font-bold text-blue-900 scroll-decoration group-hover:text-sky-700 transition-colors">
                          Spirit Story Summary
                        </h2>
                      </div>
                      {expandedSections.summary ? (
                        <ChevronUp className="w-6 h-6 text-sky-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-sky-600" />
                      )}
                    </button>
                    
                    {expandedSections.summary && (
                      <>
                        <div className="pt-4">
                          <StoryYinYang 
                            characters={{
                              mother: analysis.mother_character,
                              hero: analysis.hero_character,
                              magician: analysis.magician_character,
                              monster: analysis.monster_character
                            }}
                            title="Overall Classic Characters"
                          />
                        </div>

                        <div className="space-y-6 border-t-2 border-sky-400/20 pt-6">
                          {analysis.spirit_story_summary && (
                            <p className="text-xl md:text-2xl text-center text-blue-900 leading-relaxed font-semibold">
                              {analysis.spirit_story_summary}
                            </p>
                          )}
                          
                          {analysis.spirit_story_explanation && (
                            <p className="text-lg text-blue-900 leading-relaxed whitespace-pre-wrap">
                              {analysis.spirit_story_explanation}
                            </p>
                          )}
                          
                          {analysis.overall_yin_yang_connection && (
                            <div className="p-6 bg-gradient-to-r from-amber-50 to-indigo-50 rounded-lg border-2 border-sky-400 shadow-md">
                              <div className="flex items-center gap-2 mb-3">
                                <svg className="w-6 h-6 text-sky-600" viewBox="0 0 100 100" fill="currentColor">
                                  <circle cx="50" cy="50" r="48" fill="currentColor" />
                                  <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                                  <circle cx="50" cy="26" r="8" fill="white" />
                                  <circle cx="50" cy="74" r="8" fill="currentColor" />
                                </svg>
                                <p className="font-bold text-blue-900 text-lg">Overall Yin Yang Connection</p>
                              </div>
                              <p className="text-xl text-blue-900 leading-relaxed font-medium">
                                {analysis.overall_yin_yang_connection}
                              </p>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex justify-center pt-4 border-t-2 border-sky-400/20 mt-4">
                          <CopyButton 
                            text={`${analysis.spirit_story_summary || ''}${analysis.spirit_story_summary && analysis.spirit_story_explanation ? '\n\n' : ''}${analysis.spirit_story_explanation || ''}${analysis.overall_yin_yang_connection ? '\n\nOVERALL YIN YANG CONNECTION:\n' + analysis.overall_yin_yang_connection : ''}`} 
                            label="Copy Summary & Explanation"
                          />
                        </div>
                      </>
                    )}
                  </Card>
                )}

                <Card className="parchment-bg ornate-border p-8 space-y-6">
                  <button
                    onClick={() => toggleSection('characters')}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-sky-600" viewBox="0 0 100 100" fill="currentColor">
                          <circle cx="50" cy="50" r="48" fill="currentColor" />
                          <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                          <circle cx="50" cy="26" r="8" fill="white" />
                          <circle cx="50" cy="74" r="8" fill="currentColor" />
                        </svg>
                      <h2 className="text-3xl font-bold text-blue-900 scroll-decoration group-hover:text-sky-700 transition-colors">
                        The Classic Characters
                      </h2>
                    </div>
                    {expandedSections.characters ? (
                      <ChevronUp className="w-6 h-6 text-sky-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-sky-600" />
                    )}
                  </button>

                  {expandedSections.characters && (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-emerald-200 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-emerald-100 rounded-full">
                              <Flower2 className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-emerald-900">Mother</h3>
                              <p className="text-sm text-emerald-700 italic">Yang Rising • Spring</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="font-semibold text-lg text-emerald-900">
                              {analysis.mother_character?.name}
                            </p>
                            <p className="text-emerald-800 leading-relaxed">
                              {analysis.mother_character?.description}
                            </p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-amber-200 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-amber-100 rounded-full">
                              <Sword className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-amber-900">Hero</h3>
                              <p className="text-sm text-amber-700 italic">Yang • Summer</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="font-semibold text-lg text-amber-900">
                              {analysis.hero_character?.name}
                            </p>
                            <p className="text-amber-800 leading-relaxed">
                              {analysis.hero_character?.description}
                            </p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border-2 border-violet-200 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-violet-100 rounded-full">
                              <Sparkles className="w-6 h-6 text-violet-600" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-violet-900">Magician</h3>
                              <p className="text-sm text-violet-700 italic">Yin Rising • Autumn</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="font-semibold text-lg text-violet-900">
                              {analysis.magician_character?.name}
                            </p>
                            <p className="text-violet-800 leading-relaxed">
                              {analysis.magician_character?.description}
                            </p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-indigo-200 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-indigo-100 rounded-full">
                              <Ghost className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-indigo-900">Monster</h3>
                              <p className="text-sm text-indigo-700 italic">Yin • Winter</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="font-semibold text-lg text-indigo-900">
                              {analysis.monster_character?.name}
                            </p>
                            <p className="text-indigo-800 leading-relaxed">
                              {analysis.monster_character?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center pt-4 border-t-2 border-sky-400/20">
                        <CopyButton 
                          text={`THE FOUR CLASSIC CHARACTERS:\n\nMOTHER (Yang rising, Spring):\n${analysis.mother_character?.name || ''}\n${analysis.mother_character?.description || ''}\n\nHERO (Yang, Summer):\n${analysis.hero_character?.name || ''}\n${analysis.hero_character?.description || ''}\n\nMAGICIAN (Yin rising, Autumn):\n${analysis.magician_character?.name || ''}\n${analysis.magician_character?.description || ''}\n\nMONSTER (Yin, Winter):\n${analysis.monster_character?.name || ''}\n${analysis.monster_character?.description || ''}`}
                          label="Copy Characters"
                        />
                      </div>
                    </>
                  )}
                </Card>

                {analysis.major_characters && analysis.major_characters.length > 0 && (
                  <Card className="parchment-bg ornate-border p-8 space-y-6">
                    <button
                      onClick={() => toggleSection('majorCharacters')}
                      className="w-full flex justify-between items-center text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-sky-600" viewBox="0 0 100 100" fill="currentColor">
                          <circle cx="50" cy="50" r="48" fill="currentColor" />
                          <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                          <circle cx="50" cy="26" r="8" fill="white" />
                          <circle cx="50" cy="74" r="8" fill="currentColor" />
                        </svg>
                        <h2 className="text-3xl font-bold text-blue-900 scroll-decoration group-hover:text-sky-700 transition-colors">
                          Major Characters
                        </h2>
                      </div>
                      {expandedSections.majorCharacters ? (
                        <ChevronUp className="w-6 h-6 text-sky-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-sky-600" />
                      )}
                    </button>

                    {expandedSections.majorCharacters && (
                      <>
                        <div className="space-y-4">
                          {analysis.major_characters.map((character, index) => {
                            const description = character.description.toLowerCase();
                            const isMother = description.includes('role of the mother') || 
                                           description.includes('plays the mother') ||
                                           description.includes('acts as the mother') ||
                                           description.includes('serves as the mother') ||
                                           description.includes('mother role') ||
                                           description.includes('as mother') ||
                                           (description.includes('mother') && description.includes('classic character'));
                            
                            const isHero = description.includes('role of the hero') || 
                                         description.includes('plays the hero') ||
                                         description.includes('acts as the hero') ||
                                         description.includes('serves as the hero') ||
                                         description.includes('hero role') ||
                                         description.includes('as hero') ||
                                         description.includes('as a hero') ||
                                         (description.includes('hero') && description.includes('classic character'));
                            
                            const isMagician = description.includes('role of the magician') || 
                                             description.includes('plays the magician') ||
                                             description.includes('acts as the magician') ||
                                             description.includes('serves as the magician') ||
                                             description.includes('magician role') ||
                                             description.includes('as magician') ||
                                             description.includes('as a magician') ||
                                             (description.includes('magician') && description.includes('classic character'));
                            
                            const isMonster = description.includes('role of the monster') || 
                                            description.includes('plays the monster') ||
                                            description.includes('acts as the monster') ||
                                            description.includes('serves as the monster') ||
                                            description.includes('monster role') ||
                                            description.includes('as monster') ||
                                            description.includes('as a monster') ||
                                            (description.includes('monster') && description.includes('classic character'));
                            
                            return (
                              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200 space-y-3">
                                <div className="flex items-center gap-3 flex-wrap">
                                  <h3 className="text-2xl font-bold text-indigo-900">
                                    {character.name}
                                  </h3>
                                  <div className="flex items-center gap-1">
                                    {isMother && (
                                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center" title="Mother - Yang rising">
                                        <Flower2 className="w-4 h-4 text-emerald-600" />
                                      </div>
                                    )}
                                    {isHero && (
                                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center" title="Hero - Yang">
                                        <Sword className="w-4 h-4 text-amber-600" />
                                      </div>
                                    )}
                                    {isMagician && (
                                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center" title="Magician - Yin rising">
                                        <Wand2 className="w-4 h-4 text-blue-600" />
                                      </div>
                                    )}
                                    {isMonster && (
                                      <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center" title="Monster - Yin">
                                        <Ghost className="w-4 h-4 text-white" />
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <p className="text-indigo-800 leading-relaxed">
                                  {character.description}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="flex justify-center pt-4 border-t-2 border-sky-400/20">
                          <CopyButton 
                            text={`MAJOR CHARACTERS:\n\n${analysis.major_characters.map((char, i) => `${char.name}:\n${char.description}`).join('\n\n')}`}
                            label="Copy Major Characters"
                          />
                        </div>
                      </>
                    )}
                  </Card>
                )}

                {analysis.scene_breakdown && analysis.scene_breakdown.length > 0 && (
                  <Card className="parchment-bg ornate-border p-8 space-y-6">
                    <button
                      onClick={() => toggleSection('scenes')}
                      className="w-full flex justify-between items-center text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-sky-600" viewBox="0 0 100 100" fill="currentColor">
                          <circle cx="50" cy="50" r="48" fill="currentColor" />
                          <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                          <circle cx="50" cy="26" r="8" fill="white" />
                          <circle cx="50" cy="74" r="8" fill="currentColor" />
                        </svg>
                        <h2 className="text-3xl font-bold text-blue-900 scroll-decoration group-hover:text-sky-700 transition-colors">
                          Scene by Scene
                        </h2>
                      </div>
                      {expandedSections.scenes ? (
                        <ChevronUp className="w-6 h-6 text-sky-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-sky-600" />
                      )}
                    </button>

                    {expandedSections.scenes && (
                      <>
                        <div className="space-y-6">
                          {analysis.scene_breakdown.map((scene, index) => (
                            <div key={index} className="bg-white/60 p-6 rounded-lg border-2 border-sky-200 space-y-4">
                              <h3 className="text-2xl font-bold text-blue-900">
                                Scene {index + 1}{scene.scene_title && `: ${scene.scene_title}`}
                              </h3>
                              
                              <div className="space-y-3">
                                {scene.visual_description && (
                                  <div className="p-4 bg-blue-50 rounded-lg">
                                    <p className="font-semibold text-blue-900 mb-2">Visual Description</p>
                                    <p className="text-blue-900 leading-relaxed">
                                      {scene.visual_description}
                                    </p>
                                  </div>
                                )}

                                <div className="my-6">
                                  <StoryYinYang 
                                    characters={{
                                      mother: { name: scene.yang_rising_mother?.split(', as ')[0] || 'Mother', description: scene.yang_rising_mother },
                                      hero: { name: scene.yang_hero?.split(', as ')[0] || 'Hero', description: scene.yang_hero },
                                      magician: { name: scene.yin_rising_magician?.split(', as ')[0] || 'Magician', description: scene.yin_rising_magician },
                                      monster: { name: scene.yin_monster?.split(', as ')[0] || 'Monster', description: scene.yin_monster }
                                    }}
                                    title={`Scene ${index + 1} Classic Characters`}
                                  />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                                    <p className="font-semibold text-emerald-900 mb-2">Mother (Yang Rising)</p>
                                    <p className="text-emerald-800 text-sm leading-relaxed">
                                      {scene.yang_rising_mother}
                                    </p>
                                  </div>

                                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                    <p className="font-semibold text-amber-900 mb-2">Hero (Yang)</p>
                                    <p className="text-amber-800 text-sm leading-relaxed">
                                      {scene.yang_hero}
                                    </p>
                                  </div>

                                  <div className="p-4 bg-violet-50 rounded-lg border border-violet-200">
                                    <p className="font-semibold text-violet-900 mb-2">Magician (Yin Rising)</p>
                                    <p className="text-violet-800 text-sm leading-relaxed">
                                      {scene.yin_rising_magician}
                                    </p>
                                  </div>

                                  <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <p className="font-semibold text-indigo-900 mb-2">Monster (Yin)</p>
                                    <p className="text-indigo-800 text-sm leading-relaxed">
                                      {scene.yin_monster}
                                    </p>
                                  </div>
                                </div>

                                <div className="p-6 bg-gradient-to-r from-amber-50 to-indigo-50 rounded-lg border-2 border-sky-400 shadow-md">
                                  <div className="flex items-center gap-2 mb-3">
                                    <svg className="w-6 h-6 text-sky-600" viewBox="0 0 100 100" fill="currentColor">
                                      <circle cx="50" cy="50" r="48" fill="currentColor" />
                                      <path d="M 50 2 A 48 48 0 0 1 50 98 A 24 24 0 0 1 50 50 A 24 24 0 0 0 50 2" fill="white" />
                                      <circle cx="50" cy="26" r="8" fill="white" />
                                      <circle cx="50" cy="74" r="8" fill="currentColor" />
                                    </svg>
                                    <p className="font-bold text-blue-900 text-lg">Yin Yang Connection</p>
                                  </div>
                                  <p className="text-lg text-blue-900 leading-relaxed font-medium">
                                    {scene.yin_yang_connection}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-center pt-4 border-t-2 border-sky-400/20">
                          <CopyButton 
                            text={`SCENE BY SCENE BREAKDOWN:\n\n${analysis.scene_breakdown.map((scene, i) => `SCENE ${i + 1}${scene.scene_title ? `: ${scene.scene_title}` : ''}:\nVisual Description: ${scene.visual_description || ''}\n\nMother (Yang rising): ${scene.yang_rising_mother || ''}\n\nHero (Yang): ${scene.yang_hero || ''}\n\nMagician (Yin rising): ${scene.yin_rising_magician || ''}\n\nMonster (Yin): ${scene.yin_monster || ''}\n\nYin Yang Connection: ${scene.yin_yang_connection || ''}\n\n---\n`).join('\n')}`}
                            label="Copy Scenes"
                          />
                        </div>
                      </>
                    )}
                  </Card>
                )}

                <div className="flex justify-center">
                  <Card className="parchment-bg ornate-border p-6 inline-block">
                    <CopyButton 
                      text={formatFullAnalysis()} 
                      label="Copy Full Experience"
                    />
                  </Card>
                </div>

                {/* Chat Section - NEW */}
                <SpiritStoryChat 
                  analysis={analysis}
                  storyTitle={storyTitle}
                  onTokenUpdate={(newBalance) => {
                    setUser(prev => ({ ...prev, spirit_token_balance: newBalance }));
                  }}
                />

                <div className="flex flex-col gap-4 justify-center items-center">
                  <Button
                    onClick={saveToLibrary}
                    className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-6 text-lg shadow-lg w-full max-w-md"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Save to Library
                  </Button>
                  
                  <Button
                    onClick={resetAnalysis}
                    variant="outline"
                    className="border-2 border-sky-400 hover:bg-sky-50 px-8 py-6 text-lg w-full max-w-md"
                  >
                    <RotateCcw className="w-5 h-5 mr-2" />
                    New Experience
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}