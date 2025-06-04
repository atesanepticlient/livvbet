/**
 * all about auth routes
 * for only unauthorized users
 * @type {string[]}
 */
export const authRoutes = ["/register", "/login", "/forget-password"];

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
