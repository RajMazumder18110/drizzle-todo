/** @notice library imports */
import {
  text,
  pgTable,
  uniqueIndex,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";

/// Users table
export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    password: text("password").notNull(),
    email: text("email").notNull().unique(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdate(() => new Date()),
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
