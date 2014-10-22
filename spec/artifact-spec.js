var assert = require('assert');
var maven  = require( './../index' );

describe( 'artifacts', function() {

  it ('should be able to enumerate versions', function() {
    var session = new maven.Session('./local-maven-repo');
    var project = session.project( 'log4j', 'log4j' );
    var artifact = project.artifact( 'pom' );
    var versions = artifact.versions;
    assert.ok( versions.length > 0 );
  })

});
