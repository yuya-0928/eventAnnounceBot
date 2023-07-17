import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";

type Props = {
  wayToParticipate: string;
  onChange: () => void;
};

export const WayToParticipate = ({ wayToParticipate, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>参加方法</MuiFormLabel>
      <MuiTextField
        name="eventName"
        variant="outlined"
        onChange={onChange}
        value={wayToParticipate}
      />
    </MuiFormControl>
  );
};
