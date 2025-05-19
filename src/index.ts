import express from 'express';
import { createServer } from "http";
import 'dotenv/config';
import router from "./routes";

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;
const server = createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on ${PORT} - Running server`);
});
