
import React from 'react';
import { Sparkles, Image, Download, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-4 px-6 flex items-center justify-between glass sticky top-0 z-50 animate-fade-in", className)}>
      <div className="flex items-center space-x-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <span className="font-semibold text-lg tracking-tight">WorkMeme</span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
          Gallery
        </a>
        <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
          Templates
        </a>
        <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
          About
        </a>
      </nav>
      
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
          <Github className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
