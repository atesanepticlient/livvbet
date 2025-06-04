import { db } from "./src/lib/db.js";

// const seedDeposit = async () => {
//   await db.depositEWallet.createMany({
//     data: [
//       {
//         walletName: "Nagad",
//         walletImage:
//           "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1748705852/ivocuh4zpt2ngc4o6k6r.png",
//         walletNumber: "01735156551",
//         maxDeposit: 25000,
//         minDeposit: 300,
//         rules: "We accept Send money only to the number",
//       },
//       {
//         walletName: "Rocket",
//         walletImage:
//           "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1748445964/jf6x91dejoj71exmviov.png",
//         walletNumber: "01735156552",
//         maxDeposit: 25000,
//         minDeposit: 300,
//         rules: "We accept Send money only to the number",
//       },
//       {
//         walletName: "Upay",
//         walletImage:
//           "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1748446098/tnjohj7yqjdiyr2qdrky.png",
//         walletNumber: "01735156553",
//         maxDeposit: 25000,
//         minDeposit: 300,
//         rules: "We accept Send money only to the number",
//       },
//       {
//         walletName: "Bkash",
//         walletImage:
//           "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1748705821/gn5meirmkoihqzixcaya.png",
//         walletNumber: "01735156550",
//         maxDeposit: 25000,
//         minDeposit: 300,
//         rules: "We accept Send money only to the number",
//       },
//     ],
//   });
//   console.log("Created");
// };
// seedDeposit();
// const seedWithdraw = async () => {
//   await db.withdrawEWallet.createMany({
//     data: [
//       {
//         walletName: "Nagad",
//         walletImage:
//           "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1748705852/ivocuh4zpt2ngc4o6k6r.png",
//       },
//       {
//         walletName: "Rocket",
//         walletImage:
//           "https://res.cloudinary.com/dxs9u7pqc/image/upload/v1748445964/jf6x91dejoj71exmviov.png",
//       },
//     ],
//   });
//   console.log("Created");
// };
// seedWithdraw();
// const seedMessage = async () => {
//   await db.message.createMany({
//     data: [
//       {
//         title: "1000BDT Deposit Accpeted",
//         description: "Congratulation 1000BDT Deposited to your account",
//         userId: "cmbe0whii0000un183jic0fmr",
//       },
//       {
//         title: "2000BDT Deposit Rejected",
//         userId: "cmbe0whii0000un183jic0fmr",
//       },
//     ],
//   });
//   console.log("Created");
// };
// seedMessage();
const seedContact = async () => {
  await db.contact.create({
    data: {
      facebook: "https://www.facebook.com/",
      youtube: "https://www.youtube.com/",
      telegram: "https://web.telegram.org/",
      twitter: "https://www.x.com/",
    },
  });
  console.log("Created");
};

seedContact();
