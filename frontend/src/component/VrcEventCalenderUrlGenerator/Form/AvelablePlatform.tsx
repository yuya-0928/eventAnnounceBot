import {
  FormLabel as MuiFormLabel,
  FormControlLabel as MuiFormControlLabel,
  FormControl as MuiFormControl,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

type Props = {
  avelablePlatform: {
    pc: boolean;
    quest: boolean;
  };
  pcOnly: () => void;
  questOnly: () => void;
  both: () => void;
};

export const AvelablePlatform = ({
  avelablePlatform,
  pcOnly,
  questOnly,
  both,
}: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>Quest対応可否</MuiFormLabel>
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            name={"PCオンリー"}
            value={"PCオンリー"}
            defaultChecked={
              avelablePlatform.pc === true && avelablePlatform.quest === false
            }
            onChange={() => {
              pcOnly();
            }}
            checked={
              avelablePlatform.pc === true && avelablePlatform.quest === false
            }
          />
        }
        label={"PCオンリー"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            name={"PC/Quest両対応（Quest対応）"}
            value={"PC/Quest両対応（Quest対応）"}
            defaultChecked={
              avelablePlatform.pc === true && avelablePlatform.quest === true
            }
            onChange={() => {
              both();
            }}
            checked={
              avelablePlatform.pc === true && avelablePlatform.quest === true
            }
          />
        }
        label={"PC/Quest両対応（Quest対応）"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            name={"Quest オンリー"}
            value={"Quest オンリー"}
            defaultChecked={
              avelablePlatform.pc === false && avelablePlatform.quest === true
            }
            onChange={() => {
              questOnly();
            }}
            checked={
              avelablePlatform.pc === false && avelablePlatform.quest === true
            }
          />
        }
        label={"Quest オンリー"}
      />
    </MuiFormControl>
  );
};
