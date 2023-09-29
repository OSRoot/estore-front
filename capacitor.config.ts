import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.osroot.estore',
  appName: 'Estore',
  webDir: 'www',
   // backgroundColor: "#154875",
   loggingBehavior:'production',
   // bundledWebRuntime:false,
   server: {
     cleartext:true,
     androidScheme: 'https'
   },
   "plugins": {
     "SplashScreen": {
       "launchAutoHide": false,
       "showSpinner": false
     }
   }
};

export default config;
