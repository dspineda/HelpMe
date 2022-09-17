import { findProfessionalByEmail } from "../../../../server/professional/professional.service";
import { signToken } from "../../../../server/auth/auth.service";
import dbConnect from "../../../../server/config/database";


export default async function loginProf(req, res) {
await dbConnect();
  const { email, password } = req.body;
  const professional = await findProfessionalByEmail(email);
    try{
    if (!professional) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await professional.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const token = await signToken({ email: professional.email });
    return res.status(220).json({ token });
  } catch (e) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

