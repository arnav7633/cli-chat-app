const Cryptr = require("cryptr");
import { readFileSync } from "fs";
import schema from "./models/password";

interface main {
  encryptionKey: string;
  encrypter: any;
}
class main {
  constructor() {
    const encryptionKey = readFileSync("./src/key.txt", { encoding: "utf-8" });
    this.encrypter = new Cryptr(encryptionKey.toString());
  }
  set(password: string, website: string) {
    const encrypted = this.encrypter.encrypt(password);
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
