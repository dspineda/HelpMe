import dbConnect from "../../../../server/config/database"
import Service from "../../../../server/servicio/service.model"


export default async function handler(req, res){
  const cone = await dbConnect()
  console.log("🚀 ~ file: hello.js ~ line 7 ~ handler ~ cone", cone)
  const serv = await Service
  res.status(200).json({serv})
}