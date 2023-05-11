export const formData = (req: any) => {
  console.log(req.body);
  const numberOfSessions = req.body.numberOfSessions ?? '';
  const date = req.body.date ?? '';
  const isTestModeToggle = req.body.isTestModeToggle ?? '';
  const textData = req.body.textData ?? '';
  // console.log({
  //   numberOfSessions: numberOfSessions,
  //   date: date,
  //   isTestMote: isTestMote,
  // });
  const dateAry = date.split("-");
  const isTestMode = isTestModeToggle === "on" ?? false;

  // console.log({
  //   date: date,
  //   numberOfSessions: numberOfSessions,
  //   dateAry: dateAry,
  //   isTestMode: isTestMode,
  // });

  return {
    date: date,
    numberOfSessions: numberOfSessions,
    dateAry: dateAry,
    isTestMode: isTestMode,
    textData: textData,
  };
};
