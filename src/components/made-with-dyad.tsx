import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const MadeWithDyad = () => {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-6 text-center">
        <p className="mb-4">
          This app was built with <span className="font-bold">Dyad</span>
        </p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.open('https://www.dyad.sh/', '_blank')}
        >
          Visit Dyad
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export { MadeWithDyad };