const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

//--------------------------------------------//
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' });

// đường dẫn thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// TEMPLATE ENGINE
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
//console.log('PATH: ', path.join(__dirname, 'resources/views')) //xem đường dẫn

//Home, Search, Contact - các file không thuộc các tài nguyên nào khác( chỉ co 1 route)

//HTTP Request logger
app.use(morgan('combined'));

//route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
