# User Management API

A REST API built with NestJS for managing users with MySQL database.

## What's Inside

- User CRUD operations (Create, Read, Update, Delete)
- MySQL database with TypeORM
- Input validation
- API documentation with Scalar

## Prerequisites

- Node.js (v16+)
- WAMP Server (or any MySQL server)
- npm

## Installation

```bash
npm install
```

## Database Setup

1. Start WAMP server
2. Open phpMyAdmin at `http://localhost/phpmyadmin`
3. Create a database named `nest_users_db`
4. Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=nest_users_db
PORT=3000
```

## Running the App

```bash
# development
npm run start:dev

# production
npm run start:prod
```

The API will be available at `http://localhost:3000`

## API Documentation

Once the app is running, visit `http://localhost:3000/docs` for interactive API documentation.

## API Endpoints

### Get all users
```bash
GET http://localhost:3000/users
```

### Get user by ID
```bash
GET http://localhost:3000/users/1
```

### Create user
```bash
POST http://localhost:3000/users
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "age": 30
}
```

### Update user
```bash
PATCH http://localhost:3000/users/1
Content-Type: application/json

{
  "age": 31
}
```

### Delete user
```bash
DELETE http://localhost:3000/users/1
```

## Testing with cURL

```bash
# Create a user
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"firstName\":\"John\",\"lastName\":\"Doe\",\"email\":\"john@example.com\",\"age\":30}"

# Get all users
curl http://localhost:3000/users

# Get specific user
curl http://localhost:3000/users/1

# Update user
curl -X PATCH http://localhost:3000/users/1 -H "Content-Type: application/json" -d "{\"age\":31}"

# Delete user
curl -X DELETE http://localhost:3000/users/1
```

## Project Structure

```
src/
├── config/
│   └── database.config.ts      # Database configuration
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts  # Create user validation
│   │   └── update-user.dto.ts  # Update user validation
│   ├── entities/
│   │   └── user.entity.ts      # User database model
│   ├── users.controller.ts     # API routes
│   ├── users.service.ts        # Business logic
│   └── users.module.ts         # Module configuration
├── app.module.ts
└── main.ts
```

## Validation Rules

- **firstName**: Required, max 100 characters
- **lastName**: Required, max 100 characters
- **email**: Required, must be valid email, unique
- **age**: Optional, must be a positive number

## Error Responses

- `400` - Invalid input
- `404` - User not found
- `409` - Email already exists

## Dependencies

Main packages used:
- `@nestjs/core` - NestJS framework
- `@nestjs/typeorm` - TypeORM integration
- `mysql2` - MySQL driver
- `class-validator` - Input validation
- `@scalar/nestjs-api-reference` - API documentation

## Notes

- The database schema is auto-created on startup (synchronize: true)
- Set `synchronize: false` in production
- Email must be unique across all users

## License

MIT