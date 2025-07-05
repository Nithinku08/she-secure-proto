import { Quote } from 'lucide-react';

const quotes = [
  { text: "The greatest wealth is health.", author: "Virgil" },
  { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
  { text: "Health is not valued until sickness comes.", author: "Thomas Fuller" },
  { text: "Happiness is the highest form of health.", author: "Dalai Lama" },
  { text: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.", author: "Buddha" },
  { text: "It is health that is real wealth and not pieces of gold and silver.", author: "Mahatma Gandhi" },
  { text: "Physical fitness is the first requisite of happiness.", author: "Joseph Pilates" },
  { text: "Self-care is not selfish. You cannot serve from an empty vessel.", author: "Eleanor Brownn" },
  { text: "Your body deserves the best.", author: "Unknown" },
  { text: "Wellness encompasses a healthy body, a sound mind, and a tranquil spirit.", author: "Laurette Gagnon Beaulieu" },
  { text: "The mind and body are not separate. What affects one, affects the other.", author: "Unknown" },
  { text: "Every negative belief weakens the partnership between mind and body.", author: "Deepak Chopra" },
  { text: "The part can never be well unless the whole is well.", author: "Plato" },
  { text: "He who has health has hope; and he who has hope has everything.", author: "Arabian Proverb" },
  { text: "Eating well is a form of self-respect.", author: "Unknown" },
  { text: "Time and health are two precious assets that we don't recognize and appreciate until they have been depleted.", author: "Denis Waitley" },
  { text: "You can't enjoy wealth if you're not in good health.", author: "Anonymous" },
  { text: "The first wealth is health.", author: "Ralph Waldo Emerson" },
  { text: "Movement is a medicine for creating change in a person's physical, emotional, and mental states.", author: "Carol Welch" },
  { text: "Keeping your body healthy is an expression of gratitude to the whole cosmos.", author: "Thich Nhat Hanh" },
  { text: "Health is a state of complete harmony of the body, mind, and spirit.", author: "B.K.S. Iyengar" },
  { text: "Nourishing yourself in a way that helps you blossom in the direction you want to go is attainable, and you are worth the effort.", author: "Deborah Day" },
  { text: "Well-being is about the combination of our love for what we do each day, the quality of our relationships, and the vibrancy of our physical health.", author: "Tom Rath" },
  { text: "Positive emotional energy is the key to health, happiness, and well-being.", author: "Brian Tracy" },
  { text: "Joy is a sustained sense of well-being and internal peace—a connection to what matters.", author: "Oprah Winfrey" },
];

const HealthQuotes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center text-4xl font-bold text-medical-purple mb-10">
          QUOTES
        </h2>
        <div className="scroll-container">
          <div className="scroll-content">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4"
                style={{
                  minWidth: "300px",
                  height: "100px",
                  flexShrink: 0,
                  marginRight: "16px",
                }}
              >
                <div
                  className="bg-medical-light-purple p-3 rounded-full"
                  style={{ minWidth: "50px", minHeight: "50px" }}
                >
                  <Quote className="h-6 w-6 text-medical-purple" />
                </div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-2">
                    {quote.text}
                  </p>
                  <p className="text-sm text-gray-500">- {quote.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .scroll-container {
            overflow: hidden; /* Hide overflowing content */
            position: relative;
            width: 100%; /* Full width of the container */
          }
          .scroll-content {
            display: flex;
            animation: scroll 30s linear infinite; /* Smooth scrolling */
          }
          @keyframes scroll {
            0% {
              transform: translateX(0); /* Start at the first quote */
            }
            100% {
              transform: translateX(-100%); /* Scroll smoothly to the left */
            }
          }
        `}
      </style>
    </section>
  );
};

export default HealthQuotes;