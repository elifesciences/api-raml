elifeLibrary {
    stage 'Checkout'
    checkout scm

    stage 'Installing'
    sh "npm install"

    stage 'Compiling'
    sh "node compile.js"
    // is there any check we can add here apart from the node command not failing?

    elifeMainlineOnly {
        stage 'Committing'
        sh 'git diff --exit-code || (git add dist/; git commit -m "Regenerated dist/"; git push origin develop)'

        def commit = elifeGitRevision()

        stage 'Publishing to master'
        elifeGitMoveToBranch commit, 'master'
    }
}
