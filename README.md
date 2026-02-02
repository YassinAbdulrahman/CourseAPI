📚 CourseAPI

A RESTful API for managing courses built with Express.js and Node.js — perfect for educational platforms and backend development practice.

🚀 Features

📌 Create, read, update, and delete courses

🔁 Structured routing for maintainability

🛠️ Modular architecture (controllers, routes, models)

📦 Easy setup using Express.js and JavaScript


📦 Technologies Used

Node.js

Express.js

JavaScript

(Optionally) Postman for API testing


🚀 Getting Started

Follow these simple steps to run the API locally.

1. Clone the repository
git clone https://github.com/YassinAbdulrahman/CourseAPI.git

2. Navigate to the project directory
cd CourseAPI

3. Install dependencies
npm install

4. Run the API
npm run dev
Once the server is running, you can test endpoints with Postman, Insomnia, or any HTTP client.

🛠️ API Endpoints

Below are the common endpoints you’ll find in this project:

| Method    | Endpoint           | Description         |
| --------- | ------------------ | ------------------- |
| GET       | `/api/courses`     | Get all courses     |
| GET       | `/api/courses/:id` | Get a single course |
| POST      | `/api/courses`     | Create a new course |
| PUT/PATCH | `/api/courses/:id` | Update a course     |
| DELETE    | `/api/courses/:id` | Delete a course     |

📁 Folder Structure
📦CourseAPI
 ┣ 📂controllers
 ┣ 📂middleware
 ┣ 📂models
 ┣ 📂routes
 ┣ 📂utils
 ┣ index.js
 ┣ package.json
 ┗ README.md

📝 Environment Variables

If you use any environment variables (e.g., for database connection or config), create a .env file in the root:
PORT=5000
DB_URL=your_database_url_here
Make sure to add .env to your .gitignore.

📄 License

This project is open-source — feel free to use and modify it as you need!
