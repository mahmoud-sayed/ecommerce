import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: '*', methods: '*' });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

server.listen(8000, () => {
  console.log('server is running at port', 8000);
});
