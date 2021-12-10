const express = require('express'),
    pug = require('pug'),
    routes = require('./routes/routes');

const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get("/", routes.home);
// app.get("/login", routes.logIn);
// app.post("/login", urlEncodedParser, routes.logInAction);

app.listen(process.env.PORT || 3000);