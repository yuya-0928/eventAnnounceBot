import {
  FormLabel as MuiFormLabel,
  FormControl as MuiFormControl,
} from "@material-ui/core";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  date: string;
  onChange: (newValue: Dayjs | null) => void;
};

export const Date = ({ date, onChange }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>日付</MuiFormLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={(newValue: Dayjs | null) => {
            onChange(newValue);
          }}
          value={dayjs(date, "YYYY-MM-DD")}
        />
      </LocalizationProvider>
    </MuiFormControl>
  );
};
