
import React from 'react';
import { Sparkles, Image, Github, LayoutDashboard, PartyPopper, Lollipop } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(
      "w-full py-5 px-6 flex items-center justify-between backdrop-blur-md bg-white/40 border-b border-fun-purple/20 sticky top-0 z-50 animate-fade-in", 
      className
    )}>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-fun-pink via-fun-purple to-fun-blue blur-xl opacity-70 animate-pulse"></div>
          <div className="bg-white p-2 rounded-full shadow-md relative">
            <Lollipop className="h-6 w-6 text-fun-pink animate-bounce-slight" />
          </div>
        </div>
        <span className="font-bold text-xl tracking-tight gradient-text">MemeRiot</span>
      </div>
      
      <nav className="hidden md:flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="rounded-full gap-1 text-xs hover:bg-fun-purple/10 hover:text-fun-purple">
          <PartyPopper className="h-3.5 w-3.5 text-fun-orange" />
          Gallery
        </Button>
        <Button variant="ghost" size="sm" className="rounded-full gap-1 text-xs hover:bg-fun-pink/10 hover:text-fun-pink">
          <Image className="h-3.5 w-3.5 text-fun-pink" />
          Templates
        </Button>
      </nav>
      
      <div className="flex items-center space-x-2">
        <Button size="sm" variant="default" className="rounded-full bg-gradient-to-r from-fun-purple to-fun-pink hover:from-fun-pink hover:to-fun-purple border-0">
          <Github className="h-4 w-4 mr-2" />
          <span className="text-xs font-medium hidden sm:inline">Source</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
