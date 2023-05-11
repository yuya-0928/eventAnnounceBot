import { Client } from "twitter-api-sdk";
import { appendUpload, finalizeUpload, initUpload } from "./twitterApi/mediaUpload";

export const postTweet = async (auth_client: Client, formDataArray: {
  date: any;
  numberOfSessions: any;
  dateAry: any;
  isTestMode: boolean;
}) => {
  // TwitterAPIの処理
  const res_initUpload = await initUpload();
  const res_appendUpload = await appendUpload(res_initUpload);
  const res_finalizeUpload: any = await finalizeUpload(res_appendUpload);
  const postTweet = await auth_client.tweets.createTweet({
    text: `【第${formDataArray.numberOfSessions}回】エンジニア作業飲み集会\n今週やります!\n${formDataArray.dateAry[1]}/${formDataArray.dateAry[2]}金の22:00〜23:30で開催します!\n技術触ってる人が集まって、お酒飲みながら作業したり、ワイワイしたりする集会ですー!\nデスクトップ参加でもVR参加でも大丈夫です\n参加したい方は「慕狼ゆに」にJoinしてくださいー!\n#VRCエンジニア作業飲み集会`,
    media: {
      media_ids: [res_finalizeUpload.media_id_string],
    },
  });
  console.log(postTweet);
  return postTweet;
};
