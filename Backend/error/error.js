class ErrorHandler extends Error{
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

    }
}

//ErrorHandler-(eg:You raise your hand and tell the teacher you have a problem)	this throw an error with a message and status code

 export const errorMiddleware = (err, req, res, next) =>{
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
      }
    
    
      if (err.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return next(new ErrorHandler(validationErrors.join(', '), 400));
      }

    return res.status(err.statusCode).json({
          success: false, //"success": false → tells the frontend that the request failed.
          message: err.message, 
    });
 };
 // errorMiddleware -(eg:The teacher listens and helps you)	Express catches the error and sends a proper response

 export default ErrorHandler;