import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
} from "@material-ui/core";

type Props = {
  participationConditions: string;
  onChange: () => void;
};

export const ParticipationConditions = ({
  participationConditions,
  onChange,
}: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>参加条件（モデル、人数制限など）</MuiFormLabel>
      <MuiTextField
        name="eventName"
        variant="outlined"
        onChange={onChange}
        value={participationConditions}
      />
    </MuiFormControl>
  );
};
