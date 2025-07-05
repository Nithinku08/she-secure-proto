import { useState } from 'react';
import { HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FirstAidItem } from '@/data/emergencyData';

interface FirstAidCardProps {
  item: FirstAidItem;
}

const FirstAidCard = ({ item }: FirstAidCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden card-hover border-medical-emergency/30">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white/90 text-medical-emergency font-bold px-3 py-1 rounded-full text-xs">
          EMERGENCY
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <CardDescription className="text-sm">
              First Aid Guidelines
            </CardDescription>
          </div>
          <div className="bg-red-100 p-2 rounded-full">
            <HeartPulse className="h-5 w-5 text-medical-emergency" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-gray-700 text-sm">{item.description}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline" 
              size="sm"
              className="w-full text-medical-emergency border-medical-emergency hover:bg-red-50"
            >
              Show Emergency Steps
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-medical-emergency">
                <HeartPulse className="h-5 w-5" />
                {item.title} - Emergency Steps
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="font-medium text-sm mb-2 flex items-center">
                  <span className="bg-medical-emergency text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">!</span>
                  When to Call 911:
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  {item.when911.map((reason, index) => (
                    <li key={index} className="flex items-start gap-1">
                      <div className="h-4 w-4 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-medical-emergency"></div>
                      </div>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Steps to Take:</h4>
                <ol className="space-y-2">
                  {item.steps.map((step, index) => (
                    <li key={index} className="text-sm flex gap-2">
                      <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2 flex items-center">
                  <span className="bg-gray-100 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✕</span>
                  Do Not:
                </h4>
                <ul className="space-y-1">
                  {item.doNot.map((warning, index) => (
                    <li key={index} className="text-sm flex items-start gap-1">
                      <div className="h-4 w-4 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                      </div>
                      <span className="text-gray-700">{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default FirstAidCard;
