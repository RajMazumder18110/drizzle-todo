/** @notice library imports */
import "dotenv/config";

/// Application envs
export const PORT = process.env.PORT ?? 3000;
export const APP_COOKIE_NAME = "TODO_APP";
export const POSTGRES_DATABASE_URL = process.env
  .POSTGRES_DATABASE_URL as string;
export const JWT_AUTHENTICATION_SECRET = process.env
  .JWT_AUTHENTICATION_SECRET as string;

/// PATHS
export const DB_MIGRATION_PATH = `./migrations`;

/// Validations
if (!JWT_AUTHENTICATION_SECRET)
  throw new Error(`"JWT_AUTHENTICATION_SECRET" is required`);
if (!POSTGRES_DATABASE_URL)
  throw new Error(`"POSTGRES_DATABASE_URL" is required`);
