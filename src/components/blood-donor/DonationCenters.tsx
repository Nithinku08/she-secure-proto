import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Static centers data
const centers = [
  {
    id: 1,
    name: "AIIMS Blood Bank",
    type: "Government Hospital",
    address: "AIIMS Campus, Ansari Nagar East, New Delhi",
    contact: "011-26588700",
    timing: "24/7",
    services: ["Whole Blood", "Platelets", "Plasma"],
    website: "https://www.aiims.edu/index.php/hi/hospital-services-blood/blood-donation-services"
  },
  {
    id: 2,
    name: "Red Cross Blood Bank",
    type: "NGO",
    address: "1, Red Cross Road, New Delhi",
    contact: "011-23711551",
    timing: "9 AM - 5 PM",
    services: ["Whole Blood", "Component Separation"],
    website: "https://www.indianredcross.org/ircs/index.php"
  },
  {
    id: 3,
    name: "Rotary Blood Bank",
    type: "NGO",
    address: "56-57, Tughlakabad Institutional Area, New Delhi",
    contact: "011-29955559",
    timing: "24/7",
    services: ["Whole Blood", "Platelets", "Plasma", "Component Separation"],
    website: "https://rotarybloodbank.org/"
  }
];

const DonationCenters = () => {
  return (
    <div className="space-y-6">
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-xl text-red-600">Blood Donation Centers</CardTitle>
          <CardDescription>List of blood donation centers and their services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {centers.map((center) => (
              <Card
                key={center.id}
                className="border-red-100"
              >
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg text-red-600">{center.name}</h3>
                      <p className="text-sm text-gray-500">{center.type}</p>
                    </div>

                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                      <span>{center.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <a href={`tel:${center.contact}`} className="text-blue-600 hover:underline">
                        {center.contact}
                      </a>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{center.timing}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {center.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-red-50 text-red-600 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-2 border-red-200 text-red-600 hover:bg-red-50"
                      onClick={() => window.open(center.website, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationCenters; 