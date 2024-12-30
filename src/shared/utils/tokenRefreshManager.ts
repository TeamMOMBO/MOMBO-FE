import { refreshAccessToken } from '../apis/auth';

export class TokenRefreshManager {
  private static isRefreshing = false;
  // 토큰 갱신을 기다리는 요청들의 콜백 함수를 저장하는 배열
  private static subscribers: ((token: string) => void)[] = [];

  static async refreshToken(refreshToken: string) {
    if (this.isRefreshing) {
      // 새로운 Promise를 생성하고 subscribers에 추가
      return new Promise<string>((resolve) => {
        this.subscribers.push(resolve);
      });
    }

    this.isRefreshing = true;

    try {
      const newAccessToken = await refreshAccessToken(refreshToken);
      // 대기 중인 (서버/ 클라이언트) 요청들에게 모두 새 토큰 전달
      this.subscribers.forEach((callback) => callback(newAccessToken));
      this.subscribers = [];
      return newAccessToken;
    } finally {
      this.isRefreshing = false;
    }
  }
}
