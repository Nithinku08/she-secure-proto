
export interface FirstAidItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  steps: string[];
  doNot: string[];
  when911: string[];
}

export const firstAidData: FirstAidItem[] = [
  {
    id: "emergency-1",
    title: "Heart Attack",
    description: "Immediate actions to take when someone is experiencing a heart attack",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
    steps: [
      "Call emergency services (911) immediately",
      "Help the person into a comfortable position, typically sitting with knees bent and head and shoulders supported",
      "Loosen any tight clothing",
      "If the person is not allergic to aspirin, has no recent bleeding, and it's allowed by local protocols, give them an aspirin to chew (if available)",
      "If the person becomes unconscious, check for breathing and pulse, and begin CPR if necessary",
      "If an AED (Automated External Defibrillator) is available, use it following the instructions"
    ],
    doNot: [
      "Do not leave the person alone except to call for help",
      "Do not allow the person to deny the severity of their symptoms",
      "Do not give the person anything to eat or drink besides water or aspirin (if appropriate)",
      "Do not wait to see if symptoms go away"
    ],
    when911: [
      "Chest discomfort or pain that lasts more than a few minutes or goes away and comes back",
      "Pain or discomfort in one or both arms, back, neck, jaw, or stomach",
      "Shortness of breath",
      "Breaking out in a cold sweat, nausea, or lightheadedness"
    ]
  },
  {
    id: "emergency-2",
    title: "Stroke",
    description: "How to recognize and respond to signs of a stroke",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop",
    steps: [
      "Remember the acronym FAST: Face drooping, Arm weakness, Speech difficulty, Time to call 911",
      "Note the time when symptoms first appeared (important for treatment decisions)",
      "Call emergency services (911) immediately",
      "Keep the person lying down with their head slightly elevated if possible",
      "Do not give them anything to eat or drink",
      "If the person is unconscious, check their airway, breathing, and circulation"
    ],
    doNot: [
      "Do not give the person medication, food, or drinks",
      "Do not let the person go to sleep or talk you out of calling emergency services",
      "Do not drive yourself or the person to the hospital; call an ambulance",
      "Do not wait to see if symptoms improve"
    ],
    when911: [
      "Sudden numbness or weakness in the face, arm, or leg (especially on one side)",
      "Sudden confusion or trouble speaking or understanding speech",
      "Sudden trouble seeing in one or both eyes",
      "Sudden dizziness, loss of balance, or lack of coordination",
      "Sudden severe headache with no known cause"
    ]
  },
  {
    id: "emergency-3",
    title: "Choking",
    description: "Steps to help someone who is choking",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
    steps: [
      "Ask the person if they are choking. If they can speak, cough, or breathe, do not interfere",
      "If they cannot speak, cough, or breathe, or are making high-pitched noises, proceed with first aid",
      "Stand behind the person and wrap your arms around their waist",
      "Make a fist with one hand and place it thumb-side against the middle of the person's abdomen, just above the navel",
      "Grasp your fist with your other hand and press into the abdomen with quick, upward thrusts",
      "Repeat until the object is forced out and the person can breathe, cough, or speak",
      "If the person becomes unconscious, lower them to the ground and begin CPR"
    ],
    doNot: [
      "Do not perform abdominal thrusts on pregnant women or obese individuals; use chest thrusts instead",
      "Do not slap the person's back while they are upright (this can cause the object to lodge further in the airway)",
      "Do not put your fingers in the person's mouth unless you can clearly see the object"
    ],
    when911: [
      "If the person is unable to breathe, speak, or cough",
      "If you're unable to remove the obstruction using abdominal thrusts",
      "If the person becomes unconscious"
    ]
  },
  {
    id: "emergency-4",
    title: "Severe Bleeding",
    description: "How to control severe bleeding in an emergency",
    imageUrl: "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?q=80&w=1000&auto=format&fit=crop",
    steps: [
      "Call emergency services (911) immediately",
      "Apply direct pressure on the wound using a clean cloth, gauze pad, or clothing",
      "If possible, elevate the injured area above the level of the heart",
      "Continue pressing firmly until bleeding stops or emergency help arrives",
      "If blood soaks through, add more cloth without removing the original cloth",
      "If bleeding is severe and not stopping with direct pressure, consider applying a tourniquet if you have proper training"
    ],
    doNot: [
      "Do not remove large or deeply embedded objects from a wound",
      "Do not apply a tourniquet unless you have proper training and severe bleeding cannot be controlled by direct pressure",
      "Do not clean a wound that is severely bleeding; focus on stopping the bleeding first",
      "Do not raise the head of someone with a head injury who is bleeding"
    ],
    when911: [
      "Bleeding cannot be controlled with direct pressure",
      "Bleeding is the result of a serious injury",
      "The wound is large, deep, or has debris embedded within it",
      "Signs of shock are present (pale skin, rapid breathing, weakness, confusion)"
    ]
  }
];
