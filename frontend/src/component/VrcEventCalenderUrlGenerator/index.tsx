import {
  FormLabel as MuiFormLabel,
  TextField as MuiTextField,
  FormControl as MuiFormControl,
  FormGroup as MuiFormGroup,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { useFormik } from "formik";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { EventName } from "./Form/EventName";
import { AvelablePlatform } from "./Form/AvelablePlatform";
import { Date } from "./Form/Date";
import { StartTime } from "./Form/StartTime";
import { EndTime } from "./Form/EndTIme";
import { EventOwner } from "./Form/EventOwner";
import { EventContent } from "./Form/EventContent";
import { EventGenre } from "./Form/EventGenre";
import { ParticipationConditions } from "./Form/ParticipationConditions";

export const VrcEventCalenderUrlGenerator = () => {
  const initialValues = {
    eventName: "エンジニア作業飲み集会",
    avelablePlatform: { pc: true, quest: true },
    date: dayjs(),
    startTime: "22:00",
    endTime: "23:30",
    eventOwner: "慕狼ゆに",
    evnetContent:
      "技術触ってる人が集まって、作業したりお酒飲みながら作業したり、とりあえずワイワイしたりする集会です！ハードウェア、ソフトウェアなどの技術分野は不問！どのような形でも、技術と関わりのある方でしたら参加OKです！参加する際は、ジュース、お酒など飲み物を用意してきてください！",
    eventGenre: ["定期イベント", "VR飲み会", "その他交流会"],
    participationConditions:
      "UnityでもBlenderでも、マイコンでもC言語でも、HTMLでもPHPでも、技術と関わりがある人であればOKです！参加する際は、ジュース、お酒など飲み物を用意してきてください！",
    wayToParticipate: "「慕狼ゆに」にJoinして下さい！",
    note: "告知ツイートのURLやタイムスケジュールなどあればご記載ください%0Ahttps://twitter.com/VRCENGAssoc/status/${postTweet.data.id}%0A%0A参加する際は、ジュース、お酒など飲み物を用意してきてください！%0A22:00+~+23:00+イベント時間%0A23:00+~+23:10+記念撮影%0A23:10+~+23:40++軽い自己紹介タイム%0Aその後は自由に雑談したりお酒飲んだり",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      console.log("submit");
    },
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>VRChatイベントカレンダーURL生成</h2>
      <MuiFormGroup>
        <EventName
          value={formik.values.eventName}
          onChange={() => formik.handleChange}
        />
        <AvelablePlatform
          avelablePlatform={formik.values.avelablePlatform}
          onChange={() => formik.handleChange}
        />
        <Date
          date={formik.values.date}
          onChange={(newValue) => {
            void formik.setFieldValue(
              "date",
              dayjs(newValue).format("YYYY-MM-DD"),
              true
            );
          }}
        />
        <StartTime
          startTime={formik.values.startTime}
          onChange={(time: Dayjs | null) => {
            void formik.setFieldValue("startTime", dayjs(time).format("HH:mm"));
          }}
        />
        <EndTime
          endTime={formik.values.endTime}
          onChange={(time: Dayjs | null) => {
            void formik.setFieldValue("endTime", dayjs(time).format("HH:mm"));
          }}
        />
        <EventOwner
          eventOwner={formik.values.eventOwner}
          onChange={() => formik.handleChange}
        />
        <EventContent
          eventContent={formik.values.evnetContent}
          onChange={() => formik.handleChange}
        />
        <EventGenre />
        <ParticipationConditions
          participationConditions={formik.values.participationConditions}
          onChange={() => {
            formik.handleChange;
          }}
        />
        <MuiFormControl>
          <MuiFormLabel>参加方法</MuiFormLabel>
          <MuiTextField
            name="eventName"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.wayToParticipate}
          />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>備考</MuiFormLabel>
          <MuiTextField
            name="eventName"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.note}
          />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>海外ユーザー向け告知</MuiFormLabel>
          <MuiFormControlLabel control={<MuiCheckbox />} label={"希望する"} />
        </MuiFormControl>
      </MuiFormGroup>
    </form>
  );
};
