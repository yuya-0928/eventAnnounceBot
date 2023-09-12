import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { ChangeEventHandler } from "react";

type Props = {
  participationConditions: string;
  onChange: () => ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const ParticipationConditions = ({
  participationConditions,
  onChange,
}: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>参加条件（モデル、人数制限など）</MuiFormLabel>
      <MuiTextField
        name="participationConditions"
        variant="outlined"
        onChange={onChange()}
        value={participationConditions}
      />
    </MuiFormControl>
  );
};
