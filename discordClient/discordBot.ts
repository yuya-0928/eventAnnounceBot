// discordBot記述部分
import * as dotenv from "dotenv";
dotenv.config();
const env = process.env;

import { Client as discrodClient, Intents } from "discord.js";

export const discord_client: discrodClient<boolean> = new discrodClient({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
}); //discordclientインスタンスを作成する

discord_client.once("ready", () => {
  //ここにボットが起動した際のコードを書く(一度のみ実行)
  console.log("起動完了"); //黒い画面(コンソール)に「起動完了」と表示させる
});

discord_client.login(env.DISCORD_BOT_TOKEN); //ログインする
