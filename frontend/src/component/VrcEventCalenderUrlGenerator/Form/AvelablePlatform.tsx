import {
  FormLabel as MuiFormLabel,
  FormControlLabel as MuiFormControlLabel,
  FormControl as MuiFormControl,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

type Props = {
  initialValue: {
    pc: boolean;
    quest: boolean;
  };
  setPlatformValue: (key: string, value: boolean) => void;
};

export const AvelablePlatform = ({ initialValue, setPlatformValue }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>Quest対応可否</MuiFormLabel>
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            name={"PCオンリー"}
            value={"PCオンリー"}
            checked={initialValue.pc === true && initialValue.quest === false}
            onChange={(e) => {
              setPlatformValue(`pc`, true);
              setPlatformValue(`quest`, false);
            }}
          />
        }
        label={"PCオンリー"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            name={"PC/Quest両対応（Quest対応）"}
            value={"PC/Quest両対応（Quest対応）"}
            checked={initialValue.pc === true && initialValue.quest === true}
            onChange={() => {
              setPlatformValue(`pc`, true);
              setPlatformValue(`quest`, true);
            }}
          />
        }
        label={"PC/Quest両対応（Quest対応）"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            name={"Quest オンリー"}
            value={"Quest オンリー"}
            checked={initialValue.pc === false && initialValue.quest === true}
            onChange={() => {
              setPlatformValue(`pc`, false);
              setPlatformValue(`quest`, true);
            }}
          />
        }
        label={"Quest オンリー"}
      />
    </MuiFormControl>
  );
};
