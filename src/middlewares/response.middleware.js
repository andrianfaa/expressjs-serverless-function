/**
 * Custom SendResponse Middleware
 * @description Middlewares that adds the SendResponse function to the Response object
 * @param _ Express Request Object
 * @param res Express Response Object
 * @param next Express Next Function
 */
const SendResponseMiddleware = () => (_, res, next) => {
    /**
     * SendResponse function
     * @param {*} type `success` or `error`
     * @param {*} statusCode 200, 400, 401, 403, 500, etc.
     * @param {*} options
     * @returns
     */
    res.sendResponse = (type, statusCode, options) => {
        const { message, data } = options;

        return res
            .status(statusCode)
            .json({
                status: type === "success" ? "success" : "error/failed",
                status_code: statusCode,
                message,
                data: data || null,
                data_length: Array.isArray(data) ? data.length : undefined
            })
            .end();
    };

    next();
};

module.exports = SendResponseMiddleware;
