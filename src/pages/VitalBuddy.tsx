import { useState, FormEvent } from 'react';
import styles from './VitalBuddy.module.css';
import Navbar from '@/components/layout/Navbar';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const VitalBuddy = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Good morning! How can I assist you with your health today? Before we begin, may I know your name?"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = { sender: 'user', text: inputText.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputText.trim() })
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      
      // Add bot response
      const botMessage: Message = { sender: 'bot', text: data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      // Add error message
      const errorMessage: Message = { 
        sender: 'bot', 
        text: "Sorry, I couldn't connect to the server. Please make sure the server is running on port 3000." 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" 
              alt="Chatbot Logo" 
              className={styles.chatLogo}
            />
            <span className={styles.chatTitle}>Medical Chatbot</span>
          </div>
          
          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`${styles.message} ${styles[message.sender]}`}
              >
                <div className={styles.bubble}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className={styles.chatInput}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
              autoFocus
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VitalBuddy; 