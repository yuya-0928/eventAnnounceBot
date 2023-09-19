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

const convertAvailablePlatformForUrl = (
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

const convertEventGenreForUrl = (eventGenres: EventGenreType) =>
  Object.entries(eventGenres)
    .filter((genre) => genre[1] === true)
    .map((genre) => {
      {
        switch (genre[0]) {
          case "avatarFittingEvent":
            return "アバター試着会";
          case "modifiedAvatarExchangeEvent":
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
          default:
            return "";
        }
      }
    });

const createEntryUrlParams = (entryId: string, value: string) => {
  return `&entry.${entryId}=${value}`;
};

const createEventGenreUrlParams = (eventGenre: EventGenreType) => {
  const urlParams: string[] = [];
  convertEventGenreForUrl(eventGenre).forEach((genre) =>
    urlParams.push(createEntryUrlParams(googleFormEntryIds.eventGenre, genre))
  );
  return urlParams.join("");
};

export const createVrcEventCalenderUrl = (values: VrcEventCalenderType) => {
  const eventCalenderParams = [
    createEntryUrlParams(googleFormEntryIds.eventName, values.eventName),
    createEntryUrlParams(
      googleFormEntryIds.availablePlatform,
      convertAvailablePlatformForUrl(values.availablePlatform)
    ),
    createEntryUrlParams(
      googleFormEntryIds.date,
      dayjs(values.date).format("YYYY-MM-DD")
    ),
    createEntryUrlParams(googleFormEntryIds.startTime, values.startTime),
    createEntryUrlParams(googleFormEntryIds.endTime, values.endTime),
    createEntryUrlParams(googleFormEntryIds.eventOwner, values.eventOwner),
    createEntryUrlParams(googleFormEntryIds.eventContent, values.eventContent),
    createEntryUrlParams(
      googleFormEntryIds.participationConditions,
      values.participationConditions
    ),
    createEntryUrlParams(
      googleFormEntryIds.wayToParticipate,
      values.wayToParticipate
    ),
    createEntryUrlParams(googleFormEntryIds.note, values.note),
  ].join("");
  const eventGenreUrlParams = createEventGenreUrlParams(values.eventGenre);
  const noticeForOverseasUsersUrlParams = createEntryUrlParams(
    googleFormEntryIds.noticeForOverseasUsers,
    "希望する"
  );

  let eventCalenderUrl;
  if (values.noticeForOverseasUsers) {
    eventCalenderUrl =
      originalUrl +
      eventCalenderParams +
      eventGenreUrlParams +
      noticeForOverseasUsersUrlParams;
  } else {
    eventCalenderUrl = originalUrl + eventCalenderParams + eventGenreUrlParams;
  }

  return eventCalenderUrl;
};
