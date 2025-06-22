# Product CRUD App
A full-stack Product Management app.

## Tech Stack
- Backend: Java Spring Boot + PostgreSQL
- Frontend: React + Axios + Bootstrap

## Setup Instructions

### Backend
1. Create PostgreSQL database: `productdb`
2. Configure credentials in `application.properties`
3. Run: `cd crud_product_back-end && ./mvnw spring-boot:run`

### Frontend
1. Install: `cd crud_product_front-end && npm install`
2. Run: `npm start`

## Access
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8080/api/products`

## Author
Abderrahmane Assiyad
"# CRUD_Products" 

## Login interface
Log in using "admin" for username and "password" for password", the login is required only one time since it gets stored in local storage, before it gets expired after 1 day, atfer it expires a new login is required, note that the login phase is also required when tyring to perform all crud methods.
