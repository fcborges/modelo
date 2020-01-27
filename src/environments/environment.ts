// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCf30XPGDWNUShuCHLqZbTGTis79Hu2kP4",
    authDomain: "app-survive.firebaseapp.com",
    databaseURL: "https://app-survive.firebaseio.com",
    projectId: "app-survive",
    storageBucket: "app-survive.appspot.com",
    messagingSenderId: "223424272392"
  }
};

