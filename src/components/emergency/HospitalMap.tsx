import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapPin, PhoneCall, Map as MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface Hospital {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance: string;
  specialty: string;
  location: { lat: number; lng: number };
}

const HospitalMap = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationPermission, setLocationPermission] = useState<boolean | null>(null);
  const [range, setRange] = useState<number>(10); 
  const { toast } = useToast();

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const defaultCenter = {
    lat: 12.9715987, 
    lng: 77.594566,
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          setLocationPermission(true);
        } else if (result.state === "prompt") {
          setLocationPermission(null);
        } else {
          setLocationPermission(false);
        }
      });
    } else {
      setLocationPermission(false);
    }
  }, []);

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const fetchNearbyHospitals = async (latitude: number, longitude: number, range: number) => {
    try {
      const response = await fetch(
        `https://your-api-endpoint.com/nearby-hospitals?lat=${latitude}&lng=${longitude}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch hospitals");
      }
      const data: Hospital[] = await response.json();

      const filteredHospitals = data.filter((hospital) => {
        const distance = calculateDistance(
          latitude,
          longitude,
          hospital.location.lat,
          hospital.location.lng
        );
        return distance <= range;
      });

      if (filteredHospitals.length > 0) {
        setHospitals(filteredHospitals);
      } else {
        setHospitals([]); 
        toast({
          title: "No hospitals nearby",
          description: `No hospitals found within ${range} km.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      setHospitals([]); 
      toast({
        title: "Error fetching hospitals",
        description: "Unable to fetch hospitals. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          toast({
            title: "Location accessed",
            description: `Searching within ${range} km...`,
          });
          fetchNearbyHospitals(latitude, longitude, range);
        },
        () => {
          setHospitals([]);
          toast({
            title: "Location access denied",
            description: "Please enable location services.",
            variant: "destructive",
          });
        }
      );
    }
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="list">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="list" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Hospital List</span>
          </TabsTrigger>
          <TabsTrigger value="map" className="flex items-center gap-2">
            <MapIcon className="h-4 w-4" />
            <span>Map View</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-4">
          {locationPermission === false && (
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Enable location services to find hospitals near you.
              </p>
              <Button onClick={requestLocation} size="sm">
                Share Location
              </Button>
            </div>
          )}
          {hospitals.length === 0 ? (
            <p className="text-sm text-red-600 mt-4">No hospitals nearby within the selected range.</p>
          ) : (
            <div className="space-y-3">
              {hospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  className="border rounded-lg p-4 cursor-pointer transition-all hover:border-gray-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{hospital.name}</h3>
                      <p className="text-sm text-gray-600">
                        {hospital.specialty} • {hospital.distance}
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full h-8 w-8 text-medical-purple hover:bg-medical-light-purple/50"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`tel:${hospital.phone}`);
                      }}
                    >
                      <PhoneCall className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-200 animate-fade-in">
                    <p className="text-sm text-gray-700 mb-1">{hospital.address}</p>
                    <p className="text-sm text-gray-700">{hospital.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="map" className="mt-4">
          <LoadScript googleMapsApiKey="AIzaSyCN8XvHPPDsHgYKnUSKe4wht4CXIJYU75g">
            <div style={{ position: "relative" }}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={userLocation || defaultCenter}
                zoom={14}
              >
                {userLocation && (
                  <Marker
                    position={userLocation}
                    icon={{
                      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                    }}
                  />
                )}
                {hospitals.map((hospital) => (
                  <Marker key={hospital.id} position={hospital.location} />
                ))}
              </GoogleMap>
              <Button
                onClick={requestLocation}
                className="absolute bg-white text-black shadow-lg hover:bg-gray-100"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  zIndex: 10,
                }}
              >
                Live Location
              </Button>
            </div>
          </LoadScript>
        </TabsContent>
      </Tabs>

      <div className="mt-4 bg-medical-blue/30 p-4 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <strong className="font-medium">Note:</strong> Always call emergency services in
          case of a serious emergency. This hospital finder is for informational purposes
          only.
        </p>
      </div>
    </div>
  );
};

export default HospitalMap;