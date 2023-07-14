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

export const VrcEventCalenderUrlGenerator = () => {
  const initialValues = {
    eventName: "エンジニア作業飲み集会",
    isQuestAvelable: "PC/Quest両対応（Quest対応）",
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>VRChatイベントカレンダーURL生成</h2>
      <MuiFormGroup>
        <MuiFormControl>
          <MuiFormLabel>イベント名</MuiFormLabel>
          <MuiTextField
            name="eventName"
            variant="outlined"
            value={formik.values.eventName}
            onChange={formik.handleChange}
          />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>Quest対応可否</MuiFormLabel>
          <MuiFormControlLabel control={<MuiCheckbox />} label={"PCオンリー"} />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"PC/Quest両対応（Quest対応）"}
          />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"Quest オンリー"}
          />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>日付</MuiFormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              onChange={(newValue: Dayjs | null) => {
                void formik.setFieldValue(
                  "date",
                  dayjs(newValue).format("YYYY-MM-DD"),
                  true
                );
              }}
              value={dayjs(formik.values.date, "YYYY-MM-DD")}
            />
          </LocalizationProvider>
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>開始時刻</MuiFormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeField
              format="HH:mm"
              onChange={(time: Dayjs | null) => {
                void formik.setFieldValue(
                  "startTime",
                  dayjs(time).format("HH:mm")
                );
              }}
              value={dayjs(formik.values.startTime, "HH:mm")}
            />
          </LocalizationProvider>
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>終了時刻</MuiFormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeField
              format="HH:mm"
              onChange={(time: Dayjs | null) => {
                void formik.setFieldValue(
                  "endTime",
                  dayjs(time).format("HH:mm"),
                  true
                );
              }}
              value={dayjs(formik.values.endTime, "HH:mm")}
            />
          </LocalizationProvider>
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>イベント主催者</MuiFormLabel>
          <MuiTextField
            name="eventName"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.eventOwner}
          />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>イベント内容</MuiFormLabel>
          <MuiTextField
            name="eventName"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.evnetContent}
          />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>イベントジャンル</MuiFormLabel>
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"アバター試着会"}
          />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"改変アバター交流会"}
          />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"その他交流会"}
          />
          <MuiFormControlLabel control={<MuiCheckbox />} label={"VR飲み会"} />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"店舗系イベント"}
          />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"音楽系イベント"}
          />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"学術系イベント"}
          />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"ロールプレイ"}
          />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"初心者向けイベント"}
          />
          <MuiFormControlLabel
            control={<MuiCheckbox />}
            label={"定期イベント"}
          />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>参加条件（モデル、人数制限など）</MuiFormLabel>
          <MuiTextField
            name="eventName"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.participationConditions}
          />
        </MuiFormControl>
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
