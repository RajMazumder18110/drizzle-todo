/** @notice library imports */
import { sql } from "drizzle-orm";
import {
  text,
  integer,
  sqliteTable,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

/// Users table
export const users = sqliteTable(
  "users",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    password: text("password").notNull(),
    email: text("email").notNull().unique(),
    createdAt: text("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at")
      .notNull()
      .$onUpdate(() => sql`CURRENT_TIMESTAMP`),
  },

  (table) => {
    return {
      /// Indexers
      emailIdx: uniqueIndex("users_email_idx").on(table.email),
    };
  }
);

/// Users relation

/// Types
export type UserWithPassword = typeof users.$inferSelect;
export type User = Omit<UserWithPassword, "password" | "id">;
export type NewUser = typeof users.$inferInsert;
