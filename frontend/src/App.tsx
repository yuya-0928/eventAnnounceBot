import { NotificationFormDiscord } from "./component/NotificationFormDiscord";
import { NotificationFormTweetAndDiscordAndCharender } from "./component/NotificationFormTweetAndDiscordAndCharender";

function App() {
  return (
    <>
      <h1>エンジニア作業飲み集会通知システム</h1>
      <a href="http://localhost:3001/login">ログインする</a>
      <NotificationFormTweetAndDiscordAndCharender />
      <NotificationFormDiscord />
    </>
  );
}

export default App;
