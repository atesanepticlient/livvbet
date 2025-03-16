import crypto from "crypto";
import CryptoJS from "crypto-js";

/**
 * Generate a random 8-character alphanumeric string
 */
function generateRandomString(): string {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length: 8 },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

/**
 * Compute the MD5 hash of a string
 */
function md5Hash(value: string): string {
  return crypto.createHash("md5").update(value).digest("hex");
}

/**
 * Encrypt password using AES-256 ECB mode
 */
function encryptPassword(password: string, agentId: string): string {
  // Use SHA-256 hash of agent ID as the AES key
  const key = CryptoJS.SHA256(agentId);
  const encrypted = CryptoJS.AES.encrypt(password, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}

/**
 * Generate the final verification key
 */
export function generateVerificationKey(
  consumerPassword: string,
  agentId: string
): string {
  const randomStr1 = generateRandomString();
  const md5Random1 = md5Hash(randomStr1);

  const currentDate = new Date();
  const utcDate = currentDate.toISOString().slice(0, 10).replace(/-/g, "");
  const md5Date = md5Hash(utcDate);

  const encryptedPassword = encryptPassword(consumerPassword, agentId);

  const randomStr2 = generateRandomString();
  const md5Random2 = md5Hash(randomStr2);

  // Concatenate all parts to form the verification key
  return `${md5Random1}${md5Date}${encryptedPassword}${md5Random2}`;
}
