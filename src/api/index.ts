/** @notice library imports */
import { Router } from "express";
/// External imports
import { authRouter } from "@/api/auth";
import { usersRouter } from "@/api/users";

/// Route constants
const VERSION = "v1";
const PREFIX = `/api/${VERSION}`;

/// Routes
enum MainRoutes {
  AUTH = `${PREFIX}/auth`,
  USERS = `${PREFIX}/users`,
  TODOS = `${PREFIX}/todos`,
}

/// Root router
export const rootRouter = Router();

/// Routers
rootRouter.use(MainRoutes.AUTH, authRouter);
rootRouter.use(MainRoutes.USERS, usersRouter);
