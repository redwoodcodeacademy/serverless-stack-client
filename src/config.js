const config = {
  STRIPE_KEY: "pk_test_51H2QNlJqdiwdYo5w80EVPQmV0uZRSuzMhDDriU75shXvF5l9swuJZOxpdGOHBeBtoNDFerTvxSzhQZPM43KDP9gD00yt5S8DH5",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "paul-epps-notes-app-upload",
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