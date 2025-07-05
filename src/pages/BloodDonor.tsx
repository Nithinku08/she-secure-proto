import { Helmet } from 'react-helmet-async';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BloodDonorHeader from "@/components/blood-donor/BloodDonorHeader";
import BloodStock from "@/components/blood-donor/BloodStock";
import DonationCenters from "@/components/blood-donor/DonationCenters";
import DonorInfo from "@/components/blood-donor/DonorInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Droplets, Info } from "lucide-react";

const BloodDonor = () => {
  return (
    <>
      <Helmet>
        <title>Blood Donation - VitalVision</title>
        <meta name="description" content="Learn about blood donation, eligibility criteria, and how you can save lives by becoming a blood donor." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <BloodDonorHeader />
          
          <section className="py-10 bg-white">
            <div className="container-custom">
              <Tabs defaultValue="centers" className="space-y-6">
                <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto">
                  <TabsTrigger value="centers" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Donation Centers</span>
                  </TabsTrigger>
                  <TabsTrigger value="stock" className="flex items-center gap-2">
                    <Droplets className="h-4 w-4" />
                    <span>Blood Stock</span>
                  </TabsTrigger>
                  <TabsTrigger value="info" className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    <span>Information</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="centers">
                  <DonationCenters />
                </TabsContent>

                <TabsContent value="stock">
                  <BloodStock />
                </TabsContent>

                <TabsContent value="info">
                  <DonorInfo />
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

export default BloodDonor; 