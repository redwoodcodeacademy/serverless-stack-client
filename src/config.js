const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "paul-epps-notes-app-uploads",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://k2wyntb5t7.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_rBIfCI7S9",
      APP_CLIENT_ID: "1thq93f0s6l3jnbs0utuimp7vc",
      IDENTITY_POOL_ID: "us-east-1:c5a22766-1d4d-405f-9baf-7036ad49c324",
    },
  };
  
  export default config;