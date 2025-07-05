
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import YogaList from "@/components/yoga/YogaList";

const Yoga = () => {
  return (
    <>
      <Helmet>
        <title>Yoga Therapy - SereneHealth</title>
        <meta name="description" content="Discover personalized yoga practices tailored to specific health conditions. Find poses and sequences to improve your wellness." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <section className="gradient-bg py-12">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Yoga for Health Conditions</h1>
                <p className="text-gray-700 text-lg">
                  Discover yoga practices specifically designed to help with various health conditions. Our curated sequences focus on therapeutic benefits.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-10 bg-white">
            <div className="container-custom">
              <YogaList />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Yoga;
