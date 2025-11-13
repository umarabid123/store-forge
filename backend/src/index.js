import app from './app.js';
import connectDb from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

connectDb().then(() =>{
    app.listen(process.env.PORT || 6000, ()=>{
        console.log(`App running on port ${process.env.PORT || 6000}`)
    })
}).catch((error)=>{
    console.log(`Something went wrong: ${error.message}`);
})