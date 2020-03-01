node {
  stravaStage('Checkout') {
    checkout scm
  }

  stravaStage('Initial Setup') {
    try {
      helper = load("strava-goals-ui/helpers.groovy")
    } catch (Exception e) {
      sleep 10
      helper = load("strava-goals-ui/helpers.groovy")
    }
  }

  stravaStage('Install') {
    helper.getNpmVersion()
    helper.npmInstall()
  }

  stravaStage('Parallel Stage') {
    parallel (
        'Unit test': {
          helper.npmUnitTest()
        }
    )
  }
}

def stravaStage(name, Closure closure) {
  try {
    stage(name) {
      ansiColor('xterm') {
        timestamps {
          closure()
        }
      }
    }
  } catch (Exception e) {
    echo e
  }
}
