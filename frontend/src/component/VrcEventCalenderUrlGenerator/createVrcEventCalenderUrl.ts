import dayjs from "dayjs";
import {
  AvailablePlatformType,
  EventGenreType,
  VrcEventCalenderType,
} from "../../types/VrcEventCalenderType";

const originalUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSevo0ax6ALIzllRCT7up-3KZkohD3VfG28rcOy8XMqDwRWevQ/viewform?usp=pp_url";

const googleFormEntryIds = {
  eventName: "426573786",
  availablePlatform: "1261006949",
  date: "450203369",
  startTime: "1010494053",
  endTime: "203043324",
  eventOwner: "1540217995",
  eventContent: "701384676",
  eventGenre: "1606730788",
  participationConditions: "2064647146",
  wayToParticipate: "1285455202",
  note: "586354013",
  noticeForOverseasUsers: "1607289186",
};

const replaceAvailablePlatformForUrl = (
  availablePlatform: AvailablePlatformType
) => {
  switch (availablePlatform) {
    case "PC&Quest":
      return "PC/Quest両対応（Quest対応）";
    case "PC":
      return "PC対応";
    case "Quest":
      return "Quest対応";
  }
};

const replaceEventGenreForUrl = (eventGenres: EventGenreType) =>
  Object.entries(eventGenres)
    .filter((genre) => genre[1] === true)
    .map((genre) => {
      {
        switch (genre[0]) {
          case "avatarFittingEvent":
            return "アバター試着会";
          case "modifiedAvaterExchangeEvent":
            return "改変アバター交流会";
          case "otherNetworkingEvent":
            return "その他交流会";
          case "vrDrinkingEvent":
            return "VR飲み会";
          case "storeEvent":
            return "店舗系イベント";
          case "musicEvent":
            return "音楽系イベント";
          case "academicEvent":
            return "学術系イベント";
          case "rolePlayEvent":
            return "ロールプレイ";
          case "forBeginnersEvent":
            return "初心者向けイベント";
          case "regularEvent":
            return "定期イベント";
        }
      }
    });

export const createVrcEventCalenderUrl = (values: VrcEventCalenderType) => {
  const eventCalenderUrl = [
    originalUrl,
    `&entry.${googleFormEntryIds.eventName}=${values.eventName}`,
    `&entry.${
      googleFormEntryIds.availablePlatform
    }=${replaceAvailablePlatformForUrl(values.availablePlatform)}`,
    `&entry.${googleFormEntryIds.date}=${dayjs(values.date).format(
      "YYYY-MM-DD"
    )}`,
    `&entry.${googleFormEntryIds.startTime}=${values.startTime}`,
    `&entry.${googleFormEntryIds.endTime}=${values.endTime}`,
    `&entry.${googleFormEntryIds.eventOwner}=${values.eventOwner}`,
    `&entry.${googleFormEntryIds.eventContent}=${values.eventContent}`,
    `&entry.${googleFormEntryIds.participationConditions}=${values.participationConditions}`,
    `&entry.${googleFormEntryIds.wayToParticipate}=${values.wayToParticipate}`,
    `&entry.${googleFormEntryIds.note}=${values.note}`,
  ];
  const eventGenreUrl: string[] = [];
  replaceEventGenreForUrl(values.eventGenre).forEach((genre) =>
    eventCalenderUrl.push(`&entry.${googleFormEntryIds.eventGenre}=${genre}`)
  );
  eventCalenderUrl.push(eventGenreUrl.join(""));
  if (values.noticeForOverseasUsers)
    eventCalenderUrl.push(
      `&entry.${googleFormEntryIds.noticeForOverseasUsers}=希望する`
    );
  console.dir(eventCalenderUrl.join(""));
  return eventCalenderUrl.join("");
};
