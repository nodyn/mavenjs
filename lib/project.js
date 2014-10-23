
var Artifact = require('./artifact');

function Project(session, groupId, artifactId) {
  this.session    = session;
  this.groupId    = groupId;
  this.artifactId = artifactId;
}

Project.prototype.artifact = function(type) {
  return new Artifact( this, type );
}

Project.prototype.gav = function(type, version) {
  version = version || '[0,)';
  if ( type ) {
    return this.groupId + ':' + this.artifactId + ':' + type + ':' + version;
  } else {
    return this.groupId + ':' + this.artifactId + ':' + version;
  }

}

module.exports = Project;