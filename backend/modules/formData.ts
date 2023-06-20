import express from "express";

type TypeFormData = {
  date: string;
  numberOfSessions: string;
  dateAry: string[];
  isTestMode: boolean;
  textData: string;
};

export const formData = (req: express.Request): TypeFormData => {
  console.log(req.body);
  const numberOfSessions = req.body.numberOfSessions ?? "";
  const date = req.body.date ?? "";
  const isTestModeToggle = req.body.isTestModeToggle ?? "";
  const textData = req.body.textData ?? "";
  const dateAry = date.split("-");
  const isTestMode = isTestModeToggle === "on" ?? false;

  console.log({
    date: date,
    numberOfSessions: numberOfSessions,
    dateAry: dateAry,
    isTestMode: isTestMode,
    textData: textData,
  });

  return {
    date: date,
    numberOfSessions: numberOfSessions,
    dateAry: dateAry,
    isTestMode: isTestMode,
    textData: textData,
  };
};
