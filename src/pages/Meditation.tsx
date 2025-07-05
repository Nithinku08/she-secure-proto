
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MeditationList from "@/components/meditation/MeditationList";

const Meditation = () => {
  return (
    <>
      <Helmet>
        <title>Meditation Practices - SereneHealth</title>
        <meta name="description" content="Explore guided meditation practices for various health conditions. Find techniques to reduce stress, improve sleep, and enhance wellbeing." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-medical-green/30 to-medical-light-purple/30 py-12">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Meditation for Wellness</h1>
                <p className="text-gray-700 text-lg">
                  Explore meditation practices designed to improve mental and physical health. Find techniques tailored to specific health conditions.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-10 bg-white">
            <div className="container-custom">
              <MeditationList />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Meditation;
