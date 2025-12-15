import { useState, useEffect } from 'react';
import ImageGenerator from '@/components/ImageGenerator';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

const ImageGeneratorPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Image Generator</h1>
          <p className="text-lg text-gray-600 mb-6">
            Create stunning images from text descriptions using artificial intelligence
          </p>
          <div className="flex justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Info className="w-4 h-4 mr-2" />
                    How it works
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-md">
                  <p>
                    Enter a detailed description of the image you want to create. 
                    Our AI will generate an image based on your prompt. 
                    Try being specific about style, colors, and composition for best results.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="mb-12">
          <ImageGenerator />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Easy to Use</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>Simply describe what you want to see and our AI will create it for you</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">High Quality</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              Generate detailed and realistic images with our advanced AI models
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Creative</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              Transform your ideas into visual art with endless possibilities
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageGeneratorPage;