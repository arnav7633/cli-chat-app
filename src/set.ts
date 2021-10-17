const Cryptr = require("cryptr");
import { readFileSync } from "fs";
import schema from "./models/password";
class main {
  constructor() {}
  set(password: string, website: string) {
    const encryptionKey = readFileSync("./src/key.txt");
    const encrypter = new Cryptr(encryptionKey.toString());
    const encrypted = encrypter.encrypt(password);
    schema
      .findOneAndUpdate(
        {
          website: website,
        },
        {
          password: encrypted,
        },
        {
          upsert: true,
        }
      )
      .then(() => {
        console.log("Saved!");
        process.exit(0);
      });
  }
}

export default main;
