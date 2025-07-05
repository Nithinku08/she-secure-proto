import { Chatbot } from './chatbot.js';

const chatbot = new Chatbot();

async function startChat() {
  console.log("Welcome to the Medical Chatbot! How can I assist you today?");
  
  process.stdin.on('data', async (input) => {
    const userMessage = input.toString().trim();
    if (userMessage.toLowerCase() === 'exit') {
      console.log("Thank you for chatting! Goodbye!");
      process.exit();
    }
    
    const response = await chatbot.processMessage(userMessage);
    console.log(response);
  });
}

startChat();