elifeLibrary {
    stage 'Checkout'
    checkout scm

    stage 'Installing'
    sh "npm install"

    elifePullRequestOnly {
        stage 'Checking dist/'
        sh 'git fetch origin develop:refs/remotes/origin/develop && git diff --exit-code origin/develop...HEAD dist/'
    }

    stage 'Compiling'
    sh "node compile.js"
    // is there any check we can add here apart from the node command not failing?

    elifeMainlineOnly {
        stage 'Committing'
        def isThereANewCommit = elifeGitAutoCommit "Regenerated dist/, elife_api/", "dist/", "elife_api/"
        def commit = elifeGitRevision()

        stage 'Pushing to alfred/regeneration_of_dist'
        // needed due to required status checks on develop branch
        elifeGitMoveToBranch commit, 'alfred/regeneration_of_dist'
        elifeGithubCommitStatus commit, 'success', 'continuous-integration/jenkins/pr-head', 'Alfred automated commit after regenerating dist/'

        stage 'Pushing to develop'
        elifeGitMoveToBranch commit, 'develop'

        stage 'Publishing to master'
        elifeGitMoveToBranch commit, 'master'

        stage 'Downstream'
        if (isThereANewCommit) {
            build job: 'dependencies-bot-lax-adaptor-update-api-raml', wait: false
            build job: 'dependencies-api-validator-python-update-api-raml', wait: false
        } else {
            echo "Nothing to do, latest commit is old"
        }
    }
}
