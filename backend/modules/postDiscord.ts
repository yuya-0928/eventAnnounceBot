import {
  Client as discrodClient,
  TextChannel,
} from "discord.js";

const checkChannelExist = (channel: TextChannel | undefined) => {
  if (channel === undefined) {
    throw Error("discord_clientがundefinedです");
  }
  return channel;
};

export const postDiscord = (
  discord_client: discrodClient<boolean>,
  channelId: string,
  postTweetData: any
) => {
  if (postTweetData) {
    const channel = discord_client.channels.cache.get(channelId) as TextChannel;
    const existChannel = checkChannelExist(channel);
    existChannel.send(
      `@everyone\n次の金曜日も開催するよーーー！\n良かったら遊びにきてねーー！！\nhttps://twitter.com/VRCENGAssoc/status/${postTweetData.data.id}`
    );
  } else {
    const channel = discord_client.channels.cache.get(channelId) as TextChannel;
    const existChannel = checkChannelExist(channel);
    existChannel.send(
      `@everyone\n次の金曜日も開催するよーーー！\n良かったら遊びにきてねーー！！`
    );
  }
};

export const postDiscordToday = (
  discord_client: discrodClient<boolean>,
  channelId: string,
  tweet_id: string
) => {
  if (tweet_id) {
    const channel = discord_client.channels.cache.get(channelId) as TextChannel;
    if (channel === undefined) throw Error("channelが見つかりませんでした。");
    const existChannel = checkChannelExist(channel);
    existChannel.send(
      `@everyone\n今夜開催するよーーー！\n良かったら遊びにきてねーー！！\nhttps://twitter.com/VRCENGAssoc/status/${tweet_id}`
    );
  } else {
    const channel = discord_client.channels.cache.get(channelId) as TextChannel;
    if (channel === undefined) throw Error("channelが見つかりませんでした。");
    const existChannel = checkChannelExist(channel);
    existChannel.send(
      `@everyone\n今夜開催するよーーー！\n良かったら遊びにきてねーー！！`
    );
  }
};
