
import React from 'react';
import { Sparkles, Image, Github, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "w-full py-5 px-6 flex items-center justify-between backdrop-blur-md bg-white/30 border-b border-slate-200/20 sticky top-0 z-50 animate-fade-in", 
      className
    )}>
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-primary to-primary/70 p-2 rounded-lg shadow-md">
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">WorkMeme</span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="rounded-full gap-1 text-xs">
          <LayoutDashboard className="h-3.5 w-3.5" />
          Gallery
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full gap-1 text-xs">
          <Image className="h-3.5 w-3.5" />
          Templates
        </Button>
      </nav>
      
      <div className="flex items-center space-x-2">
        <Button size="sm" variant="outline" className="rounded-full border border-primary/20">
          <Github className="h-4 w-4 text-foreground/80" />
          <span className="ml-2 text-xs font-medium hidden sm:inline">Source</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
