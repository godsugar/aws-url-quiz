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
  const [showModal, setShowModal] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (optionIndex: number) => {
    if (selectedOption !== null) return; // 既に回答済みの場合は何もしない
    
    setSelectedOption(optionIndex);
    setShowResult(true);
    
    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    
    // 結果表示後、自動的にモーダルを開く
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowResult(false);
      setShowModal(false);
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
    setShowModal(false);
  };

  // オプションのラベル（A, B, C, D）
  const optionLabels = ['A', 'B', 'C', 'D'];

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    
    // X（Twitter）共有用のテキスト
    const shareText = `AWS URLクイズに挑戦しました！\n結果: ${score}/${questions.length}問正解 (${percentage}%)\n\n${
      score === questions.length 
        ? '🎉 満点達成！AWS URLパターンの達人です！' 
        : score >= questions.length * 0.8 
        ? '✨ 素晴らしい成績です！' 
        : score >= questions.length * 0.6 
        ? '👍 良い成績です！' 
        : '📚 もう少し学習が必要ですね。'
    }\n\n#AWS #クイズ #学習`;
    
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    
    return (
      <div className="quiz-container">
        <h2 className="title">🏆 クイズ終了！ 🏆</h2>
        <div className="summary">
          <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>あなたのスコア: {score} / {questions.length}</p>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>正答率: {percentage}%</p>
          {score === questions.length ? (
            <p className="perfect-score">🎉 満点おめでとうございます！ 🎉<br />AWSドメインパターンの達人です！</p>
          ) : score >= questions.length * 0.8 ? (
            <p className="good-score">✨ 素晴らしい成績です！<br />AWSのURLパターンについてよく理解しています！</p>
          ) : score >= questions.length * 0.6 ? (
            <p className="average-score">👍 良い成績です！<br />もう少しAWSのURLパターンについて学びましょう！</p>
          ) : (
            <p className="low-score">📚 AWSのURLパターンについて<br />もう少し学習しましょう。</p>
          )}
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button 
              className="share-button"
              onClick={() => window.open(shareUrl, '_blank', 'width=550,height=420')}
            >
              🐦 結果をXで共有
            </button>
            <button className="restart-button" onClick={restartQuiz}>
              もう一度挑戦する
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="quiz-container">
        <div className="question">
          <div style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#4a90e2' }}>
            問題 {currentQuestionIndex + 1} / {questions.length}
          </div>
          {currentQuestion.question}
        </div>
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
              <span className="option-label">
                {optionLabels[index]}:
              </span>
              <span className="option-text">
                {option}
              </span>
            </button>
          ))}
        </div>
        
        {/* 結果表示エリア - 固定の高さを確保 */}
        <div className="result-area">
          {showResult && (
            <div
              className={`result ${
                selectedOption === currentQuestion.correctAnswer ? 'correct' : 'incorrect'
              }`}
            >
              {selectedOption === currentQuestion.correctAnswer
                ? '🎉 正解！'
                : `❌ 不正解！正解は「${optionLabels[currentQuestion.correctAnswer]}: ${
                    currentQuestion.options[currentQuestion.correctAnswer]
                  }」です。`}
            </div>
          )}
        </div>

        <div className="controls">
          <button
            className="next-button"
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
          >
            {currentQuestionIndex < questions.length - 1 ? '次の問題へ' : '結果を見る'}
          </button>
        </div>
      </div>

      {/* モーダル */}
      {showModal && currentQuestion.explanation && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">💡 解説</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>{currentQuestion.explanation}</p>
              {currentQuestion.links && currentQuestion.links.length > 0 && (
                <div className="modal-links">
                  <h4>🔗 関連リンク</h4>
                  {currentQuestion.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
