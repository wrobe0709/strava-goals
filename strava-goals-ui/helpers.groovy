def void getNpmVersion() {
  def nodeStatus = getShellReturnValue(
    """node --version
      npm --version"""
  )

  if (nodeStatus != 0) {
    throw new Exception("on node or npm version")
  }
}

def void npmInstall() {
  def installStatus = getShellReturnValue(
    """ cd strava-goals-ui/
      npm ci || npm install
    """
  )

  if (installStatus != 0) {
    throw new Exception("on npm install")
  }
}

def void npmUnitTest() {
  def testStatus = getShellReturnValue(
    """ cd strava-goals-ui/
      npm run test:headless
    """
  )

  if (testStatus != 0) {
    throw new Exception("on npm test")
  }
}

def Integer getShellReturnValue(cmd) {
  return sh(returnStatus: true, script: cmd.stripMargin())
}

return this
