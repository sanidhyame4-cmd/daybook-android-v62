import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quietunfinished.daybook',
  appName: 'Daybook',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false,
    backgroundColor: '#050506',
  },
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_daybook',
      iconColor: '#FFFFFF',
    },
  },
};

export default config;
