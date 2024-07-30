import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

type ErrorWithStatus = {
    statusCode?: number;
    message?: string;
    name?: string;
    type?: string;
    errors?: any;
    code?: number;
    keyValue?: any;
};

export const handleError = (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            statusCode: err.statusCode,
            message: err.message,
            success: false
        });
    }

    if (err.name === 'SyntaxError' && err.type === 'entity.parse.failed') {
        return res.status(400).json({
            success: false,
            message: 'Invalid JSON syntax',
            // errors: err.message
        });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            message: err.message,
            errors: err.errors
        });
    }

    if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(400).json({
            success: false,
            message: 'Duplicate key error',
            errors: err.keyValue
        });
    }

    return res.status(500).json({
        success: false,
        message: 'Something went wrong on the server',
    });
};
