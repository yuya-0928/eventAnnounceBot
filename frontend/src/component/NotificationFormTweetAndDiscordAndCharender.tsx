import { TextField as MuiTextField } from "@material-ui/core";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";

export const NotificationFormTweetAndDiscordAndCharender = () => {
  return (
    <>
      <h2>Tweet&Discord通知&イベントカレンダー登録</h2>
      <form
        id="message_form"
        method="POST"
        action="http://localhost:3001/post_announcement"
      >
        <MuiTextField
          type="number"
          name="numberOfSessions"
          variant="outlined"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
        <FormControlLabel
          control={<Checkbox name="isTestModeToggle" id="test-mode" />}
          label="テストモード"
        />
        <input type="submit" value="送信する" />
      </form>
    </>
  );
};
