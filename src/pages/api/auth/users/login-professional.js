import { findProfessionalByEmail } from "../../../../../server/professional/professional.service";
import { signToken } from "../../../../../server/auth/auth.service";
import dbConnect from "../../../../../server/config/database";

export default async function loginProfessional(req, res) {
  await dbConnect();
  const { email, password } = req.body;
  const professional = await findProfessionalByEmail(email);
  if (!professional) {
    return res.status(404).json({ message: "User not found" });
  }
  const filterEmail = professional.professional.filter(
    (item) => item.email === email
  );
  const id= filterEmail[0]._id
  try {
    if (!filterEmail) {
      return res.status(400).json({ message: "User does not exist" });
    }
    if (!filterEmail[0].isActivated) {
      return res.status(400).json({ message: "User is not activated" });
    }
    const isMatch = await filterEmail[0].comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const token = await signToken({ email: professional.email });
    return res.status(220).json({ token, id, message: "User logged in" });
  } catch (e) {
    return res.status(500).json({ message: "Internal server error" });
  }
}
