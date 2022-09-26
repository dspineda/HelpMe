import dbConnect from "../../../../server/config/database";
import { findProfessionalById } from "../../../../server/professional/professional.service";
import { sendMailSendGrid } from "../../../utils/mail";
import {
  createNotification,
  findNotificationByProfessional,
  updateNotification,
  deleteNotification,
} from "../../../../server/notifications/notifications.service";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  console.log("🚀 ~ file: [id].js ~ line 14 ~ handler ~ id ", id )
  const { email, name, message, date, time, city, address } = req.body;
  switch (req.method) {
    case "GET":
      try {
        const notification = await findNotificationByProfessional(id);
        res.status(200).json(notification);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      const notificationData = {
        description: message,
        date: date,
        time: time,
        professional: id,
        client: name,
        name: name,
        city: city,
        address: address,
        email: email,
      };

      try {
        let professional = await findProfessionalById(id);
        if (!professional) {
          console.log("Invalid id");
          return res.status(400).json({ message: "Invalid id" });
        }

        const emailData = {
          from: '"no-reply" <dspinedao@outlook.com>',
          to: professional[0].email,
          subject: "You have a new request for service",
          preheader: "New Service",
          template_id: "d-39deeaeb75b84a83a098ae7fcce7de6f",
          dynamic_template_data: {
            name,
            message,
            date,
            time,
            url: "http://localhost:3000/login/professional",
          }
        };
        await createNotification(notificationData);
       // await sendMailSendGrid(emailData)
        console.log("Notification sent", professional[0].email);
        return res.status(200).json({ message: "Notification sent" });
      } catch (error) {
        console.log("Error finding professional", error);
        return res.status(500).json({ message: "Internal server error" });
      }
    case "PATCH":
      try {
        const { status, email, date, time, client, description } = req.body;
        console.log("🚀 ~ file: [id].js ~ line 69 ~ handler ~ req.body", req.body)
        
        if (status === "accepted") {
          console.log("🚀 ~ file: [id].js ~ line 72 ~ handler ~ status", status)
          const emailData = {
            from: '"no-reply" <dspinedao@outlook.com>',
            to: email,
            subject: "Your visit has been accepted",
            preheader: "Great. They are ready to go",
            template_id: "d-52b782de6fa648f1bb570ef27acc3179",
            dynamic_template_data: {
              client,
              date,
              time,
              description
            }
          };
          //const respuesta = await sendMailSendGrid(emailData)
          const notification = await updateNotification(id, req.body);
          res.status(200).json(notification);
        }

        if (status === "reject") {
          const emailData = {
            from: '"no-reply" <dspinedao@outlook.com>',
            to: email,
            subject: "Your visit has not been accepted",
            preheader: "Your visit has not been accepted",
            template_id: "d-cd9739cf8fa844acb0737c057453c1fe",
            dynamic_template_data: {
            client,
            date,
            time,
            description
            }
          };
          //await sendMailSendGrid(emailData)
          //const notification = await deleteNotification(id);
          //await notification.remove();
          //res.status(200).json({ success: true, data: {} });
          const notification = await updateNotification(id, req.body);
          res.status(200).json(notification);
        }

        if (status === "completed") {
          const emailData = {
            from: '"no-reply" <dspinedao@outlook.com>',
            to: email,
            subject: "Your visit has not been accepted",
            preheader: "Your visit has not been accepted",
            template_id: "d-8a2d2a8e2c7b4d0d8887f0a55278cc3f",
            dynamic_template_data: {
            client,
            description,
            url: `http://localhost:3000/calification-service/${id}`
            }
          }
          //await sendMailSendGrid(emailData)
          const notification = await updateNotification(id, req.body);
          res.status(200).json(notification);
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
