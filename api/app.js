const express = require( 'express' )
const app = express()

require( 'dotenv' ).config( { path: '.env' } )

const port = 4000

// Additional middleware
app.use( express.urlencoded( { extended: false } ) )
app.use( express.json() )

// Routes
app.use( '/state', require( './routes/stateRouter' ) )

app.use( express.static( __dirname + '/public/' ) )
app.get( /.*/, ( req, res ) => res.sendFile( __dirname + '/public/index.html' ) )

// Catch 404
app.use( ( req, res, next ) => {
  res.status( 404 ).json( 'Not Found' )
} )

// Error handler
app.use( ( err, req, res, next ) => {
  res.status( err.status || 500 )
  res.send( err.message || 'Internal Server Error' )
} )

app.listen( port, () => {
  console.log( `Server listening at http://localhost:${port}` )
} )
