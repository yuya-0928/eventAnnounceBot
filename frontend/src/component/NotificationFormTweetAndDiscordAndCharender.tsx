import { TextField as MuiTextField } from "@material-ui/core";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import dayjs from "dayjs";

export const NotificationFormTweetAndDiscordAndCharender = () => {
  const initialValues = {
    numberOfSessions: "",
    date: "",
    isTestMode: false,
    textData: "次の金曜日も開催するよーーー！ 良かったら遊びにきてねーー！！",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      fetch("http://localhost:3001/post_announcement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numberOfSessions: formik.values.numberOfSessions,
          date: formik.values.date,
          isTestMode: formik.values.isTestMode,
          textData: formik.values.textData,
        }),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <>
      <h2>Tweet&Discord通知&イベントカレンダー登録</h2>
      <form
        id="message_form"
        method="POST"
        action="http://localhost:3001/post_announcement"
        onSubmit={formik.handleSubmit}
      >
        <MuiTextField
          type="number"
          name="numberOfSessions"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.numberOfSessions}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(newValue) => {
              formik
                .setFieldValue("date", dayjs(newValue).format('YYYY-MM-DD'), true)
                .catch(() => {
                  console.log("error");
                });
            }}
            value={formik.values.date}
          />
        </LocalizationProvider>
        <FormControlLabel
          control={
            <Checkbox
              name="isTestModeToggle"
              id="test-mode"
              onChange={formik.handleChange}
              value={formik.values.isTestMode}
            />
          }
          label="テストモード"
        />
        <MuiTextField
          name="textData"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.textData}
          multiline
        />
        <input type="submit" value="送信する" />
      </form>
    </>
  );
};
