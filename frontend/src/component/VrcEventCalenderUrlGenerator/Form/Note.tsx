import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";

type Props = {
  note: string;
  onChange: () => void;
};

export const Note = ({ note, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>備考</MuiFormLabel>
      <MuiTextField
        name="eventName"
        variant="outlined"
        onChange={onChange}
        value={note}
      />
    </MuiFormControl>
  );
};
