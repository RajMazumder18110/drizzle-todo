/** @notice library imports */
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
/// External imports
import { DB_PATH } from "@/configs";
import * as schema from "@/schemas";

/// DB client
const sqlite = new Database(DB_PATH);
export const dbClient = drizzle(sqlite, { schema });
