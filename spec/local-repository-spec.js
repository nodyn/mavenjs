var assert = require('assert');
require( './../index' );
var LocalRepository = require( './../lib/local-repository' );

describe( 'local repositories', function() {

  it( 'should have a default local repository', function() {
    assert.equal( LocalRepository.DEFAULTS.length, 1 );
  });

});
