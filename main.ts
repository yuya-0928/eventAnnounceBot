// discordBot記述部分
import * as dotenv from "dotenv";
dotenv.config();
const env = process.env;

import { Client as discrodClient, Intents } from "discord.js";
const discord_client: any = new discrodClient({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
}); //discordclientインスタンスを作成する

discord_client.once("ready", () => {
  //ここにボットが起動した際のコードを書く(一度のみ実行)
  console.log("起動完了"); //黒い画面(コンソール)に「起動完了」と表示させる
});

discord_client.login(env.DISCORD_BOT_TOKEN); //ログインする

// express記述部分
// twitter-api-sdkのライブラリ、twitterapiv2 を使った、ツイートまでができるスクリプト
// 画像も投稿できるようになった

import { authClient, auth_client } from "./twitterApi/authClient";
import {
  appendUpload,
  finalizeUpload,
  initUpload,
} from "./twitterApi/mediaUpload";

import express from "express";
import { setEventCalenderDate } from "./eventCalenderParameter";
import bodyParser from "body-parser";

const app = express();
const STATE = "my-state";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req: any, res: any) => {
  res.render("index.ejs");
});

app.get("/callback", async (req: any, res: any) => {
  try {
    console.log("/callback");
    const { code, state } = req.query;
    if (state !== STATE) return res.status(500).send("State isn't matching");
    await authClient.requestAccessToken(code);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.get("/login", async (req: any, res: any) => {
  console.log("/login");
  const authUrl = authClient.generateAuthURL({
    state: STATE,
    code_challenge_method: "s256",
  });
  res.redirect(authUrl);
});

app.get("/tweets", async (req: any, res: any) => {
  const tweets = await auth_client.tweets.findTweetById("20");
  res.send(tweets.data);
});

app.get("/revoke", async (req: any, res: any) => {
  try {
    const response = await authClient.revokeAccessToken();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

app.post("/post_announcement", async (req: any, res: any) => {
  const numberOfSessions = req.body.input_date[0];
  const date = req.body.input_date[1];
  console.log(date);
  const dateAry = date.split("-");
  console.log(dateAry);
  const res_initUpload = await initUpload();
  const res_appendUpload = await appendUpload(res_initUpload);
  const res_finalizeUpload: any = await finalizeUpload(res_appendUpload);
  const postTweet = await auth_client.tweets.createTweet({
    text: `【第${numberOfSessions}回】エンジニア作業飲み集会\n今週やります!\n${dateAry[1]}/${dateAry[2]}金の22:00〜23:30で開催します!\n技術触ってる人が集まって、お酒飲みながら作業したり、ワイワイしたりする集会ですー!\nデスクトップ参加でもVR参加でも大丈夫です\n参加したい方は「慕狼ゆに」にJoinしてくださいー!\n#VRCエンジニア作業飲み集会`,
    media: {
      media_ids: [res_finalizeUpload.media_id_string],
    },
  });
  console.log(postTweet);
  discord_client.channels.cache
    .get("949289883728510977")
    .send(
      `@everyone\n次の金曜日も開催するよーーー！\n良かったら遊びにきてねーー！！\nhttps://twitter.com/VRCENGAssoc/status/${postTweet.data.id}`
    );
  res.redirect(`${setEventCalenderDate(date).join("")}`);
});

app.listen(3000, () => {
  console.log("Go here to login: http://localhost:3000/login");
});
