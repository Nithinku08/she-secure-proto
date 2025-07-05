import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface DetectionCardProps {
  title: string;
  description: string;
  imagePath: string;
  details: string[];
  link?: string;
}

const DetectionCard = ({ title, description, imagePath, details, link }: DetectionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = () => {
    if (link) {
      // For heart disease assessment, open in a new tab
      if (title.toLowerCase().includes('heart')) {
        window.open('/heart-disease/index.html', '_blank');
      } else {
        window.location.href = link;
      }
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 overflow-hidden">
          <img 
            src={imagePath}
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleAction}
          >
            {link ? "Start Assessment" : "Learn More"}
          </Button>
        </CardContent>
      </Card>

      {!link && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {details.map((detail, index) => (
                <p key={index} className="text-sm text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default DetectionCard;
