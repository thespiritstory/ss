import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

import CopyButton from "./CopyButton";

const SPIRIT_STORY_CHAT_CONTEXT = `You are an expert on the Spirit Story framework.

You have comprehensive knowledge of famous stories from all forms of media (literature, film, TV, video games, anime, mythology, religious texts, folklore) across all eras and genres.

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

MOTHER (Yang rising, Spring) - Knowledge forming from energy. Takes unknown and begins giving it form. The beginning of overcoming this part of the unknown.

HERO (Yang, Summer) - Knowledge fully formed. What was unknown is now fully known. This part of the unknown has been overcome. The monster is defeated for now.

MAGICIAN (Yin rising, Autumn) - Knowledge breaking down. Takes what was known and breaks it apart. Structure becomes energy again. Prepares for the cycle to restart.

MONSTER (Yin, Winter) - Unknown unformed energy. Pure unknown waiting to become known. What must be overcome. The next part of the Spirit needing form.

CRITICAL: When describing the MONSTER, NEVER use the words "form", "formation", "forming", "formed", or any variation of "form". 
The Monster IS unformed - it has NO form yet. Only use words like: unknown, unformed energy, chaos, threat, darkness, challenge, what must be overcome, pure unknown, the unformed.

CRITICAL UNDERSTANDING: FIXED SPIRITUAL MEANINGS vs CHANGING STORY ELEMENTS
THE SPIRITUAL MEANINGS NEVER CHANGE: Mother is ALWAYS "energy forming knowledge", Hero is ALWAYS "formed knowledge structure", Magician is ALWAYS "knowledge breaking down", Monster is ALWAYS "unformed energy".
WHAT CHANGES SCENE BY SCENE: The specific story character that SHOWS each classic character role in that specific scene.

THE CLASSIC ROLES SHOULD BE FILLED BY STORY CHARACTERS IN EACH SCENE.
Different characters can and should step into the Hero role, Mother role, etc., in different scenes based on what they're doing in THAT specific moment.

EXAMPLE: In The Lion King:
- Scene 1 (Gorge): MUFASA is the Mother (forming rescue), SIMBA's trust is the Hero (formed safety)
- Scene 4 (Pride Rock): NALA is the Mother (forming Simba's resolve), SIMBA's challenge is the Hero (formed kingship)
The roles are filled by DIFFERENT CHARACTERS doing DIFFERENT THINGS in each scene, showcasing the DYNAMIC nature of the Spirit Story.

LANGUAGE GUIDELINES:
- ALWAYS use "shows" or "is shown by" instead of "symbolizes" "illustrates" "represents" or any similar words
- NEVER use terms from psychology or psychiatry
- BE CONCRETE: Always tie concepts to specific story elements and actions from THIS story
- Use specific examples from the story being discussed
- Ground every explanation in observable story events
- Show how things work using observable story elements
- Use simple, everyday words`;

export default function SpiritStoryChat({ analysis, storyTitle, onTokenUpdate }) {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);

  const TOKENS_PER_QUESTION = 1;

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (analysis) {
      generateSuggestedQuestions();
    }
  }, [analysis]);

  const generateSuggestedQuestions = () => {
    const questions = [];
    
    // Question about Mother's role
    if (analysis.mother_character?.name) {
      questions.push(
        `How does ${analysis.mother_character.name}'s role as the Mother help overcome the challenges in this story?`
      );
    }
    
    // Question about Hero's actions
    if (analysis.hero_character?.name) {
      questions.push(
        `What actions does ${analysis.hero_character.name} take that demonstrate their role as the Hero?`
      );
    }
    
    // Question about Magician or major character
    if (analysis.magician_character?.name) {
      questions.push(
        `In what ways does ${analysis.magician_character.name} act as the Magician to break down knowledge in the story?`
      );
    } else if (analysis.major_characters && analysis.major_characters.length > 0) {
      questions.push(
        `How do the major characters move through different classic character roles throughout the story?`
      );
    }
    
    setSuggestedQuestions(questions);
  };

  const loadUser = async () => {
    try {
      const currentUser = await base44.auth.me();
      setUser(currentUser);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  const deductTokenForQuestion = async () => {
    if (!user) {
      throw new Error("User not loaded. Cannot deduct tokens.");
    }

    const currentUser = await base44.auth.me();
    const currentBalance = currentUser.spirit_token_balance || 0;
    
    if (currentBalance < TOKENS_PER_QUESTION) {
      throw new Error(`Not enough Spirit Tokens to ask a question.\n\nCurrent balance: ${currentBalance} tokens\nRequired: ${TOKENS_PER_QUESTION} token\n\nPlease purchase more tokens to continue.`);
    }
    
    const newBalance = currentBalance - TOKENS_PER_QUESTION;
    const newTotalUsed = (currentUser.total_tokens_used || 0) + TOKENS_PER_QUESTION;
    
    await base44.auth.updateMe({
      spirit_token_balance: newBalance,
      total_tokens_used: newTotalUsed
    });

    setUser({
      ...currentUser,
      spirit_token_balance: newBalance,
      total_tokens_used: newTotalUsed
    });

    if (onTokenUpdate) {
      onTokenUpdate(newBalance);
    }
  };

  const askQuestion = async (questionToAsk = question) => {
    if (!questionToAsk.trim()) return;

    const userQuestion = questionToAsk;
    if (questionToAsk === question) {
      setQuestion("");
    }
    setMessages([...messages, { type: "user", text: userQuestion }]);
    setIsAsking(true);

    try {
      await deductTokenForQuestion();

      const contextPrompt = `${SPIRIT_STORY_CHAT_CONTEXT}

CURRENT STORY EXPERIENCE:
Title: ${storyTitle}
Summary: ${analysis.spirit_story_summary || ""}
Spirit Story Explanation: ${analysis.spirit_story_explanation || ""}
Overall Yin Yang Connection: ${analysis.overall_yin_yang_connection || ""}
Mother Character: ${analysis.mother_character?.name} - ${analysis.mother_character?.description}
Hero Character: ${analysis.hero_character?.name} - ${analysis.hero_character?.description}
Magician Character: ${analysis.magician_character?.name} - ${analysis.magician_character?.description}
Monster Character: ${analysis.monster_character?.name} - ${analysis.monster_character?.description}

MAJOR CHARACTERS:
${analysis.major_characters?.map(c => `${c.name}: ${c.description}`).join('\n') || 'No major characters listed'}

SCENES:
${analysis.scene_breakdown?.map((scene, i) => `
Scene ${i + 1}: ${scene.scene_title || ''}
${scene.visual_description || ''}
Mother: ${scene.yang_rising_mother || ''}
Hero: ${scene.yang_hero || ''}
Magician: ${scene.yin_rising_magician || ''}
Monster: ${scene.yin_monster || ''}
Yin Yang: ${scene.yin_yang_connection || ''}
`).join('\n---\n') || 'No scenes listed'}

INSTRUCTIONS:
Answer questions about this Spirit Story experience.
Keep focus on how the Spirit Story shows us how to overcome a Spirit.
Use the exact terminology: formed, forming, breaking down, broken down, unformed, energy, knowledge, structure.
ALWAYS use "shows" or "is shown by" - NEVER use "symbolizes" "illustrates" "represents" or similar words
Always refer to "the Spirit Story" when discussing stories.
BE CONCRETE in your answers - use specific examples from THIS story
Tie every concept to actual events, characters, or moments from the story
Show how things work using observable story elements
Write simply and clearly using everyday words with concrete examples from THIS story
If asked unclear questions, explain using concrete examples from the story's context.
If the user uses psychological or psychiatric terminology, gently redirect them to Spirit Story terms using concrete examples from THIS story.
DO NOT contradict the experience provided above.
Stay consistent with the Spirit Story framework.

USER QUESTION: ${userQuestion}`;

      const response = await base44.integrations.Core.InvokeLLM({
        prompt: contextPrompt
      });

      setMessages([...messages, 
        { type: "user", text: userQuestion },
        { type: "assistant", text: response }
      ]);
      
    } catch (error) {
      console.error("Chat error:", error);
      
      if (error.message.includes("Not enough Spirit Tokens")) {
        if (window.confirm(error.message + "\n\nWould you like to purchase tokens now?")) {
          navigate(createPageUrl("SpiritMeter"));
        }
      } else {
        setMessages([...messages, 
          { type: "user", text: userQuestion },
          { type: "assistant", text: `Error: ${error.message}. Please try again.`, isError: true }
        ]);
      }
    }
    setIsAsking(false);
  };

  const formatChatText = () => {
    if (messages.length === 0) return "";
    let text = `SPIRIT STORY QUESTIONS: ${storyTitle || "Untitled"}\n\n`;
    messages.forEach((msg, index) => {
      text += `${msg.type === "user" ? "QUESTION" : "ANSWER"}:\n${msg.text}\n\n`;
      if (msg.type === "assistant" && index < messages.length - 1) {
        text += "---\n\n";
      }
    });
    return text;
  };

  return (
    <div className="space-y-6">
      {/* Suggested Questions */}
      {suggestedQuestions.length > 0 && (
        <div className="space-y-4">
          <p className="text-xl font-bold text-blue-900">
            Questions to Explore:
          </p>
          <div className="space-y-3">
            {suggestedQuestions.map((q, index) => (
              <button
                key={index}
                onClick={() => askQuestion(q)}
                disabled={isAsking || !user}
                className="w-full p-4 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 border-2 border-sky-300 hover:border-sky-400 rounded-lg transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-sky-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-blue-900 leading-relaxed group-hover:text-sky-800">
                    {index + 1}. {q}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {messages.length > 0 && (
        <div className="space-y-6 max-h-96 overflow-y-auto">
          {messages.reduce((acc, msg, index) => {
            if (msg.type === "user") {
              acc.push({
                question: msg.text,
                answer: messages[index + 1]?.type === "assistant" ? messages[index + 1].text : null,
                index: index
              });
            }
            return acc;
          }, []).map((pair, pairIndex) => (
            <div key={pair.index}>
              {pairIndex > 0 && (
                <div className="h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent my-6"></div>
              )}
              <div className="space-y-3">
                <div className="p-5 rounded-lg bg-sky-100 border-2 border-sky-300">
                  <p className="text-base font-semibold mb-3 text-sky-800">
                    Question
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">{pair.question}</p>
                </div>
                {pair.answer && (
                  <div className="p-5 rounded-lg bg-blue-50 border-2 border-blue-300">
                    <p className="text-base font-semibold mb-3 text-blue-800">
                      Answer
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">{pair.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-3">
        <Textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about this Spirit Story..."
          className="bg-white/50 border-2 border-sky-400/30 focus:border-sky-500 min-h-[100px] resize-none text-lg"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              askQuestion();
            }
          }}
          disabled={isAsking}
        />
        <Button
          onClick={() => askQuestion()}
          disabled={!question.trim() || isAsking || !user}
          className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white disabled:opacity-50 disabled:cursor-not-allowed text-lg py-6"
        >
          {isAsking ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              The Spirit Story Is Answering...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Ask Question (1 token)
            </>
          )}
        </Button>
      </div>

      {messages.length > 0 && (
        <div className="flex justify-center pt-2 border-t-2 border-sky-400/20">
          <CopyButton 
            text={formatChatText()} 
            label="Copy All Questions & Answers"
          />
        </div>
      )}
    </div>
  );
}