/** @notice library imports */
import { sign, verify } from "jsonwebtoken";
/// External imports
import { JWT_AUTHENTICATION_SECRET } from "@/configs";

/// Auth services
export class AuthService {
  /**
   * @dev Sign jwt secret and returns token.
   * @param {{ email: string }} data the email id of the user.
   * @returns A signed authentication token.
   */
  static async signJwt(data: { email: string }): Promise<string> {
    return sign(data, JWT_AUTHENTICATION_SECRET);
  }

  /**
   * @dev Verify the token secret and returns payload.
   * @param {{ token: string }} data the jwt token.
   * @returns A payload if verified else null.
   */
  static async isValidJwt(data: {
    token: string;
  }): Promise<{ email: string } | null> {
    try {
      const payload = verify(data.token, JWT_AUTHENTICATION_SECRET) as {
        email: string;
      };
      return payload;
    } catch (error) {
      return null;
    }
  }
}
