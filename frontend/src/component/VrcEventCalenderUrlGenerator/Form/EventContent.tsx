import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
  FormGroup as MuiFormGroup,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

type Props = {
  eventContent: string;
  onChange: () => void;
};

export const EventContent = ({ eventContent, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>イベント内容</MuiFormLabel>
      <MuiTextField
        name="eventName"
        variant="outlined"
        onChange={onChange}
        value={eventContent}
      />
    </MuiFormControl>
  );
};
