# 🎵 Music Library Microfrontend App

## 🚀 Live Demo

- **Main App (Container):** [https://music-library-project-qhqe.vercel.app/](https://music-library-project-qhqe.vercel.app/)  
- **Music Library (Remote App):** [https://music-library-project-7c57.vercel.app/](https://music-library-project-7c57.vercel.app/)

---

## 👤 Demo Credentials

| Role  | Username | Password  | Access Description                          |
|-------|----------|-----------|---------------------------------------------|
| Admin | `admin`  | `admin123`| Add/Delete songs, full dashboard access     |
| User  | `user`   | `user123` | View songs, filter/search only              |

---

## 🧩 Project Overview

This project showcases:

- 🎧 A full-featured Music Library UI  
- 🧱 Micro Frontend Architecture using **Module Federation**  
- 🔐 Basic authentication and role-based access  
- ⚙️ Built with **React**, **Vite**, **TailwindCSS**, and **Context API**  

---

## 🏗️ Folder Structure

<pre>
music-library-project/
├── main-app/               # Main Container App
│   ├── public/
│   ├── src/
│   │   ├── context/        # Auth context
│   │   ├── pages/          # Login, Dashboard
│   │   └── ...
│   └── vite.config.js
├── music-library-app/      # Microfrontend Remote App
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── songs.js
│   └── vite.config.js
</pre>

---

## 🛠️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/aherkaustubh16t/music-library-project.git
   cd music-library-project

2. **Install dependencies for both apps**
# Terminal 1: Main App
cd main-app
npm install

# Terminal 2: Music Library App
cd ../music-library-app
npm install

3. **Run both apps locally**
# Terminal 1: Run Main App (port 5173)
npm run dev

# Terminal 2: Run Music Library App (port 5001)
npm run dev

☁️ Deployment (Vercel)
Main App
Build Command: npm run build

Output Directory: dist

Music Library App
Build Command: npm run build

Output Directory: dist

Exposes: ./SongLibrary

In vite.config.js of the main app, ensure this remote reference:
remotes: {
  musicApp: "https://music-library.vercel.app/assets/remoteEntry.js"
}

🔐 How Authentication Works
Authentication is handled using Context API and localStorage.

Simple hardcoded login system:
// Example in AuthContext
const users = {
  admin: "admin123",
  user: "user123"
};

After login, a mock JWT is saved in localStorage:
{ "role": "admin", "token": "mock-token-123" }

🧱 How Micro Frontend Works
Built using @originjs/vite-plugin-federation

The main app dynamically loads SongLibrary from the remote app

Makes the system scalable and modular

💡 Features
🎶 Add/Delete songs (admin only)

🔍 Filter, Search, Sort songs

🎨 Clean responsive UI with TailwindCSS

✨ Role-based access control

📦 Tech Stack
React

Vite

TailwindCSS

Module Federation

Context API

LocalStorage

🙌 Author
Kaustubh Aher
📧 aherkaustubh16t@gmail.com
🔗 https://github.com/aherkaustubh16t

📝 License
This project is for educational/demo purposes only.