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
        <title>AWS ドメインパターンクイズ</title>
        <meta name="description" content="AWSの各種サービスのドメインパターン、URLの形式、独自ドメイン設定に関する知識を試すクイズゲーム" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">AWS ドメインパターンクイズ</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          AWSの各種サービスのドメインパターン、URLの形式、独自ドメイン設定に関する知識を試すクイズゲームです。
          コンソールURL、サービス紹介ページ、デフォルトドメイン、カスタムドメイン設定など、
          あなたはAWSのドメインについてどれだけ知っていますか？
        </p>
        <Quiz questions={questions} />
      </main>

      <footer>
        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
          © {new Date().getFullYear()} AWS ドメインパターンクイズ - 学習目的で作成されたアプリケーションです
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
