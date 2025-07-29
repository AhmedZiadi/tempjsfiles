document.addEventListener('DOMContentLoaded', function () {
    const quizContainer = document.getElementById('quiz-container');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const generateQuizBtn = document.getElementById('generate-quiz-btn');
    const questionCountInput = document.getElementById('question-count');
    const resultDiv = document.getElementById('result');
    const reviewBtn = document.getElementById('review-btn');
    const searchBox = document.getElementById('search-box');

    // Make sure quizData is defined or imported here.
    // For demonstration, I'm including a small sample, but in your actual setup,
    // this would come from your 'quiz-data-js' immersive or another source.
    const quizData = [
        {
            question: "Simulation is defined as:",
            answers: ["A technique that uses computers", "An approach for reproducing the process by which events by change and change are created in computer", "A procedure for testing and experimenting on models to answer what if)), then so and so)) Types of questions", "All of the above"],
            correctAnswer: 3
        },
        {
            question: "The purpose of simulation technique is to:",
            answers: ["Imitate a real world situation", "Understand properties and operating characteristics of complex real-life problems", "Reduce the cost of experiment on a model of real situation", "All of the above"],
            correctAnswer: 3
        },
        {
            question: "The important step required for simulation approach in solving a problem is to:",
            answers: ["Test & validate the model", "Design the experiment", "Conduct the experiment", "All of the above"],
            correctAnswer: 3
        },
        {
            question: "As simulation is not an analytical model, therefore the result of simulation must be viewed as:",
            answers: ["Unrealistic", "Exact", "Approximation", "Simplified"],
            correctAnswer: 2
        }
        // ... (rest of your quizData from the previous step)
    ];


    let shuffledQuestions = []; // Store the shuffled questions for the current quiz
    let isReviewMode = false; // Track if review mode is active

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

    // Function to analyze correct answers
    function analyzeCorrectAnswers(questions) {
        // This function will need to be updated if you want to analyze based on the original answer positions
        // For now, it will analyze based on the order they were presented in the quizData array.
        // If you want to analyze based on the *shuffled* positions, you'd need to store that mapping.
        const correctAnswerFrequency = [0, 0, 0, 0]; // Initialize frequency array for 4 answer options

        questions.forEach((questionData) => {
            const originalCorrectAnswerIndex = questionData.correctAnswer;
            // Assuming answers array always has at least 4 options for this analysis
            if (originalCorrectAnswerIndex >= 0 && originalCorrectAnswerIndex < 4) {
                correctAnswerFrequency[originalCorrectAnswerIndex]++; // Increment the count for the original correct answer position
            }
        });

        // Display the analysis of correct answers
        resultDiv.innerHTML += `<div class="alert alert-secondary mt-3">Correct Answer Analysis:<br>
            Answer Option 1 (Original Position): ${correctAnswerFrequency[0]} times<br>
            Answer Option 2 (Original Position): ${correctAnswerFrequency[1]} times<br>
            Answer Option 3 (Original Position): ${correctAnswerFrequency[2]} times<br>
            Answer Option 4 (Original Position): ${correctAnswerFrequency[3]} times</div>`;
    }

    // Function to highlight matching text
    function highlightText(text, searchTerm) {
        if (!searchTerm) return text; // If no search term, return the original text

        const regex = new RegExp(`(${searchTerm})`, 'gi'); // Case-insensitive global search
        return text.replace(regex, '<span class="highlight">$1</span>'); // Wrap matches in a span with the highlight class
    }

    // Function to display questions with shuffled answers
    function displayQuestions(questions, searchTerm = '') {
        quizContainer.innerHTML = ''; // Clear previous questions

        // Check for duplicate questions
        const duplicateQuestion = hasDuplicateQuestions(questions);
        if (duplicateQuestion) {
            // Using a custom modal/message box instead of alert()
            showCustomMessage(`Duplicate question detected: "${duplicateQuestion}". Please try generating the quiz again.`);
            return; // Stop further execution
        }

        let newIndex = 0; // To keep track of the displayed question index
        questions.forEach((questionData, originalQuestionIndex) => {
            const questionContainsTerm = questionData.question.toLowerCase().includes(searchTerm.toLowerCase());
            const answersContainTerm = questionData.answers.some((answer) =>
                answer.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // Only display questions that match the search term or if no search term
            if (questionContainsTerm || answersContainTerm || searchTerm === '') {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question-page', 'active'); // Show all questions

                // Create an array of answer objects with their original index
                const answersWithOriginalIndex = questionData.answers.map((answer, i) => ({
                    text: answer,
                    originalIndex: i
                }));

                // Shuffle the answers for the current question
                const shuffledAnswers = shuffleArray([...answersWithOriginalIndex]);

                // Store the shuffled answers and the new correct answer index for later validation
                // This is crucial for checking the correct answer after shuffling
                questionData.shuffledAnswers = shuffledAnswers;
                questionData.shuffledCorrectAnswerIndex = shuffledAnswers.findIndex(
                    (answerObj) => answerObj.originalIndex === questionData.correctAnswer
                );

                questionDiv.innerHTML = `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Question ${newIndex + 1}</h5>
                            <p class="card-text">${highlightText(questionData.question, searchTerm)}</p>
                            <div class="answers-container">
                                ${shuffledAnswers.map((answerObj, i) => `
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="question${originalQuestionIndex}" value="${i}">
                                        <label class="form-check-label">${highlightText(answerObj.text, searchTerm)}</label>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="feedback mt-2" id="feedback${originalQuestionIndex}"></div>
                        </div>
                    </div>
                `;
                quizContainer.appendChild(questionDiv);
                newIndex++;
            }
        });
    }

    // Function to generate the initial quiz
    function generateQuiz(numQuestions) {
        shuffledQuestions = shuffleArray([...quizData]).slice(0, numQuestions); // Shuffle and select questions
        displayQuestions(shuffledQuestions); // Display the selected questions
        isReviewMode = false; // Reset review mode
        reviewBtn.textContent = 'Review All Questions'; // Reset button text
        resultDiv.innerHTML = ''; // Clear previous results
        submitQuizBtn.style.display = 'block'; // Show submit button
    }

    // Function to review all questions in the array
    function reviewAllQuestions() {
        displayQuestions(quizData, searchBox.value);
        reviewBtn.textContent = 'Show Initial Quiz'; // Change button text
        isReviewMode = true; // Set review mode
        resultDiv.innerHTML = ''; // Clear previous results
        submitQuizBtn.style.display = 'none'; // Hide submit button in review mode
    }

    // Event listener for search box
    searchBox.addEventListener('input', function () {
        const searchTerm = searchBox.value.trim(); // Get the search term
        const questionsToDisplay = isReviewMode ? quizData : shuffledQuestions; // Use the appropriate question set
        displayQuestions(questionsToDisplay, searchTerm); // Display filtered and highlighted questions
    });

    // Event listener for review button
    reviewBtn.addEventListener('click', reviewAllQuestions);

    // Generate quiz button event listener
    generateQuizBtn.addEventListener('click', function () {
        const numQuestions = parseInt(questionCountInput.value);
        if (numQuestions > 0 && numQuestions <= quizData.length) {
            generateQuiz(numQuestions);
        } else {
            // Using a custom modal/message box instead of alert()
            showCustomMessage(`Please enter a number between 1 and ${quizData.length}.`);
        }
    });

    // Submit quiz button event listener
    submitQuizBtn.addEventListener('click', function () {
        let score = 0;
        // When submitting, we iterate through the questions that were *actually displayed*
        // which are stored in `shuffledQuestions` if not in review mode, or `quizData` if in review mode.
        const questionsToCheck = isReviewMode ? quizData : shuffledQuestions;

        questionsToCheck.forEach((questionData, originalQuestionIndex) => {
            const feedbackDiv = document.getElementById(`feedback${originalQuestionIndex}`);
            const selectedAnswer = document.querySelector(`input[name="question${originalQuestionIndex}"]:checked`);

            if (selectedAnswer) {
                const userAnswerShuffledIndex = parseInt(selectedAnswer.value); // This is the index in the *shuffled* array
                
                // Compare the user's selected shuffled index with the stored shuffled correct answer index
                if (userAnswerShuffledIndex === questionData.shuffledCorrectAnswerIndex) {
                    feedbackDiv.innerHTML = `<div class="alert alert-success">Correct! Well done.</div>`;
                    score++;
                } else {
                    // Get the text of the correct answer from the shuffled answers
                    const correctText = questionData.shuffledAnswers[questionData.shuffledCorrectAnswerIndex].text;
                    feedbackDiv.innerHTML = `<div class="alert alert-danger">Incorrect. The correct answer is: ${correctText}</div>`;
                }
            } else {
                const correctText = questionData.shuffledAnswers[questionData.shuffledCorrectAnswerIndex].text;
                feedbackDiv.innerHTML = `<div class="alert alert-warning">You did not select an answer. The correct answer is: ${correctText}</div>`;
            }
        });

        // Display the total score
        resultDiv.innerHTML = `<div class="alert alert-info">You scored ${score} out of ${questionsToCheck.length}!</div>`;

        // Analyze correct answers and display the results
        // Note: analyzeCorrectAnswers currently uses original positions.
        // If you want to analyze based on shuffled positions, you'd need to adapt it.
        analyzeCorrectAnswers(questionsToCheck);
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
