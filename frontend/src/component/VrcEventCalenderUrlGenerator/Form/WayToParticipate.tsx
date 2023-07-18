import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { ChangeEventHandler } from "react";

type Props = {
  wayToParticipate: string;
  onChange: () => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const WayToParticipate = ({ wayToParticipate, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>参加方法</MuiFormLabel>
      <MuiTextField
        name="wayToParticipate"
        variant="outlined"
        onChange={onChange()}
        value={wayToParticipate}
      />
    </MuiFormControl>
  );
};
