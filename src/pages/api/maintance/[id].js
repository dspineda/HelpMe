import {findProfessionalById} from "../../../../server/professional/professional.service";
import { verifyToken } from "../../../../server/auth/auth.service";
import dbConnect from "../../../../server/config/database";

export default async function handle(req, res) {
  await dbConnect();
  const { id } = req.query;
  const auth = req.headers?.authorization;
  if (!auth) {
    return res.status(401).json({ error: "No Unauthorized" });
  }
  const token = auth.split(' ')[1];
  const decoded = await verifyToken(token)
  if (!decoded) {
    return res.status(401).json({ error: "No Unauthorized" });
  }
  const { email } = decoded;
  const user = await findProfessionalById(id);
  if(email !== user.email){
    return res.status(401).json({ error: "No Unauthorized" });
  }


  try {
    let electrician = await findProfessionalById(id);
    if (!electrician) {
      console.log("Invalid id");
      return res.status(400).json({ message: "Invalid id" });
    }
    return res.status(200).json(electrician);
  } catch (error) {
    console.log("Error finding electrician", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}