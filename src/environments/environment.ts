export const environment = {
  production: false,
  apiBase: "http://localhost:5000",
  auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_9ZpfRImkY",
    userPoolWebClientId: "2o43ov6eflc2bmv6k6tpb9dnk0",
    oauth: {
      domain: "surlesmobile-auth.auth.us-east-1.amazoncognito.com",
      scope: ["openid","email","portfolio/read","portfolio/write","portfolio/admin"],
      redirectSignIn: "http://localhost:4200/callback",
      redirectSignOut: "http://localhost:4200",
      responseType: "code"
    }
  }
};
