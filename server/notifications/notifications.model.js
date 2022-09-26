import { Schema, model, models } from "mongoose";

const NotificationSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    professional: {
      type: Schema.Types.ObjectId,
      ref: "Professional",
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true
    },
    read: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "pending",
    },
    calification: {
      type: Number,
      default: 1,
    },
    comment: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Notification || model("Notification", NotificationSchema);