var RemoteRepository = require('./remote-repository' );

var VersionRangeRequest = org.eclipse.aether.resolution.VersionRangeRequest;
var ArtifactRequest = org.eclipse.aether.resolution.ArtifactRequest;

function Artifact(project, type) {
  this.project = project;
  this.type    = type;

  this._artifact = new org.eclipse.aether.artifact.DefaultArtifact( project.gav(type) );
}

Object.defineProperty( Artifact.prototype, 'versions', {
  get: function() {
    this._fetchVersions();
    var versions = this._versions.versions;
    var iter = versions.iterator();

    var v = [];

    while ( iter.hasNext() ) {
      v.push( iter.next().toString() );
    }

    return v;
  },
} );

Object.defineProperty( Artifact.prototype, "latestVersion", {
  get: function() {
    this._fetchVersions();
    return this._versions.highestVersion.toString();
  },
});

Artifact.prototype.install = function(version) {
  this._fetchVersions();

  version = version || this.latestVersion;

  var versionedArtifact = this._artifact.setVersion( version );
  versionedArtifact.repository = this._artifact.repository;
  var request = new ArtifactRequest( versionedArtifact, undefined, undefined );

  var remoteRepos = RemoteRepository.DEFAULTS;

  for ( i = 0 ; i < remoteRepos.length ; ++i ) {
    request.addRepository( remoteRepos[i]._repository );
  }

  var session = this.project.session._session;
  var result = this.project.session._system._system.resolveArtifact( this.project.session._session, request );

  return result.artifact.file.path;
}

// ----------------------------------------
// ----------------------------------------

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
