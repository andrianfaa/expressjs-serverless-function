import { Request, Response, NextFunction } from "express";

/**
 * Custom SendResponse Middleware
 * @description Middlewares that adds the SendResponse function to the Response object
 * @param _req Express Request Object
 * @param res Express Response Object
 * @param next Express Next Function
 */
export const SendResponseMiddleware = (
    _req: Request,
    res: Response,
    next: NextFunction,
) => {
    // set SendResponse function to response object
    res.sendResponse = <T = null>(
        type: "success" | "error" | "failed",
        statusCode: number,
        options: SendResponseType<T>,
    ): Response => {
        const { message, data } = options;

        return res
            .status(statusCode)
            .json({
                status: type === "success" ? "success" : "error/failed",
                statusCode,
                message,
                data,
            } as SendResponseType<T>)
            .end();
    };

    next();
};
