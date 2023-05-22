const ErrorHandlerMiddleware =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => (error, _, res, next) => {
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

module.exports = ErrorHandlerMiddleware;
