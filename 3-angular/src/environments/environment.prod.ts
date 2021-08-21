export const environment = {
  production: true,
  apiBase: 'https://axizdke9fj.execute-api.eu-west-1.amazonaws.com',
  cognito: {
    identityPoolId: 'eu-west-1:5cd563bc-a12b-42ff-bbdb-42c0e6bf35b1',
    region: 'eu-west-1',
    poolData: {
      /* eslint-disable */
      UserPoolId: 'eu-west-1_R9FHf3Ugm',
      ClientId: '4q9j9520sf4sqmibfl28c2lic6',
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
