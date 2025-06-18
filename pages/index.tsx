import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Quiz from '../components/Quiz';
import { quizQuestions, QuizQuestion } from '../data/quizData';
import { GITHUB_URL } from '../utils/config';

interface HomeProps {
  questions: QuizQuestion[];
}

const Home: NextPage<HomeProps> = ({ questions }) => {
  // Android Chrome対応: ビューポート高さを動的設定
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return (
    <div className="container">
      <Head>
        <title>AWS URLクイズ</title>
        <meta name="description" content="AWSの各種サービスのURLに関する知識を試すクイズです" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
        <meta name="theme-color" content="#232F3E" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
        <div style={{ marginBottom: '0.5rem', marginTop: '0.5rem', flexShrink: 0 }}>
          <h1 style={{ 
            fontSize: 'clamp(1rem, 3.5vw, 1.4rem)', 
            color: '#ffffff', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            marginBottom: '0.3rem',
            marginTop: '0.5rem',
            letterSpacing: '1px',
            lineHeight: '1.1',
            padding: '0.3rem 0'
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
