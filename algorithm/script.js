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
    },
];
    {
        "question": "What is the goal of algorithm analysis?",
        "answers": [
                "To make the program look better",
                "To improve the efficiency of the algorithm",
                "To change the programming language",
                "To delete the code"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which case contains the largest number of steps?",
        "answers": [
                "Best case",
                "Average case",
                "Worst case",
                "None of the above"
        ],
        "correctAnswer": 2
    },
    {
        "question": "When is the best case for searching in an array?",
        "answers": [
                "When the first element is the largest",
                "When the last element is the smallest",
                "When the middle element is the largest",
                "When the array is empty"
        ],
        "correctAnswer": 0
    },
    {
        "question": "Which notation is used for the upper bound of time complexity?",
        "answers": [
                "Omega (Ω)",
                "Theta (Θ)",
                "Big-Oh (O)",
                "Delta (Δ)"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following represents constant time complexity?",
        "answers": [
                "O(n²)",
                "O(1)",
                "O(n)",
                "O(n log n)"
        ],
        "correctAnswer": 1
    },
    {
        "question": "What is the main factor that affects algorithm execution time?",
        "answers": [
                "Internet speed",
                "Number of steps in the algorithm",
                "Number of users",
                "Screen size"
        ],
        "correctAnswer": 1
    },
    {
        "question": "When the data is sorted in ascending order, the algorithm is in the:",
        "answers": [
                "Best case",
                "Worst case",
                "Ideal case",
                "Unsolvable case"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which time complexity is the most efficient?",
        "answers": [
                "O(n³)",
                "O(n²)",
                "O(log n)",
                "O(2ⁿ)"
        ],
        "correctAnswer": 2
    },
    {
        "question": "The complexity O(2ⁿ) refers to an algorithm with:",
        "answers": [
                "Low complexity",
                "Very high complexity",
                "Constant speed",
                "Average performance"
        ],
        "correctAnswer": 1
    },
    {
        "question": "What does average-case analysis aim to measure?",
        "answers": [
                "The easiest way to delete data",
                "The expected time in most cases",
                "The maximum time possible",
                "The fastest case only"
        ],
        "correctAnswer": 1
    },
    {
        "question": "What is the main goal of a sorting algorithm?",
        "answers": [
                "To delete data",
                "To arrange elements in a specific order",
                "To change data types",
                "To compress files"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is a purpose of sorting?",
        "answers": [
                "Slowing down the program",
                "Hiding data",
                "Making searching easier",
                "Increasing the number of elements"
        ],
        "correctAnswer": 2
    },
    {
        "question": "When data is sorted inside memory, it is called:",
        "answers": [
                "External sorting",
                "Manual sorting",
                "Internal sorting",
                "Static sorting"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is used in internal sorting?",
        "answers": [
                "Bubble Sort",
                "Balanced Merge Sort",
                "Two-Way Tape Sort",
                "Tape Rotation"
        ],
        "correctAnswer": 0
    },
    {
        "question": "External sorting is used when:",
        "answers": [
                "The data is very small",
                "Storage is in main memory",
                "The data size is large",
                "There is no data at all"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is an example of external sorting?",
        "answers": [
                "Quick Sort",
                "Bubble Sort",
                "Merge Sort",
                "Insertion Sort"
        ],
        "correctAnswer": 2
    },
    {
        "question": "In Quick Sort, what is the pivot element?",
        "answers": [
                "The last element in the array",
                "A random element",
                "The first element in the array",
                "The largest element"
        ],
        "correctAnswer": 2
    },
    {
        "question": "What is the benefit of using ByRef when passing the array in Quick Sort?",
        "answers": [
                "Prevents duplication",
                "Increases memory usage",
                "Directly affects the original array",
                "Copies the array multiple times"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Using Redim Preserve repeatedly in Quick Sort results in:",
        "answers": [
                "Faster execution",
                "Fewer comparisons",
                "Slower performance",
                "Data deletion"
        ],
        "correctAnswer": 2
    },
    {
        "question": "What is the better alternative to using two separate arrays in Quick Sort?",
        "answers": [
                "Creating temporary files",
                "Using Bubble Sort",
                "Working on the original array with two pointers",
                "Deleting the large array"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is the slowest sorting algorithm mentioned?",
        "answers": [
                "Merge Sort",
                "Shell Sort",
                "Bubble Sort",
                "Quick Sort"
        ],
        "correctAnswer": 2
    },
    {
        "question": "In the Insertion Sort algorithm, elements are moved to:",
        "answers": [
                "The same array only",
                "An external file",
                "A second sorted array",
                "A temporary variable"
        ],
        "correctAnswer": 2
    },
    {
        "question": "The Selection Sort algorithm works by:",
        "answers": [
                "Choosing a random element",
                "Selecting the largest or smallest unsorted element and placing it in the correct position",
                "Removing duplicate elements",
                "Copying all elements into a new file"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which algorithm is used to fix the problem of too many comparisons in Bubble Sort?",
        "answers": [
                "Selection Sort",
                "Shell Sort",
                "Insertion Sort",
                "Pointer Sort"
        ],
        "correctAnswer": 1
    },
    {
        "question": "In Radix Sort, numbers are sorted using:",
        "answers": [
                "Repetition only",
                "Binary search",
                "Buckets (0 to 9)",
                "Rows and columns"
        ],
        "correctAnswer": 2
    },
    {
        "question": "What is the Pointer Sort algorithm based on?",
        "answers": [
                "Counting cells",
                "Changing text styles",
                "Sorting elements using pointers",
                "Sorting only text"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Topological Sort is based on:",
        "answers": [
                "Sorting by repetition",
                "Using graphs and queue",
                "Sorting by number of digits",
                "Sorting only images"
        ],
        "correctAnswer": 1
    },
    {
        "question": "In Merge Sort, we:",
        "answers": [
                "Merge elements randomly",
                "Divide the data, then merge it in order",
                "Sort the data and then delete it",
                "Use a loop to remove blanks"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which of the following is an internal sorting algorithm?",
        "answers": [
                "Merge Sort",
                "Bubble Sort",
                "Balanced Two-Way Merge",
                "External Radix"
        ],
        "correctAnswer": 1
    },
    {
        "question": "When using Merge Sort, the final result is:",
        "answers": [
                "An unsorted group",
                "An empty file",
                "One sorted group",
                "Two separate arrays"
        ],
        "correctAnswer": 2
    },
    {
        "question": "What is the concept of searching in algorithm science?",
        "answers": [
                "Deleting data",
                "Modifying elements",
                "Finding an element within a data set",
                "Compressing data"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is a basic condition for applying binary search?",
        "answers": [
                "Elements must be unique",
                "The array must be sorted",
                "The array must be small",
                "The array must contain only numbers"
        ],
        "correctAnswer": 1
    },
    {
        "question": "What is the approximate execution time for sequential search?",
        "answers": [
                "O(1)",
                "O(n²)",
                "O(n)",
                "O(log n)"
        ],
        "correctAnswer": 2
    },
    {
        "question": "In binary search, if the middle element is smaller than the key, where do we search?",
        "answers": [
                "The whole array",
                "The first half",
                "The second half",
                "No further search"
        ],
        "correctAnswer": 2
    },
    {
        "question": "The Boyer-Moore algorithm is used in:",
        "answers": [
                "Deleting data",
                "Encryption",
                "Text searching",
                "Image comparison"
        ],
        "correctAnswer": 2
    },
    {
        "question": "What is the alphabetical comparison function in C?",
        "answers": [
                "strcmp()",
                "searchstr()",
                "charComp()",
                "equalText()"
        ],
        "correctAnswer": 0
    },
    {
        "question": "What is the maximum number of searches in binary search?",
        "answers": [
                "Equal to the number of elements",
                "Square root of the number of elements",
                "The first power of 2 greater than the number of elements",
                "Twice the number of elements"
        ],
        "correctAnswer": 2
    },
    {
        "question": "In sequential search, the search starts from:",
        "answers": [
                "End to beginning",
                "Random positions",
                "Beginning to end",
                "Binary comparison"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Which of the following is used to search for words that start with certain letters?",
        "answers": [
                "Multi Sort",
                "Prefix Searching",
                "Reverse Sort",
                "Hash Match"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Antivirus software uses fast search algorithms to:",
        "answers": [
                "Compress files",
                "Manually compare files",
                "Search for signatures inside files",
                "Delete malware"
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

