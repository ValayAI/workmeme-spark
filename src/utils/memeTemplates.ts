
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
    id: 'confused-man',
    name: 'Confused Man',
    imageSrc: 'https://images.pexels.com/photos/3799235/pexels-photo-3799235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'productivity',
    defaultTopText: 'When the client explains what they want',
    defaultBottomText: 'What they actually need',
  },
  {
    id: 'monday-coffee',
    name: 'Monday Coffee',
    imageSrc: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'office',
    defaultTopText: 'Me before coffee',
    defaultBottomText: 'Me after coffee',
  },
  {
    id: 'laptop-panic',
    name: 'Laptop Panic',
    imageSrc: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'technology',
    defaultTopText: 'When you realize',
    defaultBottomText: 'You forgot to save your work',
  },
  {
    id: 'sleeping-meeting',
    name: 'Sleeping in Meeting',
    imageSrc: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'meetings',
    defaultTopText: 'That one meeting',
    defaultBottomText: 'That should\'ve been an email',
  },
  {
    id: 'excited-kid',
    name: 'Excited Kid',
    imageSrc: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'misc',
    defaultTopText: 'Me when the code',
    defaultBottomText: 'Works on the first try',
  },
  {
    id: 'cat-laptop',
    name: 'Cat on Laptop',
    imageSrc: 'https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'productivity',
    defaultTopText: 'My productivity',
    defaultBottomText: 'My cat',
  },
  {
    id: 'tired-office',
    name: 'Tired Office Worker',
    imageSrc: 'https://images.pexels.com/photos/5699482/pexels-photo-5699482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'office',
    defaultTopText: 'Friday 9:00 AM',
    defaultBottomText: 'Friday 4:59 PM',
  },
  {
    id: 'celebration',
    name: 'Celebration',
    imageSrc: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'misc',
    defaultTopText: 'When you finally fix',
    defaultBottomText: 'That impossible bug',
  },
  {
    id: 'deadline-panic',
    name: 'Deadline Panic',
    imageSrc: 'https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'productivity',
    defaultTopText: 'Project deadline in 2 weeks',
    defaultBottomText: 'Project deadline tomorrow',
  },
  {
    id: 'tech-confusion',
    name: 'Tech Confusion',
    imageSrc: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'technology',
    defaultTopText: 'When IT asks',
    defaultBottomText: 'If I tried turning it off and on again',
  }
];

export const getCategoryMemes = (category: string) => {
  if (category === 'all') return MEME_TEMPLATES;
  return MEME_TEMPLATES.filter(template => template.category === category);
};

export const getMemeById = (id: string) => {
  return MEME_TEMPLATES.find(template => template.id === id);
};
