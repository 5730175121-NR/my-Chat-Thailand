// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBbFsz5vUGJhdfu1dTzpD5tK7_9S3VWKKk',
    authDomain: 'red-chat-alpha.firebaseapp.com',
    databaseURL: 'https://red-chat-alpha.firebaseio.com',
    projectId: 'red-chat-alpha',
    storageBucket: 'red-chat-alpha.appspot.com',
    messagingSenderId: '1074792345823'
  }
};
