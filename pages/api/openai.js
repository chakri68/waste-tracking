import openai, { generatePrompt } from "../../lib/openai";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(req, res) {
  const token = await getToken({ req, secret });
  if (!token?.data) {
    return res.status(403).json({ ok: false, result: "Login required.." });
  }
  if (req.method === "POST") {
    const {
      body: { location, description, date },
    } = req;
    try {
      const mailBody = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:
          req.body?.prompt ||
          generatePrompt({ description, location, sinceDate: date }),
      });
      res.status(200).json({ ok: true, result: { mailBody } });
    } catch (err) {
      console.log("Caught Error: ", err);
      res.status(500).json({ ok: false, result: null });
    }
  }
  res
    .status(400)
    .json({ message: "No api endpoint found for the request type" });
}
