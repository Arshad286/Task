import express from 'express';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import cours from 'cors';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use(cours());

app.use('/', Routes);

const PORT = process.env.PORT || 8000;

const URI = process.env.MONGODB_URI || 'mongodb+srv://arshadbeg286:Rbmi%401812@cluster0.ibr4grv.mongodb.net/?retryWrites=true&w=majority'
  

Connection();

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}
app.listen(PORT, ()=> console.log('Your server is running'));

