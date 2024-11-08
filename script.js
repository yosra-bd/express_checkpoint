const express = require ('express')
const app =express()
const path = require ('path')

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
function checkWorkingHours(req, res, next) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();  
    if (currentDay == 0 || currentDay == 7 ) {
        return res.status(403).send('The web application is only available during working hours (Mon-Fri)')  
    } else {
        return next()
    }
}
app.use(checkWorkingHours);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/service', (req, res) => {
    res.render('service');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(3000)


