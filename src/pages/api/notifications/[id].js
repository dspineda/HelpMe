import dbConnect from "../../../../server/config/database";
import { findProfessionalById } from "../../../../server/professional/professional.service";
import { sendMailSendGrid } from "../../../utils/mail";


export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  const { email, name, message, date, time } = req.body;
  

  try {
    let professional = await findProfessionalById(id);
    if (!professional) {
      console.log("Invalid id");
      return res.status(400).json({ message: "Invalid id" });
    }
    
    const emailData = {
      from: '"no-reply" <dspinedao@outlook.com>',
      to: professional[0].email,
      subject: "You have a new request for service",
      preheader: 'Activate your Account Now.',
      template_id: 'd-cfda2e51608d49d79d3e4093e12d9872',
      dynamic_template_data: {
        name,
        message,
        date,
        time,
      },
    }

    await sendMailSendGrid(emailData)
    console.log('Notification sent', professional[0].email )
    return res.status(200).json({message:'Notification sent'})

  } catch (error) {
    console.log("Error finding professional", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

