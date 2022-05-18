//dependencies
import mongoose from "mongoose";

//create the connection function
export default async function conn() {
  try {
    await mongoose
      .connect(process.env.MONGO_DB_CONN_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`Connected to Database`));
  } catch (eror) {
    if (eror) {
      console.log(`Unable to Connect to Dabase with err: ${eror}`);
    }
  }
}
