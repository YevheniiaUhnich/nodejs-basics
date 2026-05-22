import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
    if(err instanceof createHttpError.HttpError) {
            res.status(err.status).json({
            message: 'Something went wrong',
            error: err.message,
    });
     next();
    return;
    };
    res.status(500).json({
        status: 500,
        message: 'Something went wrong',
        data: err.message,
    })

};