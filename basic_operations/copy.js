import fs from "fs";
import { absolutOr } from "../utils/utils.js";
import path from "path";

export const copy = async (input) => {
  const fileNameFirst = input.trim().split(" ")[1];
  const fileNameSecond = input.trim().split(" ")[2];

  const sourceFile = absolutOr(fileNameFirst);
  const destinationFile = path.join(
    absolutOr(fileNameSecond),
    path.basename(sourceFile)
  );

  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(destinationFile);

  readStream.on("error", (err) => {
    console.error(`Error while reading file: ${err.message}`);
  });

  writeStream.on("error", (err) => {
    console.error(`Error while writing file: ${err.message}`);
  });

  readStream.pipe(writeStream);
};
