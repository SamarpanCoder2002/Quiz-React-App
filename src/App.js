import "./App.css";

const questionAnswerSet = [
  {
    question: "What is the capital of the United States?",
    answerOptions: ["Washington", "New York", "Los Angeles", "Chicago"],
    correctAnswer: "Washington",
  },
  {
    question: "What is the capital of Canada?",
    answerOptions: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: "Ottawa",
  },
  {
    question: "What is the capital of France?",
    answerOptions: ["Paris", "Lyon", "Marseille", "Toulouse"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    answerOptions: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    correctAnswer: "Berlin",
  },
  {
    question: "What is the capital of Italy?",
    answerOptions: ["Rome", "Milan", "Naples", "Turin"],
    correctAnswer: "Rome",
  },
  {
    question: "What is the capital of Spain?",
    answerOptions: ["Madrid", "Barcelona", "Valencia", "Seville"],
    correctAnswer: "Madrid",
  },
  {
    question: "What is the capital of Japan?",
    answerOptions: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    correctAnswer: "Tokyo",
  },
  {
    question: "What is the capital of China?",
    answerOptions: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
    correctAnswer: "Beijing",
  },
  {
    question: "What is the capital of Australia?",
    answerOptions: ["Sydney", "Melbourne", "Perth", "Canberra"],
    correctAnswer: "Canberra",
  },
  {
    question: "What is the capital of Brazil?",
    answerOptions: ["Rio de Janeiro", "Sao Paulo", "Salvador", "Brasilia"],
    correctAnswer: "Brasilia",
  },
];

function MainArea() {
  return (
    <div className="main-area">
      {questionAnswerSet.map((element) => {
        return (
          <div className="card-container" key={questionAnswerSet.indexOf(element)}>
            <div className="front-view">
              <p>
                <b>{element.question}</b>
              </p>
              <ul>
                {element.answerOptions.map((option) => {
                  return <li key={element.answerOptions.indexOf(option)}>{option}</li>;
                })}
              </ul>
            </div>
            <div className="back-view">
           {element.correctAnswer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StartWork() {
  return (
    <div className="container">
      <h1>General Knowledge</h1>
      <MainArea />
    </div>
  );
}

export default StartWork;
