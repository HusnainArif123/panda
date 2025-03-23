import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import User from "@/models/userModel";

export const sendVerificationEmail = async (
  email: any,
  emailType: any,
  userId: any
) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    //find user then update data

    if (emailType === "VERIFY") {
      await User.findOneAndUpdate(
        { _id: userId },
        {
          verificationToken: hashedToken,
          verificationExpire: Date.now() + 3600000,
        }
      );
    } else if (emailType === "RESET") {
      await User.findOneAndUpdate(
        { _id: userId },
        {
          forgotPasswordToken: hashedToken,
          forgetPasswordExpire: Date.now() + 3600000,
        }
      );
    }
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "Husnain",
        pass: "12345",
      },
    });

    const mailOptions = {
      from: "husnainarif730@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your email",
      html: `<p>Click   <a href=${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}>here</a> to ${
        emailType === "VERIFY" ? "Verify your email" : "Reset your email"
      }</p>`,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
