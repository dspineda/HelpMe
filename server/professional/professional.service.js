import Service from "./professional.model";
import Professional from "./professional.model";

export const createProfessional = async (serviceData) => {
  const a = serviceData.name
  console.log("🚀 ~ file: professional.service.js ~ line 6 ~ createProfessional ~  a ",  a )
  try {
    const findNameService = await Service.findOne({ name: serviceData.name });
    if (!findNameService) {
      const professional = await Service.create(serviceData);
      return professional;
    }
    if (findNameService) {
      return Service.findOneAndUpdate(
        { name: serviceData.name },
        { $push: { professional: serviceData.professional } },
        { new: true }
      );
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const findProfessionalByEmail = async (email) => {
  try {
    const professional = await Service.findOne({ "professional.email": email });
    return professional;
  } catch (error) {
    throw new Error(error);
  }
};

export const findOneUserByResetToken = async (token) => {
  try {
    const professional = await Service.findOne({"professional.passwordResetActivationToken": token})
    return professional;
  } catch (error) {
    throw new Error(error); 
  }
}