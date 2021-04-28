exports.notFound = (req,res, next) => {
    const err = new Error('404 - nie odnaleziono strony')
    next(err)
}

// exports.catchErrors = (err, req, res, next) => {
//     res.status(err.status || 500)
//     console.log(err.status)
// }