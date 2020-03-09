pipeline {
    agent any
    
    stages 
    {
        stage('Git checkout') 
        {
            steps
            {
                git branch: 'master', url: 'https://github.com/ivinable2000/CypressTests.git'
            }
        }

        stage('npm install')
        {
            steps 
            {
                echo "remove all reports"
                sh 'rm -rf results/*'
                sh 'npm install;'                
            }
        }

        stage('start react application')
        {
            steps{
                echo "starting web application"
                sh 'cd ~/Downloads/target-app; npm run start > /dev/null 2>&1 &'
            }
        }


        stage('run test') 
        {
            steps 
            {
                echo 'Running tests'
                sh 'npx cypress run'
            }
        }
        
    }
    post{
        always{
            script {
                echo "cleaning up"
                sh 'ps -a | grep "start.js" | head -1 > pidlist.txt'
                pid = sh(returnStdout: true, script: 'awk \'{print $1}\' pidlist.txt | head -1').trim()
                sh "kill ${pid}"
                sh 'rm pidlist.txt' 
            }
        }
    }
}
