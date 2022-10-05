import dbConnect from "../../../../../server/config/database";
import { deleteProfessional } from "../../../../../server/professional/professional.service";

export default async function handler(req, res) {
  await dbConnect();
  const userData = req.body;
  console.log("🚀 ~ file: delete-professional.js ~ line 12 ~ handler ~ userData", userData)
  try {
    const professional = await deleteProfessional(userData);
    console.log('User deleted successfully', professional);
    return res.status(200).json({ message: 'User deleted successfully' });
  }
  catch (error) {
    console.log('Error deleting user', error);
    return res.status(500).json({ message: 'Error deleting user' });
  }
}

