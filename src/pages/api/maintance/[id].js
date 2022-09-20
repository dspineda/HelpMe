import {findProfessionalById} from "../../../../server/professional/professional.service";
import dbConnect from "../../../../server/config/database";

export default async function findElectricianById(req, res) {
  await dbConnect();
  const professionalById = []
  const { id } = req.query;
  try {
    let electrician = await findProfessionalById(id);
  
    if (!electrician) {
      console.log("Invalid id");
      return res.status(400).json({ message: "Invalid id" });
    }
    for (let i = 0; i <= electrician.professional.length; i++) {
      if (electrician.professional[i].id === id) {
        professionalById.push(electrician.professional[i])
        return res.status(200).json({ professionalById });
      }
    }
  } catch (error) {
    console.log("Error finding electrician", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}