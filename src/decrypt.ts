const Cryptr = require("cryptr");
import { readFileSync } from "fs";
import schema from "./models/password";

interface Decrypt {
  encrypter: any;
}
class Decrypt {
  constructor() {
    const encryptionKey = readFileSync("./src/key.txt", {
      encoding: "utf-8",
    });
    this.encrypter = new Cryptr(encryptionKey.toString());
  }
  async get(website: string) {
    const data = await schema.findOne({
      website: website,
    });
    if (!data) return console.log("No password found!");
    const encrypted = this.encrypter.decrypt(data.password);
    console.log(encrypted);
    process.exit(0);
  }
}

export default Decrypt;
