"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class db {
    constructor() {
        this.instaniate();
    }
    instaniate() {
        (0, mongoose_1.connect)(process.env.MONGODB_URI);
        let database = mongoose_1.connection;
        database.on("connected", () => console.log("MongoDB connected"));
    }
}
exports.default = db;
