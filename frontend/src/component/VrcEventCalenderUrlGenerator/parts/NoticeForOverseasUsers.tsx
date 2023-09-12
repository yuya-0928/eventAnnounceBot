import {
  FormLabel as MuiFormLabel,
  FormControl as MuiFormControl,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

type Props = {
  initialValue: boolean;
  setValue: (value: boolean) => void;
};

export const NoticeForOverseasUsers = ({ initialValue, setValue }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>海外ユーザー向け告知</MuiFormLabel>
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue}
            onChange={(e) => {
              setValue(e.target.checked);
            }}
          />
        }
        label={"希望する"}
      />
    </MuiFormControl>
  );
};
