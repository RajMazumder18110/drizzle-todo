/** @notice library imports */
import "dotenv/config";

/// Application envs
export const PORT = process.env.PORT ?? 3000;
export const JWT_AUTHENTICATION_SECRET = process.env.JWT_AUTHENTICATION_SECRET;

/// PATHS
export const DB_FOLDER_PATH = "./database";
export const DB_PATH = `${DB_FOLDER_PATH}/database.db`;
export const DB_MIGRATION_PATH = `${DB_FOLDER_PATH}/migrations`;

/// Validations
if (!JWT_AUTHENTICATION_SECRET)
  throw new Error(`"JWT_AUTHENTICATION_SECRET" is required`);
