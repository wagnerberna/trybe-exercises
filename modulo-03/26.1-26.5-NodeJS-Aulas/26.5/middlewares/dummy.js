



module.exports = (req, res, next) => {
    const responseTime = Date.now() - req.startTime;
    res.status(200).json({ method: req.method, responseTime, user:req.user } );
}