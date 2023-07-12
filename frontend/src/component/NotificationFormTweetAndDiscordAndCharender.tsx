export const NotificationFormTweetAndDiscordAndCharender = () => {
  return (
    <>
      <h2>Tweet&Discord通知&イベントカレンダー登録</h2>
      <form
        id="message_form"
        method="POST"
        action="http://localhost:3001/post_announcement"
      >
        <input type="number" name="numberOfSessions" />
        <input type="date" name="date" />
        <input type="checkbox" name="isTestModeToggle" id="test-mode" />
        <label htmlFor="test-mode">テストモード</label>
        <textarea name="textData">
          次の金曜日も開催するよーーー！ 良かったら遊びにきてねーー！！
        </textarea>
        <input type="submit" value="送信する" />
      </form>
    </>
  );
};
