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

      <main>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h1 style={{ 
            fontSize: '2.2rem', 
            color: '#ffd700', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            marginBottom: '0.5rem',
            letterSpacing: '2px'
          }}>
            🏆 AWS ドメインパターンクイズ 🏆
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: 'rgba(255, 255, 255, 0.9)', 
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.4'
          }}>
            AWSの各種サービスのドメインパターンに関する知識を試す<br />
            <strong style={{ color: '#ffd700' }}>ミリオネア風クイズゲーム</strong>です。
          </p>
        </div>
        <Quiz questions={questions} />
      </main>

      <footer style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>
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
