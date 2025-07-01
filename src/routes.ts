/**
 * all about auth routes
 * for only unauthorized users
 * @type {string[]}
 */
export const authRoutes = ["/register", "/login", "/forgot-password"];

/**
 * public routes
 * can be access without login or with login
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/sports",
  "/bet-slip",
  "/api/asiaapi",
  "/api/game/32328e87f8592ed205bbaa065dbacce4",
  "/casino",
  "/casino/slots",
  "/live",
  "/casino/popular",
  "/casino/new",
  "/casino/slots",
  "/api/contact",
  "/en",
  "/affiliate",
  "/about-us",
  "/api/apay/deposit",
  "/api/apay/withdraw",
];

/**
 * The prefix for api authentication routes
 * @type {string}
 */
export const apiAuthRoutePrefix = "/api";

/**
 * The prefix for provider api endpoints
 * @type {string}
 */
export const providerApiPrefix = "/api/provider";
