elifeLibrary {
    stage 'Checkout'
    checkout scm

    stage 'Installing'
    sh "npm install"

    elifePullRequestOnly {
        stage 'Checking dist/'
        sh 'git fetch && git diff --exit-code origin/develop...HEAD dist/'
    }

    stage 'Compiling'
    sh "node compile.js"
    // is there any check we can add here apart from the node command not failing?

    stage 'Setting commit status'
    step([$class: 'GitHubCommitNotifier', resultOnFailure: 'FAILURE', statusMessage: 'continuous-integration/jenkins/pr-head-manual'])

    elifeMainlineOnly {
        stage 'Committing'
        elifeGitAutoCommit "Regenerated dist/", "dist/"
        def commit = elifeGitRevision()

        stage 'Setting commit status'
        step([$class: 'GitHubCommitNotifier', resultOnFailure: 'FAILURE', statusMessage: 'continuous-integration/jenkins/pr-head-manual-mainline'])
        
        stage 'Pushing to develop'
        elifeGitMoveToBranch commit, 'develop'

        stage 'Publishing to master'
        elifeGitMoveToBranch commit, 'master'
    }
}
