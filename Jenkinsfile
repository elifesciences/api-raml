elifeLibrary {
    stage 'Checkout'
    checkout scm

    stage 'Installing'
    sh "npm install"

    stage 'Compiling'
    sh "node compile.js"

    elifeMainlineOnly {
        stage 'Committing'
        sh 'git add dist/; git commit -m "Regenerated dist/"; git push origin develop'

        stage 'Publishing to master'
        sh 'git checkout master; git pull origin master; git merge develop; git push origin master'
    }
}
