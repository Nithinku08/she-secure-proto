import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetectionCard from "@/components/early-detection/DetectionCard";

const detectionServices = [
 
  {
    title: "Breast Cancer Detection",
    description: "Breast cancer detection using advanced techniques.",
    imagePath: "/images/Bcancer.jpg",
    details: [
      "Continuous digital health monitoring",
      "Real-time health data analysis",
      "Early warning system for health anomalies"
    ],
    link: "/breast-cancer/index.html"
  },
   {
    title: "Diabetes Risk Assessment",
    description: "AI-powered diabetes risk prediction using machine learning",
    imagePath: "/images/diabetes.jpg",
    details: [
      "Advanced machine learning model for diabetes risk assessment",
      "Analyzes multiple health parameters including glucose levels, BMI, and more",
      "Get instant risk prediction results",
      "Helps in early detection of diabetes risk factors"
    ],
    link: "/dia/index.html"
  },
  {
    title: "Heart Disease Detection",
    description: "Heart disease detection using advanced techniques.",
    imagePath: "/images/heart_attack.jpg",
    details: [
      "Comprehensive genetic screening for hereditary conditions",
      "Personalized risk assessment based on family history",
      "Detailed genetic counseling and guidance"
    ],
    link: "/heart-disease/index.html"
  },

  
  {
    title: "Skin Cancer Detection",
    description: "Skin cancer detection using advanced techniques.",
    imagePath: "/images/skin_cancer.jpg",
    details: [
      "Advanced blood and tissue analysis",
      "Early detection of cancer markers",
      "Comprehensive metabolic profiling"
    ]
  },

  {
    title: "Lung Cancer Detection",
    description: "Lung cancer detection using advanced techniques.",
    imagePath: "/images/lung.jpg",
    details: [
      "High-resolution medical imaging technology",
      "Early detection of structural abnormalities",
      "Non-invasive screening methods"
    ]
  },
 
];

const EarlyDetection = () => {
  return (
    <>
      <Helmet>
        <title>Early Disease Detection - SereneHealth</title>
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Early Disease Detection</h1>
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Early detection of diseases is crucial for better treatment outcomes. Our advanced screening methods and health assessments help identify potential health issues before they become serious concerns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {detectionServices.map((service, index) => (
                <DetectionCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  imagePath={service.imagePath}
                  details={service.details}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EarlyDetection;
