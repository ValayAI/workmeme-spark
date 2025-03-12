
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Bold, 
  Italic, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  Type
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TextControlProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  fontSize?: number;
  onChangeFontSize?: (value: number) => void;
  textAlign?: 'left' | 'center' | 'right';
  onChangeTextAlign?: (value: 'left' | 'center' | 'right') => void;
  fontWeight?: 'normal' | 'bold';
  onChangeFontWeight?: (value: 'normal' | 'bold') => void;
  fontStyle?: 'normal' | 'italic';
  onChangeFontStyle?: (value: 'normal' | 'italic') => void;
}

const TextControl: React.FC<TextControlProps> = ({
  label,
  value,
  onChange,
  fontSize = 32,
  onChangeFontSize,
  textAlign = 'center',
  onChangeTextAlign,
  fontWeight = 'bold',
  onChangeFontWeight,
  fontStyle = 'normal',
  onChangeFontStyle
}) => {
  return (
    <div className="space-y-2 animate-fade-in">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">{label}</label>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7", 
              fontWeight === 'bold' && "bg-secondary"
            )}
            onClick={() => onChangeFontWeight?.(fontWeight === 'bold' ? 'normal' : 'bold')}
          >
            <Bold className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7", 
              fontStyle === 'italic' && "bg-secondary"
            )}
            onClick={() => onChangeFontStyle?.(fontStyle === 'italic' ? 'normal' : 'italic')}
          >
            <Italic className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7", 
              textAlign === 'left' && "bg-secondary"
            )}
            onClick={() => onChangeTextAlign?.('left')}
          >
            <AlignLeft className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7", 
              textAlign === 'center' && "bg-secondary"
            )}
            onClick={() => onChangeTextAlign?.('center')}
          >
            <AlignCenter className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7", 
              textAlign === 'right' && "bg-secondary"
            )}
            onClick={() => onChangeTextAlign?.('right')}
          >
            <AlignRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
      
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full"
      />
      
      {onChangeFontSize && (
        <div className="flex items-center space-x-3">
          <Type className="h-3.5 w-3.5 text-muted-foreground" />
          <Slider
            value={[fontSize]}
            min={16}
            max={48}
            step={1}
            onValueChange={(value) => onChangeFontSize(value[0])}
            className="w-full"
          />
          <span className="text-xs text-muted-foreground w-7 text-right">{fontSize}px</span>
        </div>
      )}
    </div>
  );
};

export default TextControl;
