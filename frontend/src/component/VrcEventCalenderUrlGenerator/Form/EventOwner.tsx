import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";

type Props = {
  eventOwner: string;
  onChange: () => void;
};

export const EventOwner = ({ eventOwner, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>イベント主催者</MuiFormLabel>
      <MuiTextField
        name="eventName"
        variant="outlined"
        onChange={onChange}
        value={eventOwner}
      />
    </MuiFormControl>
  );
};
