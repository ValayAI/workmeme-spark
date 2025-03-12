
import React from 'react';
import { MemeTemplate as MemeTemplateType } from '@/utils/memeTemplates';
import { cn } from '@/lib/utils';

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
        "rounded-xl overflow-hidden relative cursor-pointer transition-all duration-300 group",
        "transform hover:scale-105 hover:shadow-lg",
        isSelected ? "ring-2 ring-primary scale-105" : "ring-0"
      )}
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={template.imageSrc} 
          alt={template.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
        <div className="p-3 text-white">
          <p className="font-medium text-sm">{template.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MemeTemplate;
