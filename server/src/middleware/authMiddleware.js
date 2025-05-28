import {requiresAuth} from ('express-openid-connect');


// sample use case: should be used in api routes

// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });
