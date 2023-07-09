function App() {
  return (
    <>
      <h1>エンジニア作業飲み集会通知システム</h1>
      <a href="http://localhost:3001/login">ログインする</a>
      <h2>Tweet&Discord通知&イベントカレンダー登録</h2>
      <form id="message_form" method="POST" action="http://localhost:3001/post_announcement">
        <input type="number" name="numberOfSessions" />
        <input type="date" name="date" />
        <input type="checkbox" name="isTestModeToggle" id="test-mode" />
        <label htmlFor="test-mode">テストモード</label>
        <textarea name="textData">
          次の金曜日も開催するよーーー！ 良かったら遊びにきてねーー！！
        </textarea>
        <input type="submit" value="送信する" />
      </form>
      <h2>当日Discord通知</h2>
      <form
        id="message_form"
        method="POST"
        action="http://localhost:3001/post_announcement_only_discord"
      >
        <input type="number" name="numberOfSessions" />
        <input type="checkbox" name="isTestModeToggle" id="test-mode" />
        <label htmlFor="test-mode">テストモード</label>
        <textarea name="textData">
          今夜開催するよーーー！ 良かったら遊びにきてねーー！！
        </textarea>
        <input type="submit" value="送信する" />
      </form>
    </>
  );
}

export default App;
