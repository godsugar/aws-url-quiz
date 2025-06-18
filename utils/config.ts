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
  
  // 本番環境では環境変数が必須
  return '';
};

// GitHubリポジトリのURL設定
export const getGitHubUrl = (): string => {
  // 環境変数から取得
  if (process.env.NEXT_PUBLIC_GITHUB_URL) {
    return process.env.NEXT_PUBLIC_GITHUB_URL;
  }
  
  // 本番環境では環境変数が必須
  return '';
};

export const APP_URL = getAppUrl();
export const GITHUB_URL = getGitHubUrl();
