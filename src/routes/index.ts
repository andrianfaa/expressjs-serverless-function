import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.sendResponse("success", 200, {
        message: "Welcome to the API"
    });
});

export default router;
