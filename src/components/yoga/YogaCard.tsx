
import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { YogaItem } from '@/data/yogaData';

interface YogaCardProps {
  item: YogaItem;
}

const YogaCard = ({ item }: YogaCardProps) => {
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
              <CardDescription className="text-sm">For {item.condition} Conditions</CardDescription>
            </div>
            <div className="bg-medical-light-purple p-2 rounded-full">
              <Dumbbell className="h-5 w-5 text-medical-purple" />
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
            className="w-full text-medical-purple border-medical-purple hover:bg-medical-light-purple/50"
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
              <h4 className="font-medium text-sm mb-2">Recommended Poses:</h4>
              <ul className="space-y-2">
                {item.poses.map((pose, index) => (
                  <li key={index} className="text-sm border-l-2 border-medical-purple pl-3 py-1">
                    <p className="font-medium">{pose.name} <span className="text-xs font-normal text-gray-500">({pose.duration})</span></p>
                    <p className="text-gray-600 text-xs">{pose.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-2">Benefits:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.benefits.map((benefit, index) => (
                  <li key={index} className="text-xs flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-medical-purple"></div>
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

export default YogaCard;
