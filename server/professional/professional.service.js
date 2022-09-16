import Professional from './professional.model'

export const createProfessional = async (professionalData) => {
  try {
    const professional = await Professional.create(professionalData)
    return professional
  } catch (error) {
    throw new Error(error)
  }
}

export const findProfessionalByEmail = async (email) => {
  try {
    const professional = await Professional.findOne({ email })
    return professional
  } catch (error) {
    throw new Error(error)
  }
}