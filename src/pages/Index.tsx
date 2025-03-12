
import React from 'react';
import Header from '@/components/Header';
import MemeGenerator from '@/components/MemeGenerator';
import { Sparkles, Wand2, PartyPopper, Ghost, Lollipop } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bubbles">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 px-4 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center px-4 py-2 space-x-2 rounded-full bg-gradient-to-r from-fun-pink/20 to-fun-purple/20 text-sm mb-4 animate-float shadow-sm border border-fun-pink/20">
              <PartyPopper className="h-4 w-4 text-fun-orange animate-wiggle" />
              <span className="font-medium">Workplace Memes Just Got More Fun!</span>
              <Ghost className="h-4 w-4 text-fun-purple" />
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl relative">
              <span className="gradient-text">Create Epic Work Memes</span> 
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-fun-orange to-fun-pink bg-clip-text text-transparent block md:inline"> Without Effort!</span>
                <div className="absolute -top-6 -right-6 transform rotate-12">
                  <Lollipop className="h-8 w-8 text-fun-pink animate-float" />
                </div>
              </div>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your workplace frustrations into hilarious memes with our AI-powered generator.
              Perfect for Slack, Teams, and those endless email threads!
            </p>
          </div>
        </section>
        
        <MemeGenerator />
      </main>
      
      <footer className="p-8 text-center animate-fade-in">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-fun-yellow animate-pulse" />
          <p>Making work fun, one meme at a time</p>
          <Sparkles className="h-3.5 w-3.5 text-fun-pink animate-pulse" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
