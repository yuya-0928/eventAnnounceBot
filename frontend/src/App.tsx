import { NotificationFormDiscord } from "./component/NotificationFormDiscord";
import { NotificationFormTweetAndDiscordAndCharender } from "./component/NotificationFormTweetAndDiscordAndCharender";
import { VrcEventCalenderUrlGenerator } from "./component/VrcEventCalenderUrlGenerator";

function App() {
  return (
    <>
      <h1>エンジニア作業飲み集会通知システム</h1>
      <VrcEventCalenderUrlGenerator />
      <NotificationFormTweetAndDiscordAndCharender />
      <NotificationFormDiscord />
    </>
  );
}

export default App;
