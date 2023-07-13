import { TextField as MuiTextField } from "@material-ui/core";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";

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
        <FormControlLabel
          control={<Checkbox name="isTestModeToggle" id="test-mode" />}
          label="テストモード"
        />
        <input type="submit" value="送信する" />
      </form>
    </>
  );
};
