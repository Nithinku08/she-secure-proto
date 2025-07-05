import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const BloodDonorHeader = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 to-medical-light-purple/30 py-12">
      <div className="container-custom">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
            Blood Donation
            <Heart className="h-8 w-8 text-red-500" />
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Your blood donation can save lives. Check blood availability, find donation centers,
            and make a difference in someone's life today.
          </p>
          <div className="flex gap-4">
            <Button className="bg-red-500 hover:bg-red-600">
              Find Donation Centers
            </Button>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              Register as Donor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodDonorHeader; 