import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { authClient, auth_client } from "./modules/twitterApi/authClient";
import { discord_client } from "./modules/discordClient/discordBot";
import { setEventCalenderDate } from "./eventCalenderParameter";
import { formData } from "./modules/formData";
import { postDiscord } from "./modules/postDiscord";
import { TypePostTweet, postTweet } from "./modules/postTweet";

const app: express.Express = express();
const STATE = "my-state";

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req: express.Request, res: express.Response) => {
  res.render("index.ejs");
});

app.get("/callback", async (req: express.Request, res: express.Response) => {
  try {
    console.log("/callback");
    const { code, state } = req.query;
    if (state !== STATE) return res.status(500).send("State isn't matching");
    await authClient.requestAccessToken(code as string);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.get("/login", async (req: express.Request, res: express.Response) => {
  console.log("/login");
  const authUrl = authClient.generateAuthURL({
    state: STATE,
    code_challenge_method: "s256",
  });
  res.redirect(authUrl);
});

// Twitterに告知を投稿&Discordにお知らせをURL付きで投稿&イベントカレンダーに遷移する
app.post(
  "/post_announcement",
  async (req: express.Request, res: express.Response) => {
    const formDataArray = formData(req);
    let postTweetData: TypePostTweet | undefined;
    if (!formDataArray.isTestMode) {
      postTweetData = await postTweet(auth_client, formDataArray);
    }
    if (!formDataArray.isTestMode) {
      postDiscord(
        discord_client,
        "920327603397750804",
        formDataArray.textData,
        postTweetData
      );
      res.redirect(`${setEventCalenderDate(formDataArray.date).join("")}`);
    } else {
      postDiscord(
        discord_client,
        "949289883728510977",
        formDataArray.textData,
        postTweetData
      );
      res.redirect(`${setEventCalenderDate(formDataArray.date).join("")}`);
    }
  }
);

app.post(
  "/post_announcement_only_discord",
  async (req: express.Request, res: express.Response) => {
    const formDataArray = formData(req);
    console.log(formDataArray);
    let tweet_id;

    if (!formDataArray.isTestMode) {
      postDiscord(
        discord_client,
        "920327603397750804",
        formDataArray.textData,
        tweet_id
      );
    } else {
      postDiscord(discord_client, "949289883728510977", formDataArray.textData);
    }
    res.redirect("/");
  }
);

app.listen(3001, () => {
  console.log("Go here to login: http://localhost:3001/login");
});
