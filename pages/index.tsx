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
        <title>AWS URLクイズ</title>
        <meta name="description" content="AWSの各種サービスのURLに関する知識を試すクイズです" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#232F3E" />
      </Head>

      <main style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        paddingTop: 'max(0.5rem, env(safe-area-inset-top))'
      }}>
        <div style={{ marginBottom: '0.5rem', flexShrink: 0 }}>
          <h1 style={{ 
            fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
            color: '#ffffff', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            marginBottom: '0.3rem',
            marginTop: '0.3rem',
            letterSpacing: '1px',
            lineHeight: '1.2'
          }}>
            🏆 AWS URLクイズ 🏆
          </h1>
          <p className="description" style={{ 
            fontSize: '0.8rem', 
            color: 'rgba(255, 255, 255, 0.9)', 
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.2',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
          }}>
            AWSの各種サービスのURLに関する知識を試すクイズです
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
  // 全問題をそのまま渡す（クライアントサイドで10問選択）
  
  return {
    props: {
      questions: quizQuestions, // 全問題を渡す
    },
  };
};

export default Home;
