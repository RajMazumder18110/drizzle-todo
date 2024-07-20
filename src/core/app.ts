/** @notice library imports */
import cors from "cors";
import morgan from "morgan";
import express from "express";
/// External imports
import { rootRouter } from "@/api";

/// Application
export const app = express();

/// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

/// Router
app.use(rootRouter);
