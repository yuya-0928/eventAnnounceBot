import { twitter_client } from "./twitterClient";
import fs from "fs";

const pathToImage = "./image/1_.png";
const mediaType = "image/png";
const mediaData = fs.readFileSync(pathToImage);
const mediaSize = fs.statSync(pathToImage).size;

export const initUpload = (): Promise<string> => {
  return makePost("media/upload", {
    command: "INIT",
    total_bytes: mediaSize,
    mediaType: mediaType,
  }).then((data: any) => data.media_id_string);
};

export const appendUpload = (mediaId: string): Promise<string> => {
  return makePost("media/upload", {
    command: "APPEND",
    media_id: mediaId,
    media: mediaData,
    segment_index: 0,
  }).then(() => mediaId);
};

export const finalizeUpload = (mediaId: string) => {
  return makePost("media/upload", {
    command: "FINALIZE",
    media_id: mediaId,
  }).then((data) => data);
};

const makePost = (endpoint: string, params: unknown) => {
  return new Promise((resolve, reject) => {
    twitter_client.post(endpoint, params, (error: unknown, data: unknown) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
