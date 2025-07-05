
export interface YogaItem {
  id: string;
  title: string;
  description: string;
  condition: string;
  imageUrl: string;
  poses: {
    name: string;
    description: string;
    duration: string;
  }[];
  benefits: string[];
}

export const yogaData: YogaItem[] = [
  {
    id: "yoga-1",
    title: "Heart Health Yoga",
    description: "Gentle yoga sequences to improve circulation and heart health",
    condition: "Cardiovascular",
    imageUrl: "https://i.pinimg.com/736x/36/8c/d1/368cd128a38b486695207a97d1f97cfb.jpg",
    poses: [
      {
        name: "Mountain Pose (Tadasana)",
        description: "Stand tall with feet together, shoulders relaxed, weight evenly distributed through your soles, arms at sides.",
        duration: "1-2 minutes"
      },
      {
        name: "Warrior II (Virabhadrasana II)",
        description: "A standing pose that strengthens the legs and opens the hips and chest.",
        duration: "30-60 seconds each side"
      },
      {
        name: "Bridge Pose (Setu Bandha Sarvangasana)",
        description: "A back-bending pose that strengthens the back and opens the chest.",
        duration: "30-60 seconds"
      }
    ],
    benefits: [
      "Improves circulation",
      "Reduces blood pressure",
      "Decreases stress on the heart",
      "Improves oxygen levels in the blood"
    ]
  },
  {
    id: "yoga-2",
    title: "Back Pain Relief",
    description: "Gentle stretches and poses to alleviate back pain and improve spine health",
    condition: "Musculoskeletal",
    imageUrl: "https://images.unsplash.com/photo-1573590330099-d6c7355ec595?q=80&w=1000&auto=format&fit=crop",
    poses: [
      {
        name: "Cat-Cow Stretch",
        description: "A gentle flow between two poses that warms the body and brings flexibility to the spine.",
        duration: "1-2 minutes"
      },
      {
        name: "Child's Pose (Balasana)",
        description: "A restful pose that gently stretches the lower back.",
        duration: "1-3 minutes"
      },
      {
        name: "Sphinx Pose",
        description: "A gentle backbend that strengthens the spine and opens the chest and shoulders.",
        duration: "30-60 seconds"
      }
    ],
    benefits: [
      "Relieves tension in back muscles",
      "Improves spine flexibility",
      "Strengthens core to support back",
      "Reduces stress which can contribute to back pain"
    ]
  },
  {
    id: "yoga-3",
    title: "Stress Reduction Yoga",
    description: "Calming poses and breathing techniques to reduce stress and anxiety",
    condition: "Mental Health",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
    poses: [
      {
        name: "Legs Up The Wall (Viparita Karani)",
        description: "A restorative pose that calms the nervous system and reduces anxiety.",
        duration: "5-10 minutes"
      },
      {
        name: "Forward Fold (Uttanasana)",
        description: "A standing forward bend that calms the mind and relieves stress.",
        duration: "1-2 minutes"
      },
      {
        name: "Corpse Pose (Savasana)",
        description: "A pose of total relaxation, typically done at the end of a yoga practice.",
        duration: "5-10 minutes"
      }
    ],
    benefits: [
      "Activates relaxation response",
      "Lowers cortisol levels",
      "Improves sleep quality",
      "Reduces anxiety symptoms"
    ]
  },
  {
    id: "yoga-4",
    title: "Diabetes Management",
    description: "Yoga sequences to help regulate blood sugar and improve overall metabolic health",
    condition: "Metabolic",
    imageUrl: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1000&auto=format&fit=crop",
    poses: [
      {
        name: "Sun Salutations (Surya Namaskar)",
        description: "A flowing sequence of 12 poses that warm up the entire body.",
        duration: "5-10 minutes"
      },
      {
        name: "Seated Forward Bend (Paschimottanasana)",
        description: "A seated forward fold that stimulates the pancreas and liver.",
        duration: "1-3 minutes"
      },
      {
        name: "Bow Pose (Dhanurasana)",
        description: "A back-bending pose that stimulates the abdominal organs.",
        duration: "30-60 seconds"
      }
    ],
    benefits: [
      "Improves insulin sensitivity",
      "Reduces stress which affects blood sugar",
      "Stimulates pancreatic function",
      "Improves circulation to extremities"
    ]
  }
];
