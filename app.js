//core modules
const path = require('path');

//third-party imports
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('views','views');

//Own file
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).render('404page', { pageTitle: 'Page not found!', path: '/404' });
});

app.listen(3000);