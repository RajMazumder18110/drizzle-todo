/** @notice library imports */
import cors from "cors";
import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser";
/// External imports
import { rootRouter } from "@/api";

/// Application
export const app = express();

/// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

/// Router
app.use(rootRouter);
