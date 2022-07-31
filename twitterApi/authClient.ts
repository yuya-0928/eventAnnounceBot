import * as dotenv from "dotenv";
dotenv.config();
const env = process.env;

const Client = require("twitter-api-sdk").Client;
const auth = require("twitter-api-sdk").auth;

export const authClient = new auth.OAuth2User({
  client_id: env.TWITTER_CLIENT_ID,
  client_secret: env.TWITTER_CLIENT_SECRET,
  callback: "http://localhost:3000/callback",
  scopes: ["tweet.read", "tweet.write", "users.read", "offline.access"],
});

export const auth_client = new Client(authClient);
