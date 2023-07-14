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
import dayjs from "dayjs";

export const VrcEventCalenderUrlGenerator = () => {
  const initialValues = {
    eventName: "エンジニア作業飲み集会",
    isQuestAvelable: "PC/Quest両対応（Quest対応）",
    date: `${dayjs().format("YYYY-MM-DD")}`,
    startTime: "22:00",
    endTime: "23:30",
    eventOwner: "慕狼ゆに",
    evnetContent:
      "技術触ってる人が集まって、作業したりお酒飲みながら作業したり、とりあえずワイワイしたりする集会です！ハードウェア、ソフトウェアなどの技術分野は不問！どのような形でも、技術と関わりのある方でしたら参加OKです！参加する際は、ジュース、お酒など飲み物を用意してきてください！",
    eventGenre1: "その他交流会",
    eventGenre2: "VR飲み会",
    eventGenre3: "定期イベント",
    participationConditions:
      "UnityでもBlenderでも、マイコンでもC言語でも、HTMLでもPHPでも、技術と関わりがある人であればOKです！参加する際は、ジュース、お酒など飲み物を用意してきてください！",
    wayToParticipate: "「慕狼ゆに」にJoinして下さい！",
    note: "告知ツイートのURLやタイムスケジュールなどあればご記載ください%0Ahttps://twitter.com/VRCENGAssoc/status/${postTweet.data.id}%0A%0A参加する際は、ジュース、お酒など飲み物を用意してきてください！%0A22:00+~+23:00+イベント時間%0A23:00+~+23:10+記念撮影%0A23:10+~+23:40++軽い自己紹介タイム%0Aその後は自由に雑談したりお酒飲んだり",
  };

  return (
    <>
      <MuiFormGroup>
        <MuiFormControl>
          <MuiFormLabel>イベント名</MuiFormLabel>
          <MuiTextField name="eventName" variant="outlined" />
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
          <MuiTextField name="isQuestAvelable" variant="outlined" />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>日付</MuiFormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              onChange={(newValue) => {
                console.log(newValue);
              }}
            />
          </LocalizationProvider>
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>開始時刻</MuiFormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeField />
          </LocalizationProvider>
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>終了時刻</MuiFormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeField />
          </LocalizationProvider>
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>イベント主催者</MuiFormLabel>
          <MuiTextField name="eventName" variant="outlined" />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>イベント内容</MuiFormLabel>
          <MuiTextField name="eventName" variant="outlined" />
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
          <MuiTextField name="isQuestAvelable" variant="outlined" />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>参加条件（モデル、人数制限など）</MuiFormLabel>
          <MuiTextField name="eventName" variant="outlined" />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>参加方法</MuiFormLabel>
          <MuiTextField name="eventName" variant="outlined" />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>備考</MuiFormLabel>
          <MuiTextField name="eventName" variant="outlined" />
        </MuiFormControl>
        <MuiFormControl>
          <MuiFormLabel>海外ユーザー向け告知</MuiFormLabel>
          <MuiFormControlLabel control={<MuiCheckbox />} label={"希望する"} />
        </MuiFormControl>
      </MuiFormGroup>
    </>
  );
};
