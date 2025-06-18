import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Quiz from '../components/Quiz';
import { quizQuestions, QuizQuestion } from '../data/quizData';

interface HomeProps {
  questions: QuizQuestion[];
}

const Home: NextPage<HomeProps> = ({ questions }) => {
  return (
    <div className="container">
      <Head>
        <title>AWS ドメインパターンクイズ - ミリオネア風</title>
        <meta name="description" content="AWSの各種サービスのドメインパターン、URLの形式、独自ドメイン設定に関する知識を試すクイズミリオネア風ゲーム" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '0.5rem', flexShrink: 0 }}>
          <h1 style={{ 
            fontSize: '1.8rem', 
            color: '#ffd700', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            marginBottom: '0.3rem',
            letterSpacing: '1px'
          }}>
            🏆 AWS ドメインパターンクイズ 🏆
          </h1>
          <p style={{ 
            fontSize: '0.9rem', 
            color: 'rgba(255, 255, 255, 0.9)', 
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.3'
          }}>
            AWSのドメインパターンに関する知識を試す<strong style={{ color: '#ffd700' }}>ミリオネア風クイズ</strong>
          </p>
        </div>
        <Quiz questions={questions} />
      </main>

      <footer style={{ 
        position: 'absolute', 
        bottom: '5px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        flexShrink: 0
      }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.7rem' }}>
          © {new Date().getFullYear()} AWS ドメインパターンクイズ
        </p>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // SSGでビルド時にクイズデータを取得
  // 全問題からランダムに10問を選択
  const shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
  const selectedQuestions = shuffledQuestions.slice(0, 10);
  
  return {
    props: {
      questions: selectedQuestions,
    },
  };
};

export default Home;
