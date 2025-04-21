
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d1e1c41c5dba46d593e0ff539a6e71ba',
  appName: 'elec-mate-guide-app',
  webDir: 'dist',
  server: {
    url: 'https://d1e1c41c-5dba-46d5-93e0-ff539a6e71ba.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    scheme: 'ElecMateGuide'
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined
    }
  }
};

export default config;
