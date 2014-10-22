

function Artifact(project, type) {
  this.project = project;
  this.type    = type;

  this._artifact = new org.eclipse.aether.artifact.DefaultArtifact( project.gav );
}

Object.defineProperty( Artifact.prototype, 'versions', {
  get: Artifact.prototype._versions
} );

Artifact.prototype._versions = function() {

}


module.exports = Artifact;
