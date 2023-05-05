export const formData = (req: any) => {
  const numberOfSessions = req.body.input_date[0];
  const date = req.body.input_date[1];
  const dateAry = date.split("-");

  return { date: date, numberOfSessions: numberOfSessions, dateAry: dateAry };
};
