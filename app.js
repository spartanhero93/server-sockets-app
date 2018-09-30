const server = require('http').createServer()
const io = require('socket.io')(server)
const mongoose = require('mongoose')
require('dotenv').config()

const SocketManager = require('./sockets')

/** Provided a DB_URI with a .env file */
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, () =>
  console.log('mongoose is connected')
)

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`Listening on port ${port}`))

/** Start the socket server and listen for request from the client-socket */
io.origins('*:*')
io.on('connection', client => {
  SocketManager(io, client)
})
