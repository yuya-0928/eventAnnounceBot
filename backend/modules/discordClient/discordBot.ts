// discordBot記述部分
import * as dotenv from "dotenv";
dotenv.config();
const env = process.env;

import { Client as discrodClient, Intents } from "discord.js";

export const discord_client: discrodClient<boolean> = new discrodClient({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

discord_client.once("ready", () => {
  console.log("起動完了"); 
});

discord_client.login(env.DISCORD_BOT_TOKEN);
