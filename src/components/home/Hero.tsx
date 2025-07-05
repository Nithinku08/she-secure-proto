import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="gradient-bg py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <div>
              
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3">
                Your Personalized <span className="text-medical-purple">Health Journey</span>
              </h1>
              <p className="text-lg text-gray-700 md:text-xl max-w-md">
              Early Disease Detection, Personalized Health Guidance, and Emergency Support are just one click away
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-medical-purple hover:bg-medical-purple/90">
                <Link to="/vitalbuddy">
                  Start with VitalBuddy
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-medical-purple text-medical-purple hover:bg-medical-light-purple/50">
                <Link to="/emergency" className="flex items-center gap-2">
                  Emergency Resources
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-medical-purple rounded-full opacity-10 blur-3xl"></div>
            <img 
              src="https://cdn.pixabay.com/photo/2017/08/04/05/52/touch-2579147_1280.jpg"
              alt="Person in a yoga pose" 
              className="w-full h-auto rounded-2xl shadow-lg object-cover z-10 relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
