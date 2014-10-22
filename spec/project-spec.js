var assert = require('assert');
var maven  = require( './../index' );

describe( 'projects', function() {

  it ('should be able to factory artifacts', function() {
    var session = new maven.Session('./local-maven-repo');
    var project = session.project( 'log4j', 'log4j' );
    var artifact = project.artifact( 'pom' );
    assert.notEqual( artifact, undefined );
  })

});
