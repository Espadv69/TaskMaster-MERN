# TaskMaster-MERN

TaskMaster-MERN is a dynamic to-do list application built with the MERN stack. It features a simple and intuitive interface with two main sections: one for displaying existing tasks and another for adding new ones via a form. The app supports full CRUD functionality, allowing users to create, read, update, and delete tasks.

## 🚀 Features

- Add, edit, and delete tasks.
- Display tasks in an organized list.
- Responsive and user-friendly UI.
- Full CRUD functionality with MongoDB.

## 🛠 Tech Stack

- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB

## 📦 Installation

### 1️⃣ Clone the repository

```sh
git clone https://github.com/Espadv69/TaskMaster-MERN.git
cd TaskMaster-MERN
```

### 2️⃣ Install dependencies

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd frontend
npm install
```

### 3️⃣ Start the application

#### Backend

```sh
npm run dev
```

#### Frontend

```sh
npm run dev
```

## 🔧 Environment Variables

Create a `.env` file in the backend directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 📜 API Routes

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| POST   | `/tasks`     | Create a new task |
| PUT    | `/tasks/:id` | Update a task     |
| DELETE | `/tasks/:id` | Delete a task     |

## 🎨 UI Preview

soon...

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this project.

## 📄 License

This project is licensed under the **[MIT License](https://opensource.org/license/mit)**.

---

Made with ❤️ by Espadv69

