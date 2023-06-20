import * as dotenv from "dotenv";
dotenv.config();
const env = process.env;

// TODO: Twitter API SDK for TypeScriptライブラリを使った書き方を調べる。https://github.com/twitterdev/twitter-api-typescript-sdk
// twitterライブラリがimportに対応していない
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Twitter = require("twitter");

export const twitter_client = new Twitter({
  consumer_key: env.TWITTER_API_KEY,
  consumer_secret: env.TWITTER_API_KEY_SECRET,
  access_token_key: env.TWITTER_ACCESS_TOKEN,
  access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET,
});
