# MERN Life Insurance Application

A full-stack life insurance application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User authentication and authorization
- Life insurance policy management
- Payment integration
- Admin dashboard
- Responsive design

## Tech Stack

- Frontend: React.js, Redux, React-Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Payment: PayPal
- Deployment: Render, Docker, GitHub Actions

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd MERN-life-insurance-master
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Run the application
```bash
# Run backend (from backend directory)
npm start

# Run frontend (from frontend directory)
npm start
```

## Docker Deployment

1. Build and run with Docker Compose
```bash
docker-compose up --build
```

## License

MIT 