/** @notice library imports */
import { defineConfig } from "drizzle-kit";
/// External imports
import { DB_MIGRATION_PATH, POSTGRES_DATABASE_URL } from "./src/configs";

/// Drizzle config
export default defineConfig({
  schema: "./src/schemas/index.ts",
  out: DB_MIGRATION_PATH,
  dialect: "postgresql",
  dbCredentials: {
    url: POSTGRES_DATABASE_URL,
  },
});
