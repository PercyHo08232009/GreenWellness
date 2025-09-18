const flashcards = [
  // Physical Health
  { front: "How many hours of sleep do teenagers need?", back: "8–10 hours per night." },
  { front: "How much water should the average person drink daily?", back: "About 2 liters (8 cups)." },
  { front: "What type of exercise strengthens the heart?", back: "Cardio exercises like running, cycling, or swimming." },
  { front: "Which nutrient is the body’s main energy source?", back: "Carbohydrates." },
  { front: "How often should strength training be done?", back: "2–3 times per week." },
  { front: "What mineral helps strengthen bones?", back: "Calcium." },

  // Mental Health & Mindfulness
  { front: "What is mindfulness?", back: "Focusing on the present moment without judgment." },
  { front: "What practice reduces stress and improves focus?", back: "Meditation." },
  { front: "What type of breathing helps calm anxiety?", back: "Deep, slow breathing." },
  { front: "What can journaling improve?", back: "Emotional regulation and mental clarity." },
  { front: "How can exercise improve mental health?", back: "It releases endorphins that boost mood." },
  { front: "What’s one way to challenge negative thoughts?", back: "Replace them with positive affirmations." },

  // Healthy Habits
  { front: "Why is breakfast important?", back: "It gives energy and boosts concentration for the day." },
  { front: "How long should you wash your hands?", back: "At least 20 seconds." },
  { front: "Why is staying hydrated important?", back: "It supports digestion, energy, and brain function." },
  { front: "How often should you brush your teeth?", back: "Twice a day." },
  { front: "What does regular stretching improve?", back: "Flexibility and circulation." },
  { front: "Why should you limit screen time before bed?", back: "Blue light disrupts melatonin and sleep quality." },

  // Social Well-Being
  { front: "Why is social connection important?", back: "It reduces stress and increases happiness." },
  { front: "What skill improves communication?", back: "Active listening." },
  { front: "Why is teamwork important?", back: "It helps solve problems and builds trust." },
  { front: "What’s a healthy way to resolve conflict?", back: "Stay calm, listen, and compromise." },
  { front: "What can volunteering improve?", back: "A sense of purpose and social bonds." },
  { front: "Why is it good to set boundaries?", back: "It protects your time and emotional health." },

  // Self-Care
  { front: "Why is self-care important?", back: "It prevents burnout and boosts overall well-being." },
  { front: "What’s one example of physical self-care?", back: "Getting enough sleep." },
  { front: "What’s one example of emotional self-care?", back: "Talking to a trusted friend." },
  { front: "What’s one example of spiritual self-care?", back: "Practicing gratitude or meditation." },
  { front: "How can hobbies improve health?", back: "They reduce stress and build creativity." },
  { front: "What is digital detox?", back: "Taking breaks from screens to improve focus and balance." }
];

let currentIndex = 0;

const flashcard = document.getElementById("flashcard");
const frontDiv = document.getElementById("front");
const backDiv = document.getElementById("back");

function updateCard() {
  frontDiv.textContent = flashcards[currentIndex].front;
  backDiv.textContent = flashcards[currentIndex].back;
  flashcard.classList.remove("flipped");
}

document.getElementById("flipBtn").addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  updateCard();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  updateCard();
});

// Initialize first card
updateCard();
