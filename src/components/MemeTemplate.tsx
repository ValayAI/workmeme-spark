
import React from 'react';
import { MemeTemplate as MemeTemplateType } from '@/utils/memeTemplates';
import { cn } from '@/lib/utils';
import { Check, Sparkles } from 'lucide-react';

interface MemeTemplateProps {
  template: MemeTemplateType;
  isSelected: boolean;
  onClick: () => void;
}

const MemeTemplate: React.FC<MemeTemplateProps> = ({ 
  template, 
  isSelected, 
  onClick 
}) => {
  return (
    <div 
      className={cn(
        "relative cursor-pointer transition-all duration-300",
        "transform hover:scale-105 overflow-hidden group",
        "funky-border",
        isSelected ? "ring-2 ring-fun-pink ring-offset-2 ring-offset-background scale-105" : "ring-0"
      )}
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-fun-purple/10 via-fun-pink/5 to-fun-blue/10 relative">
        <img 
          src={template.imageSrc} 
          alt={template.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            "group-hover:scale-110"
          )}
          loading="lazy"
        />
        
        {/* Sparkle effect in corners */}
        <div className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Sparkles className="h-3 w-3 text-fun-yellow" />
        </div>
        <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Sparkles className="h-3 w-3 text-fun-yellow" />
        </div>
        
        {isSelected && (
          <div className="absolute top-2 right-2 bg-fun-pink rounded-full p-1 shadow-lg text-white animate-pulse">
            <Check className="h-3 w-3" />
          </div>
        )}
        
        <div className={cn(
          "absolute inset-0 flex items-end justify-start",
          "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
          "transition-opacity group-hover:opacity-100",
          "text-white",
          "before:absolute before:inset-0 before:opacity-0 before:bg-gradient-to-r before:from-fun-pink/30 before:to-fun-blue/30 before:group-hover:opacity-100 before:transition-opacity"
        )}>
          <div className="p-3 relative z-10">
            <p className="font-medium text-sm drop-shadow-md">{template.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeTemplate;
