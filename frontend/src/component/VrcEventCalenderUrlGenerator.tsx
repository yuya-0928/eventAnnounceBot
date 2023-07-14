import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";

export const VrcEventCalenderUrlGenerator = () => {
  return (
    <>
      <MuiFormControl>
        <MuiFormLabel>イベント名</MuiFormLabel>
        <MuiTextField name="eventName" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>Quest対応可否</MuiFormLabel>
        <MuiTextField name="isQuestAvelable" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>日付</MuiFormLabel>
        <MuiTextField name="date" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>開始時刻</MuiFormLabel>
        <MuiTextField name="startTime" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>終了時刻</MuiFormLabel>
        <MuiTextField name="endTime" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>イベント主催者</MuiFormLabel>
        <MuiTextField name="eventName" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>イベント内容</MuiFormLabel>
        <MuiTextField name="eventName" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>イベントジャンル</MuiFormLabel>
        <MuiTextField name="eventName" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>参加条件（モデル、人数制限など）</MuiFormLabel>
        <MuiTextField name="eventName" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>参加方法</MuiFormLabel>
        <MuiTextField name="eventName" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>備考</MuiFormLabel>
        <MuiTextField name="eventName" variant="outlined" />
      </MuiFormControl>
      <MuiFormControl>
        <MuiFormLabel>海外ユーザー向け告知</MuiFormLabel>
        <MuiTextField name="eventName" variant="outlined" />
      </MuiFormControl>
    </>
  );
};
