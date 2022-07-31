export const setEventCalenderDate = (date: string) => {
  const eventCalenderParameter = {
    eventName: "エンジニア作業飲み集会",
    isQuestAvelable: "PC/Quest両対応（Quest対応）",
    date: `${date}`,
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

  const eventCalender = [
    "https://docs.google.com/forms/d/e/1FAIpQLSevo0ax6ALIzllRCT7up-3KZkohD3VfG28rcOy8XMqDwRWevQ/viewform?usp=pp_url",
    `&entry.426573786=${eventCalenderParameter.eventName}`,
    `&entry.1261006949=${eventCalenderParameter.isQuestAvelable}`,
    `&entry.450203369=${eventCalenderParameter.date}`,
    `&entry.1010494053=${eventCalenderParameter.startTime}`,
    `&entry.203043324=${eventCalenderParameter.endTime}`,
    `&entry.1540217995=${eventCalenderParameter.eventOwner}`,
    `&entry.701384676=${eventCalenderParameter.evnetContent}`,
    `&entry.1606730788=${eventCalenderParameter.eventGenre1}`,
    `&entry.1606730788=${eventCalenderParameter.eventGenre2}`,
    `&entry.1606730788=${eventCalenderParameter.eventGenre3}`,
    `&entry.2064647146=${eventCalenderParameter.participationConditions}`,
    `&entry.1285455202=${eventCalenderParameter.wayToParticipate}`,
    `&entry.586354013=${eventCalenderParameter.note}`,
  ];

  return eventCalender;
};
