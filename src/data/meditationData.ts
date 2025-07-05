
export interface MeditationItem {
  id: string;
  title: string;
  description: string;
  condition: string;
  imageUrl: string;
  duration: string;
  steps: string[];
  benefits: string[];
}

export const meditationData: MeditationItem[] = [
  {
    id: "meditation-1",
    title: "Stress Relief Breathing",
    description: "Simple breathing techniques to quickly reduce stress and anxiety",
    condition: "Stress & Anxiety",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
    duration: "5-10 minutes",
    steps: [
      "Find a comfortable seated position with your spine straight",
      "Close your eyes and bring awareness to your breath",
      "Inhale deeply through your nose for a count of 4",
      "Hold your breath for a count of 2",
      "Exhale slowly through your mouth for a count of 6",
      "Repeat this cycle for 5-10 minutes"
    ],
    benefits: [
      "Activates the parasympathetic nervous system",
      "Reduces cortisol levels",
      "Improves focus and mental clarity",
      "Provides immediate relief from acute stress"
    ]
  },
  {
    id: "meditation-2",
    title: "Sleep Improvement Meditation",
    description: "Evening meditation practice to help with insomnia and improve sleep quality",
    condition: "Sleep Disorders",
    imageUrl: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1000&auto=format&fit=crop",
    duration: "15-20 minutes",
    steps: [
      "Lie down in a comfortable position in bed",
      "Begin with deep breathing to relax your body",
      "Starting from your toes, progressively tense and relax each muscle group",
      "Visualize a peaceful scene like a beach or forest",
      "Focus on the sensory details of this peaceful place",
      "Allow yourself to drift into sleep naturally"
    ],
    benefits: [
      "Reduces time to fall asleep",
      "Improves overall sleep quality",
      "Decreases nighttime awakenings",
      "Addresses anxiety that interferes with sleep"
    ]
  },
  {
    id: "meditation-3",
    title: "Pain Management Meditation",
    description: "Mindfulness techniques to help manage and reduce chronic pain",
    condition: "Chronic Pain",
    imageUrl: "https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?q=80&w=1000&auto=format&fit=crop",
    duration: "10-15 minutes",
    steps: [
      "Find a comfortable position that minimizes your pain",
      "Begin with gentle breathing, inhaling and exhaling slowly",
      "Scan your body and notice areas of tension or pain without judgment",
      "Visualize your breath flowing into the areas of pain",
      "Imagine the pain dissolving or diminishing with each exhale",
      "Practice accepting sensations without resistance"
    ],
    benefits: [
      "Changes your relationship with pain",
      "Activates pain-modulating neural pathways",
      "Reduces muscle tension that can worsen pain",
      "Improves ability to engage in daily activities"
    ]
  },
  {
    id: "meditation-4",
    title: "Heart Health Meditation",
    description: "Calming practice to reduce blood pressure and support cardiovascular health",
    condition: "Cardiovascular",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
    duration: "10 minutes",
    steps: [
      "Sit comfortably with a straight spine",
      "Place your left hand on your heart center",
      "Notice the rhythm of your heartbeat",
      "Breathe deeply into your heart area",
      "Visualize a healing green light surrounding your heart",
      "With each breath, imagine this light strengthening your heart"
    ],
    benefits: [
      "Helps lower blood pressure",
      "Reduces heart rate variability",
      "Decreases stress hormones that impact heart function",
      "Improves overall sense of well-being"
    ]
  }
];
