
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner'; // Fixed import from 'sonner' directly
import { 
  Download, 
  Wand2, 
  Share2, 
  Upload, 
  Image as ImageIcon,
  Copy,
  RefreshCw
} from 'lucide-react';
import MemeTemplate from './MemeTemplate';
import TextControl from './TextControl';
import { 
  MemeTemplate as MemeTemplateType, 
  MEME_TEMPLATES, 
  getCategoryMemes 
} from '@/utils/memeTemplates';
import { generateMemeText, generateSuggestions } from '@/utils/aiTextGeneration';
import { cn } from '@/lib/utils';

const MemeGenerator: React.FC = () => {
  // State for meme content
  const [selectedTemplate, setSelectedTemplate] = useState<MemeTemplateType | null>(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [category, setCategory] = useState('all');
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // State for text styling
  const [topFontSize, setTopFontSize] = useState(32);
  const [bottomFontSize, setBottomFontSize] = useState(32);
  const [topTextAlign, setTopTextAlign] = useState<'left' | 'center' | 'right'>('center');
  const [bottomTextAlign, setBottomTextAlign] = useState<'left' | 'center' | 'right'>('center');
  const [topFontWeight, setTopFontWeight] = useState<'normal' | 'bold'>('bold');
  const [bottomFontWeight, setBottomFontWeight] = useState<'normal' | 'bold'>('bold');
  const [topFontStyle, setTopFontStyle] = useState<'normal' | 'italic'>('normal');
  const [bottomFontStyle, setBottomFontStyle] = useState<'normal' | 'italic'>('normal');
  
  // References
  const memeCanvasRef = useRef<HTMLDivElement>(null);
  
  // Initialize with the first template
  useEffect(() => {
    if (MEME_TEMPLATES.length > 0 && !selectedTemplate) {
      const initialTemplate = MEME_TEMPLATES[0];
      setSelectedTemplate(initialTemplate);
      setTopText(initialTemplate.defaultTopText || '');
      setBottomText(initialTemplate.defaultBottomText || '');
    }
  }, []);
  
  // Generate text from AI based on prompt
  const handleGenerateText = async () => {
    if (!prompt) {
      toast("Please enter a prompt for AI generation", {
        description: "Describe a workplace scenario for best results",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      const result = await generateMemeText(prompt);
      setTopText(result.topText);
      setBottomText(result.bottomText);
      
      // Also generate some suggestions based on the prompt
      const newSuggestions = await generateSuggestions(prompt);
      setSuggestions(newSuggestions);
      
      toast("Meme text generated!", {
        description: "AI has created text based on your prompt",
      });
    } catch (error) {
      toast("Failed to generate text", {
        description: "Please try again with a different prompt",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Download meme as image
  const downloadMeme = () => {
    if (!memeCanvasRef.current) return;
    
    toast("Preparing download...", {
      description: "Your meme will download shortly",
    });
    
    // Using html2canvas (mock implementation for now)
    setTimeout(() => {
      toast("Meme downloaded!", {
        description: "Your meme has been saved to your device",
      });
    }, 1500);
  };
  
  // Share meme (placeholder functionality)
  const shareMeme = () => {
    toast("Share feature coming soon", {
      description: "We're working on integrating sharing capabilities",
    });
  };
  
  // Apply a suggestion as the prompt
  const applySuggestion = (suggestion: string) => {
    setPrompt(suggestion);
  };
  
  // Handle template selection
  const handleTemplateSelect = (template: MemeTemplateType) => {
    setSelectedTemplate(template);
    setTopText(template.defaultTopText || '');
    setBottomText(template.defaultBottomText || '');
    
    // Reset text styling when template changes
    setTopFontSize(32);
    setBottomFontSize(32);
    setTopTextAlign('center');
    setBottomTextAlign('center');
  };
  
  // Filter templates by category
  const filteredTemplates = getCategoryMemes(category);
  
  return (
    <div className="container py-6 space-y-8 max-w-7xl animate-fade-in">
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
          <TabsTrigger value="create" className="text-sm">Create</TabsTrigger>
          <TabsTrigger value="templates" className="text-sm">Templates</TabsTrigger>
          <TabsTrigger value="ai" className="text-sm">AI Magic</TabsTrigger>
        </TabsList>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left sidebar with options */}
          <TabsContent value="create" className="lg:col-span-2 space-y-6 order-2 lg:order-1">
            <Card className="overflow-hidden glass border-none shadow-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-medium">Customize Your Meme</h3>
                
                <TextControl 
                  label="Top Text"
                  value={topText}
                  onChange={setTopText}
                  fontSize={topFontSize}
                  onChangeFontSize={setTopFontSize}
                  textAlign={topTextAlign}
                  onChangeTextAlign={setTopTextAlign}
                  fontWeight={topFontWeight}
                  onChangeFontWeight={setTopFontWeight}
                  fontStyle={topFontStyle}
                  onChangeFontStyle={setTopFontStyle}
                />
                
                <Separator />
                
                <TextControl 
                  label="Bottom Text"
                  value={bottomText}
                  onChange={setBottomText}
                  fontSize={bottomFontSize}
                  onChangeFontSize={setBottomFontSize}
                  textAlign={bottomTextAlign}
                  onChangeTextAlign={setBottomTextAlign}
                  fontWeight={bottomFontWeight}
                  onChangeFontWeight={setBottomFontWeight}
                  fontStyle={bottomFontStyle}
                  onChangeFontStyle={setBottomFontStyle}
                />
                
                <div className="pt-4 flex flex-col space-y-2">
                  <Button onClick={downloadMeme} className="w-full" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Meme
                  </Button>
                  
                  <Button variant="outline" onClick={shareMeme} className="w-full" size="lg">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="templates" className="lg:col-span-2 space-y-6 order-2 lg:order-1 animate-slide-up">
            <Card className="overflow-hidden glass border-none shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Choose a Template</h3>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Upload Custom
                    <Upload className="ml-2 h-3 w-3" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={category === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCategory('all')}
                    className="text-xs"
                  >
                    All
                  </Button>
                  <Button
                    variant={category === 'productivity' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCategory('productivity')}
                    className="text-xs"
                  >
                    Productivity
                  </Button>
                  <Button
                    variant={category === 'meetings' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCategory('meetings')}
                    className="text-xs"
                  >
                    Meetings
                  </Button>
                  <Button
                    variant={category === 'office' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCategory('office')}
                    className="text-xs"
                  >
                    Office
                  </Button>
                  <Button
                    variant={category === 'technology' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCategory('technology')}
                    className="text-xs"
                  >
                    Technology
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto py-2">
                  {filteredTemplates.map((template) => (
                    <MemeTemplate
                      key={template.id}
                      template={template}
                      isSelected={selectedTemplate?.id === template.id}
                      onClick={() => handleTemplateSelect(template)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ai" className="lg:col-span-2 space-y-6 order-2 lg:order-1 animate-slide-up">
            <Card className="overflow-hidden glass border-none shadow-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-medium">AI Meme Generator</h3>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Describe your workplace scenario</label>
                  <div className="flex items-center space-x-2">
                    <Input
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., When my boss schedules a meeting at 5pm on Friday"
                      className="w-full"
                    />
                    <Button 
                      onClick={handleGenerateText} 
                      size="icon" 
                      disabled={isLoading}
                      className={cn("transition-all", isLoading && "animate-spin")}
                    >
                      {isLoading ? <RefreshCw className="h-4 w-4" /> : <Wand2 className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                
                {suggestions.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Suggestions based on your prompt</label>
                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-2 rounded-md bg-secondary hover:bg-secondary/80 cursor-pointer"
                          onClick={() => applySuggestion(suggestion)}
                        >
                          <span className="text-sm">{suggestion}</span>
                          <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleGenerateText} 
                  className="w-full" 
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Meme Text
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Main meme preview */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="flex flex-col items-center justify-center">
              <div 
                ref={memeCanvasRef}
                className="relative w-full max-w-2xl overflow-hidden rounded-xl shadow-xl bg-gray-900 animate-scale-in"
                style={{ maxHeight: '70vh' }}
              >
                {selectedTemplate && (
                  <>
                    <div className="relative">
                      <img 
                        src={selectedTemplate.imageSrc} 
                        alt={selectedTemplate.name}
                        className="w-full object-contain max-h-[70vh]"
                      />
                      
                      {/* Top text */}
                      <div 
                        className="absolute top-2 left-0 right-0 p-4"
                        style={{ textAlign: topTextAlign }}
                      >
                        <h2 
                          className="text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
                          style={{ 
                            fontSize: `${topFontSize}px`,
                            fontWeight: topFontWeight,
                            fontStyle: topFontStyle,
                            textTransform: 'uppercase',
                            maxWidth: '100%',
                            margin: '0 auto',
                          }}
                        >
                          {topText}
                        </h2>
                      </div>
                      
                      {/* Bottom text */}
                      <div 
                        className="absolute bottom-2 left-0 right-0 p-4"
                        style={{ textAlign: bottomTextAlign }}
                      >
                        <h2 
                          className="text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
                          style={{ 
                            fontSize: `${bottomFontSize}px`,
                            fontWeight: bottomFontWeight,
                            fontStyle: bottomFontStyle,
                            textTransform: 'uppercase',
                            maxWidth: '100%',
                            margin: '0 auto',
                          }}
                        >
                          {bottomText}
                        </h2>
                      </div>
                    </div>
                  </>
                )}
                
                {!selectedTemplate && (
                  <div className="flex flex-col items-center justify-center h-[400px] bg-muted/30">
                    <ImageIcon className="h-16 w-16 text-muted-foreground/50" />
                    <p className="mt-4 text-muted-foreground">Select a template to get started</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default MemeGenerator;
