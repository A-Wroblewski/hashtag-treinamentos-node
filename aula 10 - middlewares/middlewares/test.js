export function registerRequest(req, res, next) {
    console.log('nova solicitação');
    console.log('endpoint solicitado:', req.url);
    next();
}
