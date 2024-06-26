export const ROUTE_DEFAULT_PAGE = "/";
export const ROUTE_HOME_PAGE = "/home";
export const ROUTE_ROOM_PAGE = "/room";

export const ROUTE_SETTINGS_PAGE = "/settings";
export const ROUTE_USER_PAGE = "/home";
export const ROUTE_SERVER_PAGE = "/server";
export const ROUTE_CLIENT_PAGE = "/client";
export const ROUTE_ADMIN_PAGE = "/admin";

export const ROUTE_LOGIN_PAGE = "/auth/login";
export const ROUTE_REGISTER_PAGE = "/auth/register";
export const ROUTE_ERROR_PAGE = "/auth/error";
export const ROUTE_RESET_PAGE = "/auth/reset";
export const ROUTE_NEW_PASSWORD = "/auth/new-password";
export const ROUTE_NEW_VERIFICATION = "/auth/new-verification";
export const API_AUTH_PREFIX = "/api/auth";

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [ROUTE_DEFAULT_PAGE, ROUTE_NEW_VERIFICATION];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  ROUTE_LOGIN_PAGE,
  ROUTE_REGISTER_PAGE,
  ROUTE_ERROR_PAGE,
  ROUTE_RESET_PAGE,
  ROUTE_NEW_PASSWORD,
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = API_AUTH_PREFIX;

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_AFTER_LOGIN_REDIRECT = ROUTE_USER_PAGE;
