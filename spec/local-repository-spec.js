var assert = require('assert');
var maven  = require( './../index' );
var LocalRepository = maven.LocalRepository;

describe( 'local repositories', function() {

  it( 'should have a default local repository', function() {
    assert.equal( LocalRepository.DEFAULTS.length, 1 );
  });

});
