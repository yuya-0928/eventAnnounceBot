import {
  FormLabel as MuiFormLabel,
  FormControl as MuiFormControl,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

type EventGenreType = {
  // アバター試着会
  avaterFitting: boolean;
  // 改変アバター交流会
  modifiedAvaterExchange: boolean;
  // その他交流会
  otherNetworkingEvent: boolean;
  // VR飲み会
  vrDrinkingParty: boolean;
  // 店舗系イベント
  storeEvent: boolean;
  // 音楽系イベント
  musicEvent: boolean;
  // 学術系イベント
  academicEvent: boolean;
  // ロールプレイ
  rolePlay: boolean;
  // 初心者向けイベント
  eventForBeginners: boolean;
  // 定期イベント
  regularEvent: boolean;
};

type Props = {
  initialValue: EventGenreType;
  setEventGenre: (arg0: string, arg1: HTMLInputElement["checked"]) => void;
};

export const EventGenre = ({ initialValue, setEventGenre }: Props) => {
  return (
    <MuiFormControl>
      <MuiFormLabel>イベントジャンル</MuiFormLabel>
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.avaterFitting}
            onChange={(e) => setEventGenre("avaterFitting", e.target.checked)}
          />
        }
        label={"アバター試着会"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.modifiedAvaterExchange}
            onChange={(e) =>
              setEventGenre("modifiedAvaterExchange", e.target.checked)
            }
          />
        }
        label={"改変アバター交流会"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.otherNetworkingEvent}
            onChange={(e) =>
              setEventGenre("otherNetworkingEvent", e.target.checked)
            }
          />
        }
        label={"その他交流会"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.vrDrinkingParty}
            onChange={(e) => setEventGenre("vrDrinkingParty", e.target.checked)}
          />
        }
        label={"VR飲み会"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.storeEvent}
            onChange={(e) => setEventGenre("storeEvent", e.target.checked)}
          />
        }
        label={"店舗系イベント"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.musicEvent}
            onChange={(e) => setEventGenre("musicEvent", e.target.checked)}
          />
        }
        label={"音楽系イベント"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.academicEvent}
            onChange={(e) => setEventGenre("academicEvent", e.target.checked)}
          />
        }
        label={"学術系イベント"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.rolePlay}
            onChange={(e) => setEventGenre("rolePlay", e.target.checked)}
          />
        }
        label={"ロールプレイ"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.eventForBeginners}
            onChange={(e) =>
              setEventGenre("eventForBeginners", e.target.checked)
            }
          />
        }
        label={"初心者向けイベント"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.regularEvent}
            onChange={(e) => setEventGenre("regularEvent", e.target.checked)}
          />
        }
        label={"定期イベント"}
      />
    </MuiFormControl>
  );
};
