

const asyncHandler = (requestHandler) => {
    // Execute and return fn, in form of promise
    return (req, res, next) => {
        Promise
        .resolve( requestHandler(req, res, next) )  // Execute Function
        .catch( (err) => next(err) )
    }
}

export {asyncHandler}
