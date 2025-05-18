import express from 'express'
import { db } from '../Config/db.config'
import { router } from '../Routes/post.routes'


const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//routes
app.use('/api/v1/posts', router);

//server
db.then(() =>{
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    })
});