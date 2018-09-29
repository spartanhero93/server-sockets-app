const server = require('http').createServer()
const io = require('socket.io')(server)
const SocketManager = require('./sockets')
const mongoose = require('mongoose')
require('dotenv').config()
const config = require('./config/config')

mongoose.connect(
  process.env.DB_URI || config.db,
  { useNewUrlParser: true },
  () => console.log('mongoose is connected')
)

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`Listening on port ${port}`))

/** Start the socket server and listen for request from the client-socket */
io.origins('*:*')
io.on('connection', client => {
  console.log('Client connected')
  SocketManager(io, client)
})
