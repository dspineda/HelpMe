import { findOneUserByResetToken } from "../../../../../server/professional/professional.service";
import { signToken } from "../../../../../server/auth/auth.service";
import dbConnect from "../../../../../server/config/database";

export default async function verifyAccount(req, res) {
  await dbConnect();
  const { token } = req.query;
  try {
    let professional = await findOneUserByResetToken(token);
    console.log(
      "🚀 ~ file: [token].js ~ line 11 ~ verifyAccount ~ professional",
      professional
    );
    if (!professional) {
      console.log("Invalid token");
      return res.status(400).json({ message: "Invalid token" });
    }

    /*if (professional.passwordResetActivationExpires < Date.now()) {
      console.log("Token expired");
      return res.status(400).json({ message: "Token expired" });
    }*/

    if (professional.isActivated === true) {
      const jwt = await signToken({ email: professional.email });
      console.log("Account activated successfully");
      return res.status(200).json({ token: jwt, id: professional._id });
    } else {
      professional.isActivated = true;
      await professional.save();
      const jwt = await signToken({ email: professional.email });
      console.log("Account activated successfully");
      return res.status(200).json({ token: jwt, id: professional._id });
    }
  } catch (error) {
    console.log("Error activating account", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
