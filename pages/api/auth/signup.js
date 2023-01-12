import { hash } from "bcryptjs";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const forwarded = req.headers["x-forwarded-for"];

  const ip =
    typeof forwarded === "string"
      ? forwarded.split(/, /)[0]
      : req.socket.remoteAddress;
  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const { username, password } = req.body;
    //Validate
    if (!username || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }
    let connection = await clientPromise;
    let db = connection.db("waste_tracking");
    //Check existing
    const checkExisting = await db
      .collection("user_details")
      .findOne({ username: username });
    // const checkExisting = await db
    //   .collection("user_details")
    //   .findOne({ $or: [{ username: username }, { ip_address: ip }] });
    //Send error response if duplicate user is found
    if (checkExisting) {
      res.status(422).json({ message: "User already exists" });
      return;
    }
    //Hash password
    const status = await db.collection("user_details").insertOne({
      username,
      password: await hash(password, 12),
      ip_address: ip,
    });
    //Send success response
    res.status(201).json({ message: "User created", ...status });
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}
