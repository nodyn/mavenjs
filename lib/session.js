
var MavenRepositorySystemUtils = org.apache.maven.repository.internal.MavenRepositorySystemUtils;

var System  = require('./system' );
var Project = require('./project' );

function Session(localRepoPath) {
  this._session = MavenRepositorySystemUtils.newSession();
  this._system = new System();
  this._session.localRepositoryManager = this._system.newLocalRepositoryManager( this, localRepoPath );
}

Session.prototype.project = function(groupId, artifactId) {
  return new Project( this, groupId, artifactId );
}

module.exports = Session;