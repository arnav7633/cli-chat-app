"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cryptr = require("cryptr");
const fs_1 = require("fs");
class main {
    constructor() { }
    set(password) {
        const encryptionKey = (0, fs_1.readFileSync)("./src/key.txt");
        const encrypter = new Cryptr(encryptionKey.toString());
        const encrypted = encrypter.encrypt(password);
        const decrypted = encrypter.decrypt(encrypted);
        console.log(decrypted);
    }
}
exports.default = main;
