import zod from "zod";

export const registerSchema = zod
  .object({
    email: zod.string().email(),
    phone: zod.string().min(1, "Phone number is required"),
    firstName: zod
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(15, "First namecannot be more than 15 characters long"),
    lastName: zod
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(15, "First namecannot be more than 15 characters long"),
    password: zod.string().min(6, "Password must be at least 6 characters"),
    promo: zod.optional(zod.string()),
    confirmPassword: zod.string().min(1, "Confirm password is required"),
    currencyCode: zod.string().min(1, "Currency code is required"),
  })
  .refine(
    (data) => {
      if (data.password) {
        return data.password == data.confirmPassword;
      }
      return true;
    },
    { path: ["confirmPassword"], message: "Confirm Password did not match" }
  );

export const loginSchema = zod.object({
  email: zod.string().min(1, "Email or Player id is required"),
  password: zod.string().min(1, "Password is required"),
});

export const passwordChangeSchema = zod
  .object({
    currentPassword: zod.string().min(1, "Password is required"),
    password: zod.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: zod.string().min(1, "Confirm password is required"),
  })
  .refine(
    (data) => {
      if (data.password) {
        return data.password == data.confirmPassword;
      }
      return true;
    },
    { path: ["confirmPassword"], message: "Confirm Password did not match" }
  );

export const nameChangeSchema = zod.object({
  firstName: zod
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(10, "First namecannot be more than 6 characters long"),
  lastName: zod
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(10, "First namecannot be more than 6 characters long"),
});

export const phoneNumberChangeSchema = zod.object({
  password: zod.string().min(1, "Password is required"),
  phone: zod.string().min(1, "Phone number is required"),
});

export const makeDepositScehma = zod.object({
  payTo: zod.string().min(1, "Payment Number is required"),
  payFrom: zod.string().min(1, "Payment Number is required"),
  amount: zod.string().min(1, "Enter Amount"),
  transactionId: zod.string().min(1, "Transaction Id is require"),
});

export const makeWithdrawScehma = zod.object({
  payTo: zod.string().min(1, "Payment Number is required"),
  amount: zod.string().min(1, "Enter Amount"),
});
