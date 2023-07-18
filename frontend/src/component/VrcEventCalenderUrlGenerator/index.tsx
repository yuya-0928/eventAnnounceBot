import { FormGroup as MuiFormGroup } from "@material-ui/core";
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
import { WayToParticipate } from "./Form/WayToParticipate";
import { Note } from "./Form/Note";
import { NoticeForOverseasUsers } from "./Form/NoticeForOverseasUsers";

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
    eventGenre: {
      // アバター試着会
      avaterFitting: false,
      // 改変アバター交流会
      modifiedAvaterExchange: false,
      // その他交流会
      otherNetworkingEvent: true,
      // VR飲み会
      vrDrinkingParty: true,
      // 店舗系イベント
      storeEvent: false,
      // 音楽系イベント
      musicEvent: false,
      // 学術系イベント
      academicEvent: false,
      // ロールプレイ
      rolePlay: false,
      // 初心者向けイベント
      eventForBeginners: false,
      // 定期イベント
      regularEvent: true,
    },
    participationConditions:
      "UnityでもBlenderでも、マイコンでもC言語でも、HTMLでもPHPでも、技術と関わりがある人であればOKです！参加する際は、ジュース、お酒など飲み物を用意してきてください！",
    wayToParticipate: "「慕狼ゆに」にJoinして下さい！",
    note: "告知ツイートのURLやタイムスケジュールなどあればご記載ください%0Ahttps://twitter.com/VRCENGAssoc/status/${postTweet.data.id}%0A%0A参加する際は、ジュース、お酒など飲み物を用意してきてください！%0A22:00+~+23:00+イベント時間%0A23:00+~+23:10+記念撮影%0A23:10+~+23:40++軽い自己紹介タイム%0Aその後は自由に雑談したりお酒飲んだり",
    boticeForOverseasUsers: false,
  };

  const getAvelablePlatform = (avelablePlatform: {
    pc: boolean;
    quest: boolean;
  }) => {
    const { pc, quest } = avelablePlatform;
    if (pc && quest) {
      return "PC/Quest両対応（Quest対応）";
    } else if (pc) {
      return "PC対応";
    } else if (quest) {
      return "Quest対応";
    } else {
      return "";
    }
  };

  const getEventGenreArray = (eventGenres: {
    avaterFitting: boolean;
    modifiedAvaterExchange: boolean;
    otherNetworkingEvent: boolean;
    vrDrinkingParty: boolean;
    storeEvent: boolean;
    musicEvent: boolean;
    academicEvent: boolean;
    rolePlay: boolean;
    eventForBeginners: boolean;
    regularEvent: boolean;
  }) =>
    Object.entries(eventGenres)
      .filter((genre) => genre[1] === true)
      .map((genre) => {
        {
          switch (genre[0]) {
            case "avaterFitting":
              return "アバター試着会";
              break;
            case "modifiedAvaterExchange":
              return "改変アバター交流会";
              break;
            case "otherNetworkingEvent":
              return "その他交流会";
              break;
            case "vrDrinkingParty":
              return "VR飲み会";
              break;
            case "storeEvent":
              return "店舗系イベント";
              break;
            case "musicEvent":
              return "音楽系イベント";
              break;
            case "academicEvent":
              return "学術系イベント";
              break;
            case "rolePlay":
              return "ロールプレイ";
              break;
            case "eventForBeginners":
              return "初心者向けイベント";
              break;
            case "regularEvent":
              return "定期イベント";
              break;
            default:
              return "";
              break;
          }
        }
      });

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const eventCalenderUrl = [
        "https://docs.google.com/forms/d/e/1FAIpQLSevo0ax6ALIzllRCT7up-3KZkohD3VfG28rcOy8XMqDwRWevQ/viewform?usp=pp_url",
        `&entry.426573786=${values.eventName}`,
        `&entry.1261006949=${getAvelablePlatform(values.avelablePlatform)}`,
        `&entry.450203369=${dayjs(values.date).format("YYYY-MM-DD")}`,
        `&entry.1010494053=${values.startTime}`,
        `&entry.203043324=${values.endTime}`,
        `&entry.1540217995=${values.eventOwner}`,
        `&entry.701384676=${values.evnetContent}`,
        `&entry.1606730788=${getEventGenreArray(values.eventGenre).join()}`,
        `&entry.2064647146=${values.participationConditions}`,
        `&entry.1285455202=${values.wayToParticipate}`,
        `&entry.586354013=${values.note}`,
      ];
      console.log(eventCalenderUrl.join());
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
          initialValue={formik.values.avelablePlatform}
          setPlatformValue={(key: string, value: boolean) => {
            void formik.setFieldValue(`avelablePlatform.${key}`, value);
          }}
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
          initialValue={formik.values.boticeForOverseasUsers}
          setValue={(value: boolean) => {
            void formik.setFieldValue(`boticeForOverseasUsers`, value);
          }}
        />
        <button type="submit">Submit</button>
      </MuiFormGroup>
    </form>
  );
};
