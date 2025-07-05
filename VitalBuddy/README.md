# Medical Chatbot

This project is a user-interactive chatbot designed to answer questions exclusively related to the medical field. The chatbot provides information and guidance on various health-related topics while ensuring a friendly and engaging user experience.

## Project Structure

```
medical-chatbot
├── src
│   ├── index.js          # Entry point of the application
│   ├── chatbot.js        # Chatbot class for processing messages
│   ├── prompts           # Directory containing predefined prompts
│   │   └── medicalPrompts.js # Medical prompts and responses
│   └── utils             # Utility functions
│       └── timeUtils.js  # Functions for handling time-related tasks
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd medical-chatbot
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## Usage Guidelines

- The chatbot is designed to interact with users in a conversational manner, focusing solely on medical inquiries.
- Users can ask questions related to symptoms, treatments, and general health advice.
- The chatbot will respond with predefined answers and prompts to guide the conversation.

## Capabilities

- Provides information on various medical conditions and symptoms.
- Engages users with friendly greetings and personalized responses.
- Maintains a structured conversation flow to ensure clarity and relevance in responses.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.