import { useState, useEffect, useCallback } from 'react';
import { QuizQuestion } from '../data/quizData';
import { APP_URL } from '../utils/config';

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [shuffleKey, setShuffleKey] = useState(0); // シャッフルを強制するためのキー

  // 配列をシャッフルする関数（より強力なランダム化）
  const shuffleArray = useCallback((array: QuizQuestion[]) => {
    const shuffled = [...array];
    
    // より多くのシャッフル回数で確実にランダム化
    for (let round = 0; round < 5; round++) {
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
    }
    
    return shuffled;
  }, [shuffleKey]); // shuffleKeyが変更されるたびに新しい関数を作成

  // 初回マウント時と再開時に問題をシャッフル
  useEffect(() => {
    console.log('Shuffling questions, shuffleKey:', shuffleKey); // デバッグ用
    const shuffled = shuffleArray(questions).slice(0, 10); // 10問をランダム選択
    console.log('Selected questions:', shuffled.map(q => q.id)); // デバッグ用
    setShuffledQuestions(shuffled);
  }, [questions, shuffleKey, shuffleArray]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

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
    }, 300);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowResult(false);
      setShowModal(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    console.log('Restarting quiz...'); // デバッグ用
    
    // 状態をリセット
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setQuizCompleted(false);
    setShowModal(false);
    
    // 少し遅延を入れてからシャッフルキーを更新（確実に再レンダリングを発生させる）
    setTimeout(() => {
      setShuffleKey(prev => {
        const newKey = prev + 1;
        console.log('Updated shuffleKey:', newKey); // デバッグ用
        return newKey;
      });
    }, 10);
  };

  // URLを自動的にリンクに変換する関数
  const linkifyText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        // 仮置きの値を含むURLはリンクにしない
        if (part.includes('[') || part.includes('example') || part.includes('your-') || part.includes('my-')) {
          return <span key={index}>{part}</span>;
        }
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // オプションのラベル（A, B, C, D）
  const optionLabels = ['A', 'B', 'C', 'D'];

  if (quizCompleted) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    
    // X（Twitter）共有用のテキスト
    const shareText = `AWS URLクイズに挑戦しました！\n結果: ${score}/${shuffledQuestions.length}問正解 (${percentage}%)\n\n${
      score === shuffledQuestions.length 
        ? '🎉 満点達成！AWS URLパターンの達人です！' 
        : score >= shuffledQuestions.length * 0.8 
        ? '✨ 素晴らしい成績です！' 
        : score >= shuffledQuestions.length * 0.6 
        ? '👍 良い成績です！' 
        : '📚 もう少し学習が必要ですね。'
    }\n\nあなたも挑戦してみませんか？\n${APP_URL}\n\n#AWS #クイズ #学習`;
    
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    
    return (
      <div className="quiz-container">
        <h2 className="title">🏆 クイズ終了！ 🏆</h2>
        <div className="summary">
          <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>あなたのスコア: {score} / {shuffledQuestions.length}</p>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>正答率: {percentage}%</p>
          {score === shuffledQuestions.length ? (
            <p className="perfect-score">🎉 満点おめでとうございます！ 🎉<br />AWS URLパターンの達人です！</p>
          ) : score >= shuffledQuestions.length * 0.8 ? (
            <p className="good-score">✨ 素晴らしい成績です！<br />AWSのURLパターンについてよく理解しています！</p>
          ) : score >= shuffledQuestions.length * 0.6 ? (
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

  // 問題がまだシャッフルされていない場合のローディング表示
  if (shuffledQuestions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="question">
          <div style={{ fontSize: '1.2rem', color: '#4a90e2' }}>
            問題を準備中...
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
            問題 {currentQuestionIndex + 1} / {shuffledQuestions.length}
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
        
        <div className="controls">
          <button
            className="next-button"
            onClick={() => setShowModal(true)}
            disabled={selectedOption === null}
            style={{ opacity: selectedOption === null ? 0.5 : 1 }}
          >
            解説を見る
          </button>
        </div>
      </div>

      {/* 統合モーダル */}
      {showModal && selectedOption !== null && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content result-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className={`result-status ${selectedOption === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}`}>
                {selectedOption === currentQuestion.correctAnswer ? (
                  <span>🎉 正解！</span>
                ) : (
                  <span>❌ 不正解</span>
                )}
              </div>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>
            
            {selectedOption !== currentQuestion.correctAnswer && (
              <div className="correct-answer">
                <strong>正解:</strong> {optionLabels[currentQuestion.correctAnswer]}: {currentQuestion.options[currentQuestion.correctAnswer]}
              </div>
            )}
            
            {currentQuestion.explanation && (
              <div className="modal-body">
                <h4>💡 解説</h4>
                <p>{linkifyText(currentQuestion.explanation)}</p>
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
            )}
            
            <div className="modal-footer">
              <button
                className="next-question-button"
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex < shuffledQuestions.length - 1 ? '次の問題へ' : '結果を見る'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
