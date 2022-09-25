import dbConnect from "../../../../server/config/database"
import { findProfessionalAppliances } from "../../../../server/professional/professional.service"


export default async function handler(_req, res){
  await dbConnect()
  const professionals = await findProfessionalAppliances()
  return res.status(200).json(professionals)
}
