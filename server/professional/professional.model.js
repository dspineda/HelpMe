import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const { SALT_ROUNDS } = process.env;

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
    services: {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },

    certificates: [
      {
        name: {
          type: String,
          //required: true,
        },
        url: {
          type: String,
          //required: true,
        },
      },
    ],
    reviews: {
      type: Array,
    },
    rating: {
      type: Number,
      //required: true,
    },
    image: {
      type: String,
      //required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    passwordResetActivationToken: String,
    passwordResetActivationExpires: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ProfessionalSchema.pre("save", async function save(next) {
  const professional = this;

  try {
    if (!professional.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(Number(SALT_ROUNDS));
    const hash = await bcrypt.hash(professional.password, salt);

    professional.password = hash;
  } catch (e) {
    next(e);
  }
});

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

export default models.Professional || model("Professional", ProfessionalSchema);
