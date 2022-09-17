import dbConnect from "../../../../server/config/database";
import crypto from 'crypto';
import { createProfessional, findProfessionalByEmail } from "../../../../server/professional/professional.service";
import {sendMailSendGrid} from "../../../utils/mail";


export default async function handler(req, res) {
  await dbConnect();
  const userData = req.body;
  const userFound = await findProfessionalByEmail(userData.email);

  if (userFound) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    const hash = crypto
      .createHash("sha256")
      .update(userData.email)
      .digest("hex");
      userData.passwordResetActivationToken = hash;
      userData.passwordResetActivationExpires = Date.now() + 3_600_000 * 24; // 24 hour

    const professional = await createProfessional(userData);
    // Send email to professional
    const emailData = {
      from: '"no-reply" <dspinedao@outlook.com>',
      to: userData.email,
      subject: "Welcome to HelpMe!!",
      preheader: 'Activate your Account Now.',
      template_id: 'd-8e132668b8f7429ea99a743ed92f30e6',
      dynamic_template_data: {
        //name: user.name.capitalize(),
        //lastName: user.lastName.capitalize(),
        url: `http://localhost:3000/activate-account/${hash}`,
      },
    };
    await sendMailSendGrid(emailData);
    console.log('User created successfully', professional);
    return res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.log('Error creating user', error);
    return res.status(500).json({ message: 'Error creating user' });
  }
}
