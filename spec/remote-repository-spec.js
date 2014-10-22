var assert = require('assert');
var maven  = require( './../index' );
var RemoteRepository = maven.RemoteRepository;

describe( 'remote repositories', function() {

  it( 'should have a default remote repository', function() {
    assert.equal( RemoteRepository.DEFAULTS.length, 1 );
  });

});
