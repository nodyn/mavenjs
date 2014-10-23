
var MavenRepositorySystemUtils = org.apache.maven.repository.internal.MavenRepositorySystemUtils;

var System  = require('./system' );
var Project = require('./project' );

function Session(localRepoPath) {
  this._session = MavenRepositorySystemUtils.newSession();
  this._system = new System();
  this._session.localRepositoryManager = this._system.newLocalRepositoryManager( this, localRepoPath );

/*
  function logit(event) {
    console.log( event );
  }

  this._session.repositoryListener = new org.eclipse.aether.RepositoryListener( {
    artifactDescriptorInvalid: logit,
    artifactDescriptorMissing: logit,
    artifactResolving: logit,
    artifactResolved: logit,
    artifactDownloading: logit,
    artifactDownloaded: logit,
    metadataInvalid: logit,
    metadataResolving: logit,
    metadataResolved: logit,
    metadataDownloading: logit,
    metadataDownloaded: logit,
  });

  this._session.transferListener = new org.eclipse.aether.transfer.TransferListener( {
    transferInitiated: logit,
    transferStarted: logit,
    transferProgressed: logit,
    transferCorrupt: logit,
    transferSucceeded: logit,
    transferFailed: logit,
  });
  */
}

Session.prototype.project = function(groupId, artifactId) {
  return new Project( this, groupId, artifactId );
}

module.exports = Session;