# Async Dummy Mailer using Nodemailer, Express and Kafka

## Packages
- Express
- Nodemailer
- Kafka
- Dotenv

## Usage Instructions
- Install packages (npm install)
- Run docker-compose.yml using docker
- Convert env to .env and fill in the variables
- Run dev script (npm run dev)
- Run consumer.js (node consumer.js)
- POST request to /mail using Postman or similar app
    - Body requests:
        - value: string

## Services
- Mail service: mailtrap.io