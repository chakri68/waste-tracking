import { getToken } from "next-auth/jwt";
import clientPromise from "../../lib/mongodb";
import { isInCircle } from "../../lib/locationUtils";

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(req, res) {
  const token = await getToken({ req, secret });
  if (!token?.user) {
    return res.status(403).json({ ok: false, result: "Login required.." });
  }
  const {
    body: { username, center, radius, lat, long },
  } = req;
  if (req.method != "POST")
    return res.status(400).json({ error: "No endpoint found", result: null });
  try {
    let connection = await clientPromise;
    let db = connection.db("waste_tracking");
    let data = await db
      .collection("user_details")
      .find({})
      .project({ reports: 1, _id: 0, username: 1, volunteeringForms: 1 })
      .toArray();
    let reqData = data.reduce((result, user) => {
      if (user.reports) {
        let reports = user.reports.filter((report) => {
          if (
            isInCircle(
              { center, radius },
              {
                lat: report.geoLocation.lat,
                long: report.geoLocation.long,
              }
            )
          ) {
            return true;
          }
          return false;
        });
        if (reports.length != 0) {
          result.push({
            username: user.username,
            reports: reports,
          });
        }
      }
      return result;
    }, []);
    if (!reqData) {
      return res.status(200).json({ ok: false, result: null });
    }
    res.status(200).json({ ok: true, result: reqData });
  } catch (err) {
    console.log("Caught Error: ", err);
    res.status(500).json({ ok: false, result: null });
  }
}
