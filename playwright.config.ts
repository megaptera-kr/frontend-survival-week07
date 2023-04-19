// eslint-disable-next-line import/no-extraneous-dependencies
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src/e2e',
  retries: 0,
  use: {
    channel: 'chrome',
    baseURL: 'http://localhost:8080', // 도메인 URL 설정
    headless: !!process.env.CI, // CI 환경에선 headless로 동작
    screenshot: 'only-on-failure', // 테스트 실패할 때 스크린샷을 찍어 남김
  },
};

export default config;
