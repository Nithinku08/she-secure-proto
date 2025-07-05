
import { useState } from 'react';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MeditationItem } from '@/data/meditationData';

interface MeditationCardProps {
  item: MeditationItem;
}

const MeditationCard = ({ item }: MeditationCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden card-hover">
        <div className="h-48 overflow-hidden">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription className="text-sm">
                For {item.condition} • {item.duration}
              </CardDescription>
            </div>
            <div className="bg-medical-green p-2 rounded-full">
              <Brain className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-gray-700 text-sm">{item.description}</p>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline" 
            size="sm"
            onClick={() => setIsOpen(true)}
            className="w-full text-green-600 border-green-600 hover:bg-medical-green"
          >
            Show Details
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{item.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-sm mb-2">Practice Steps:</h4>
              <ol className="space-y-2">
                {item.steps.map((step, index) => (
                  <li key={index} className="text-sm flex gap-2">
                    <span className="bg-medical-green text-green-700 rounded-full w-5 h-5 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-2">Benefits:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.benefits.map((benefit, index) => (
                  <li key={index} className="text-xs flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MeditationCard;
