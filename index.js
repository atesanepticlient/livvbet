await client.post(
  "http://apilccwjstest_1xbetcompanl.gksic5ousjiw9pldk3apx6dmbte.com/CreateAccount",
  {
    consumerId: 387,
    firstName: "Ate San",
    lastName: "Epti",
    currencyCode: "BDT",
    password: "1234",
    userName: "epti12345",
  },
  {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      VerificationKey: generateVerificationKey("583295", "tst1xbcomag"),
    },
  }
);
