import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { ChangeEventHandler } from "react";

type Props = {
  value: string;
  onChange: () => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const EventName = ({ value, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>イベント名</MuiFormLabel>
      <MuiTextField
        name="eventName"
        variant="outlined"
        value={value}
        onChange={onChange()}
      />
    </MuiFormControl>
  );
};
