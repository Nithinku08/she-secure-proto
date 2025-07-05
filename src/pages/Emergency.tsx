
import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FirstAidList from "@/components/emergency/FirstAidList";
import HospitalMap from "@/components/emergency/HospitalMap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HeartPulse, Hospital } from 'lucide-react';

const Emergency = () => {
  return (
    <>
      <Helmet>
        <title>Emergency Resources - SereneHealth</title>
        <meta name="description" content="Access emergency first aid procedures and find nearby hospitals. Get prepared for medical emergencies with our comprehensive guides." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <section className="emergency-gradient py-12">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Emergency Resources</h1>
                <p className="text-gray-700 text-lg">
                  Access critical first aid information and locate nearby medical facilities for emergency situations.
                </p>
              </div>
            </div>
          </section>
          
          <section className="py-10 bg-white">
            <div className="container-custom">
              <Tabs defaultValue="firstaid">
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                  <TabsTrigger value="firstaid" className="flex items-center gap-2">
                    <HeartPulse className="h-4 w-4" />
                    <span>First Aid</span>
                  </TabsTrigger>
                  <TabsTrigger value="hospitals" className="flex items-center gap-2">
                    <Hospital className="h-4 w-4" />
                    <span>Find Hospitals</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="firstaid">
                  <FirstAidList />
                </TabsContent>
                
                <TabsContent value="hospitals">
                  <HospitalMap />
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

export default Emergency;
