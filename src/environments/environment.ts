export const environment = {
  production: true,
  apiBase: "https://<api-host>",
  auth: {
    region: "us-east-1",
    userPoolId: "<POOL_ID>",
    userPoolWebClientId: "<CLIENT_ID>",
    oauth: {
      domain: "<DOMAIN>.auth.us-east-1.amazoncognito.com",
      scope: ["openid","email","portfolio/read","portfolio/write","portfolio/admin"],
      redirectSignIn: "http://localhost:4200/callback",
      redirectSignOut: "http://localhost:4200",
      responseType: "code"
    }
  }
};
