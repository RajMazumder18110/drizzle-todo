/** @notice library imports */
import { defineConfig } from "drizzle-kit";
/// External imports
import { DB_MIGRATION_PATH, DB_PATH } from "./src/configs";

/// Drizzle config
export default defineConfig({
  schema: "./src/schemas/index.ts",
  out: DB_MIGRATION_PATH,
  dialect: "sqlite",
  dbCredentials: {
    url: DB_PATH,
  },
});
