import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";

type Props = {
  value: string;
  onChange: () => void;
};

export const EventName = ({ value, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>イベント名</MuiFormLabel>
      <MuiTextField
        name="eventName"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </MuiFormControl>
  );
};
