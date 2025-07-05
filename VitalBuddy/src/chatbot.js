import { medicalPrompts } from './prompts/medicalPrompts.js';

const symptomKeywords = [
  { key: 'cough', terms: ['cough'] },
  { key: 'dry_cough', terms: ['dry cough'] },
  { key: 'wet_cough', terms: ['wet cough', 'productive cough'] },
  { key: 'fever', terms: ['fever', 'temperature'] },
  { key: 'sneezing', terms: ['sneeze', 'sneezing'] },
  { key: 'headache', terms: ['headache', 'head pain'] },
  { key: 'migraine', terms: ['migraine'] },
  { key: 'sore_throat', terms: ['sore throat', 'throat pain'] },
  { key: 'runny_nose', terms: ['runny nose', 'horny nose'] },
  { key: 'stuffy_nose', terms: ['stuffy nose', 'blocked nose', 'snory nose', 'nasal congestion'] },
  { key: 'nasal_congestion', terms: ['nasal congestion'] },
  { key: 'body_ache', terms: ['body ache', 'body pain'] },
  { key: 'muscle_pain', terms: ['muscle pain', 'muscle ache'] },
  { key: 'joint_pain', terms: ['joint pain', 'joint ache'] },
  { key: 'back_pain', terms: ['back pain'] },
  { key: 'stomach_pain', terms: ['stomach pain', 'tummy ache'] },
  { key: 'abdominal_pain', terms: ['abdominal pain'] },
  { key: 'diarrhea', terms: ['diarrhea', 'loose motion'] },
  { key: 'constipation', terms: ['constipation'] },
  { key: 'vomiting', terms: ['vomiting', 'throwing up'] },
  { key: 'nausea', terms: ['nausea', 'nauseous'] },
  { key: 'dysentery', terms: ['dysentery', 'bloody stool'] },
  { key: 'fatigue', terms: ['fatigue', 'tired', 'weakness'] },
  { key: 'dizziness', terms: ['dizzy', 'dizziness', 'lightheaded'] },
  { key: 'chest_pain', terms: ['chest pain'] },
  { key: 'palpitations', terms: ['palpitations', 'heart racing'] },
  { key: 'shortness_of_breath', terms: ['shortness of breath', 'breathless'] },
  { key: 'rash', terms: ['rash', 'skin rash'] },
  { key: 'itching', terms: ['itch', 'itching'] },
  { key: 'allergy', terms: ['allergy', 'allergic'] },
  { key: 'eye_pain', terms: ['eye pain', 'eye ache'] },
  { key: 'ear_pain', terms: ['ear pain', 'earache'] },
  { key: 'toothache', terms: ['toothache', 'tooth pain'] },
  { key: 'bleeding', terms: ['bleeding', 'bleed'] },
  { key: 'swelling', terms: ['swelling', 'swollen'] },
  { key: 'burn', terms: ['burn', 'burns'] },
  { key: 'wound', terms: ['wound', 'cut', 'injury'] },
  { key: 'insomnia', terms: ['insomnia', 'can\'t sleep', 'sleep problem'] },
  { key: 'anxiety', terms: ['anxiety', 'anxious', 'nervous'] },
  { key: 'depression', terms: ['depression', 'depressed', 'sadness'] },
  { key: 'covid', terms: ['covid', 'coronavirus'] },
  { key: 'flu', terms: ['flu', 'influenza'] },
  { key: 'cold', terms: ['cold', 'common cold'] },
  { key: 'dehydration', terms: ['dehydration', 'dehydrated'] },
  { key: 'heatstroke', terms: ['heatstroke', 'heat stroke'] },
  { key: 'sunburn', terms: ['sunburn'] },
  { key: 'insect_bite', terms: ['insect bite', 'bug bite'] },
  { key: 'food_poisoning', terms: ['food poisoning'] },
  { key: 'chickenpox', terms: ['chickenpox', 'varicella'] },
  { key: 'measles', terms: ['measles', 'rubeola'] },
  { key: 'mumps', terms: ['mumps'] },
  { key: 'rubella', terms: ['rubella', 'german measles'] },
  { key: 'dengue', terms: ['dengue', 'dengue fever'] },
  { key: 'malaria', terms: ['malaria'] },
  { key: 'typhoid', terms: ['typhoid', 'typhoid fever'] },
  { key: 'tuberculosis', terms: ['tuberculosis', 'tb'] },
  { key: 'hepatitis', terms: ['hepatitis', 'jaundice'] },
  { key: 'appendicitis', terms: ['appendicitis', 'appendix pain'] },
  { key: 'pneumonia', terms: ['pneumonia'] },
  { key: 'meningitis', terms: ['meningitis'] },
  { key: 'epilepsy', terms: ['epilepsy', 'seizure', 'fits'] },
  { key: 'sickle_cell', terms: ['sickle cell', 'sickle cell anemia'] },
  { key: 'thalassemia', terms: ['thalassemia'] },
  { key: 'lupus', terms: ['lupus', 'sle', 'systemic lupus erythematosus'] },
  { key: 'crohns', terms: ['crohn', 'crohn\'s disease'] },
  { key: 'celiac', terms: ['celiac', 'celiac disease', 'gluten intolerance'] },
  { key: 'fibromyalgia', terms: ['fibromyalgia'] },
  { key: 'psoriasis', terms: ['psoriasis'] },
  { key: 'raynaud', terms: ['raynaud', 'raynaud\'s phenomenon'] },
  { key: 'marfan', terms: ['marfan', 'marfan syndrome'] },
  { key: 'als', terms: ['als', 'amyotrophic lateral sclerosis', 'lou gehrig\'s disease'] },
  { key: 'ebola', terms: ['ebola'] },
  { key: 'zika', terms: ['zika', 'zika virus'] },
  { key: 'lyme', terms: ['lyme', 'lyme disease'] },
  { key: 'sars', terms: ['sars', 'severe acute respiratory syndrome'] },
  { key: 'mers', terms: ['mers', 'middle east respiratory syndrome'] },
  { key: 'rabies', terms: ['rabies'] },
  { key: 'anthrax', terms: ['anthrax'] },
  { key: 'plague', terms: ['plague', 'bubonic plague'] },
  { key: 'chickenpox', terms: ['chickenpox'] },
  { key: 'measles', terms: ['measles'] },
  { key: 'mumps', terms: ['mumps'] },
  { key: 'rubella', terms: ['rubella'] },
  { key: 'dengue', terms: ['dengue'] },
  { key: 'malaria', terms: ['malaria'] },
  { key: 'typhoid', terms: ['typhoid'] },
  { key: 'tuberculosis', terms: ['tuberculosis'] },
  { key: 'hepatitis', terms: ['hepatitis'] },
  { key: 'appendicitis', terms: ['appendicitis'] },
  { key: 'pneumonia', terms: ['pneumonia'] },
  { key: 'meningitis', terms: ['meningitis'] },
  // Add these at the end of your symptomKeywords array
{ key: 'cardiovascular_disease', terms: ['cardiovascular disease', 'heart disease', 'heart attack', 'angina', 'coronary artery disease'] },
{ key: 'cancer', terms: ['cancer', 'tumor', 'malignancy', 'carcinoma', 'sarcoma', 'leukemia', 'lymphoma'] },
{ key: 'chronic_respiratory_disorder', terms: ['chronic respiratory disorder', 'copd', 'chronic bronchitis', 'emphysema', 'asthma'] },
{ key: 'lower_respiratory_problem', terms: ['lower respiratory problem', 'pneumonia', 'bronchiolitis', 'lower respiratory infection'] },
  // ...add more as needed...
];

export class Chatbot {
  constructor() {
    this.state = 'greeting';
    this.userName = '';
    this.irrelevantCount = 0; // Track irrelevant/no-symptom responses
  }

  async processMessage(userMessage) {
    const msg = userMessage.trim().toLowerCase();

    // Farewell check
    if (msg === 'bye' || msg === 'exit' || msg === 'goodbye') {
      this.state = 'done';
      return medicalPrompts.farewell;
    }

    // Greeting
    if (this.state === 'greeting') {
      this.state = 'askName';
      return medicalPrompts.greetings[0] + ' ' + medicalPrompts.askName;
    }

    // Ask for name
    if (this.state === 'askName') {
      this.userName = userMessage.trim();
      this.state = 'askSymptoms';
      return `Nice to meet you, ${this.userName}! ${medicalPrompts.askSymptoms}`;
    }

    // Ask for symptoms
    if (this.state === 'askSymptoms') {
      // Recognize multiple symptoms
      const found = [];
      for (const symptom of symptomKeywords) {
        for (const term of symptom.terms) {
          if (msg.includes(term) && !found.includes(symptom.key)) {
            found.push(symptom.key);
            break;
          }
        }
      }

      if (found.length > 0) {
        this.irrelevantCount = 0; // Reset on valid input
        let advice = found
          .map(symptom => {
            const remedy = medicalPrompts.advice[symptom];
            return remedy ? `• ${remedy}` : '';
          })
          .filter(Boolean)
          .join('\n');
        // Repeat the first question after giving remedies
        return `Here are some remedies for your symptoms:\n${advice}\n\n${medicalPrompts.askSymptoms}`;
      } else {
        this.irrelevantCount += 1;
        if (this.irrelevantCount >= 2) {
          this.state = 'done';
          return "It seems you have no more medical questions. Thank you for chatting with me! Take care of your health.";
        }
        return "Thank you for sharing. Can you tell me more about your symptoms? (e.g., cough, fever, headache, runny nose, sore throat, etc.)";
      }
    }

    // After farewell, if user keeps chatting
    if (this.state === 'done') {
      return "If you have more health questions, please restart the chat or type 'bye' to exit.";
    }

    // Fallback
    return medicalPrompts.farewell;
  }
}