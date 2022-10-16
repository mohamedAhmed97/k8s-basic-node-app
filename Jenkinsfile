pipeline{
    agent any
    stages{
        stage("building"){
            steps{
                echo "========executing Buliding Image========"
                sh "docker build . -t mar97/k8s-web-server:1.1"
            }
        }
        stage("deployment"){
            steps{
                echo "========stage deployment ========"
               withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                    sh "docker push mar97/k8s-web-server:1.1" 
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}