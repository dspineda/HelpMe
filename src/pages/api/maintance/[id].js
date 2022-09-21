import {findProfessionalById} from "../../../../server/professional/professional.service";
import dbConnect from "../../../../server/config/database";

export default async function handle(req, res) {
  await dbConnect();
  const { id } = req.query;
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