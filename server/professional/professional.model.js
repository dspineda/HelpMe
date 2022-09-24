import { Schema, model, models } from "mongoose";
import bcrypt from 'bcryptjs';


const ProfessionalSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      //required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      //required: true,
    },
    address: {
      type: String,
      //required: true,
    },
    city: {
      type: String,
      //required: true,
    },
    description: {
      type: String,
      //required: true,
    },
    notifications: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notification",
      },
    ],
    certificates: [
      {
        name: {
          type: String,
        },
        url: {
          type: String,

        },
      },
    ],
    reviews: {
      type: Array,
    },
    rating: {
      type: Number,
    },
    photo: {
      type: String,
      default: "https://res.cloudinary.com/davpin/image/upload/v1663655726/HelpMe%20images/habitos-laborales-tecnico-electricista_vjmtzj.jpg",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    comments: {
      type: String,
    },
    passwordResetActivationToken: String,
    passwordResetActivationExpires: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ServiceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    professional: [ProfessionalSchema],
  },
  {
    timestamps: true,
  }
);

ProfessionalSchema.methods.comparePassword = async function comparepassword(
  enteredPassword,
  next
) {
  const professional = this;

  try {
    const isMatch = await bcrypt.compare(
      enteredPassword,
      professional.password
    );
    return isMatch;
  } catch (e) {
    next(e);
    return false;
  }
};

export default models.Service || model("Service", ServiceSchema);
//const Service = models.Service || model("Service", ServiceSchema);
//const Professional = models.Professional || model("Professional", ProfessionalSchema);

//export { Service, Professional };