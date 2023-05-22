/// <reference types="express" />

declare global {
    interface SendResponseType<T = null> {
        status?: "success" | "error/failed";
        statusCode?: number; // HTTP Status Code (ex: 200, 201, 404, 500, etc.)
        message: string;
        data?: T;
    }

    namespace Express {
        interface Response {
            sendResponse: <T = null>(
                type: "success" | "error" | "failed",
                statusCode: number,
                options: SendResponseType<T>
            ) => Response;
        }
    }
}

export {};
