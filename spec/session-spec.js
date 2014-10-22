var assert = require('assert');
var maven  = require( './../index' );

describe( 'sessions', function() {

  it( 'should be constructable', function() {
    var session = new maven.Session('./local-maven-repo');
  });

  it ('should be able to factory projects', function() {
    var session = new maven.Session('./local-maven-repo');
    var proj = session.project( 'log4j', 'log4j' );
    assert.notEqual( proj, undefined );
  })

});
