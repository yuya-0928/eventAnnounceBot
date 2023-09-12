import { Dayjs } from "dayjs";

export type AvailablePlatform = "PC" | "Quest" | "PC&Quest";

export type EventGenre = {
  // アバター試着会
  avatarFittingEvent: boolean;
  // 改変アバター交流会
  modifiedAvaterExchangeEvent: boolean;
  // その他交流会
  otherNetworkingEvent: boolean;
  // VR飲み会
  vrDrinkingEvent: boolean;
  // 店舗系イベント
  storeEvent: boolean;
  // 音楽系イベント
  musicEvent: boolean;
  // 学術系イベント
  academicEvent: boolean;
  // ロールプレイ
  rolePlayEvent: boolean;
  // 初心者向けイベント
  forBeginnersEvent: boolean;
  // 定期イベント
  regularEvent: boolean;
};

export type VrcEventCalenderType = {
  eventName: string;
  availablePlatform: AvailablePlatform;
  date: Dayjs;
  startTime: string;
  endTime: string;
  eventOwner: string;
  eventContent: string;
  eventGenre: EventGenre;
  participationConditions: string;
  wayToParticipate: string;
  note: string;
  noticeForOverseasUsers: boolean;
};
