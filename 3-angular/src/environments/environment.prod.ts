export const environment = {
  production: true,
  apiBaseUrl: 'https://vh2y394btb.execute-api.eu-west-1.amazonaws.com',
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
