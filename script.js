document.addEventListener('DOMContentLoaded', function () {
    const quizContainer = document.getElementById('quiz-container');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const generateQuizBtn = document.getElementById('generate-quiz-btn');
    const questionCountInput = document.getElementById('question-count');
    const resultDiv = document.getElementById('result');
    const reviewBtn = document.getElementById('review-btn');
    const searchBox = document.getElementById('search-box');

    // const quizData = [
    //     {
    //       question: "Research is",
    //       answers: ["Searching again and again", "Finding solution to any problem", "Working in a scientific way to search for truth of any problem", "None of the above"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "A review of the literature prior to formulating research questions allows the researcher to :",
    //       answers: ["Provide an up-to-date understanding of the subject, its significance, and structure", "Guide the development of research questions", "Present the kinds of research methodologies used in previous studies", "All of the above"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Which of the following is not the method of Research?",
    //       answers: ["Survey", "Philosophical", "Historical", "Observation"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Research that uses qualitative methods for one phase and quantitative methods for the next phase is known as:",
    //       answers: ["Action research", "Mixed-method research", "Quantitative research", "Pragmatic research"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "Research hypotheses are:",
    //       answers: ["Formulated prior to a review of the literature", "Statements of predicted relationships between variables", "B but not A", "Both A and B"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Which of the following is the first step in starting the research process?",
    //       answers: ["Searching sources of information to locate problem.", "Survey of related literature", "Identification of problem", "Searching for solutions to the problem"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Concepts are                         of Research",
    //       answers: ["Guide", "Methods", "Tools", "Variables"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "A formal document that presents the research objectives, design of achieving these objectives, and the expected outcom",
    //       answers: ["Research report", "Research hypothesis", "Research design", "Research proposal"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Survey is a                         Study",
    //       answers: ["Systematic", "Analytical", "Descriptive", "Fact finding"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Which research paradigm is most concerned about generalizing its findings?",
    //       answers: ["Quantitative research", "Qualitative research", "Mixed-methods research", "All of the above"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "A variable that is presumed to cause a change in another variable is called:",
    //       answers: ["An intervening variable", "A dependent variable", "An independent variable", "A numerical variable"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "The first purpose of a survey is to ……………..",
    //       answers: ["Description", "Evaluation", "Provide Information", "Pration"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Action research means",
    //       answers: ["Longitudinal research", "Applied research", "Research initiated to solve an immediate problem", "A research with socioeconomic objective"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "A positive correlation occurs when:",
    //       answers: ["Two variables remain constant", "Two variables move in the same direction", "One variable goes up and the other goes down", "Two variables move in opposite directions"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "The key defining characteristic of experimental research is that:",
    //       answers: ["The independent variable is manipulated", "Hypotheses are proved", "positive correlation exists", "Samples are large"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "What are the core elements of a Research Process?",
    //       answers: ["Introduction; Data Collection; Data Analysis; Conclusions and Recommendations", "Executive Summary; Literature Review; Data Gathered; Conclusions; Bibliography", "Research Plan; Research Data; Analysis; References", "Introduction; Literature Review; Research Methodology; Results; Discussions and Conclusions"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "In the process of conducting research ‘Formulation of Hypothesis” is followed by",
    //       answers: ["Statement of Objectives", "Analysis of Data", "Selection of Research Tools", "Collection of Data"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "What do we call data that are used for a new study but which were collected by an earlier researcher for a different set",
    //       answers: ["Secondary data", "Field notes", "Qualitative data", "Primary data"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Identifying causes of a problem and possible solution to a problem is",
    //       answers: ["Field Study", "Diagnosis tic study", "Action study", "Pilot study"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "A research paper is a brief report of research work based on",
    //       answers: ["Primary Data only", "Secondary Data only", "Both Primary and Secondary Data", "None of the above"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Second step in problem formulation is",
    //       answers: ["Understanding the nature of the problem", "Statement of the problem", "Survey", "Discussions"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "One advantage of using a questionnaire is that:",
    //       answers: ["Probe questions can be asked", "Respondents can be put at ease", "Interview bias can be avoided", "Response rates are always high"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Secondary data can include which of the following?",
    //       answers: ["Government statistics", "Personal diaries", "Organizational records", "All of the above"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Questionnaire is a :",
    //       answers: ["Research method", "Measurement technique", "Tool for data collection", "Data analysis technique"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "What does the term 'longitudinal design' mean?",
    //       answers: ["A study completed over a distinct period of time to map changes in social phenomena", "A study with two contrasting cases.", "A study which is very long to rea4:", "A study completed far away from where the researcher lives"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Which of the following is true regarding research objectives",
    //       answers: ["Research objectives, when achieved, will provide sufficient earnings to obtain areasonablereturn on investment", "Researchobjectives, when obtained, will ensure the viability of the marketing research department.", "Research objectives, when achieved, provide the information necessary to solve the problem", "Research objectives are seldom achieved but should be stated as goals to be sough"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Which of the following is not an essential element of report writing?",
    //       answers: ["Research Methodology", "Reference", "Conclusion", "None of these"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Wrong questionnaire is an example of …………..",
    //       answers: ["Developing the research plan", "Secondary collection problem", "Primary data collection problem", "a and b both"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Which of the following is not always true about focus groups?",
    //       answers: ["The ideal size is normally between 6 and 12 participants", "Moderators should introduce themselves to the group", "Participants should come from diverse backgrounds", "The moderator poses preplanned questions"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "A disadvantage of using secondary data is that:",
    //       answers: ["The data may have been collected with reference to research questions that are not those of the researcher", "The researcher may bring more detachment in viewing the data than original researchers could muster", "Data have often been collected by teams of experienced researchers", "Secondary data sets are often available and accessible"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "The        scale measurement has a natural zero.",
    //       answers: ["Ratio", "Nominal", "Ordinal", "Interval"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "SPSS is an acronym of the following?",
    //       answers: ["Predictions for Social Sciences.", "Preferences for the Sixties and Seventies.", "Statistical Package for the Social Sciences.", "Sexual Performance and SAD Syndrome"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Final stage in the Research Process is",
    //       answers: ["Problem formulation", "Data collection", "Report Writing", "Data Analysis"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "A comprehensive full Report of the research process is called",
    //       answers: ["Summary Report", "Abstract", "Article", "Thesis or Project"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "What is the purpose of doing research?",
    //       answers: ["To identify problem", "To find the solution", "Both a and b", "None of these"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Which of the following is a form of research typically conducted by managers and other professionals to address issues",
    //       answers: ["Action research", "Basic research", "Professional research", "Predictive research"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Plagiarism can be avoided by:",
    //       answers: ["Copying the work of others accurately", "Paraphrasing the author’s text in your own words", "Cut and pasting from the Internet", "Quoting directly without revealing the source"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "The first page of the research report is",
    //       answers: ["Bibliography", "Index", "Title Page", "Appendix"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Which of the following is not one of the seven major parts to the research report?",
    //       answers: ["Results", "Abstract", "Method", "Footnotes"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Which method can be applicable for collecting qualitative data?",
    //       answers: ["Artifacts (Visual)", "People", "Media products ( Textual, Visual and sensory)", "All of these"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "In group interview their are",
    //       answers: ["One interviewer and one interviewee", "More than one interviewer and one interviewee", "One interviewer and more than one interviewee", "More than One interviewer and more than one interviewee"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "In SPSS, what is the Data Viewer?",
    //       answers: ["A screen in which variables can be defined and labeled", "A dialog box that allows you to choose a statistical test", "A spreadsheet into which data can be entered", "A table summarizing the frequencies of data for one variable"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "An image, perception or concept that is capable of measurement is called                      .",
    //       answers: ["Scale", "Hypothesiss", "Type", "Variable"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Uniting various qualitative methods with quantitative methods can be called as……..",
    //       answers: ["Coalesce", "Triangulation", "Bipartite", "Impassive"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "The research that is especially carried out to test and validate the study hypotheses is termed",
    //       answers: ["Fundamental resaeach", "Applied research", "Conclusive research", "Exploratory research"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Ethical problems can arise when researching the Internet because:",
    //       answers: ["Everyone has access to digital media", "Respondents may fake their identities", "Researchers may fake their identities", "Internet research has to be covert"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "In order to pursue the research, which of the following is priorly required?",
    //       answers: ["Formulating a research question", "Applied research", "Deciding about the data analysis procedure", "Exploratory research"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Which of these is not a step in the problem identification process?",
    //       answers: ["Discussion with subject experts", "Review of existing literature", "Theoretical foundation and model building", "Management decision making"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "How to judge the depth of any research?",
    //       answers: ["By research title", "By research duration", "By total expenditure on research", "By research objectives"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Previously collected findings in facts and figures which have been authenticated and Observation is a direct method of c",
    //       answers: ["Primary data", "Secondary data", "Both", "Published data"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Attitude or opinion research is an example of",
    //       answers: ["A  Quantitative", "B  Qualitative", "C  Analytical", "D   Applied"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "The main objective of                     study’s to acquire knowledge",
    //       answers: ["The experimental group", "The participant group", "Descriptive", "Diagnostic"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Which type of central tendency measure is used in interval scale?",
    //       answers: ["A Mean", "B Median", "C Mode", "D Geometric Progression"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Concept is of two types",
    //       answers: ["Purpose", "Abstract and concrete", "Methodology", "Techniques"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "Why do you need to review the existing literature?",
    //       answers: ["To make sure you have a long list of references", "Because without it, you could never reach the required word-count", "A large snowball sample", "To find out what is already known about your area of interest"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "What do you mean by Unit of Analysis?",
    //       answers: ["A Main parameter", "B Variables", "C Mode", "D Geometric Progression"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Which of the following is not a data-collection method?",
    //       answers: ["Research questions", "Unstructured interviewing", "Postal survey questionnaires", "Participant observation"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Evaluation Research is concerned with",
    //       answers: ["How well are we doing?", "Why are we doing?", "What are we doing?", "None of the above"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Validity in interviews is strengthened by the following EXCEPT:",
    //       answers: ["Building rapport with interviewees", "Multiple questions cover the same theme", "Constructing interview schedules that contain themes drawn from the literature", "Prompting respondents to expand on initial responses"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "The existing company information is an example of which data??",
    //       answers: ["data", "just for study", "None of them", "Secondary"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Random sampling is also called                             .",
    //       answers: ["Prospect sampling", "Probability sampling", "casual analysis", "inferential analysis"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "What is inferential statistics otherwise called?",
    //       answers: ["Testing statistics", "Descriptive statistics", "Stratified statistics", "Sampling statistics"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Which of the following is incorrect when naming a variable in SPSS?",
    //       answers: ["Must begin with a letter and not a number", "Must end in a full stop", "Cannot exceed 64 characters", "Cannot include symbols such as ?, & and %"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "Student ranking from high to low is an example of which scale?",
    //       answers: ["Nominal Scale", "Ordinal Scale", "Interval Scale", "Ratio Sacle"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "The basic purpose of the research and the specific objectives agreed upon in the research proposal should be included in",
    //       answers: ["introduction", "Title", "Is an essential feature of physical and natural sciences", "Casual analysis is more important than correlational analysis"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Research can be conducted by a person who",
    //       answers: ["is a hard worker", "possesses thinking and reasoning ability", "holds a postgraduate degree", "has studied research methodologys"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Which part of a research report contains details of how the research was planned and conducted?",
    //       answers: ["Results", "Design", "Introduction", "Background"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Research can be classified as:",
    //       answers: ["Basic, Applied and Action Research", "Philosophical, Historical, Survey and Experimental Research", "Quantitative and Qualitative Research", "All the above"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Bibliography given in a research report",
    //       answers: ["has no relevance to research", "public records", "websites", "helps those interested in further research"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Generalized conclusion on the basis of a sample is technically known",
    //       answers: ["Statistical inference", "Parameter inference", "Data analysis and interpretation", "All of the above"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Fundamental research reflects the ability to:",
    //       answers: ["Study the existing literature regarding various topics", "Evaluate the existing material concerning research", "Expound new principles", "Synthesize new ideals"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "The main characteristic of scientific research is",
    //       answers: ["empirical", "theoretical", "experimentaln", "all of the above"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Authenticity of a research finding is its",
    //       answers: ["Originality", "Validity", "Objectivity", "All of the above"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "Research problem is selected from the stand point of",
    //       answers: ["Social relevance", "Availability of relevant literature", "Financial support", "Researcher’s interest"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "The good quality of a research is its--------",
    //       answers: ["Objectivity", "Replicability", "Reliability", "Usability"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "-               thinking enables us to write statements and develop arguments in a step-by-step coherent manner.",
    //       answers: ["Logical", "Accurate", "Scientific", "Clear"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "The research is always",
    //       answers: ["verifying the old knowledge", "exploring new knowledge", "filling the gap between knowledge", "all of these"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Which of the following is classified in the category of the developmental research?",
    //       answers: ["Philosophical research", "Action research", "Descriptive research", "All the above"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Which of the following is a measure of consistency?",
    //       answers: ["Validity", "Objectivity", "Reliability", "Credibility"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "What is the purpose of research design?",
    //       answers: ["To develop a hypothesis", "To select a sample", "To determine the methods for data collection and analysis", "All of the above"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "What is the difference between a quantitative and qualitative research design?",
    //       answers: ["The type of data collected", "The methods used for data collection", "The methods used for data analysis", "All of the above"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "What do we call the population value?",
    //       answers: ["statistic", "parameter", "data", "variable"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "What do we call sample value?",
    //       answers: ["variable", "parameter", "data", "statistic"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "With the increase in sample size, the error also",
    //       answers: ["decreases", "increases", "remains the same", "all of the above"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "The step-by-step process by which the research project is conducted and completed is known as           --.",
    //       answers: ["The research process.", "The process of describing research.", "The process of developing research ideas.", "The process of gathering data for a research project."],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "A common test in research demands much priority on",
    //       answers: ["Reliability", "Useability", "Objectivity", "All of the above"],
    //       correctAnswer: 3
    //     },
       
    //     {
    //       question: "What is the collection of terms or records in MARC called?",
    //       answers: ["System", "Network", "Website", "Database"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Information is…..",
    //       answers: ["Raw Data", "Processed Data", "Input data", "Organized data"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Conference proceedings are considered as                    documents.",
    //       answers: ["Conventional", "Primary", "Secondary", "Tertiary"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "The research that applies the laws at the time of field study to draw more and more clear ideas about the problem is",
    //       answers: ["Experimental research", "just research", "Applied research", "None of these"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "What is the first step in the research process?",
    //       answers: ["Data analysis", "Hypothesis testing", "Literature review", "Research design"],
    //       correctAnswer: 2
    //     },
    //     {
    //       question: "A research problem is feasible only when",
    //       answers: ["it has utility and relevance", "it is researchable", "it is new and adds something to knowledge", "all the above"],
    //       correctAnswer: 3
    //     },
    //     {
    //       question: "Pure research is better than applied research.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "The term middle management refers to a set of managers who are not in a hierarchy.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "If a study is reliable, it means that it measures what we think it should measure.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "Validity means that if we repeated the study we would get the same results.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "Mode I knowledge creation is research of an applied nature, governed by the world of practice and highlighting the imp",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "Research is something that people undertake in order to find out things in a systematic way, thereby increasing their kno",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Research is a multi-stage process and will involve both reflecting on and revising stages already undertaken and forward",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "The term 'research methodology'  refers to the theory of how research should be undertaken.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Management research not only needs to provide findings that advance knowledge and understanding, it also needs to ad",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "You will probably revisit each stage of the research process more than once.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 0
    //     },
        
    //     {
    //       question: "Pure research is usually done for long term benefits.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 0
    //     },
    //     {
    //       question: "Research is just collecting facts or information with no clear purpose.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "Management research can ignore theory and concentrate practical issues.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "Your own beliefs and feelings will never impact upon your research.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 1
    //     },
    //     {
    //       question: "Marketing is the same as sales.",
    //       answers: ["T", "F", "noooooo", "noooooo"],
    //       correctAnswer: 1
    //     }
    //   ];
      
              
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
];
    
       
    
       
     
        
            let shuffledQuestions = []; // Store the shuffled questions
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
                const correctAnswerFrequency = [0, 0, 0, 0]; // Initialize frequency array for 4 answer options
        
                questions.forEach((questionData) => {
                    const correctAnswerIndex = questionData.correctAnswer;
                    correctAnswerFrequency[correctAnswerIndex]++; // Increment the count for the correct answer
                });
        
                // Display the analysis of correct answers
                resultDiv.innerHTML += `<div class="alert alert-secondary mt-3">Correct Answer Analysis:<br>
                    Answer 1: ${correctAnswerFrequency[0]} times<br>
                    Answer 2: ${correctAnswerFrequency[1]} times<br>
                    Answer 3: ${correctAnswerFrequency[2]} times<br>
                    Answer 4: ${correctAnswerFrequency[3]} times</div>`;
            }
        
            // Function to highlight matching text
            function highlightText(text, searchTerm) {
                if (!searchTerm) return text; // If no search term, return the original text
        
                const regex = new RegExp(`(${searchTerm})`, 'gi'); // Case-insensitive global search
                return text.replace(regex, '<span class="highlight">$1</span>'); // Wrap matches in a span with the highlight class
            }
        
            // Function to filter and display questions based on search term
            function displayQuestions(questions, searchTerm = '') {
                quizContainer.innerHTML = ''; // Clear previous questions
        
                // Check for duplicate questions
                const duplicateQuestion = hasDuplicateQuestions(questions);
                if (duplicateQuestion) {
                    alert(`Duplicate question detected: "${duplicateQuestion}". Please try generating the quiz again.`);
                    return; // Stop further execution
                }
                let newindex=0;
                // Display all questions
                questions.forEach((questionData, index) => {
                    const questionContainsTerm = questionData.question.toLowerCase().includes(searchTerm.toLowerCase());
                    const answersContainTerm = questionData.answers.some((answer) =>
                        answer.toLowerCase().includes(searchTerm.toLowerCase())
                    );
        
                    // Only display questions that match the search term
                    if (questionContainsTerm || answersContainTerm) {
                        const questionDiv = document.createElement('div');
                        questionDiv.classList.add('question-page', 'active'); // Show all questions
                        questionDiv.innerHTML = `
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">Question ${newindex + 1}</h5>
                                    <p class="card-text">${highlightText(questionData.question, searchTerm)}</p>
                                    <div class="answers-container">
                                        ${questionData.answers.map((answer, i) => `
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="question${index}" value="${i}">
                                                <label class="form-check-label">${highlightText(answer, searchTerm)}</label>
                                            </div>
                                        `).join('')}
                                    </div>
                                    <div class="feedback mt-2" id="feedback${newindex}" name="${index}" ></div>
                                </div>
                            </div>
                        `;
                        quizContainer.appendChild(questionDiv);
                        newindex++;
                    }
                });
            }
        
            // Function to generate the initial quiz
            function generateQuiz(numQuestions) {
                shuffledQuestions = shuffleArray([...quizData]).slice(0, numQuestions); // Shuffle and select questions
                displayQuestions(shuffledQuestions); // Display the selected questions
                isReviewMode = false; // Reset review mode
                reviewBtn.textContent = 'Review All Questions'; // Reset button text
            }
        
            // Function to review all questions in the array
            function reviewAllQuestions() {
                // if (isReviewMode) {
                //     // If already in review mode, go back to the initial quiz
                //     generateQuiz(shuffledQuestions.length);
                // } else {
                    // If not in review mode, show all questions in the array
                    displayQuestions(quizData,searchBox.value);
                    reviewBtn.textContent = 'Show Initial Quiz'; // Change button text
                    isReviewMode = true; // Set review mode
                // }
            }
        
            // Event listener for search box
            // searchBox.addEventListener('input', function () {
            //     const searchTerm = searchBox.value.trim(); // Get the search term
            //     const questionsToDisplay = isReviewMode ? quizData : shuffledQuestions; // Use the appropriate question set
            //     displayQuestions(questionsToDisplay, searchTerm); // Display filtered and highlighted questions
            // });
        
            // Event listener for review button
            reviewBtn.addEventListener('click', reviewAllQuestions);
        
            // Generate quiz button event listener
            generateQuizBtn.addEventListener('click', function () {
                const numQuestions = parseInt(questionCountInput.value);
                if (numQuestions > 0 && numQuestions <= quizData.length) {
                    generateQuiz(numQuestions);
                } else {
                    alert(`Please enter a number between 1 and ${quizData.length}.`);
                }
            });
        
            // Submit quiz button event listener
            submitQuizBtn.addEventListener('click', function () {
                let score = 0;
                const questionsToCheck = isReviewMode ? quizData : shuffledQuestions; // Check answers based on current mode
                
                questionsToCheck.forEach((questionData, index) => {

                    const feedbackDiv = document.getElementById(`feedback${index}`);
                    //const x = 

                    const nameValue = feedbackDiv.getAttribute('name');

                   
                    const selectedAnswer = document.querySelector(`input[name="question${nameValue}"]:checked`);
        
                    if (selectedAnswer) {
                        const userAnswer = parseInt(selectedAnswer.value);
                        if (userAnswer === questionsToCheck[nameValue].correctAnswer) {
                            feedbackDiv.innerHTML = `<div class="alert alert-success">Correct! Well done.</div>`;
                            score++;
                        } else {
                            feedbackDiv.innerHTML = `<div class="alert alert-danger">Incorrect. The correct answer is: ${questionsToCheck[nameValue].answers[questionsToCheck[nameValue].correctAnswer]}</div>`;
                        }
                    } else {
                        feedbackDiv.innerHTML = `<div class="alert alert-warning">You did not select an answer. The correct answer is: ${questionsToCheck[nameValue].answers[questionsToCheck[nameValue].correctAnswer]}</div>`;
                    }
                });
        
                // Display the total score
                resultDiv.innerHTML = `<div class="alert alert-info">You scored ${score} out of ${questionsToCheck.length}!</div>`;
        
                // Analyze correct answers and display the results
                analyzeCorrectAnswers(questionsToCheck);
            });
        });
