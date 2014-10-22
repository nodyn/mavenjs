
function RemoteRepository(id, url) {
  this.url = url;
  this._repository = org.eclipse.aether.repository.RemoteRepository.Builder( id, "default", url ).build();
}

RemoteRepository.DEFAULTS = [
  new RemoteRepository( 'central', 'http://central.maven.org/maven2/' );
]

module.exports = RemoteRepository;
