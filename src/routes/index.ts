import { Router } from "express";
import CustomerRoutes from "./CustomerRoutes";
import LoginRoutes from "./LoginRoutes";



const baseUrl="/api/v1/";
const router:Router=Router();
router.use(`${baseUrl}customer`,new CustomerRoutes().getRouter());
router.use(`${baseUrl}login`,new LoginRoutes().getRouter());

export default router;