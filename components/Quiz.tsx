import { useState } from 'react';
import { QuizQuestion } from '../data/quizData';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    if (selectedOption !== null) return; // 既に回答済みの場合は何もしない
    
    setSelectedOption(optionIndex);
    setShowResult(true);
    
    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <h2 className="title">クイズ終了！</h2>
        <div className="summary">
          <p>あなたのスコア: {score} / {questions.length}</p>
          <p>正答率: {Math.round((score / questions.length) * 100)}%</p>
          {score === questions.length ? (
            <p className="perfect-score">満点おめでとうございます！AWSドメインの達人です！</p>
          ) : score >= questions.length * 0.8 ? (
            <p className="good-score">素晴らしい成績です！AWSドメインについてよく理解しています！</p>
          ) : score >= questions.length * 0.6 ? (
            <p className="average-score">良い成績です。もう少し練習しましょう！</p>
          ) : (
            <p className="low-score">AWSドメインについてもう少し学習しましょう。</p>
          )}
          <button className="restart-button" onClick={restartQuiz}>
            もう一度挑戦する
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2 className="title">AWSドメインクイズ</h2>
      <p className="question">
        問題 {currentQuestionIndex + 1}/{questions.length}: {currentQuestion.question}
      </p>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedOption === index
                ? index === currentQuestion.correctAnswer
                  ? 'correct'
                  : 'incorrect'
                : ''
            }`}
            onClick={() => handleOptionClick(index)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && (
        <div
          className={`result ${
            selectedOption === currentQuestion.correctAnswer ? 'correct' : 'incorrect'
          }`}
        >
          {selectedOption === currentQuestion.correctAnswer
            ? '正解！'
            : `不正解！正解は「${
                currentQuestion.options[currentQuestion.correctAnswer]
              }」です。`}
          {currentQuestion.explanation && (
            <p className="explanation">{currentQuestion.explanation}</p>
          )}
        </div>
      )}
      <div className="controls">
        <div className="score">スコア: {score}</div>
        <button
          className="next-button"
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
        >
          {currentQuestionIndex < questions.length - 1 ? '次の問題' : '結果を見る'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
