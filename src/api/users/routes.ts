/** @notice library imports */
import { Router } from "express";
/// External imports

/// Routes
enum UserRoutes {
  GET_USER = `/`,
  UPDATE_USER = `/`,
  DELETE_USER = `/`,
}

/// Users router
export const usersRouter = Router();

/// Handlers
usersRouter.get(UserRoutes.GET_USER, () => {});
usersRouter.patch(UserRoutes.UPDATE_USER, () => {});
usersRouter.delete(UserRoutes.DELETE_USER, () => {});
