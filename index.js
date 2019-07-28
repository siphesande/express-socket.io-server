const express = require('express');
const cors    = require('cors')
const app     = express()
const PORT    = process.env.port || 8000
const server  = app.listen(PORT);
const io      = require('socket.io').listen(server);
app.use(cors())

app.get('/', (req, res) => {
   res.send('Hello this is REST API')
})

io.on('connection', function(socket){
   console.log('user connected')

   socket.on('disconnect', function(){
     console.log('user disconnected')
  })

  socket.on('chat', function(data){
     console.log('message: ' + data)
    io.emit('chat', data)
  })
})


