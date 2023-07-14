import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
  FormGroup as MuiFormGroup,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

export const VrcEventCalenderUrlGenerator = () => {
  return (
    <>
      <MuiFormGroup>
        <MuiFormControl>
          <MuiFormLabel>イベント名</MuiFormLabel>
          <MuiTextField name="eventName" variant="outlined" />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>Quest対応可否</MuiFormLabel>
          <MuiFormControlLabel control={<MuiCheckbox />} label={"PCオンリー"} />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"PC/Quest両対応（Quest対応）"}
          />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"Quest オンリー"}
          />
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
      </MuiFormGroup>
    </>
  );
};
