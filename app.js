const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD

const errorController = require('./controllers/error');
=======
const mongoose = require('mongoose');
const errorController = require('./controllers/error');
//const User = require('./models/user');
>>>>>>> Entire Project Change Commit

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
=======
// app.use((req, res, next) => {
//   User.findById('5baa2528563f16379fc8a610')
//     .then(user => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });

>>>>>>> Entire Project Change Commit
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

<<<<<<< HEAD
app.listen(3000);
=======
mongoose.connect('mongodb+srv://kaps1195:AZyrfPeSJvvWQA7b@cluster0-ws0mk.mongodb.net/shop?retryWrites=true&w=majority',{useNewUrlParser: true})
.then(result => {
  app.listen(3000);
}).catch(err => console.log(err));
>>>>>>> Entire Project Change Commit
