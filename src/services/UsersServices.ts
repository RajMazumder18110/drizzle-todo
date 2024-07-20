/** @notice library imports */
import { eq } from "drizzle-orm";
/// External imports
import { dbClient } from "@/core/dbClient";
import { NewUser, User, users } from "@/schemas/users";

/// Users services
export class UsersServices {
  /**
   * @dev Creates an user based on `data`.
   * @param {NewUser} data The new user data.
   */
  static async createUser(data: NewUser): Promise<User> {
    /// Checking if any user available
    const isUserPresent = await this.findByEmail({ email: data.email });
    if (isUserPresent) {
      throw new Error("EMAIL_IS_NOT_UNIQUE");
    }

    /// Create new user.
    const [newUser] = await dbClient.insert(users).values(data).returning();
    const { id: _, password: __, ...userFormatted } = newUser;
    return userFormatted;
  }

  /**
   * @dev Returns the user matched with `email` if any.
   * @param {{ email: string }} data The email you wants to find.
   */
  static async findByEmail(data: { email: string }): Promise<User | undefined> {
    return dbClient.query.users.findFirst({
      where: eq(users.email, data.email),
    });
  }
}
