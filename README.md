# MERN Authentication Bolierplate

A chance to learn how to implement authentication using a javascript stack and create a boilerplate in the process

After some research, the following dependencies will be used:

- **bcryptjs** - popular dependancy used to hash passwords
- **body-parser** - body parsing middleware (extracts the body portion of incoming request and exposes to req.body). Potentially not require as Express 4.16+ has the ability to parse json in a similar manner to body-parser
- **concurrently** - allows frontend (react) and backend (express) servers to run simultaneously on different ports, used in the production environment
- **express** - web application server framework for node
- **jsonwebtoken** - used for authentication
- **mongoose** - used to interact with mongoDB
- **passport** - Authentication middleware for node js, well suited to Express apps
- **validator** - used to validate inputs (like passwords, emails, usernames etc)



