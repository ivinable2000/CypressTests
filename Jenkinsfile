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
                sh 'npm install;'                
            }
        }


        stage('run test') 
        {
            steps 
            {
                echo 'Running tests'
                sh 'npx cypress run --spec first_step.spec.js'
            }
        }
        
    }
}
