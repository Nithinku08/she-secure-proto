
import { Heart, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-medical-purple" />
              <span className="text-xl font-semibold">VitalVision</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Personalized health recommendations and emergency guidance for your well-being.
            </p>
          </div>

          {}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-medical-purple">Home</Link>
              </li>
              <li>
                <Link to="/yoga" className="text-sm text-gray-600 hover:text-medical-purple">Yoga</Link>
              </li>
              <li>
                <Link to="/VitalVision" className="text-sm text-gray-600 hover:text-medical-purple"></Link>
              </li>
              <li>
                <Link to="/meditation" className="text-sm text-gray-600 hover:text-medical-purple">Meditation</Link>
              </li>
              <li>
                <Link to="/emergency" className="text-sm text-gray-600 hover:text-medical-purple">Emergency</Link>
              </li>
            </ul>
          </div>

          {}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-medical-purple">Health Blog</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-medical-purple">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-medical-purple">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-medical-purple">Terms of Service</a>
              </li>
            </ul>
          </div>

          {}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-medical-purple" />
                <span className="text-sm text-gray-600">+91 0123456789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-medical-purple" />
                <span className="text-sm text-gray-600">contact@VitalVision.com</span>
              </li>
            </ul>
          </div>
        </div>

        {}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} VitalVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
