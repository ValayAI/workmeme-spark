
import React from 'react';
import Header from '@/components/Header';
import MemeGenerator from '@/components/MemeGenerator';
import { Sparkles, Wand2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dot-pattern">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 px-4 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full bg-accent text-accent-foreground text-sm mb-2 animate-slide-down shadow-sm">
              <Wand2 className="h-3.5 w-3.5" />
              <span className="font-medium">AI-Powered Workplace Meme Generator</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Create Work Memes</span> 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent block md:inline"> Without the Work</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your workplace frustrations into shareable humor with our AI-powered meme generator.
              Perfect for Slack, Teams, and even those company-wide emails.
            </p>
          </div>
        </section>
        
        <MemeGenerator />
      </main>
      
      <footer className="p-8 text-center animate-fade-in">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary/70" />
          <p>AI-Powered Meme Generator for Work & Productivity</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
