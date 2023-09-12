import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { ChangeEventHandler } from "react";

type Props = {
  eventOwner: string;
  onChange: () => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const EventOwner = ({ eventOwner, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>イベント主催者</MuiFormLabel>
      <MuiTextField
        name="eventOwner"
        variant="outlined"
        onChange={onChange()}
        value={eventOwner}
      />
    </MuiFormControl>
  );
};
