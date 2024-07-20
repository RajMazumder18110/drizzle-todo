/** @notice library imports */
import { Router } from "express";
/// External imports
import { AuthController } from "@/api/auth/controllers";

/// Routes
enum AuthRoutes {
  LOGIN = `/login`,
  REGISTER = `/register`,
}

/// Auth router
export const authRouter = Router();

/// Handlers
authRouter.route(AuthRoutes.LOGIN).post(AuthController.login);
authRouter.route(AuthRoutes.REGISTER).post(AuthController.register);
