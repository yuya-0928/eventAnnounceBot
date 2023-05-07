import express from "express";
import bodyParser from "body-parser";
import { authClient, auth_client } from "./modules/twitterApi/authClient";
import { discord_client } from "./modules/discordClient/discordBot";
import { setEventCalenderDate } from "../eventCalenderParameter";
import { formData } from "./modules/formData";
import { postDiscord, postDiscordToday } from "./modules/postDiscord";
import { postTweet } from "./modules/postTweet";
import { getTweets } from "./modules/twitterApi/getTweet";

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
  if (!formDataArray.isTestMode) {
    postTweet(auth_client, formDataArray);
  }
  if (!formDataArray.isTestMode) {
    postDiscord(discord_client, "920327603397750804", postTweetData);
    postDiscord(discord_client, "920327603397750804", postTweetData);
    res.redirect(`${setEventCalenderDate(formDataArray.date).join("")}`);
  } else {
    postDiscord(discord_client, "949289883728510977", postTweetData);
    res.redirect(`${setEventCalenderDate(formDataArray.date).join("")}`);
  }
});

app.post("/post_announcement_only_discord", async (req: any, res: any) => {
  const formDataArray = formData(req);
  const numberOfSessions = req.body.event_session;
  const tweet_id = await getTweets(auth_client, numberOfSessions);
  if (!formDataArray.isTestMode) {
    postDiscordToday(discord_client, "920327603397750804", tweet_id);
    postDiscordToday(discord_client, "920327603397750804", tweet_id);
  } else {
    postDiscordToday(discord_client, "949289883728510977", tweet_id);
  }
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Go here to login: http://localhost:3000/login");
});
