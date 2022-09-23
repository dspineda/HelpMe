import Notifications from './notifications.model';

export const createNotification = async (notificationData) => {
  try {
    const notification = await Notifications.create(notificationData);
    return notification;
  } catch (error) {
    throw new Error(error);
  }
}

export const findNotificationByProfessional = async (professionalId) => {
  try {
    const notification = await Notifications.find({ professional: professionalId });
    return notification;
  } catch (error) {
    throw new Error(error);
  }
}

export const findNotificationByClient = async (clientId) => {
  try {
    const notification = await Notifications.find({ client: clientId });
    return notification;
  } catch (error) {
    throw new Error(error);
  }
}

export const findNotificationByService = async (serviceId) => {
  try {
    const notification = await Notifications.find({ service: serviceId });
    return notification;
  } catch (error) {
    throw new Error(error);
  }
}

export const findNotificationById = async (notificationId) => {
  try {
    const notification = await Notifications.findById(notificationId);
    return notification;
  } catch (error) {
    throw new Error(error);
  }
}

export const updateNotification = async (notificationId, notificationData) => {
  try {
    const notification = await Notifications.findByIdAndUpdate(
      notificationId,
      notificationData,
      { new: true }
    );
    return notification;
  } catch (error) {
    throw new Error(error);
  }
}

export const deleteNotification = async (notificationId) => {
  try {
    const notification = await Notifications.findByIdAndDelete(notificationId);
    return notification;
  } catch (error) {
    throw new Error(error);
  }
}
