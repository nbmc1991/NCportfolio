const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 7777;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => console.log(`server listening on http://localhost:${PORT}`));