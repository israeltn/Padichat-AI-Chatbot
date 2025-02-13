
# Padichat-AI-Chatbot
PadiChat is an innovative AI-powered chatbot designed to engage the Nigerian youth providing Sexual Reproductive Health and Rights (SRHR) information and counseling.


# 🚀 Django + Celery + Redis + PostgreSQL + Next.js (TypeScript + Tailwind) - Dockerized Setup

This repository provides a fully **Dockerized** setup for a **Django backend** with **Celery, Redis, PostgreSQL**, and a **Next.js frontend (TypeScript + TailwindCSS)**.

## 📂 Project Structure

```
project-root/
│── backend/                # Django Backend
│   ├── core/               # Django Project
│   ├── env/                # Environment Variables
│   │   ├── .env.local
│   │   ├── .env.prod
│   ├── entrypoint.sh       # Backend Entrypoint Script
│   ├── Dockerfile          # Backend Dockerfile
│   ├── requirements.txt    # Python Dependencies
│   ├── manage.py
│── frontend/               # Next.js Frontend
│   ├── pages/              # Next.js Pages
│   ├── components/         # React Components
│   ├── public/             # Static Assets
│   ├── Dockerfile          # Frontend Dockerfile
│   ├── package.json        # Dependencies
│── nginx/                  # Nginx Configuration
│   ├── nginx.conf
│── docker-compose.dev.yml  # Docker Compose for Development
│── docker-compose.prod.yml # Docker Compose for Production
│── README.md               # Documentation
```

---

## 📌 Prerequisites

Ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) (only for local frontend development)
- [Python 3.10+](https://www.python.org/) (only for local backend development)

---

## 🛠️ Setting Up the Project

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/israeltn/Padichat-AI-Chatbot.git
cd backend 
    or
cd frontend 
```

### 2️⃣ Set Up Environment Variables

Copy the `.env` files for backend:

```sh
cp backend/env/.env.local.example backend/env/.env.local
cp backend/env/.env.prod.example backend/env/.env.prod
```

Edit these files to include the correct values.

---

## 🐳 Running in Docker

### 🔹 Development Mode

Run the following command:

```sh
docker-compose -f docker-compose.dev.yml up --build
```

- Access **Django API** at `http://localhost:8000/api/`
- Access **Next.js Frontend** at `http://localhost:3000`

To stop the containers:

```sh
docker-compose -f docker-compose.dev.yml down
```

### 🔹 Production Mode

Run the following command:

```sh
docker-compose -f docker-compose.prod.yml up --build -d
```

- Access **frontend via Nginx** at `http://localhost`

To stop the production containers:

```sh
docker-compose -f docker-compose.prod.yml down
```

---

## 🛠️ Useful Docker Commands

### 🔍 Check Running Containers

```sh
docker ps
```

### 🛑 Stop All Running Containers

```sh
docker stop $(docker ps -q)
```

### 🚀 Restart Containers

```sh
docker-compose restart
```

### 🗑️ Remove Unused Containers & Images

```sh
docker system prune -a
```

---

## 🎯 Next Steps

- ✅ Add authentication and user management
- ✅ Implement Celery background tasks
- ✅ Deploy to a cloud provider (AWS, DigitalOcean, or Azure)

📌 **Now your project is ready for development and production! 🚀**

