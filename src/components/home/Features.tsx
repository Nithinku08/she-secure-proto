
import { Dumbbell, HeartPulse, Hospital, Brain, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Yoga Therapy",
    description: "Discover yoga poses and sequences tailored to improve specific health conditions.",
    icon: Dumbbell,
    color: "text-medical-purple",
    bgColor: "bg-medical-light-purple",
    link: "/yoga"
  },
  {
    title: "Meditation Practices",
    description: "Guided meditations to help manage stress, anxiety, and improve overall wellbeing.",
    icon: Brain,
    color: "text-green-600",
    bgColor: "bg-medical-green",
    link: "/meditation"
  },
  {
    title: "Emergency First Aid",
    description: "Step-by-step first aid procedures for common emergency situations.",
    icon: HeartPulse,
    color: "text-medical-emergency",
    bgColor: "bg-red-100",
    link: "/emergency"
  },
  {
    title: "Early Disease Detection",
    description: "Advanced screening methods to identify potential health issues early.",
    icon: Stethoscope,
    color: "text-blue-600",
    bgColor: "bg-medical-blue",
    link: "/early-detection"
  },
  {
    title: "Hospital Locator",
    description: "Find the nearest hospitals and healthcare facilities in your area.",
    icon: Hospital,
    color: "text-blue-600",
    bgColor: "bg-medical-blue",
    link: "/emergency"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Health Resources</h2>
          <p className="text-gray-600">
            From preventative wellness to emergency situations, we provide the guidance you need for your health journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <Link 
              to={feature.link}
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
