var fs = require('fs');

jars = fs.readdirSync( './jars' );

for ( i = 0 ; i < jars.length ; ++i ) {
  require( './jars/' + jars[i] );
}

module.exports.Session          = require('./lib/session' );
module.exports.LocalRepository  = require('./lib/local-repository' );
module.exports.RemoteRepository = require('./lib/remote-repository' );

