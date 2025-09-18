function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.userAnswers = []; // 👈 store user answers
}

function getRandomQuestions(allQuestions, num) {
    // Shuffle questions
    let shuffled = allQuestions.slice().sort(() => Math.random() - 0.5);
    // Take only `num`
    return shuffled.slice(0, num);
}

Quiz.prototype.guess = function(answer) {
    this.userAnswers.push(answer); // 👈 record the answer

    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
};

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
};

var QuizUI = {
    displayNext: function() {
        if (quiz.hasEnded()) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    },
    displayQuestion: function() {
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
    displayChoices: function() {
        var choices = quiz.getCurrentQuestion().choices;
        for (var i = 0; i < choices.length; i++) {
            this.populateIdWithHTML("choice" + i, choices[i]);
            this.guessHandler("guess" + i, choices[i]);
        }
    },
    displayScore: function() {
        var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2>Your score is: " + quiz.score + " / " + quiz.questions.length + "</h2>";

    
    gameOverHTML += "<h3>Review:</h3><ul>";
    for (var i = 0; i < quiz.questions.length; i++) {
        var q = quiz.questions[i];
        var userAnswer = quiz.userAnswers[i];
        if (q.isCorrectAnswer(userAnswer)) {
            gameOverHTML += "<li>Q" + (i+1) + ": ✅ Correct (" + q.answer + ")</li>";
        } else {
            gameOverHTML += "<li>Q" + (i+1) + ": ❌ Wrong (Your: " + userAnswer + " | Correct: " + q.answer + ")</li>";
        }
    }
    gameOverHTML += "</ul>";

    
    gameOverHTML += '<button id="restartBtn" onclick="restartQuiz()">⟳</button>';

    this.populateIdWithHTML("quiz", gameOverHTML);
    },
    populateIdWithHTML: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    guessHandler: function(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            QuizUI.displayNext();
        }
    },
    displayProgress: function() {
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
};

var questions = [
    new Question("How many hours of sleep do teenagers need?",
    ["5–6 hours", "6–7 hours", "8–10 hours", "12 hours"], "8–10 hours"),

    new Question("How much water should the average person drink daily?",
    ["1 cup", "1 liter", "2 liters (8 cups)", "4 liters"], "2 liters (8 cups)"),

    new Question("What type of exercise strengthens the heart?",
    ["Yoga", "Cardio", "Push-ups", "Stretching"], "Cardio"),

    new Question("Which nutrient is the body’s main energy source?",
    ["Protein", "Carbohydrates", "Fats", "Vitamins"], "Carbohydrates"),

    new Question("How often should strength training be done?",
    ["Once a month", "Daily", "2–3 times a week", "Never"], "2–3 times a week"),

    new Question("What mineral helps strengthen bones?",
    ["Iron", "Calcium", "Potassium", "Zinc"], "Calcium"),

    // Mental Health & Mindfulness
    new Question("What is mindfulness?",
    ["Thinking about tomorrow", "Living in the past", "Focusing on the present moment", "Ignoring emotions"], "Focusing on the present moment"),

    new Question("What practice reduces stress and improves focus?",
    ["Gaming", "Meditation", "Watching TV", "Sleeping late"], "Meditation"),

    new Question("What type of breathing helps calm anxiety?",
    ["Shallow breathing", "Fast breathing", "Deep, slow breathing", "Holding breath"], "Deep, slow breathing"),

    new Question("What can journaling improve?",
    ["Typing speed", "Emotional regulation", "Math skills", "Vision"], "Emotional regulation"),

    new Question("How can exercise improve mental health?",
    ["It makes you taller", "It releases endorphins", "It lowers intelligence", "It increases stress"], "It releases endorphins"),

    new Question("What’s one way to challenge negative thoughts?",
    ["Ignore them", "Replace with positive affirmations", "Tell no one", "Avoid thinking"], "Replace with positive affirmations"),

    // Healthy Habits
    new Question("Why is breakfast important?",
    ["It helps you sleep", "It gives energy and boosts focus", "It makes you tired", "It lowers metabolism"], "It gives energy and boosts focus"),

    new Question("How long should you wash your hands?",
    ["5 seconds", "10 seconds", "20 seconds", "1 minute"], "20 seconds"),

    new Question("Why is staying hydrated important?",
    ["It improves digestion and brain function", "It makes you hungry", "It weakens muscles", "It reduces focus"], "It improves digestion and brain function"),

    new Question("How often should you brush your teeth?",
    ["Once a week", "Once a day", "Twice a day", "After every drink"], "Twice a day"),

    new Question("What does regular stretching improve?",
    ["Flexibility and circulation", "Vision", "Appetite", "Hair growth"], "Flexibility and circulation"),

    new Question("Why should you limit screen time before bed?",
    ["Screens improve sleep", "Blue light disrupts melatonin", "Screens make you exercise more", "It makes food taste better"], "Blue light disrupts melatonin"),

    // Social Well-Being
    new Question("Why is social connection important?",
    ["It reduces stress and boosts happiness", "It makes you rich", "It lowers grades", "It increases loneliness"], "It reduces stress and boosts happiness"),

    new Question("What skill improves communication?",
    ["Talking louder", "Active listening", "Interrupting", "Avoiding eye contact"], "Active listening"),

    new Question("Why is teamwork important?",
    ["It builds trust and solves problems", "It makes you work less", "It avoids responsibility", "It makes people fight"], "It builds trust and solves problems"),

    new Question("What’s a healthy way to resolve conflict?",
    ["Ignore each other", "Shout loudly", "Stay calm and compromise", "Walk away forever"], "Stay calm and compromise"),

    new Question("What can volunteering improve?",
    ["A sense of purpose and social bonds", "Grades instantly", "Sleepiness", "Money only"], "A sense of purpose and social bonds"),

    new Question("Why is it good to set boundaries?",
    ["It protects your time and emotions", "It pushes people away", "It makes friends angry", "It lowers confidence"], "It protects your time and emotions"),

    // Self-Care
    new Question("Why is self-care important?",
    ["It prevents burnout and improves well-being", "It wastes time", "It lowers health", "It makes life harder"], "It prevents burnout and improves well-being"),

    new Question("What’s one example of physical self-care?",
    ["Sleeping enough", "Skipping meals", "Avoiding water", "Staying online"], "Sleeping enough"),

    new Question("What’s one example of emotional self-care?",
    ["Talking to a trusted friend", "Bottling up feelings", "Ignoring emotions", "Staying silent"], "Talking to a trusted friend"),

    new Question("What’s one example of spiritual self-care?",
    ["Practicing gratitude or meditation", "Arguing", "Skipping sleep", "Watching TV all night"], "Practicing gratitude or meditation"),

    new Question("How can hobbies improve health?",
    ["They reduce stress and build creativity", "They waste time", "They cause anxiety", "They make you avoid people"], "They reduce stress and build creativity"),

    new Question("What is digital detox?",
    ["Taking breaks from screens", "Buying more devices", "Staying online longer", "Never reading books"], "Taking breaks from screens")

    
];
function restartQuiz() {
    
    quiz = new Quiz(getRandomQuestions(questions, 13)); 

    
    document.getElementById("quiz").innerHTML = `
        <h1>Health Quiz</h1>
        <h2 id="question" class="headline-secondary--grouped"> </h2>
        <h3 id="score"></h3>

        <p id="choice0"></p>
        <button id="guess0" class="btn--default">Select Answer</button>

        <p id="choice1"></p>
        <button id="guess1" class="btn--default">Select Answer</button>

        <p id="choice2"></p>
        <button id="guess2" class="btn--default">Select Answer</button>

        <p id="choice3"></p>
        <button id="guess3" class="btn--default">Select Answer</button>

        <footer>
            <p id="progress">Question x of y</p>
        </footer>
    `;

    
    QuizUI.displayNext();
}
var quiz = new Quiz(getRandomQuestions(questions, 13)); 
QuizUI.displayNext();
