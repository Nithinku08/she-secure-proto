import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'VitalBuddy', path: '/' },
    { title: 'Pregnancy', path: '/pregnancy' },
    { title: 'Blood Donor', path: '/blood-donor' },
    { title: 'Yoga', path: '/yoga' },
    { title: 'Meditation', path: '/meditation' },
    { title: 'Emergency', path: '/emergency' },
    { title: 'Early Detection', path: '/early-detection' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-medical-purple" />
            <span className="text-xl font-semibold">VitalVison</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-medical-purple ${
                  isActive(item.path) ? 'text-medical-purple' : 'text-foreground'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Button size="sm" className="bg-medical-purple hover:bg-medical-purple/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fade-in">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-medical-light-purple text-medical-purple'
                      : 'hover:bg-medical-light-purple/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button size="sm" className="bg-medical-purple hover:bg-medical-purple/90 mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;