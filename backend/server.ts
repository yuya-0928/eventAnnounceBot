import express from "express";
import bodyParser from "body-parser";
import { authClient, auth_client } from "../twitterApi/authClient";
import {
  appendUpload,
  finalizeUpload,
  initUpload,
} from "../twitterApi/mediaUpload";
import { discord_client } from "../discordClient/discordBot";
import { setEventCalenderDate } from "../eventCalenderParameter";
import { formatDiagnostic } from "typescript";
import { formData } from "./modules/formData";
import { postDiscord, postDiscordToday } from "./modules/postDiscord";

const app: express.Express = express();
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

// Twitterに告知を投稿&Discordにお知らせをURL付きで投稿&イベントカレンダーに遷移する
app.post("/post_announcement", async (req: any, res: any) => {
  const formDataArray = formData(req);
  let postTweetData;

  if (false) {
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
  }

  if (false) {
    // discordBotへの投稿処理
    postDiscord(discord_client, "920327603397750804", postTweetData);
    postDiscord(discord_client, "920327603397750804", postTweetData);
    res.redirect(`${setEventCalenderDate(formDataArray.date).join("")}`);
  } else {
    // discordBotへの投稿処理
    postDiscord(discord_client, "949289883728510977", postTweetData);
    res.redirect(`${setEventCalenderDate(formDataArray.date).join("")}`);
  }
});

app.post("/post_announcement_only_discord", async (req: any, res: any) => {
  const numberOfSessions = req.body.event_session;
  console.log(numberOfSessions);

  const getTweets = await auth_client.tweets.tweetsRecentSearch({
    query: `from:VRCENGAssoc 【第${numberOfSessions}回 `,
  });
  console.log(getTweets);
  if (getTweets.data === undefined) throw Error("Tweetが見つかりません");

  const tweet_id = getTweets.data[0]["id"];
  postDiscordToday(discord_client, "920327603397750804", tweet_id);

  postDiscordToday(discord_client, "920327603397750804", tweet_id);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Go here to login: http://localhost:3000/login");
});
