# Life Insurance

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing life insurance plans, with user and admin roles.

## Project Structure

```
MERN-life-insurance-master/
│
├── backend/   # Node.js/Express/MongoDB API
└── frontend/  # React client
```

## Installation Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Santhosh-2311/Life-Insurance-MERN.git
   cd Life-Insurance-MERN
   ```

2. **Backend setup:**
   ```sh
   cd backend
   npm install
   # Create a .env file (see .env.example)
   # (Optional) Seed the database:
   npm run data:import
   npm start
   ```

3. **Frontend setup:**
   ```sh
   cd ../frontend
   npm install
   npm start
   ```

4. **Visit** [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints (Backend)
- `POST /api/users/login` – User login
- `POST /api/users/register` – Register user
- `GET /api/products` – List products
- `POST /api/products` – Add product (admin)
- ... (add all relevant endpoints as needed)

## How to Run the App
1. Start MongoDB locally or use MongoDB Atlas.
2. In `/backend`, create a `.env` file (see `.env.example`).
3. Seed the database (optional):
   ```sh
   npm run data:import
   ```
4. Start the backend:
   ```sh
   npm start
   ```
5. In another terminal, start the frontend:
   ```sh
   cd ../frontend
   npm start
   ```
6. Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

**Make sure not to commit your real `.env` file!** 
