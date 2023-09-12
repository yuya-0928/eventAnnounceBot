import { NotificationFormDiscord } from "./component/NotificationFormDiscord";
import { NotificationFormTweetAndDiscordAndCalender } from "./component/NotificationFormTweetAndDiscordAndCalender";
import { VrcEventCalenderUrlGenerator } from "./component/VrcEventCalenderUrlGenerator";

function App() {
  return (
    <>
      <h1>エンジニア作業飲み集会通知システム</h1>
      <a href="http://localhost:3001/login">ログインする</a>
      <NotificationFormTweetAndDiscordAndCalender />
      <NotificationFormDiscord />
      <VrcEventCalenderUrlGenerator />
    </>
  );
}

export default App;
