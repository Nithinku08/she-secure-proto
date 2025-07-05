import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const conditions = [
  {
    title: "Hyperemesis Gravidarum",
    description: "Severe Nausea & Vomiting",
    symptoms: ["Extreme vomiting", "Dehydration", "Weight loss", "Electrolyte imbalance"],
    precautions: [
      "Small, frequent meals (bland foods like crackers, bananas)",
      "Stay hydrated (sips of ginger tea, electrolyte drinks)",
      "Anti-nausea medications (if prescribed)",
      "Hospitalization may be needed in severe cases"
    ]
  },
  {
    title: "Gestational Diabetes (GDM)",
    description: "High blood sugar during pregnancy",
    symptoms: ["Excessive thirst", "Frequent urination", "Fatigue"],
    risks: ["Large baby (macrosomia)", "Preterm birth", "C-section risk"],
    precautions: [
      "Monitor blood sugar regularly",
      "Follow a low-GI diet (whole grains, vegetables, lean protein)",
      "Regular exercise (walking, prenatal yoga)",
      "Insulin therapy if needed"
    ]
  },
  // Add more conditions here...
];

const PhysicalHealth = () => {
  return (
    <div className="space-y-6">
      <Alert className="bg-medical-light-purple border-medical-purple">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          If you experience any severe symptoms, contact your healthcare provider immediately.
          This information is for educational purposes only and should not replace professional medical advice.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {conditions.map((condition, index) => (
          <Card key={index} className="border-medical-purple/20">
            <CardHeader>
              <CardTitle className="text-xl text-medical-purple">{condition.title}</CardTitle>
              <CardDescription>{condition.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Symptoms:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {condition.symptoms.map((symptom, idx) => (
                      <li key={idx}>{symptom}</li>
                    ))}
                  </ul>
                </div>
                {condition.risks && (
                  <div>
                    <h4 className="font-medium mb-2">Risks:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {condition.risks.map((risk, idx) => (
                        <li key={idx}>{risk}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="font-medium mb-2">Precautions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {condition.precautions.map((precaution, idx) => (
                      <li key={idx}>{precaution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhysicalHealth; 