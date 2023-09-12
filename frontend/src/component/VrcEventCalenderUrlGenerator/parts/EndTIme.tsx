import {
  FormLabel as MuiFormLabel,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  endTime: string;
  onChange: (time: Dayjs | null) => void;
};

export const EndTime = ({ endTime, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>終了時刻</MuiFormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeField
          format="HH:mm"
          onChange={(time: Dayjs | null) => {
            onChange(time);
          }}
          value={dayjs(endTime, "HH:mm")}
        />
      </LocalizationProvider>
    </MuiFormControl>
  );
};
