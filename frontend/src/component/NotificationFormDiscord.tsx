import { TextField as MuiTextField } from "@material-ui/core";
export const NotificationFormDiscord = () => {
  return (
    <>
      <h2>当日Discord通知</h2>
      <form
        id="message_form"
        method="POST"
        action="http://localhost:3001/post_announcement_only_discord"
      >
        <MuiTextField
          type="number"
          name="numberOfSessions"
          variant="outlined"
        />
        <input type="submit" value="送信する" />
      </form>
    </>
  );
};
