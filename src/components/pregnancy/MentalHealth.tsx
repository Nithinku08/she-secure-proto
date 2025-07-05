import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Heart } from "lucide-react";

const mentalHealthConditions = [
  {
    title: "Prenatal Depression",
    description: "Depression during pregnancy",
    symptoms: ["Persistent sadness", "Hopelessness", "Loss of interest"],
    precautions: [
      "Therapy (CBT, counseling)",
      "Support groups for pregnant women",
      "Safe antidepressants (if prescribed)"
    ]
  },
  {
    title: "Anxiety Disorders",
    description: "Excessive worry and fear during pregnancy",
    symptoms: ["Excessive worry", "Panic attacks", "Insomnia"],
    precautions: [
      "Relaxation techniques (meditation, deep breathing)",
      "Avoid caffeine",
      "Professional therapy if severe"
    ]
  },
  {
    title: "Postpartum PTSD",
    description: "Trauma related to birth experience",
    symptoms: ["Flashbacks", "Severe anxiety", "Nightmares"],
    precautions: [
      "Trauma-focused therapy",
      "Emotional support from partner/family"
    ]
  },
  {
    title: "Pregnancy-Related OCD",
    description: "Obsessive thoughts and compulsive behaviors",
    symptoms: ["Intrusive thoughts", "Excessive fear about baby's health"],
    precautions: [
      "Cognitive Behavioral Therapy (CBT)",
      "Medication (if needed)"
    ]
  }
];

const MentalHealth = () => {
  return (
    <div className="space-y-6">
      <Alert className="bg-medical-light-purple border-medical-purple">
        <Heart className="h-4 w-4" />
        <AlertTitle>Mental Health Support</AlertTitle>
        <AlertDescription>
          Your mental health is just as important as your physical health during pregnancy.
          Don't hesitate to seek professional help if you're struggling emotionally.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mentalHealthConditions.map((condition, index) => (
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
                <div>
                  <h4 className="font-medium mb-2">Support & Treatment:</h4>
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

export default MentalHealth; 