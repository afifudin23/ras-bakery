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

## 🧑‍💻 Author
Ras Bakery Team
Developed by Andev <span class="heart">💖</span>

<style>
.heart {
  display: inline-block;
  animation: beat 1s infinite;
  padding-left: 5px
}
@keyframes beat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.5); }
}
</style>
