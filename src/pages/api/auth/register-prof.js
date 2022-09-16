import dbConnect from "../../../../server/config/database";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { signToken } from "../../../../server/auth/auth.service";
import { createProfessional, findProfessionalByEmail } from "../../../../server/professional/professional.service";
 


export default async function handler(req, res) {
  await dbConnect ();
  const userData = req.body;
  const { email, password } = req.body;
  const userFound = await findProfessionalByEmail(email);

  if (userFound) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hash = await bcrypt.hash(password, 10);
  const verificationCode = crypto.randomBytes(20).toString('hex');
  const newUser = await createProfessional({ ...userData, password: hash, verificationCode });
  const token = await signToken({ email: newUser.email, id: newUser._id });
  res.status(201).json({ token });
}


