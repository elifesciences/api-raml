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

    elifeMainlineOnly {
        stage 'Committing'
        sh 'git diff --exit-code || (git add dist/; git commit -m "Regenerated dist/")'
        def commit = elifeGitRevision()
        
        stage 'Pushing to develop'
        elifeGitMoveToBranch commit, 'develop'

        stage 'Publishing to master'
        elifeGitMoveToBranch commit, 'master'
    }
}
