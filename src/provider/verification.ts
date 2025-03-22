import CryptoJS from "crypto-js";

export function generateVerificationKey(
  agentId: string,
  password: string,
  randomString1: string,
  randomString2: string
) {
  // Step 1: Compute MD5 hashes for the random strings
  const md5Part1 = CryptoJS.MD5(randomString1).toString();
  const md5Part2 = CryptoJS.MD5(randomString2).toString();

  // Step 2: Get the current UTC date in yyyymmdd format and then hash it with MD5
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const md5CurrentDate = CryptoJS.MD5(currentDate).toString();

  // Step 3: Generate SHA-256 hash of the Authorization Key for AES key
  const key = CryptoJS.SHA256(agentId).toString(CryptoJS.enc.Hex);

  // Step 4: Encrypt the password using AES-256 with the SHA-256 key
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    CryptoJS.enc.Hex.parse(key),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  ).toString();

  // Step 5: Concatenate all parts to form the verification key
  const verificationKey =
    md5Part1 + md5CurrentDate + encryptedPassword + md5Part2;
  return {
    verificationKey,
    md5Part1,
    md5Part2,
    md5CurrentDate,
    encryptedPassword,
  };
}
