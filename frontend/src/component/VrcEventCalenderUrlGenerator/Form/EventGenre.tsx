import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
  FormGroup as MuiFormGroup,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

export const EventGenre = () => {
  return (
    <MuiFormControl>
      <MuiFormLabel>イベントジャンル</MuiFormLabel>
      <MuiFormControlLabel control={<MuiCheckbox />} label={"アバター試着会"} />
      <MuiFormControlLabel
        control={<MuiCheckbox />}
        label={"改変アバター交流会"}
      />
      <MuiFormControlLabel control={<MuiCheckbox />} label={"その他交流会"} />
      <MuiFormControlLabel control={<MuiCheckbox />} label={"VR飲み会"} />
      <MuiFormControlLabel control={<MuiCheckbox />} label={"店舗系イベント"} />
      <MuiFormControlLabel control={<MuiCheckbox />} label={"音楽系イベント"} />
      <MuiFormControlLabel control={<MuiCheckbox />} label={"学術系イベント"} />
      <MuiFormControlLabel control={<MuiCheckbox />} label={"ロールプレイ"} />
      <MuiFormControlLabel
        control={<MuiCheckbox />}
        label={"初心者向けイベント"}
      />
      <MuiFormControlLabel control={<MuiCheckbox />} label={"定期イベント"} />
    </MuiFormControl>
  );
};
