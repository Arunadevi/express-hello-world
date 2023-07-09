var express = require('express');
const path = require('path');

var app = express();
const port = process.env.PORT || 3001;
app.set('port', (port));
app.use(express.static(path.join(__dirname, './public')));
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));

app.listen(port, () => console.log(`Listening on port ${port}`))
