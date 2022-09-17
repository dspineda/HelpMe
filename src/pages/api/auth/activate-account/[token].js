import { findOneUser } from "../../../../../server/professional/professional.service";
import { signToken } from "../../../../../server/auth/auth.service";
import dbConnect from "../../../../../server/config/database";

export default async function verifyAccount(req, res) {
  await dbConnect();
  const { token } = req.query;
  try {
    const professional = await findOneUser({ passwordResetActivationToken: token });
    if (!professional) {
      console.log('Invalid token');
      return res.status(400).json({ message: "Invalid token" });
    }

    if (professional.passwordResetActivationExpires < Date.now()) {
      console.log('Token expired');
      return res.status(400).json({ message: "Token expired" });
    }

    professional.passwordResetActivationToken = null;
    professional.passwordResetActivationExpires = null;
    professional.isActivated = true;

    await professional.save();

    const jwt = await signToken({ email: professional.email });
    console.log('Account activated successfully');
    return res.status(200).json({ token: jwt });
  } catch (error) {
    console.log('Error activating account', error);
    return res.status(500).json({ message: "Internal server error" });
  }
}