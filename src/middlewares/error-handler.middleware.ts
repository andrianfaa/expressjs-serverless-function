import { type Request, type Response, type NextFunction } from "express";

export const ErrorHandlerMiddleware =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => (error: any, _: Request, res: Response, next: NextFunction) => {
        if (error) {
            res.sendResponse(
                "error",
                error?.status || error?.statusCode || 500,
                {
                    message: error?.message || "Internal server error"
                }
            );
            return;
        }

        next();
    };
