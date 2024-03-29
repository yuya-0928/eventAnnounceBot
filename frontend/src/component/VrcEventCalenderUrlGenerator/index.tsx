import { FormGroup as MuiFormGroup } from "@material-ui/core";
import { useFormik } from "formik";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { EventName } from "./parts/EventName";
import { AvailablePlatform } from "./parts/AvailablePlatform";
import { Date } from "./parts/Date";
import { StartTime } from "./parts/StartTime";
import { EndTime } from "./parts/EndTIme";
import { EventOwner } from "./parts/EventOwner";
import { EventContent } from "./parts/EventContent";
import { EventGenre } from "./parts/EventGenre";
import { ParticipationConditions } from "./parts/ParticipationConditions";
import { WayToParticipate } from "./parts/WayToParticipate";
import { Note } from "./parts/Note";
import { NoticeForOverseasUsers } from "./parts/NoticeForOverseasUsers";
import { VrcEventCalenderType } from "../../types/VrcEventCalenderType";
import { createVrcEventCalenderUrl } from "./createVrcEventCalenderUrl";

export const VrcEventCalenderUrlGenerator = () => {
  const [url, setUrl] = useState('');

  const initialValues: VrcEventCalenderType = {
    eventName: "エンジニア作業飲み集会",
    availablePlatform: "PC/Quest両対応（Quest対応）",
    date: dayjs().format("YYYY-MM-DD"),
    startTime: "22:00",
    endTime: "23:30",
    eventOwner: "慕狼ゆに",
    eventContent:
      "技術触ってる人が集まって、作業したりお酒飲みながら作業したり、とりあえずワイワイしたりする集会です！ハードウェア、ソフトウェアなどの技術分野は不問！どのような形でも、技術と関わりのある方でしたら参加OKです！参加する際は、ジュース、お酒など飲み物を用意してきてください！",
    eventGenre: {
      avatarFittingEvent: false,
      modifiedAvatarExchangeEvent: false,
      otherNetworkingEvent: true,
      vrDrinkingEvent: true,
      storeEvent: false,
      musicEvent: false,
      academicEvent: false,
      rolePlayEvent: false,
      forBeginnersEvent: false,
      regularEvent: true,
    },
    participationConditions:
      "UnityでもBlenderでも、マイコンでもC言語でも、HTMLでもPHPでも、技術と関わりがある人であればOKです！参加する際は、ジュース、お酒など飲み物を用意してきてください！",
    wayToParticipate: "「慕狼ゆに」にJoinして下さい！",
    note: "告知ツイートのURLやタイムスケジュールなどあればご記載ください%0Ahttps://twitter.com/VRCENGAssoc/status/${postTweet.data.id}%0A%0A参加する際は、ジュース、お酒など飲み物を用意してきてください！%0A22:00+~+23:00+イベント時間%0A23:00+~+23:10+記念撮影%0A23:10+~+23:40++軽い自己紹介タイム%0Aその後は自由に雑談したりお酒飲んだり",
    noticeForOverseasUsers: false,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const eventCalenderUrl = createVrcEventCalenderUrl(values)
      setUrl(eventCalenderUrl);
    },
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h2>VRChatイベントカレンダーURL生成</h2>
        <MuiFormGroup>
          <EventName
            value={formik.values.eventName}
            onChange={() => formik.handleChange}
          />
          <AvailablePlatform
            initialValue={formik.values.availablePlatform}
            onChange={(value) => void formik.setFieldValue("availablePlatform", value)}
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
            eventContent={formik.values.eventContent}
            onChange={() => formik.handleChange}
          />
          <EventGenre
            initialValue={formik.values.eventGenre}
            setEventGenre={(key: string, value: boolean) => {
              void formik.setFieldValue(`eventGenre.${key}`, value);
            }}
          />
          <ParticipationConditions
            participationConditions={formik.values.participationConditions}
            onChange={() => formik.handleChange}
          />
          <WayToParticipate
            wayToParticipate={formik.values.wayToParticipate}
            onChange={() => formik.handleChange}
          />
          <Note note={formik.values.note} onChange={() => formik.handleChange} />
          <NoticeForOverseasUsers
            initialValue={formik.values.noticeForOverseasUsers}
            setValue={(value: boolean) => {
              void formik.setFieldValue(`noticeForOverseasUsers`, value);
            }}
          />
          <button type="submit">Submit</button>
        </MuiFormGroup>
      </form>
      {url !== '' &&
        <a href={url}>カレンダーURL</a>
      }
    </>
  );
};
