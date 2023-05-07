export const formData = (req: any) => {
  const numberOfSessions = req.body.input_date[0];
  const date = req.body.input_date[1];
  const isTestModeToggle = req.body.input_date[2];
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
  };
};
