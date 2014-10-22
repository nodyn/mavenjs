
var Artifact = require('./artifact');

function Project(groupId, artifactId) {
  this.groupId    = groupId;
  this.artifactId = artifactId;
  this.gav        = this.groupId + ':' + this.artifactId + ':[0,)';
}

Project.prototype.artifact = function(type) {
  return new Artifact( this, type );
}

module.exports = Project;