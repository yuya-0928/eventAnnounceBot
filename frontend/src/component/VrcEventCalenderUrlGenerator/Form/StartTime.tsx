import {
  FormLabel as MuiFormLabel,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  startTime: string;
  onChange: (time: Dayjs | null) => void;
};

export const StartTime = ({ startTime, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>開始時刻</MuiFormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimeField
          format="HH:mm"
          onChange={(time: Dayjs | null) => {
            onChange(time);
          }}
          value={dayjs(startTime, "HH:mm")}
        />
      </LocalizationProvider>
    </MuiFormControl>
  );
};
