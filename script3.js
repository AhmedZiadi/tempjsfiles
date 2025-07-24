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
            "question": "Simulation is defined as:",
            "answers": [
                "A technique that uses computers",
                "An approach for reproducing the process by which events by change and change are created in computer",
                "A procedure for testing and experimenting on models to answer what if)), then so and so)) Types of questions",
                "All of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "The purpose of simulation technique is to:",
            "answers": [
                "Imitate a real world situation",
                "Understand properties and operating characteristics of complex real-life problems",
                "Reduce the cost of experiment on a model of real situation",
                "All of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "The important step required for simulation approach in solving a problem is to:",
            "answers": [
                "Test & validate the model",
                "Design the experiment",
                "Conduct the experiment",
                "All of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "As simulation is not an analytical model, therefore the result of simulation must be viewed as:",
            "answers": [
                "Unrealistic",
                "Exact",
                "Approximation",
                "Simplified"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Which of the following is not the special purpose simulation language:",
            "answers": [
                "BASIC",
                "GPSS",
                "GASP",
                "SIMSCRIPT"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Simulation should be thought of as a technique for",
            "answers": [
                "sampling the input and characterizing the uncertainty of the corresponding output)",
                "obtaining a relatively inexpensive solution to a problem)",
                "providing quick and dirty answers to complex problems)",
                "none of the above"
            ],
            "correctAnswer": 0
        },
        {
            "question": "While assigning random numbers in Monte Carlo simulation, it is",
            "answers": [
                "not necessary to assign the exact range of random number interval as the probability",
                "necessary to develop a cumulative probability distribution",
                "necessary to assign the particular appropriate random numbers",
                "all of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "The general purpose system simulation language",
            "answers": [
                "requires programme writing",
                "does not require programme writing",
                "requires predefined coding forms",
                "needs a set of equations to describe a system"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Few causes of simulation analysis failure are",
            "answers": [
                "inadequate level of user participation",
                "inappropriate levels of detail",
                "incomplete mix of essential skills",
                "all of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "The important step required for simulation approach in solving a problem is to",
            "answers": [
                "test and validate the model",
                "design the experiment",
                "conduct the experiment",
                "all of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Which of the following statements is INCORRECT regarding the advantages of simulation?",
            "answers": [
                "Simulation is relatively easy to explain and understand)",
                "Simulation guarantees an optimal solution)",
                "Simulation models are flexible",
                "A simulation model provides a convenient experimental laboratory for the real system)"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Special simulation languages are useful because they",
            "answers": [
                "reduce programme preparation time and cost",
                "have the capability to generate random variables",
                "require no prior programming knowledge",
                "all of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Large complicated simulation models are appreciated because",
            "answers": [
                "their average costs are not well-defined",
                "it is difficult to create the appropriate events",
                "they may be expensive to write and use as an experimental device",
                "all of the above"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Simulation should not be applied in all cases because it",
            "answers": [
                "requires considerable talent for model building and extensive computer programming efforts",
                "consumes much computer time",
                "provides at best approximate solution to problem",
                "all of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Which of the following statements are NOT true of simulation?",
            "answers": [
                "Simulation model cannot prescribe what should be done about a problem",
                "Simulation models can be used to study alternative solutions to a problem",
                "Simulation models the behaviour of a system",
                "The equations describing the operating characteristics of the system are known"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Select the valid reasons for using simulation)",
            "answers": [
                "Relationship between the variables is nonlinear",
                "Optimized solutions are obtained",
                "Conduct experiments without disrupting the real system",
                "Answers A and C"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Monte Carlo simulation gets its name from which of the following?",
            "answers": [
                "Data collection",
                "Model formulation",
                "Random-number assignment",
                "Analysis"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Simulation models can be used to obtain operating characteristic estimates in less time than with the real system using a feature of simulation called:",
            "answers": [
                "Microseconds",
                "Warp speed",
                "Time compression",
                "None of the above"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Which of the following statistical methods are commonly used to analyze simulation results?",
            "answers": [
                "Regression analysis",
                "(B) Secondary Data only",
                "(C) Both Primary and Secondary Data",
                "(D) None of the above"
            ],
            "correctAnswer": 2
        },
        {
            "question": "A test accurately indicates an employee’s scores on a future criterion (e)g), conscientiousness))  What kind of validity is this?",
            "answers": [
                "Analysis of variance",
                "t-tests",
                "Analysis of variance",
                "All of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "All simulations involve:",
            "answers": [
                "The passage of time",
                "A model on a computer",
                "An imitation of a system",
                "A visual display"
            ],
            "correctAnswer": 2
        },
        {
            "question": "The simulations described in the book are used for:",
            "answers": [
                "Understanding a system",
                "Understanding and improving a system",
                "Improving a system",
                "None of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Which of the following systems can be simulated?",
            "answers": [
                "Transportation systems",
                "Manufacturing systems",
                "Health systems",
                "All of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "What software is likely to be needed for a simulation study?",
            "answers": [
                "Spread sheet software",
                "Simulation package",
                "Statistical software",
                "None of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "A simulation uses the logical relationships and mathematical expressions of the",
            "answers": [
                "Real system",
                "Computer model",
                "Performance measures",
                "Inferences"
            ],
            "correctAnswer": 0
        },
        {
            "question": "…is considered to be a numerical computation technique used in conjunction with dynamic mathematical models)",
            "answers": [
                "Analysis",
                "System simulation",
                "Dynamic computation",
                "None of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Which system/model applies computational procedures to solve equations:",
            "answers": [
                "Dynamic Model",
                "Static Model",
                "Analytical Model",
                "Numerical Model"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Which system/model applies deductive reasoning of mathematical theory to solve a model:",
            "answers": [
                "Dynamic Model",
                "Static Model",
                "Analytical Model",
                "Numerical Model"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Which model follows the changes over time that results from the system activities:",
            "answers": [
                "Dynamic Model",
                "Static Model",
                "Analytical Model",
                "Numerical Model"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Which model can only show the values that system attributes take when the system is in balance:",
            "answers": [
                "Dynamic Model",
                "Static Model",
                "Analytical Model",
                "Numerical Model"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Mathematical models are based on:",
            "answers": [
                "Analogy between such systems as mechanical and electrical",
                "Use symbolic notation and mathematical equations to represent a system",
                "All of the above",
                "None of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Physical models are based on:",
            "answers": [
                "Analogy between such systems as mechanical and electrical",
                "Use symbolic notation and mathematical equations to represent a system",
                "All of the above",
                "None of the above"
            ],
            "correctAnswer": 0
        },
        {
            "question": "In system modeling, the task of deriving a model of a system may be divided broadly into two subtasks:",
            "answers": [
                "Establishing the model structure",
                "Supplying the data)",
                "Both of above",
                "None of the above"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Which one of the following is false about model:",
            "answers": [
                "Model is the body of information about a system gathered for the purpose of studying the system)",
                "Since the purpose of study is varying, there is no unique model for a system)",
                "Both of above are false",
                "None of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "In Continuous system, changes are:",
            "answers": [
                "Predominantly continuous",
                "Predominantly discrete",
                "Depend on the system",
                "None of the above"
            ],
            "correctAnswer": 0
        },
        {
            "question": "In Discrete system, changes are:",
            "answers": [
                "Predominantly continuous",
                "Predominantly discrete",
                "Depend on the system",
                "None of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "System analysis, System design and system postulation are the examples of:",
            "answers": [
                "Types of system",
                "Types of system study",
                "Types of entities",
                "Type of environment"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Where the outcome of the activity can describe completely in terms of its input, the activity is said to be:",
            "answers": [
                "Deterministic",
                "Stochastic",
                "Endogenous",
                "Exogenous"
            ],
            "correctAnswer": 0
        },
        {
            "question": "A system which does have exogenous activity is said to be:",
            "answers": [
                "Closed System",
                "Open system",
                "Both of above",
                "None of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "A system with no exogenous activity is said to be",
            "answers": [
                "Closed System",
                "Open system",
                "Both of above",
                "None of the above"
            ],
            "correctAnswer": 0
        },
        {
            "question": "In a Bank system, what is customer",
            "answers": [
                "Entity",
                "Activity",
                "Environment",
                "None of the above"
            ],
            "correctAnswer": 0
        },
        {
            "question": "A simple market model is an example of:",
            "answers": [
                "Static Physical Model",
                "Dynamic Physical Mode",
                "Static Mathematical Model",
                "Dynamic Mathematical Model"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Factory is an example of:",
            "answers": [
                "System",
                "Attribute",
                "Activity",
                "Environment"
            ],
            "correctAnswer": 0
        },
        {
            "question": "System is defined as:",
            "answers": [
                "aggregation or assemblage of objects",
                "Definition of Object",
                "B bot not A",
                "none of the above"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Block building principle of the system modeling says that:",
            "answers": [
                "The description of the system should be organized in a series of blocks)",
                "The description of the system should not be organized in a series of blocks)",
                "There should be no clear distinction between the subsystems of the system)",
                "None of the above)"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Which of the following separate system and system environment:",
            "answers": [
                "Acitvities",
                "Boundary",
                "Entity",
                "All of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Advance, Link, Mark and Queue blocks are used in which language:-",
            "answers": [
                "Simscript",
                "GPSS",
                "Both of above",
                "None of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Which of the following is not a simulation language:",
            "answers": [
                "GPPS",
                "Simscript",
                "Simula",
                "all of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Which of the following is simulation language:-",
            "answers": [
                "Java",
                "GPSS",
                "Javascript",
                "None of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Speed and Distance in Traffic system are:-",
            "answers": [
                "Entities",
                "Attributes",
                "Activities",
                "Environment"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Messages in Communication system is:",
            "answers": [
                "Entity",
                "Attribute",
                "Activity",
                "Environment"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Depositing in Bank system is:",
            "answers": [
                "Entity",
                "Attribute",
                "Activity",
                "Environment"
            ],
            "correctAnswer": 2
        },
        {
            "question": "Suspension model of an automobile wheel is an example of:",
            "answers": [
                "Static Physical Model",
                "Dynamic Physical Model",
                "Static Mathematical Model",
                "Dynamic Mathematical Model"
            ],
            "correctAnswer": 1
        },
        {
            "question": "System design is a:",
            "answers": [
                "To produce a system that meets some specifications)",
                "To understand how an existing system or a proposed system operates)",
                "To produce a system in which behavior is known but the process is not known)",
                "None of the above)"
            ],
            "correctAnswer": 0
        },
        {
            "question": "System analysis is a:",
            "answers": [
                "To produce a system that meets some specifications)",
                "To understand how an existing system or a proposed system operates",
                "To produce a system in which behavior is known but the process is not known)",
                "None of the above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Where the effects of the activity vary randomly over various possible outcomes, the activity is said to be:",
            "answers": [
                "Deterministic",
                "Stochastic",
                "Endogenous",
                "Exogenous"
            ],
            "correctAnswer": 1
        },
        {
            "question": "In a Corporate model, what is/are main segment/segments?",
            "answers": [
                "Environment",
                "Plant/Physical plant",
                "Management",
                "All of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Principle/principles used in modeling:",
            "answers": [
                "Block-building",
                "Relevance",
                "Accuracy",
                "All of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "In Communication system, what is \"Transmitting\":",
            "answers": [
                "Entity",
                "Activity",
                "Environment",
                "None of the above)"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Oscillator Model is an example of:",
            "answers": [
                "Static Physical Model",
                "Dynamic Physical Model",
                "Static Mathematical Model",
                "Dynamic Mathematical Model"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Traffic, Bank, and Supermarket are the examples of:",
            "answers": [
                "Attribute",
                "System",
                "Activity",
                "Environment"
            ],
            "correctAnswer": 1
        },
        {
            "question": "System postulation is a:",
            "answers": [
                "To produce a system that meets some specifications)",
                "To understand how an existing system or a proposed system operates)",
                "To produce a system in which behavior is known but the process is not known)",
                "None of the above)"
            ],
            "correctAnswer": 2
        },
        {
            "question": "DNA molecule Model or ionic model is an example of:",
            "answers": [
                "Static Physical Model",
                "Dynamic Physical Model",
                "(C) Static Mathematical Model",
                "Dynamic Mathematical Model"
            ],
            "correctAnswer": 0
        },
        {
            "question": "The following is not an advantage of simulation:",
            "answers": [
                "It allows for the study of what-if questions",
                "Each simulation model is unique",
                "It allows the study of interaction of components or variables to determine which areimportant)",
                "It allows time compression)"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Which of the following is a way of dealing with a validation problem when the computer simulation yields results that you suspect are incorrect?",
            "answers": [
                "Run the computer program again with more or fewer iterations)",
                "Simulate present conditions and compare results with the existing system",
                "Approach the problem with a mathematical model instead",
                "Use a different simulation model to try to verify the mistakes"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Which of the following is not one of the desirable features of simulation software listed in the textbook?",
            "answers": [
                "Being capable of being used interactively",
                "Being a complete and accurate model of reality",
                "Having building blocks with built-in commands",
                "Allow modules to be built and then connected"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Which of the following are viewed as advantages of simulation in operations management decision making?",
            "answers": [
                "a simulation can be used in training courses as though it were a game",
                "a significant amount of computer time can be utilized running simulations",
                "The technique of simulation requires innovation as it lacks a standardized approach",
                "Simulation may be equally precise but less accurate than a mathematical analysis"
            ],
            "correctAnswer": 0
        },
        {
            "question": "In a simulation study, after defining the problem and constructing the simulation model, the immediate next major phase of the study is which of the following?",
            "answers": [
                "Run the simulation",
                "Specify values of variables and parameters",
                "Evaluate results",
                "Validation"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Determining starting conditions is a major tactical decision in simulation analysis) Which of the following is a way to cope with this problem?",
            "answers": [
                "Discard data generated during the early parts of a run",
                "Select starting conditions that you know are realistic",
                "Select starting conditions randomly",
                "Measure the actual values of the system you are trying to simulate"
            ],
            "correctAnswer": 0
        },
        {
            "question": "In the context of a simulation study, which of the following refers to testing the computer simulation program to ensure that the simulation is correct?",
            "answers": [
                "Validation",
                "Confirmation",
                "Substantiation",
                "Calibration"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Why is it important to know about probability functions?",
            "answers": [
                "Probability provides information about the likelihood that something will happen)",
                "used to model timings and behaviour of event)",
                "B but not A",
                "none of the above"
            ],
            "correctAnswer": 0
        },
        {
            "question": "Why random numbers used in simulation?",
            "answers": [
                "Random numbers are used to model timings and behaviour of event)",
                "used to model timings and behaviour of event)",
                "A but not B",
                "none of above"
            ],
            "correctAnswer": 1
        },
        {
            "question": "Calibration is:",
            "answers": [
                "is the iterative process of comparing the model with real system",
                "revising the model if necessary",
                "comparing again, until a model is accepted (validated))",
                "B but not C"
            ],
            "correctAnswer": 0
        },
        {
            "question": "What are the types of simulation with regard to output analysis?",
            "answers": [
                "Finite-Horizon (Terminating)",
                "Steady-State simulations)",
                "A but not B",
                "A and B"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Characteristics of a queuing system that impact its performance for example, queuing requirements of a restaurant will depend upon factors like:",
            "answers": [
                "How do customers arrive in the restaurant?",
                "How much time do customers spend in the restaurant?",
                "How many tables does the restaurant have for servicing customers?",
                "All of above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "Which model allows system state to change any time?",
            "answers": [
                "continuous-event model",
                "Commercial Model",
                "A and B",
                "All of the above"
            ],
            "correctAnswer": 0
        },
        {
            "question": "What are the examples of queuing system?",
            "answers": [
                "bank-teller service",
                "computer systems",
                "manufacturing systems",
                "All of the above"
            ],
            "correctAnswer": 3
        },
        {
            "question": "input modelling is:",
            "answers": [
                "the practice of selecting probability distributions to represent such random input processes",
                "the practice of selecting probability distributions to represent such random output processes",
                "both a and B",
                "all of the above"
            ],
            "correctAnswer": 0
        },
        {
            "question": "What is the function of simulation clock?",
            "answers": [
                "is the variable within a simulation model that gives the current value of the simulated time)",
                "is the variable cause changes in another variable)",
                "order of the values is significant but difference between those values are unknown",
                "All of the above"
            ],
            "correctAnswer": 0
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
