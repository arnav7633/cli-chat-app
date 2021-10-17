import { connect, connection } from "mongoose";

class db {
  constructor() {
    this.instaniate();
  }
  instaniate() {
    connect(process.env.MONGODB_URI!);
    let database = connection;

    database.on("connected", () => console.log("MongoDB connected"));
  }
}

export default db;
