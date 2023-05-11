import { Client } from "twitter-api-sdk";

export const getTweets = async (auth_client: Client, numberOfSessions: any) => {
  const getTweets = await auth_client.tweets.tweetsRecentSearch({
    query: `from:VRCENGAssoc 【第${numberOfSessions}回 `,
  });
  if (getTweets.data === undefined) throw Error("Tweetが見つかりません");
  const tweet_id = getTweets.data[0]["id"];

  return tweet_id;
}
