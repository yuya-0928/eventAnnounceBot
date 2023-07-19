import * as dotenv from "dotenv";
import Client from "twitter-api-sdk";
import { OAuth2User } from "twitter-api-sdk/dist/OAuth2User";
dotenv.config();
const env = process.env;

const checkNotUndefined = (token: string | undefined) => {
  if (token === undefined) {
    throw Error("環境変数がundefinedです");
  }
  return token;
};

export const authClient = new OAuth2User({
  client_id: checkNotUndefined(env.TWITTER_CLIENT_ID),
  client_secret: env.TWITTER_CLIENT_SECRET,
  callback: "http://localhost:3001/callback",
  scopes: ["tweet.read", "tweet.write", "users.read", "offline.access"],
});

export const auth_client = new Client(authClient);
