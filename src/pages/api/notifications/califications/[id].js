import dbConnect from "../../../../../server/config/database";
import { updateNotification } from "../../../../../server/notifications/notifications.service";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  console.log("🚀 ~ file: [id].js ~ line 7 ~ handler ~ id", id)
  const body = req.body
  console.log("🚀 ~ file: [id].js ~ line 8 ~ handler ~ body", body)
  switch (req.method) {
    case "PATCH":
      try {
        const notification = await updateNotification(id, req.body);
        console.log("🚀 ~ file: [id].js ~ line 14 ~ handler ~ notification", notification)
        res.status(200).json(notification);
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
}
