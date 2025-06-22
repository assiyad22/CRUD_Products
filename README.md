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
Login using "admin" for username and "password" for password" to manage for doing all crud methods, the login is required only one time, regarding the token that gets saved in local storage under application, after 1 day the token gets expired, and a new login is required.
