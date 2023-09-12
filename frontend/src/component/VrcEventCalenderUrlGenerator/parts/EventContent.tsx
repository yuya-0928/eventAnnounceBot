import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { ChangeEventHandler } from "react";

type Props = {
  eventContent: string;
  onChange: () => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const EventContent = ({ eventContent, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>イベント内容</MuiFormLabel>
      <MuiTextField
        name="eventContent"
        variant="outlined"
        onChange={onChange()}
        value={eventContent}
      />
    </MuiFormControl>
  );
};
