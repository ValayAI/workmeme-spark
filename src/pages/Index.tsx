
import React from 'react';
import Header from '@/components/Header';
import MemeGenerator from '@/components/MemeGenerator';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-radial from-background to-secondary/30">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 px-4 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center justify-center px-3 py-1 space-x-2 rounded-full bg-primary/10 text-primary text-sm mb-2 animate-slide-down">
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI-Powered Workplace Meme Generator</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Create Work Memes 
              <span className="text-primary block md:inline"> Without the Work</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your workplace frustrations into shareable humor with our AI-powered meme generator.
              Perfect for Slack, Teams, and even those company-wide emails.
            </p>
          </div>
        </section>
        
        <MemeGenerator />
      </main>
      
      <footer className="p-6 text-center animate-fade-in text-sm text-muted-foreground">
        <p>AI-Powered Meme Generator for Work & Productivity</p>
      </footer>
    </div>
  );
};

export default Index;
