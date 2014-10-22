
function LocalRepository(path) {
  this.path = path;
  this._repository = new org.eclipse.aether.repository.LocalRepository( path );
}

LocalRepository.DEFAULTS = [
  this._repository = new LocalRepository( process.env[ 'HOME' ] + '/.m2/repository' ),
]

module.exports = LocalRepository;
