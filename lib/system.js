var MavenRepositorySystemUtils      = org.apache.maven.repository.internal.MavenRepositorySystemUtils;
var DefaultServiceLocator           = org.eclipse.aether.impl.DefaultServiceLocator;
var RepositoryConnectorFactory      = org.eclipse.aether.spi.connector.RepositoryConnectorFactory;
var BasicRepositoryConnectorFactory = org.eclipse.aether.connector.basic.BasicRepositoryConnectorFactory;
var TransporterFactory              = org.eclipse.aether.spi.connector.transport.TransporterFactory;
var FileTransporterFactory          = org.eclipse.aether.transport.file.FileTransporterFactory;
var HttpTransporterFactory          = org.eclipse.aether.transport.http.HttpTransporterFactory;
var RepositorySystem                = org.eclipse.aether.RepositorySystem;

var LocalRepository = require( './local-repository' );

function System() {
  var locator = MavenRepositorySystemUtils.newServiceLocator();

  locator.addService(RepositoryConnectorFactory, BasicRepositoryConnectorFactory);
  locator.addService(TransporterFactory, FileTransporterFactory);
  locator.addService(TransporterFactory, HttpTransporterFactory);

  this._system = locator.getService(RepositorySystem);
}

System.prototype.newLocalRepositoryManager = function(session, localRepoPath) {
  var localRepo = new LocalRepository( localRepoPath );
  return this._system.newLocalRepositoryManager( session._session, localRepo._repository );
}

module.exports = System;