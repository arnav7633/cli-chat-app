import { Schema, model } from "mongoose";

interface Imodel {
  website: string;
  password: string;
  username: string;
}

const schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  website: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const MacroModel = model<Imodel>("passwords", schema);

export default MacroModel;
