# 🍞 Ras Bakery API

Ras Bakery API is a RESTful backend service for managing an online bakery system.  
It provides authentication, product management, cart, user address, and order handling.

---

## 🧩 Features

- 🔐 **Authentication** — Register, Login, and Get Current User  
- 🥐 **Product Management** — Create, Read, Update, Delete (CRUD)  
- 🛒 **Cart Management** — Add, update, and remove items  
- 🏠 **User Address Management** — Manage multiple addresses per user  
- 🧾 **Orders Management** — Create and track user orders  

---

## 🛠️ Tech Stack

- **Runtime:** Node.js (Express)
- **Database:** PostgreSQL / MySQL (via Prisma or Sequelize)
- **Authentication:** JWT (Access Token)
- **API Documentation:** OpenAPI 3.0 (Swagger)


## 🧱 Installation

```bash
# Clone the repository
git clone git@github.com:afifudin23/ras-bakery-api.git

# Navigate to project folder
cd ras-bakery-api

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run migrations (if using Prisma)
npx prisma migrate deploy
npx prisma generate

# Start the server
npm start
```
Then the server will be running at http://localhost:5000 🚀

## 📘 API Documentation

Swagger documentation is available at: [Swagger UI](https://afifudin23.github.io/ras-bakery-api/docs)

#

<p align="center">
  Ras Bakery Team Developed by Andev
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="20" fill="red">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
                14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 
                3.78-3.4 6.86-8.55 11.54L12 21.35z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            values="1;1.3;1"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
  </svg>
  
</p>
