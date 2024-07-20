/** @notice library imports */
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
/// External imports
import { dbClient } from "./dbClient";
import { DB_MIGRATION_PATH } from "../configs";

/// Migration runner
migrate(dbClient, { migrationsFolder: DB_MIGRATION_PATH });
