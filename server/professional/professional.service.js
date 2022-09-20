import Service from "./professional.model";
import Professional from "./professional.model";

export const createProfessional = async (serviceData) => {
  const a = serviceData.name;
  console.log(
    "🚀 ~ file: professional.service.js ~ line 6 ~ createProfessional ~  a ",
    a
  );
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
    const professional = await Service.findOne({
      "professional.passwordResetActivationToken": token,
    });
    return professional;
  } catch (error) {
    throw new Error(error);
  }
};

export const findProfessionalElectrician = async () => {
  const resultAll = []
  try {
    const service = await Service.findOne({
      name: "Electrician"});

    for (let index = 0; index < service.professional.length; index++) {
      const data = {
         id: service.professional[index].id,
         firstName : service.professional[index].firstName,
         lastName : service.professional[index].lastName,
         phone: service.professional[index].phone,
         address: service.professional[index].address,
         city: service.professional[index].city,
         description: service.professional[index].description,
         isActivated: service.professional[index].isActivated,
         image: service.professional[index].image,
    }
      resultAll.push(data)
    } 
    return resultAll;
  } catch (error) {
    throw new Error(error);
  }
};

export const findProfessionalById = async(id) => {
  console.log("🚀 ~ file: professional.service.js ~ line 84 ~ findProfessionalById ~ id", id)
  try {
    const professional = await Service.findOne({
      "professional._id": id,
    });
    return professional;
  } catch (error) {
    throw new Error(error);
  }
};

