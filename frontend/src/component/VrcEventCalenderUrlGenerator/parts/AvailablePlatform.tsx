import {
  FormLabel as MuiFormLabel,
  FormControlLabel as MuiFormControlLabel,
  FormControl as MuiFormControl,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import { AvailablePlatformType } from "../../../types/VrcEventCalenderType";

type Props = {
  initialValue: AvailablePlatformType;
  onChange: (value: AvailablePlatformType) => void;
};

export const AvailablePlatform = ({ initialValue, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>Quest対応可否</MuiFormLabel>
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            name={"PCオンリー"}
            value={"PCオンリー"}
            checked={initialValue === "PCオンリー"}
            onChange={() => onChange("PCオンリー")}
          />
        }
        label={"PCオンリー"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            name={"PC/Quest両対応（Quest対応）"}
            value={"PC/Quest両対応（Quest対応）"}
            checked={initialValue === "PC/Quest両対応（Quest対応）"}
            onChange={() => onChange("PC/Quest両対応（Quest対応）")}
          />
        }
        label={"PC/Quest両対応（Quest対応）"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            name={"Quest オンリー"}
            value={"Quest オンリー"}
            checked={initialValue === "Quest オンリー"}
            onChange={() => onChange("Quest オンリー")}
          />
        }
        label={"Quest オンリー"}
      />
    </MuiFormControl>
  );
};
