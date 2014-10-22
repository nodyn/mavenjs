var RemoteRepository = require('./remote-repository' );

var VersionRangeRequest = org.eclipse.aether.resolution.VersionRangeRequest;

function Artifact(project, type) {
  this.project = project;
  this.type    = type;

  this._artifact = new org.eclipse.aether.artifact.DefaultArtifact( project.gav );
}

Object.defineProperty( Artifact.prototype, 'versions', {
  get: function() {
    return this._fetchVersions();
  },
} );

Artifact.prototype._fetchVersions = function() {
  if ( ! this._versions ) {
    var rangeRequest = new VersionRangeRequest();
    rangeRequest.artifact = this._artifact;

    var remoteRepos = RemoteRepository.DEFAULTS;

    for ( i = 0 ; i < remoteRepos.length ; ++i ) {
      rangeRequest.addRepository( remoteRepos[i]._repository );
    }

    this._versions = this.project.session._system._system.resolveVersionRange( this.project.session._session, rangeRequest );
  }

  var versions = this._versions.versions;
  var iter = versions.iterator();

  var v = [];

  while ( iter.hasNext() ) {
    v.push( iter.next().toString() );
  }

  return v;
}


module.exports = Artifact;
