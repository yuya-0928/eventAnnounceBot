import express from "express";

export type TypeFormData = {
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
  const textData = req.body.textData ?? "";
  const dateAry = date.split("-");
  const isTestMode = req.body.isTestMode ?? false;

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
