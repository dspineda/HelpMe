import dbConnect from "../../../../server/config/database"
import { findProfessionalAutomation } from "../../../../server/professional/professional.service"


export default async function handler(_req, res){
  await dbConnect()
  const professionals = await findProfessionalAutomation()
  return res.status(200).json(professionals)
}
