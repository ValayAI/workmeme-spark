
import React from 'react';
import { MemeTemplate as MemeTemplateType } from '@/utils/memeTemplates';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

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
        "rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300",
        "transform hover:scale-105 hover:shadow-lg bg-card",
        isSelected ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105" : "ring-0"
      )}
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary/30">
        <img 
          src={template.imageSrc} 
          alt={template.name}
          className={cn(
            "w-full h-full object-cover transition-transform",
            isSelected ? "scale-100" : "group-hover:scale-105"
          )}
          loading="lazy"
        />
      </div>
      
      {isSelected && (
        <div className="absolute top-2 right-2 bg-primary rounded-full p-1 shadow-lg text-white">
          <Check className="h-3 w-3" />
        </div>
      )}
      
      <div className={cn(
        "absolute inset-0 flex items-end justify-start",
        "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
        "opacity-100 transition-opacity text-white"
      )}>
        <div className="p-3">
          <p className="font-medium text-sm">{template.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MemeTemplate;
