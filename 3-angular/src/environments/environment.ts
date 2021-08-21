// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'https://axizdke9fj.execute-api.eu-west-1.amazonaws.com',
  cognito: {
    identityPoolId: 'eu-west-1:6f418526-d8ad-4597-a76a-01984549e644',
    region: 'eu-west-1',
    poolData: {
      /* eslint-disable */
      UserPoolId: 'eu-west-1_FPJtRIwcZ',
      ClientId: '30ebi356l0n4pdu4crpgj09ts5',
      /* eslint-enable */
    },
    mandatorySignIn: true,
    cookieStorage: {
      domain: '',
      path: '/',
      expires: 30,
      secure: true,
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
