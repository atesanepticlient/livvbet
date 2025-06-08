"use server";
import { db } from "@/lib/db";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export const sendVerificationCode = async (phone: string) => {
  try {
    // Generate a 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

    // Check if user already exists with this phone (but not verified)
    const existingUser = await db.users.findFirst({
      where: { phone, phoneVerified: false },
    });

    if (existingUser) {
      await db.users.update({
        where: { id: existingUser.id },
        data: {
          verificationCode: code,
          verificationCodeExpiresAt: expiresAt,
        },
      });
    } else {
      await db.users.create({
        data: {
          phone,
          verificationCode: code,
          verificationCodeExpiresAt: expiresAt,
          // Other temporary fields (will be updated in final registration)
          email: `temp-${Date.now()}@example.com`, // Temporary email
          firstName: "Temp",
          lastName: "User",
          password: "temp-password", // Will be updated
          casinoPassword: "temp-password",
          playerId: `temp-${Date.now()}`,
        },
      });
    }

    // Send SMS via Twilio
    await client.messages.create({
      body: `Your verification code is: ${code}`,
      from: twilioPhoneNumber,
      to: phone,
    });

    return { success: "Verification code sent" };
  } catch (error) {
    console.error("Error sending verification code:", error);
    return { error: "Failed to send verification code" };
  }
};
