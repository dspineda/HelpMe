import dbConnect from "../../../../server/config/database"
import { findProfessionalElectrician } from "../../../../server/professional/professional.service"


export default async function handlerElectrician(_req, res){
  await dbConnect()
  const professionals = await findProfessionalElectrician()
  return res.status(200).json(professionals)
}
