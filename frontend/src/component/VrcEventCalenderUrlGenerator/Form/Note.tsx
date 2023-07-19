import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { ChangeEventHandler } from "react";

type Props = {
  note: string;
  onChange: () => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const Note = ({ note, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>備考</MuiFormLabel>
      <MuiTextField
        name="note"
        variant="outlined"
        onChange={onChange()}
        value={note}
      />
    </MuiFormControl>
  );
};
