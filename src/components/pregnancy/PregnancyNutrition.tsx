import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Apple, Beef, Droplets, Salad, Fish, Egg } from "lucide-react";

interface NutrientInfo {
  name: string;
  sources: string[];
  requirement: string;
  tips?: string[];
}

interface FoodCategory {
  name: string;
  description: string;
  foods: string[];
  tips?: string[];
}

const vegetarianNutrients: NutrientInfo[] = [
  {
    name: "Protein",
    sources: [
      "Dairy (milk, yogurt, paneer, cheese)",
      "Legumes & Pulses (masoor, moong, toor dal, chickpeas, rajma)",
      "Soy Products (tofu, tempeh, soy milk)",
      "Nuts & Seeds",
      "Quinoa & Amaranth",
      "Sprouts"
    ],
    requirement: "70-100g daily (varies by trimester)"
  },
  {
    name: "Iron",
    sources: [
      "Leafy Greens (spinach, kale, fenugreek, moringa)",
      "Beans & Lentils",
      "Dried Fruits (dates, raisins, figs)",
      "Nuts & Seeds (pumpkin seeds, sesame seeds)",
      "Fortified cereals & whole grains"
    ],
    requirement: "27mg daily",
    tips: ["Consume with Vitamin C rich foods for better absorption", "Avoid tea/coffee with meals"]
  },
  {
    name: "Calcium",
    sources: [
      "Dairy Products",
      "Leafy Greens (broccoli, bok choy)",
      "Sesame Seeds",
      "Fortified Plant Milk",
      "Ragi (Finger Millet)"
    ],
    requirement: "1000-1300mg daily"
  },
  {
    name: "Folate/Folic Acid",
    sources: [
      "Dark Leafy Greens",
      "Legumes",
      "Citrus Fruits",
      "Avocado & Beets",
      "Nuts & Seeds"
    ],
    requirement: "600mcg daily",
    tips: ["Supplements often recommended during pregnancy"]
  },
  {
    name: "Omega-3 Fatty Acids",
    sources: [
      "Flaxseeds & Chia Seeds",
      "Walnuts",
      "Fortified Foods"
    ],
    requirement: "200-300mg DHA daily",
    tips: ["Consider algae-based DHA supplements"]
  },
  {
    name: "Vitamin B12",
    sources: [
      "Dairy Products",
      "Fortified Foods",
      "Nutritional Yeast"
    ],
    requirement: "2.6mcg daily",
    tips: ["Supplements often necessary for strict vegetarians/vegans"]
  },
  {
    name: "Fiber",
    sources: [
      "Whole Grains",
      "Fruits",
      "Vegetables",
      "Legumes & Nuts"
    ],
    requirement: "25-30g daily"
  }
];

const nonVegNutrients: NutrientInfo[] = [
  {
    name: "Protein",
    sources: [
      "Eggs (Whole eggs, including yolk for choline & DHA)",
      "Lean Meats (Chicken, turkey, lean cuts of beef, lamb)",
      "Fish (Salmon, sardines, mackerel – rich in Omega-3s)",
      "Seafood (Shrimp, crab – in moderation)",
      "Organ Meats (Liver – rich in iron & folate)"
    ],
    requirement: "70-100g daily (increases in later trimesters)"
  },
  {
    name: "Iron (Heme Iron)",
    sources: [
      "Red Meat (Beef, lamb, liver)",
      "Poultry (Chicken, turkey thighs)",
      "Fish (Tuna, sardines, shellfish like clams)",
      "Eggs (Especially yolks)"
    ],
    requirement: "27mg daily",
    tips: ["Pair with Vitamin C rich foods for better absorption"]
  },
  {
    name: "Omega-3 Fatty Acids",
    sources: [
      "Fatty Fish (Salmon, sardines, mackerel, herring)",
      "Fish Oil Supplements (mercury-free options)",
      "DHA-enriched eggs"
    ],
    requirement: "200-300mg DHA daily",
    tips: ["Avoid high-mercury fish (shark, swordfish, king mackerel, tilefish)"]
  },
  {
    name: "Calcium",
    sources: [
      "Dairy Products (Milk, cheese, yogurt)",
      "Fish with Edible Bones (Canned salmon, sardines)",
      "Bone Broth"
    ],
    requirement: "1000-1300mg daily"
  },
  {
    name: "Folate/Folic Acid",
    sources: [
      "Liver (Beef/chicken liver)",
      "Eggs",
      "Dark Leafy Greens (pair with non-veg meals)"
    ],
    requirement: "600mcg daily",
    tips: ["Supplements often recommended during pregnancy"]
  },
  {
    name: "Vitamin B12",
    sources: [
      "Meat (Beef, chicken, lamb)",
      "Fish (Salmon, tuna, trout)",
      "Eggs & Dairy"
    ],
    requirement: "2.6mcg daily"
  },
  {
    name: "Zinc",
    sources: [
      "Red Meat (Beef, lamb)",
      "Shellfish (Oysters, crab)",
      "Poultry (Chicken, turkey)"
    ],
    requirement: "11mg daily"
  },
  {
    name: "Choline",
    sources: [
      "Eggs (Especially yolks)",
      "Liver (Chicken/beef liver)",
      "Fish (Salmon, cod)"
    ],
    requirement: "450mg daily"
  }
];

const vegMealPlan = [
  {
    meal: "Breakfast",
    options: ["Oats with milk, chia seeds, almonds + banana", "Ragi dosa with vegetable stuffing", "Whole grain toast with paneer spread and fruits"]
  },
  {
    meal: "Mid-Morning",
    options: ["Yogurt with flaxseeds + apple", "Mixed nuts and dried fruits", "Fruit smoothie with seeds"]
  },
  {
    meal: "Lunch",
    options: ["Roti, dal, spinach curry, brown rice, cucumber salad", "Quinoa pulao with mixed vegetables and raita", "Mixed dal khichdi with vegetables"]
  },
  {
    meal: "Evening Snack",
    options: ["Sprout salad + orange juice", "Roasted chickpeas + coconut water", "Vegetable sandwich + buttermilk"]
  },
  {
    meal: "Dinner",
    options: ["Quinoa khichdi with veggies + paneer curry", "Mixed dal + roti + vegetable curry", "Brown rice + dal + vegetable curry"]
  },
  {
    meal: "Before Bed",
    options: ["Warm milk with turmeric", "Chamomile tea", "Almond milk"]
  }
];

const nonVegMealPlan = [
  {
    meal: "Breakfast",
    options: [
      "Scrambled eggs with spinach + whole-grain toast + orange juice",
      "Boiled eggs with avocado toast + fruit smoothie",
      "Greek yogurt parfait with berries + hard-boiled egg"
    ]
  },
  {
    meal: "Mid-Morning",
    options: [
      "Greek yogurt with walnuts + berries",
      "Chicken sandwich + fruit",
      "Egg salad on whole grain crackers"
    ]
  },
  {
    meal: "Lunch",
    options: [
      "Grilled salmon with quinoa + steamed broccoli + beet salad",
      "Lean chicken stir-fry with brown rice + vegetables",
      "Tuna salad sandwich with vegetable soup"
    ]
  },
  {
    meal: "Evening Snack",
    options: [
      "Chicken soup with carrots & celery",
      "Boiled egg + fruit",
      "Turkey and cheese roll-ups"
    ]
  },
  {
    meal: "Dinner",
    options: [
      "Lean beef stir-fry with brown rice + sautéed greens",
      "Baked fish with roasted vegetables + quinoa",
      "Grilled chicken with sweet potato + steamed vegetables"
    ]
  },
  {
    meal: "Before Bed",
    options: [
      "Warm milk with turmeric",
      "Greek yogurt with honey",
      "Cottage cheese with fruit"
    ]
  }
];

const vegFoodsToAvoid = [
  "Raw or undercooked sprouts",
  "Unpasteurized dairy products",
  "Unwashed fruits and vegetables",
  "Excess caffeine (limit to 200mg/day)",
  "High-mercury foods (certain algae)",
  "Raw or uncooked vegetables"
];

const nonVegFoodsToAvoid = [
  "Raw or undercooked meat and eggs (risk of salmonella/toxoplasmosis)",
  "High-mercury fish (shark, swordfish, king mackerel)",
  "Processed meats (limit deli meats, sausages – may contain nitrates)",
  "Unpasteurized dairy products",
  "Raw or undercooked seafood",
  "Excess caffeine (limit to 200mg/day)"
];

const supplements = [
  {
    name: "Prenatal Vitamins",
    description: "Contains folic acid, Iron, B12, D3"
  },
  {
    name: "Omega-3 (DHA) Supplements",
    description: "Especially if fish intake is low"
  },
  {
    name: "Calcium + Vitamin D",
    description: "If dairy intake is insufficient"
  }
];

export default function PregnancyNutrition() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Salad className="h-5 w-5" />
            Pregnancy Nutrition Guide
          </CardTitle>
          <CardDescription>
            Comprehensive nutrition guidelines for both vegetarian and non-vegetarian diets during pregnancy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6 bg-green-50 border-green-200">
            <AlertCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-600">
              Always consult with your healthcare provider before making significant changes to your diet during pregnancy.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="vegetarian" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vegetarian" className="flex items-center gap-2">
                <Salad className="h-4 w-4" />
                Vegetarian Diet
              </TabsTrigger>
              <TabsTrigger value="nonveg" className="flex items-center gap-2">
                <Fish className="h-4 w-4" />
                Non-Vegetarian Diet
              </TabsTrigger>
            </TabsList>

            <TabsContent value="vegetarian">
              <Tabs defaultValue="nutrients" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="nutrients">Essential Nutrients</TabsTrigger>
                  <TabsTrigger value="mealplan">Meal Plan</TabsTrigger>
                  <TabsTrigger value="avoid">Foods to Avoid</TabsTrigger>
                </TabsList>

                <TabsContent value="nutrients" className="space-y-4">
                  {vegetarianNutrients.map((nutrient, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{nutrient.name}</CardTitle>
                        <CardDescription>Daily Requirement: {nutrient.requirement}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-2">
                          {nutrient.sources.map((source, idx) => (
                            <li key={idx}>{source}</li>
                          ))}
                        </ul>
                        {nutrient.tips && (
                          <div className="mt-4">
                            <p className="font-semibold">Tips:</p>
                            <ul className="list-disc pl-6">
                              {nutrient.tips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="mealplan" className="space-y-4">
                  {vegMealPlan.map((meal, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{meal.meal}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6">
                          {meal.options.map((option, idx) => (
                            <li key={idx}>{option}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="avoid">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Foods to Avoid During Pregnancy</CardTitle>
                      <CardDescription>
                        Foods that should be avoided during pregnancy for vegetarians
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-6 space-y-2">
                        {vegFoodsToAvoid.map((food, index) => (
                          <li key={index}>{food}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </TabsContent>

            <TabsContent value="nonveg">
              <Tabs defaultValue="nutrients" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="nutrients">Essential Nutrients</TabsTrigger>
                  <TabsTrigger value="mealplan">Meal Plan</TabsTrigger>
                  <TabsTrigger value="avoid">Foods to Avoid</TabsTrigger>
                  <TabsTrigger value="supplements">Supplements</TabsTrigger>
                </TabsList>

                <TabsContent value="nutrients" className="space-y-4">
                  {nonVegNutrients.map((nutrient, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{nutrient.name}</CardTitle>
                        <CardDescription>Daily Requirement: {nutrient.requirement}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6 space-y-2">
                          {nutrient.sources.map((source, idx) => (
                            <li key={idx}>{source}</li>
                          ))}
                        </ul>
                        {nutrient.tips && (
                          <div className="mt-4">
                            <p className="font-semibold">Tips:</p>
                            <ul className="list-disc pl-6">
                              {nutrient.tips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="mealplan" className="space-y-4">
                  {nonVegMealPlan.map((meal, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{meal.meal}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-6">
                          {meal.options.map((option, idx) => (
                            <li key={idx}>{option}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="avoid">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Foods to Avoid During Pregnancy</CardTitle>
                      <CardDescription>
                        Important safety guidelines for non-vegetarian foods during pregnancy
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-6 space-y-2">
                        {nonVegFoodsToAvoid.map((food, index) => (
                          <li key={index}>{food}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="supplements">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recommended Supplements</CardTitle>
                      <CardDescription>
                        Key supplements to consider during pregnancy (consult your doctor)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {supplements.map((supplement, index) => (
                          <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                            <h4 className="font-medium">{supplement.name}</h4>
                            <p className="text-gray-600">{supplement.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
} 