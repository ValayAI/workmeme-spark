
// This is a simulated AI text generation service
// In a real implementation, this would connect to an API like OpenAI GPT

interface TextGenerationOptions {
  context?: string;
  tone?: 'funny' | 'sarcastic' | 'professional' | 'motivational';
  length?: 'short' | 'medium' | 'long';
}

// Predefined meme captions by category
const CAPTIONS = {
  productivity: [
    "My productivity when no one is watching vs. when my boss walks by",
    "To-do list on Monday vs. To-do list on Friday",
    "Me planning my day vs. Me after checking email",
    "8 hours of work compressed into a 30-minute panic",
    "My brain during work hours vs. My brain at 3 AM",
    "That moment when you realize you've been productive for an hour straight",
  ],
  meetings: [
    "When the meeting could have been an email",
    "Meeting that should take 15 minutes vs. Meeting that takes an hour",
    "Me during regular meetings vs. Me when someone says 'just one more thing'",
    "Me pretending to pay attention in the third meeting of the day",
    "That moment when you unmute to talk and someone else starts talking",
    "How I think I look on Zoom vs. How I actually look",
  ],
  office: [
    "When the office Wi-Fi goes down for 5 minutes",
    "Work friends vs. Real friends",
    "The office fridge: what people bring vs. what actually gets eaten",
    "Corporate training videos vs. What actually happens",
    "When someone brings donuts to the office",
    "Walking into the office 5 minutes late with coffee"
  ],
  technology: [
    "When the IT person fixes your computer by doing exactly what you did",
    "Me explaining to IT vs. What's actually happening",
    "That feeling when your code works on the first try",
    "Turning it off and on again actually worked",
    "Opening 50 browser tabs because each one might be useful later",
    "The panic when you send an email with a typo"
  ],
  misc: [
    "How my coworkers see me vs. How I see myself",
    "Corporate speak translated: What they say vs. What they mean",
    "My LinkedIn profile vs. My actual job",
    "The salary I want vs. The salary I get",
    "When your coworker starts a sentence with 'With all due respect'",
    "Corporate motivational posters vs. Actual employee motivation"
  ]
};

export const generateMemeText = async (prompt: string, options: TextGenerationOptions = {}) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  let category: keyof typeof CAPTIONS = 'misc';
  
  // Simple keyword matching to determine category
  const lowerPrompt = prompt.toLowerCase();
  if (lowerPrompt.includes('productiv') || lowerPrompt.includes('work') || lowerPrompt.includes('task')) {
    category = 'productivity';
  } else if (lowerPrompt.includes('meeting') || lowerPrompt.includes('zoom') || lowerPrompt.includes('conference')) {
    category = 'meetings';
  } else if (lowerPrompt.includes('office') || lowerPrompt.includes('coworker') || lowerPrompt.includes('colleague')) {
    category = 'office';
  } else if (lowerPrompt.includes('computer') || lowerPrompt.includes('tech') || lowerPrompt.includes('code')) {
    category = 'technology';
  }
  
  // Select random responses from the appropriate category
  const captions = CAPTIONS[category];
  const randomIndex = Math.floor(Math.random() * captions.length);
  
  // Return the caption, splitting it if it contains "vs."
  const caption = captions[randomIndex];
  if (caption.includes(" vs. ")) {
    const [topText, bottomText] = caption.split(" vs. ");
    return { topText, bottomText };
  }
  
  // If no "vs." pattern, determine how to split the text
  if (caption.includes(":")) {
    const [topText, bottomText] = caption.split(":");
    return { topText: topText.trim(), bottomText: bottomText.trim() };
  }
  
  // Default fallback for other formats
  const words = caption.split(" ");
  const midpoint = Math.floor(words.length / 2);
  
  return {
    topText: words.slice(0, midpoint).join(" "),
    bottomText: words.slice(midpoint).join(" ")
  };
};

export const generateSuggestions = async (prompt: string): Promise<string[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simple placeholder suggestions based on prompt
  const suggestions = [
    `${prompt} when deadlines approach`,
    `My boss when ${prompt}`,
    `Working from home: ${prompt}`,
    `${prompt} in the corporate world`,
    `When clients ask for ${prompt}`
  ];
  
  return suggestions;
};
