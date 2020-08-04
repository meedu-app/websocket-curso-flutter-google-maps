import express, { Application, Response, Request } from 'express';
import http from 'http';
import socketIo, { Socket, Server as IOServer } from 'socket.io';

const app: Application = express();
const server: http.Server = http.createServer(app);
const io: IOServer = socketIo(server);

app.get('/', (req: Request, res: Response) => {
  res.send('HELLO FLUTTER DEV');
});

io.on('connection', (socket: Socket) => {
  console.log('user connected::', socket.id);

  socket.on('on-location', (data: any) => {
    console.log('location ', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected::', socket.id);
  });
});

server.listen(5000, () => {
  console.log('running 🤓');
});
