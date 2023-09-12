import {
  FormLabel as MuiFormLabel,
  FormControl as MuiFormControl,
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import { EventGenreType } from "../../../types/VrcEventCalenderType";

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
            checked={initialValue.avatarFittingEvent}
            onChange={(e) => setEventGenre("avatarFittingEvent", e.target.checked)}
          />
        }
        label={"アバター試着会"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.modifiedAvatarExchangeEvent}
            onChange={(e) =>
              setEventGenre("modifiedAvatarExchangeEvent", e.target.checked)
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
            checked={initialValue.vrDrinkingEvent}
            onChange={(e) => setEventGenre("vrDrinkingEvent", e.target.checked)}
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
            checked={initialValue.rolePlayEvent}
            onChange={(e) => setEventGenre("rolePlayEvent", e.target.checked)}
          />
        }
        label={"ロールプレイ"}
      />
      <MuiFormControlLabel
        control={
          <MuiCheckbox
            checked={initialValue.forBeginnersEvent}
            onChange={(e) =>
              setEventGenre("forBeginnersEvent", e.target.checked)
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
