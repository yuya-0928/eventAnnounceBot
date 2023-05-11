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
  textData: string,
  postTweetData?: any,
) => {
  if (postTweetData) {
    const channel = discord_client.channels.cache.get(channelId) as TextChannel;
    const existChannel = checkChannelExist(channel);
    existChannel.send(
      `@everyone\n${textData}\nhttps://twitter.com/VRCENGAssoc/status/${postTweetData.data.id}`
    );
  } else {
    const channel = discord_client.channels.cache.get(channelId) as TextChannel;
    const existChannel = checkChannelExist(channel);
    console.log(textData);
    existChannel.send(
      `@everyone\n${textData}`
    );
  }
};
