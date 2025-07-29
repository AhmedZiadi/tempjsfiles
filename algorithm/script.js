document.addEventListener('DOMContentLoaded', function () {
    const quizContainer = document.getElementById('quiz-container');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const generateQuizBtn = document.getElementById('generate-quiz-btn');
    const questionCountInput = document.getElementById('question-count');
    const resultDiv = document.getElementById('result');
    const reviewBtn = document.getElementById('review-btn');
    const searchBox = document.getElementById('search-box');
    const searchAnswersBtn = document.getElementById('search-answers-btn');

    // Full quizData from the CSV parsing step
    const quizData = [
    {
        "question": "What is an algorithm?",
        "answers": [
            "A graphic diagram",
            "A list of random instructions",
            "A set of specific instructions to solve a problem",
            "A complete program in a language"
        ],
        "correctAnswer": 2
    },
    {
        "question": "One of the conditions of a correct algorithm is:",
        "answers": [
            "Infinite steps",
            "No output",
            "Definiteness",
            "Compiler usage"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is NOT a necessary condition for an algorithm?",
        "answers": [
            "Input",
            "Output",
            "Randomness",
            "Finiteness"
        ],
        "correctAnswer": 2
    },
    {
        "question": "What is the difference between a compiler and an interpreter?",
        "answers": [
            "Both work at the same time",
            "Compiler executes the full program; interpreter does it step by step",
            "Interpreter is faster than compiler",
            "Compiler works without code"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which step comes first in program development?",
        "answers": [
            "Design",
            "Verification",
            "Requirements Specification",
            "Coding"
        ],
        "correctAnswer": 2
    },
    {
        "question": "What is the goal of the \"Analysis\" step in program development?",
        "answers": [
            "Fix syntax errors",
            "Compare algorithms for best performance",
            "Draw flowcharts",
            "Design graphics"
        ],
        "correctAnswer": 1
    },
    {
        "question": "What does \"Space Complexity\" measure?",
        "answers": [
            "Execution speed",
            "Number of functions",
            "Memory needed during execution",
            "Size of the screen"
        ],
        "correctAnswer": 2
    },
    {
        "question": "What are the two parts of space complexity?",
        "answers": [
            "Time and space",
            "Input and output",
            "Fixed and variable",
            "Stack and heap"
        ],
        "correctAnswer": 2
    },
    {
        "question": "What is the formula for Time Complexity?",
        "answers": [
            "T(p) = Input + Output",
            "T(p) = Const + Tp",
            "T(p) = Variable + Memory",
            "T(p) = Speed x Space"
        ],
        "correctAnswer": 1
    },
    {
        "question": "What is the purpose of \"Verification\" in program development?",
        "answers": [
            "Writing program comments",
            "Choosing a language",
            "Proving correctness, testing, and debugging",
            "Drawing algorithm shapes"
        ],
        "correctAnswer": 2
    }
];



    let shuffledQuestions = []; // Store the shuffled questions for the current quiz
    let isReviewMode = false; // Track if review mode is active
    let currentlyDisplayedQuestions = []; // Global variable to hold the questions currently rendered on screen

    // Function to shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to check for duplicate questions and return the first duplicate
    function hasDuplicateQuestions(questions) {
        const uniqueQuestions = new Set();
        for (const question of questions) {
            if (uniqueQuestions.has(question.question)) {
                return question.question; // Return the first duplicate question
            }
            uniqueQuestions.add(question.question);
        }
        return null; // No duplicates
    }

    // Function to analyze correct answers (based on original positions)
    function analyzeCorrectAnswers(questions) {
        const correctAnswerFrequency = [0, 0, 0, 0]; // Initialize frequency array for 4 answer options

        questions.forEach((questionData) => {
            const originalCorrectAnswerIndex = questionData.correctAnswer;
            if (originalCorrectAnswerIndex >= 0 && originalCorrectAnswerIndex < 4) {
                correctAnswerFrequency[originalCorrectAnswerIndex]++;
            }
        });

        resultDiv.innerHTML += `<div class="alert alert-secondary mt-3">Correct Answer Analysis:<br>
            Answer Option 1 (Original Position): ${correctAnswerFrequency[0]} times<br>
            Answer Option 2 (Original Position): ${correctAnswerFrequency[1]} times<br>
            Answer Option 3 (Original Position): ${correctAnswerFrequency[2]} times<br>
            Answer Option 4 (Original Position): ${correctAnswerFrequency[3]} times</div>`;
    }

    // Function to highlight matching text
    function highlightText(text, searchTerm) {
        if (!searchTerm) return text;

        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    // Function to display questions with shuffled answers and apply search filters
    // This function now populates the global 'currentlyDisplayedQuestions' array
    function updateAndDisplayQuestions(questionsSource, searchTerm = '', searchOnlyAnswers = false) {
        quizContainer.innerHTML = ''; // Clear previous questions
        resultDiv.innerHTML = ''; // Clear previous results
        currentlyDisplayedQuestions = []; // Reset for new display

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        questionsSource.forEach((questionData) => { // Removed originalQuestionIndex from here
            // Get the true original index from the master quizData array
            const trueOriginalIndex = quizData.indexOf(questionData);
            if (trueOriginalIndex === -1) {
                console.error("Error: Question data not found in quizData during display.");
                return; // Skip if not found (shouldn't happen with correct data handling)
            }

            const questionContainsTerm = questionData.question.toLowerCase().includes(lowerCaseSearchTerm);
            const answersContainTerm = questionData.answers.some((answer) =>
                answer.toLowerCase().includes(lowerCaseSearchTerm)
            );

            let shouldDisplay = false;
            if (searchTerm === '') {
                shouldDisplay = true;
            } else if (searchOnlyAnswers) {
                shouldDisplay = answersContainTerm;
            } else {
                shouldDisplay = questionContainsTerm || answersContainTerm;
            }

            if (shouldDisplay) {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question-page', 'active');

                const answersWithOriginalIndex = questionData.answers.map((answer, i) => ({
                    text: answer,
                    originalIndex: i
                }));

                const shuffledAnswers = shuffleArray([...answersWithOriginalIndex]);

                // Store shuffled info directly on the questionData object for later retrieval
                questionData.shuffledAnswers = shuffledAnswers;
                questionData.shuffledCorrectAnswerIndex = shuffledAnswers.findIndex(
                    (answerObj) => answerObj.originalIndex === questionData.correctAnswer
                );

                questionDiv.innerHTML = `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Question ${currentlyDisplayedQuestions.length + 1}</h5>
                            <p class="card-text">${highlightText(questionData.question, searchTerm)}</p>
                            <div class="answers-container">
                                ${shuffledAnswers.map((answerObj, i) => `
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="question${trueOriginalIndex}" value="${i}">
                                        <label class="form-check-label">${highlightText(answerObj.text, searchTerm)}</label>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="feedback mt-2" id="feedback${trueOriginalIndex}"></div>
                        </div>
                    </div>
                `;
                quizContainer.appendChild(questionDiv);
                currentlyDisplayedQuestions.push(questionData); // Add to the list of currently displayed questions
            }
        });
    }

    // Function to generate the initial quiz
    function generateQuiz(numQuestions) {
        shuffledQuestions = shuffleArray([...quizData]).slice(0, numQuestions);
        updateAndDisplayQuestions(shuffledQuestions);
        isReviewMode = false;
        reviewBtn.textContent = 'Review All Questions';
        resultDiv.innerHTML = '';
        submitQuizBtn.style.display = 'block';
        searchBox.value = '';
    }

    // Function to review all questions in the array
    function reviewAllQuestions() {
        updateAndDisplayQuestions(quizData, searchBox.value, false);
        reviewBtn.textContent = 'Show Initial Quiz';
        isReviewMode = true;
        resultDiv.innerHTML = '';
        submitQuizBtn.style.display = 'block';
    }

    // Event listener for general search box (questions OR answers)
    searchBox.addEventListener('input', function () {
        const searchTerm = searchBox.value.trim();
        updateAndDisplayQuestions(quizData, searchTerm, false);
        isReviewMode = true;
        reviewBtn.textContent = 'Show Initial Quiz';
        submitQuizBtn.style.display = 'block';
    });

    // Event listener for the new "Search in Answers" button
    searchAnswersBtn.addEventListener('click', function () {
        const searchTerm = searchBox.value.trim();
        updateAndDisplayQuestions(quizData, searchTerm, true);
        isReviewMode = true;
        reviewBtn.textContent = 'Show Initial Quiz';
        submitQuizBtn.style.display = 'block';
    });

    // Event listener for review button
    reviewBtn.addEventListener('click', reviewAllQuestions);

    // Generate quiz button event listener
    generateQuizBtn.addEventListener('click', function () {
        const numQuestions = parseInt(questionCountInput.value);
        if (numQuestions > 0 && numQuestions <= quizData.length) {
            generateQuiz(numQuestions);
        } else {
            showCustomMessage(`Please enter a number between 1 and ${quizData.length}.`);
        }
    });

    // Submit quiz button event listener
    submitQuizBtn.addEventListener('click', function () {
        let score = 0;
        // `currentlyDisplayedQuestions` now accurately reflects what's on screen
        const questionsToScore = currentlyDisplayedQuestions;

        questionsToScore.forEach((questionData) => {
            // Find the original index of this question in the full quizData array
            // This ensures we get the correct ID for the DOM elements.
            const originalIndexForFeedback = quizData.indexOf(questionData); 
            if (originalIndexForFeedback === -1) {
                console.error("Question data not found in original quizData array. This should not happen if data is handled correctly.");
                return; // Skip this question if its original data can't be found
            }

            const feedbackDiv = document.getElementById(`feedback${originalIndexForFeedback}`);
            const selectedAnswer = document.querySelector(`input[name="question${originalIndexForFeedback}"]:checked`);

            if (selectedAnswer) {
                const userAnswerShuffledIndex = parseInt(selectedAnswer.value);
                
                if (userAnswerShuffledIndex === questionData.shuffledCorrectAnswerIndex) {
                    feedbackDiv.innerHTML = `<div class="alert alert-success">Correct! Well done.</div>`;
                    score++;
                } else {
                    const correctText = questionData.shuffledAnswers[questionData.shuffledCorrectAnswerIndex].text;
                    feedbackDiv.innerHTML = `<div class="alert alert-danger">Incorrect. The correct answer is: ${correctText}</div>`;
                }
            } else {
                const correctText = questionData.shuffledAnswers[questionData.shuffledCorrectAnswerIndex].text;
                feedbackDiv.innerHTML = `<div class="alert alert-warning">You did not select an answer. The correct answer is: ${correctText}</div>`;
            }
        });

        resultDiv.innerHTML = `<div class="alert alert-info">You scored ${score} out of ${questionsToScore.length}!</div>`;
        analyzeCorrectAnswers(questionsToScore);
    });

    // Custom message box function (replaces alert())
    function showCustomMessage(message) {
        const modalId = 'customMessageModal';
        let modalElement = document.getElementById(modalId);

        if (!modalElement) {
            modalElement = document.createElement('div');
            modalElement.id = modalId;
            modalElement.classList.add('modal', 'fade');
            modalElement.setAttribute('tabindex', '-1');
            modalElement.setAttribute('aria-labelledby', `${modalId}Label`);
            modalElement.setAttribute('aria-hidden', 'true');
            modalElement.innerHTML = `
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${modalId}Label">Quiz Message</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p id="customMessageContent"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modalElement);
        }

        document.getElementById('customMessageContent').textContent = message;
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
});

