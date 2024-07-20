/** @notice library imports */
import { NextFunction, Request, Response } from "express";
/// External imports
import { NewUser } from "@/schemas/users";
import { APP_COOKIE_NAME } from "@/configs";
import { AuthService } from "@/services/AuthServices";
import { UsersServices } from "@/services/UsersServices";

/// Auth controllers
export class AuthController {
  static async login(_: Request, __: Response) {}

  /// Registers the user and assigns access token.
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      /// Validate parameters
      const payload = req.body as NewUser;

      /// Register the user
      const { email } = await UsersServices.createUser(payload);
      const accessToken = await AuthService.signJwt({ email });

      /// Attach token to cookie
      res.cookie(APP_COOKIE_NAME, accessToken);

      /// Response
      return res.status(201).json({
        success: true,
        message: "SUCCESSFULLY REGISTERED",
      });
    } catch (error) {
      next(error);
    }
  }
}
