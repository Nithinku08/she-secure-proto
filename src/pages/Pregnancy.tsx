import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Brain, Shield, Salad } from "lucide-react";
import PhysicalHealth from "@/components/pregnancy/PhysicalHealth";
import MentalHealth from "@/components/pregnancy/MentalHealth";
import GeneralPrecautions from "@/components/pregnancy/GeneralPrecautions";
import PregnancyNutrition from "@/components/pregnancy/PregnancyNutrition";

const Pregnancy = () => {
  return (
    <>
      <Helmet>
        <title>Pregnancy Care - VitalVision</title>
        <meta name="description" content="Access comprehensive pregnancy care information, health tracking, and personalized guidance for a healthy pregnancy journey." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <section className="bg-gradient-to-br from-pink-100 to-medical-light-purple/30 py-12">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Pregnancy Care</h1>
                <p className="text-gray-700 text-lg">
                  Your comprehensive guide to a healthy pregnancy journey. Access personalized care information, health tracking tools, and expert guidance.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-10 bg-white">
            <div className="container-custom">
              <Tabs defaultValue="physical" className="space-y-6">
                <TabsList className="grid w-full max-w-2xl grid-cols-4 mx-auto">
                  <TabsTrigger value="physical" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span>Physical Health</span>
                  </TabsTrigger>
                  <TabsTrigger value="mental" className="flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    <span>Mental Health</span>
                  </TabsTrigger>
                  <TabsTrigger value="nutrition" className="flex items-center gap-2">
                    <Salad className="h-4 w-4" />
                    <span>Nutrition</span>
                  </TabsTrigger>
                  <TabsTrigger value="general" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>General Care</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="physical">
                  <PhysicalHealth />
                </TabsContent>

                <TabsContent value="mental">
                  <MentalHealth />
                </TabsContent>

                <TabsContent value="nutrition">
                  <PregnancyNutrition />
                </TabsContent>

                <TabsContent value="general">
                  <GeneralPrecautions />
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pregnancy; 