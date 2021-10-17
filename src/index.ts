"use-strict";
import * as inquirer from "inquirer";
import encryptHandling from "./set";
import { readFileSync, writeFileSync } from "fs";
import { randomBytes } from "crypto";
import DB from "./database";

require("dotenv-safe").config({
  path: __dirname + "/.env",
  example: __dirname + "/.env.example",
});

interface selection {
  op: string;
}

interface main {
  encryptHandling: encryptHandling;
}
class main {
  constructor() {
    new DB();
    try {
      const currentKey = readFileSync("./src/key.txt");
    } catch (e) {
      const encryptedKey = randomBytes(128).toString("hex");
      writeFileSync("./src/key.txt", encryptedKey);
    }
    this.init();
    this.encryptHandling = new encryptHandling();
  }

  async init() {
    const op = await this.getOP();
    if (op === "Set a new password") {
      const password: any = await inquirer.prompt([
        {
          message: "Enter the website name",
          type: "input",
          name: "website",
        },
        {
          message: "Enter your password",
          type: "password",
          name: "password",
        },
      ]);
      this.encryptHandling.set(password.password, password.website);
    }
  }
  async getOP() {
    const ans: selection = await inquirer.prompt([
      {
        message: "Select your operation",
        type: "list",
        choices: ["Set a new password", "Retrieve a password", "Reset DB"],
        name: "op",
      },
    ]);
    const operation = ans.op;
    return operation;
  }
}

export default main;
