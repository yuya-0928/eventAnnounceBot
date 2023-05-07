import * as dotenv from "dotenv";
dotenv.config();
const env = process.env;

const Twitter = require("twitter");

export const twitter_client = new Twitter({
  consumer_key: env.TWITTER_API_KEY,
  consumer_secret: env.TWITTER_API_KEY_SECRET,
  access_token_key: env.TWITTER_ACCESS_TOKEN,
  access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET,
});
