import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Heart, Clock, XCircle, CheckCircle2 } from "lucide-react";

const eligibilityCriteria = [
  {
    title: "Basic Requirements",
    items: [
      "Age between 18-65 years",
      "Weight above 50kg",
      "Hemoglobin level above 12.5g/dL",
      "Normal blood pressure and pulse",
      "No major medical conditions"
    ]
  },
  {
    title: "Temporary Deferrals",
    items: [
      "Recent surgery (wait 6 months)",
      "Pregnancy or recent childbirth (wait 6 months)",
      "Recent tattoo or piercing (wait 6-12 months)",
      "Recent vaccination (wait 1-4 weeks)",
      "Current minor illness (cold, flu)"
    ]
  },
  {
    title: "Permanent Deferrals",
    items: [
      "HIV/AIDS",
      "Hepatitis B or C",
      "Heart disease",
      "Cancer",
      "Chronic medical conditions"
    ]
  }
];

const bloodTypes = [
  {
    type: "A+",
    canDonateTo: ["A+", "AB+"],
    canReceiveFrom: ["A+", "A-", "O+", "O-"]
  },
  {
    type: "A-",
    canDonateTo: ["A+", "A-", "AB+", "AB-"],
    canReceiveFrom: ["A-", "O-"]
  },
  {
    type: "B+",
    canDonateTo: ["B+", "AB+"],
    canReceiveFrom: ["B+", "B-", "O+", "O-"]
  },
  {
    type: "B-",
    canDonateTo: ["B+", "B-", "AB+", "AB-"],
    canReceiveFrom: ["B-", "O-"]
  },
  {
    type: "AB+",
    canDonateTo: ["AB+"],
    canReceiveFrom: ["All blood types"]
  },
  {
    type: "AB-",
    canDonateTo: ["AB+", "AB-"],
    canReceiveFrom: ["All negative blood types"]
  },
  {
    type: "O+",
    canDonateTo: ["A+", "B+", "AB+", "O+"],
    canReceiveFrom: ["O+", "O-"]
  },
  {
    type: "O-",
    canDonateTo: ["All blood types"],
    canReceiveFrom: ["O-"]
  }
];

const DonorInfo = () => {
  return (
    <div className="space-y-8">
      <Alert className="bg-red-50 border-red-200">
        <Heart className="h-4 w-4 text-red-500" />
        <AlertTitle>Save Lives Through Blood Donation</AlertTitle>
        <AlertDescription>
          Every blood donation can save up to three lives. Your contribution matters in emergency situations,
          surgeries, and treating various medical conditions.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-xl text-red-600 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Donation Process
            </CardTitle>
            <CardDescription>What to expect when donating blood</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Registration and basic information collection</li>
              <li>Brief medical history and mini-physical</li>
              <li>Hemoglobin test</li>
              <li>Blood donation (takes about 8-10 minutes)</li>
              <li>Light refreshments and 15-minute rest</li>
              <li>Total process takes about 1 hour</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-xl text-red-600 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Preparation Tips
            </CardTitle>
            <CardDescription>How to prepare for blood donation</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Get adequate sleep the night before</li>
              <li>Eat a healthy meal within 3 hours of donation</li>
              <li>Drink plenty of water</li>
              <li>Wear comfortable clothing</li>
              <li>Bring valid ID and list of medications</li>
              <li>Avoid smoking for 1 hour before donation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-xl text-red-600">Eligibility Criteria</CardTitle>
          <CardDescription>Requirements and restrictions for blood donation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eligibilityCriteria.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-medium text-gray-800">{category.title}</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {category.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-xl text-red-600">Blood Type Compatibility</CardTitle>
          <CardDescription>Understanding blood type donation and reception</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {bloodTypes.map((blood, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="text-2xl font-bold text-red-600 mb-2">{blood.type}</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Can donate to:</span></p>
                  <ul className="list-disc list-inside text-gray-600">
                    {typeof blood.canDonateTo === 'string' ? (
                      <li>{blood.canDonateTo}</li>
                    ) : (
                      blood.canDonateTo.map((type, idx) => (
                        <li key={idx}>{type}</li>
                      ))
                    )}
                  </ul>
                  <p><span className="font-medium">Can receive from:</span></p>
                  <ul className="list-disc list-inside text-gray-600">
                    {typeof blood.canReceiveFrom === 'string' ? (
                      <li>{blood.canReceiveFrom}</li>
                    ) : (
                      blood.canReceiveFrom.map((type, idx) => (
                        <li key={idx}>{type}</li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonorInfo; 