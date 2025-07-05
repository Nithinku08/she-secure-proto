import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Dumbbell, Moon, Shield, Heart, Brain, Stethoscope } from "lucide-react";

const precautionsData = [
  {
    title: "Physical Care",
    icon: Dumbbell,
    sections: [
      {
        subtitle: "Nutrition",
        items: [
          "Balanced diet (proteins, iron, calcium, folate)",
          "Avoid raw fish, unpasteurized dairy, excess caffeine"
        ]
      },
      {
        subtitle: "Exercise",
        items: [
          "Prenatal yoga, walking, swimming",
          "Avoid high-impact sports"
        ]
      },
      {
        subtitle: "Rest",
        items: [
          "Sleep on the left side for better circulation",
          "Elevate legs to reduce swelling"
        ]
      },
      {
        subtitle: "Avoid Harmful Substances",
        items: [
          "No smoking/alcohol/drugs",
          "Limit exposure to chemicals (cleaning agents, pesticides)"
        ]
      }
    ]
  },
  {
    title: "Emotional Care",
    icon: Brain,
    sections: [
      {
        subtitle: "Support System",
        items: [
          "Communicate with partner, family, or friends",
          "Join pregnancy support groups"
        ]
      },
      {
        subtitle: "Mindfulness & Relaxation",
        items: [
          "Meditation, deep breathing exercises",
          "Prenatal massage for stress relief"
        ]
      },
      {
        subtitle: "Professional Help",
        items: [
          "Seek therapy if feeling overwhelmed",
          "Discuss mental health concerns with your doctor"
        ]
      }
    ]
  },
  {
    title: "Medical Care",
    icon: Stethoscope,
    sections: [
      {
        subtitle: "Regular Prenatal Visits",
        items: [
          "Monitor BP, weight, baby's growth",
          "Ultrasounds & blood tests as advised"
        ]
      },
      {
        subtitle: "Emergency Signs to Watch For",
        items: [
          "Severe headache, blurred vision (preeclampsia)",
          "Reduced fetal movement",
          "Heavy bleeding or severe abdominal pain"
        ]
      }
    ]
  }
];

const GeneralPrecautions = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {precautionsData.map((category, index) => (
          <Card key={index} className="border-medical-purple/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <category.icon className="h-6 w-6 text-medical-purple" />
                <CardTitle className="text-xl text-medical-purple">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {category.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h4 className="font-medium mb-2 text-gray-800">{section.subtitle}</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GeneralPrecautions; 