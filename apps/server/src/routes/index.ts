import { Router } from "express";
import healthRoutes from "./health.routes.js";
import authRoutes from "./auth.routes.js";

const router = Router();

// Health API
router.use("/health", healthRoutes);

// Authentication API
router.use("/auth", authRoutes);

export default router;