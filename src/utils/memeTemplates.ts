
// Common workplace meme templates
export interface MemeTemplate {
  id: string;
  name: string;
  imageSrc: string;
  category: 'productivity' | 'office' | 'meetings' | 'technology' | 'misc';
  defaultTopText?: string;
  defaultBottomText?: string;
  textPositions?: {
    topX?: number;
    topY?: number;
    bottomX?: number;
    bottomY?: number;
  };
}

export const MEME_TEMPLATES: MemeTemplate[] = [
  {
    id: 'distracted-worker',
    name: 'Distracted Worker',
    imageSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    category: 'productivity',
    defaultTopText: 'My actual work',
    defaultBottomText: 'Random internet rabbit holes',
  },
  {
    id: 'monday-blues',
    name: 'Monday Blues',
    imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    category: 'office',
    defaultTopText: 'Me on Friday',
    defaultBottomText: 'Me on Monday',
  },
  {
    id: 'meeting-madness',
    name: 'Meeting Madness',
    imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    category: 'meetings',
    defaultTopText: 'This meeting could have been',
    defaultBottomText: 'an email',
  },
  {
    id: 'tech-struggle',
    name: 'Tech Struggle',
    imageSrc: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    category: 'technology',
    defaultTopText: 'When the code works',
    defaultBottomText: 'but you don\'t know why',
  },
  {
    id: 'team-collaboration',
    name: 'Team Collaboration',
    imageSrc: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
    category: 'office',
    defaultTopText: 'What management thinks collaboration looks like',
    defaultBottomText: 'What it actually looks like',
  },
  {
    id: 'productivity-myth',
    name: 'Productivity Myth',
    imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    category: 'productivity',
    defaultTopText: 'My productivity expectations',
    defaultBottomText: 'My actual productivity',
  },
];

export const getCategoryMemes = (category: string) => {
  if (category === 'all') return MEME_TEMPLATES;
  return MEME_TEMPLATES.filter(template => template.category === category);
};

export const getMemeById = (id: string) => {
  return MEME_TEMPLATES.find(template => template.id === id);
};
