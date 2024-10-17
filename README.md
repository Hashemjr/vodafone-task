# Execution Details

1. Download both Files
2. I am using **openJDK 21.0.4** , **postgres 17** , **Spring boot 3.3.4** , **React 18.3.1**

- For executing the spring boot application
> mvn clean install
- then:
> mvn spring-boot:run

*If it fails check that your port 8080 doesn't have a task running on it*

- For executing the React application
> npm install react-scripts@latest
- then:
> npm install webpack@latest
- then:
> npm start

# Problems Faced
1. Cors configuration for the communication of both frontend and backend together although adjusting the proxy on my react application to the backend port 8080 and testing my backend APIs
