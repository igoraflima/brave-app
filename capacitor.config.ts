import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'brave.app.id',
  appName: 'Brave App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
