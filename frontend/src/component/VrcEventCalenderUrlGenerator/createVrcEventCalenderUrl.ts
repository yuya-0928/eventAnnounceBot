import {
  EventGenreType,
  VrcEventCalenderType,
} from "../../types/VrcEventCalenderType";

const originalUrl = new URL(
  "https://docs.google.com/forms/d/e/1FAIpQLSevo0ax6ALIzllRCT7up-3KZkohD3VfG28rcOy8XMqDwRWevQ/viewform"
);

type GoogleFormEntry = {
  [key: string]: string;
};

type EventGenreName = {
  [key: string]: string;
};

const googleFormEntryIds: GoogleFormEntry = {
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

const eventGenreNames: EventGenreName = {
  avatarFittingEvent: "アバター試着会",
  modifiedAvatarExchangeEvent: "改変アバター交流会",
  otherNetworkingEvent: "その他交流会",
  vrDrinkingEvent: "VR飲み会",
  storeEvent: "店舗系イベント",
  musicEvent: "音楽系イベント",
  academicEvent: "学術系イベント",
  rolePlayEvent: "ロールプレイ",
  forBeginnersEvent: "初心者向けイベント",
  regularEvent: "定期イベント",
};

const createUrlParamsBooleanForm = (
  params: URLSearchParams,
  key: string,
  value: string
) => {
  return params.append(`entry.${googleFormEntryIds[key]}`, value);
};

const createUrlParamsStringForm = (
  params: URLSearchParams,
  key: string,
  value: string
) => {
  return params.append(`entry.${googleFormEntryIds[key]}`, value);
};

const createUrlParamsObjectForm = (
  params: URLSearchParams,
  key: string,
  object: EventGenreType
) => {
  Object.entries(object).map((entry) => {
    const eventGenreNameKey = entry[0];
    const value = entry[1];
    if (value) {
      params.append(
        `entry.${googleFormEntryIds[key]}`,
        eventGenreNames[eventGenreNameKey]
      );
    }
  });
};

const createUrlParams = (eventCalenderValues: VrcEventCalenderType) => {
  const params = new URLSearchParams();
  params.append("usp", "pp_url"); // google formにパラメーターで値を渡すために付与する必要がある

  Object.entries(eventCalenderValues).map((entry) => {
    const key = entry[0];
    const value = entry[1];

    switch (typeof value) {
      case "boolean": {
        if (key === "noticeForOverseasUsers" && value === true) {
          createUrlParamsBooleanForm(params, key, "希望する");
        }
        break;
      }

      case "object": {
        if (key === "eventGenre") {
          createUrlParamsObjectForm(params, key, value);
        }
        break;
      }

      default: {
        createUrlParamsStringForm(params, key, value);
        break;
      }
    }
  });

  return params;
};

export const createVrcEventCalenderUrl = (values: VrcEventCalenderType) => {
  const params = createUrlParams(values).toString();
  const eventCalenderUrl = new URL(`${originalUrl.href}?${params}`);

  return eventCalenderUrl.href;
};
