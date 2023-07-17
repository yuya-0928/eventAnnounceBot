import {
  FormLabel as MuiFormLabel,
  FormControl as MuiFormControl,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

export const NoticeForOverseasUsers = () => {
  return (
    <MuiFormControl>
      <MuiFormLabel>海外ユーザー向け告知</MuiFormLabel>
      <MuiFormControlLabel control={<MuiCheckbox />} label={"希望する"} />
    </MuiFormControl>
  );
};
