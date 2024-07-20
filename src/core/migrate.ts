/** @notice library imports */
import { migrate } from "drizzle-orm/postgres-js/migrator";
/// External imports
import { dbClient, pgClient } from "./dbClient";
import { DB_MIGRATION_PATH } from "../configs";

/// Migration runner
migrate(dbClient, { migrationsFolder: DB_MIGRATION_PATH })
  .then(() => pgClient.end())
  .then(() => console.log(`🔥 Migrated successfully`))
  .catch((err) => console.error(err));
