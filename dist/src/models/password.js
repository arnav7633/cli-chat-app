"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    _id: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    website: { type: String, required: true },
    password: { type: String, required: true },
});
const MacroModel = (0, mongoose_1.model)("passwords", schema);
exports.default = MacroModel;
