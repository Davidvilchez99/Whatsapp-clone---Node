const express = require('express')
const app = express()
const port = 3001
const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

const io = require('socket.io')(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:4200"],
    methods: ["GET", "POST"]
  }
});


app.use(express.static('public'));

var usuarios = 0;
var listaUsuarios = [];

io.on('connection', (socket) => {
  /* Usuario se conceta*/
  usuarios++;
  socket.nombre = "";
  console.log("Hay " + usuarios + " usuarios conectados");
  io.emit('usuariosConcetados', usuarios);
  /* Usuario se desconecta*/
  socket.on('disconnect', () => {
    usuarios--;
    console.log("Hay " + usuarios + " usuarios conectados");
    console.log(socket.nombre + " se ha desconectado");
    io.emit('usuariosConcetados', usuarios);
    for (let i = 0; i < listaUsuarios.length; i++) {
      if (listaUsuarios[i].name == socket.nombre) {
        listaUsuarios.splice(i, 1);
      }
    }
    console.log(socket.nombre + " se ha desconectado");
    io.emit('actualizarLista', { listaUsuarios: listaUsuarios, usuario: socket.nombre });
  });

  /* Usuario envia mensaje*/
  socket.on('mensaje', (datos) => {
    io.emit('mensaje', datos);
  });

  /* Usuario se loguea*/
  socket.on('usuarioLogueado1', (datos) => {
    listaUsuarios.push(datos);
    socket.nombre = datos.name;
    io.emit('usuarioLogueadoActualizado', { listaUsuarios: listaUsuarios, usuario: datos });

  });

  /* Usuario escribe*/
  socket.on("escribiendo", (datos) => {
    io.emit("escribiendo", datos);
  });

  /* Usuario deja de escribir*/
  socket.on("no-escribiendo", () => {
    io.emit("no-escribiendo");
  });


});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})