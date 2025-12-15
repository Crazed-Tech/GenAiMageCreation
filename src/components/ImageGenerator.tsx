"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "react-hot-toast";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setIsLoading(true);
    
    try {
      // In a real implementation, this would call an AI API
      // For this demo, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate generating an image URL
      const imageUrl = `https://picsum.photos/512/512?random=${Math.floor(Math.random() * 1000)}`;
      setGeneratedImage(imageUrl);
      
      // Add to history
      setHistory(prev => [prompt, ...prev.slice(0, 4)]);
      
      toast.success('Image generated successfully!');
    } catch (error) {
      toast.error('Failed to generate image');
      console.error('Image generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      generateImage();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">AI Image Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Describe the image you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <Button 
            onClick={generateImage} 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Generating...' : 'Generate Image'}
          </Button>
        </div>

        {generatedImage && (
          <div className="space-y-2">
            <h3 className="font-medium">Generated Image:</h3>
            <img 
              src={generatedImage} 
              alt="Generated content" 
              className="w-full h-auto rounded-lg border"
              onLoad={() => toast.success('Image loaded successfully!')}
            />
          </div>
        )}

        {history.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium">Recent Prompts:</h3>
            <div className="flex flex-wrap gap-2">
              {history.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setPrompt(item);
                    toast.success(`Loaded prompt: ${item}`);
                  }}
                  className="text-xs"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageGenerator;