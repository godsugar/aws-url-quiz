import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Quiz from '../components/Quiz';
import { quizQuestions, QuizQuestion } from '../data/quizData';
import { GITHUB_URL } from '../utils/config';

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

      <main style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        paddingTop: '1rem'
      }}>
        <div style={{ marginBottom: '1rem', flexShrink: 0 }}>
          <h1 style={{ 
            fontSize: '1.5rem', 
            color: '#ffffff', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            marginBottom: '0.5rem',
            letterSpacing: '1px'
          }}>
            🏆 AWS URLクイズ 🏆
          </h1>
          <p style={{ 
            fontSize: '0.8rem', 
            color: 'rgba(255, 255, 255, 0.9)', 
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.2',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
          }}>
            AWSの各種サービスのURLパターンに関する知識を試すクイズです
          </p>
        </div>
        <Quiz questions={questions} />
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} AWS URLクイズ | 
          <a 
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
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
