import Service from "./professional.model";

export const createProfessional = async (serviceData) => {
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

export const deleteProfessional = async (serviceData) => {
  try {
    const findNameService = await Service.findOne({ name: serviceData.name });

    if (findNameService) {
      return Service.findOneAndUpdate(
        { name: serviceData.name },
        { $pull: { professional: serviceData.professional } },
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
    const appliances = await Service.findOne({
      name: "Home appliances expert",
    });

    const automation = await Service.findOne({
      name: "Home automation expert",
    });

    const electrician = await Service.findOne({
      name: "Electrician",
    });

    const professionalAppliances = appliances.professional.find(
      (professional) => {
        return professional.passwordResetActivationToken === token;
      }
    );
    const professionalAutomation = automation.professional.find(
      (professional) => {
        return professional.passwordResetActivationToken === token;
      }
    );
    const professionalElectrician = electrician.professional.find(
      (professional) => {
        return professional.passwordResetActivationToken === token;
      }
    );

    if (professionalAppliances) {
      return professionalAppliances;
    }

    if (professionalAutomation) {
      return professionalAutomation;
    }

    if (professionalElectrician) {
      return professionalElectrician;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const findProfessionalElectrician = async () => {
  const resultAll = [];
  try {
    const service = await Service.findOne({
      name: "Electrician",
    });

    for (let index = 0; index < service.professional.length; index++) {
      const data = {
        id: service.professional[index].id,
        firstName: service.professional[index].firstName,
        lastName: service.professional[index].lastName,
        phone: service.professional[index].phone,
        address: service.professional[index].address,
        city: service.professional[index].city,
        description: service.professional[index].description,
        isActivated: service.professional[index].isActivated,
        photo: service.professional[index].photo,
      };
      resultAll.push(data);
    }
    return resultAll;
  } catch (error) {
    throw new Error(error);
  }
};

export const findProfessionalAutomation = async () => {
  const resultAll = [];
  try {
    const service = await Service.findOne({
      name: "Home automation expert",
    });

    for (let index = 0; index < service.professional.length; index++) {
      const data = {
        id: service.professional[index].id,
        firstName: service.professional[index].firstName,
        lastName: service.professional[index].lastName,
        phone: service.professional[index].phone,
        address: service.professional[index].address,
        city: service.professional[index].city,
        description: service.professional[index].description,
        isActivated: service.professional[index].isActivated,
        photo: service.professional[index].photo,
      };
      resultAll.push(data);
    }
    return resultAll;
  } catch (error) {
    throw new Error(error);
  }
};

export const findProfessionalAppliances = async () => {
  const resultAll = [];
  try {
    const service = await Service.findOne({
      name: "Home appliances expert",
    });

    for (let index = 0; index < service.professional.length; index++) {
      const data = {
        id: service.professional[index].id,
        firstName: service.professional[index].firstName,
        lastName: service.professional[index].lastName,
        phone: service.professional[index].phone,
        address: service.professional[index].address,
        city: service.professional[index].city,
        description: service.professional[index].description,
        isActivated: service.professional[index].isActivated,
        photo: service.professional[index].photo,
      };
      resultAll.push(data);
    }
    return resultAll;
  } catch (error) {
    throw new Error(error);
  }
};

export const findProfessionalBuilder = async () => {
  const resultAll = [];
  try {
    const service = await Service.findOne({
      name: "Builder, plumber, painter",
    });

    for (let index = 0; index < service.professional.length; index++) {
      const data = {
        id: service.professional[index].id,
        firstName: service.professional[index].firstName,
        lastName: service.professional[index].lastName,
        phone: service.professional[index].phone,
        address: service.professional[index].address,
        city: service.professional[index].city,
        description: service.professional[index].description,
        isActivated: service.professional[index].isActivated,
        photo: service.professional[index].photo,
      };
      resultAll.push(data);
    }
    return resultAll;
  } catch (error) {
    throw new Error(error);
  }
};

export const findProfessionalById = async (id) => {
  const resultProfessional = [];
  try {
    const result = await Service.findOne({
      "professional._id": id,
    });

    for (let index = 0; index <= result.professional.length; index++) {
      if (result.professional[index].id === id) {
        const data = {
          id: result.professional[index].id,
          firstName: result.professional[index].firstName,
          lastName: result.professional[index].lastName,
          phone: result.professional[index].phone,
          address: result.professional[index].address,
          city: result.professional[index].city,
          description: result.professional[index].description,
          email: result.professional[index].email,
          photo: result.professional[index].photo,
          notifications: result.professional[index].notifications,
          //certificates: result.professional[index].certificates,
        };
        resultProfessional.push(data);
        return resultProfessional;
      }
    }
  } catch (error) {
    throw new Error(error);
  }
};
