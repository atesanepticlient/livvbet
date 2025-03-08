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
export const publicRoutes = ["/", "/casino", "/sports", "/bet-slip"];

/**
 * The prefix for api authentication routes
 * @type {string}
 */
export const apiAuthRoutePrefix = "/api";
