const logError = (err) => {
    console.error(err)
   }
   
   const logErrorMiddleware = (err, req, res, next) => {
    logError(err)
    next(err)
   }
   
   const returnError = (err, req, res, next) => {
      logError(err)
      res.status(err.statusCode || 500).json({
         status: "error",
         message: err.message,
      })
   }
   
   const isOperationalError = (error) => {
    if (error instanceof BaseError) {
      return error.isOperational
    }
   
    return false
   }
   
   export {
      logError,
      logErrorMiddleware,
      returnError,
      isOperationalError
   }