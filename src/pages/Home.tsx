
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HealthQuotes from "@/components/home/HealthQuotes";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>VitalVison - Personalized Health & Wellness Recommendations</title>
        <meta name="description" content="Get personalized health recommendations including yoga, meditation, and emergency care guidance tailored to your specific health conditions." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <HealthQuotes />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
