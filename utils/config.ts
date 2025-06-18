// アプリケーションのURL設定
export const getAppUrl = (): string => {
  // 環境変数から取得
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  
  // 開発環境の場合
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  
  // フォールバック（本番環境でも環境変数が設定されていない場合）
  return 'https://godsugar.github.io/quiz-game-nextjs';
};

// GitHubリポジトリのURL設定
export const getGitHubUrl = (): string => {
  // 環境変数から取得
  if (process.env.NEXT_PUBLIC_GITHUB_URL) {
    return process.env.NEXT_PUBLIC_GITHUB_URL;
  }
  
  // フォールバック
  return 'https://github.com/godsugar/quiz-game-nextjs';
};

export const APP_URL = getAppUrl();
export const GITHUB_URL = getGitHubUrl();
