var express = require('express');var cors = require('cors')
var app = express()
app.use(cors())
var server  = app.listen(8000);
var io      = require('socket.io').listen(server);

 




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

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))