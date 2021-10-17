"use strict";
"use-strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
const set_1 = __importDefault(require("./set"));
const fs_1 = require("fs");
const crypto_1 = require("crypto");
const database_1 = __importDefault(require("./database"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class main {
    constructor() {
        new database_1.default();
        try {
            const currentKey = (0, fs_1.readFileSync)("./src/key.txt");
            console.log(currentKey.toString());
        }
        catch (e) {
            const encryptedKey = (0, crypto_1.randomBytes)(128).toString("hex");
            (0, fs_1.writeFileSync)("./src/key.txt", encryptedKey);
        }
        this.init();
        this.encryptHandling = new set_1.default();
    }
    async init() {
        const op = await this.getOP();
        if (op === "Set a new password") {
            const password = await inquirer.prompt([
                {
                    message: "Enter your password",
                    type: "password",
                    name: "password",
                },
            ]);
            this.encryptHandling.set(password.password);
        }
    }
    async getOP() {
        const ans = await inquirer.prompt([
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
exports.default = main;
