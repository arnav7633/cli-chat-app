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
    const deencrypted = this.encrypter.decrypt(data.password);
    console.log(
      `Password for ${website} with the username ${data.username} is ${deencrypted}`
    );
    process.exit(0);
  }
}

export default Decrypt;
