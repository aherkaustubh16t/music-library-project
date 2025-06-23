🎵 Music Library Microfrontend App
🚀 Live Demo
Main App (Container): https://main-app.vercel.app

Music Library (Remote App): https://music-library.vercel.app

👤 Demo Credentials
Role	Username	Password	Access Description
Admin	admin	admin123	Add/Delete songs, full dashboard access
User	user	user123	View songs, filter and search functionality

🧩 Project Overview
This project demonstrates:

🎧 A full-featured Music Library UI

🧱 Micro Frontend Architecture using Module Federation

🔐 Basic Authentication with Role-Based Access

⚙️ Built using React, Vite, TailwindCSS, and Context API

🏗️ Folder Structure
csharp
Copy
Edit
music-library-project/
├── main-app/               # Main Container App
│   ├── public/
│   ├── src/
│   │   ├── context/        # Authentication context
│   │   ├── pages/          # Login, Dashboard
│   └── vite.config.js
├── music-library-app/      # Microfrontend Remote App
│   ├── public/
│   ├── src/
│   │   ├── components/     # SongItem, SongLibrary
│   │   └── songs.js        # Static song data
│   └── vite.config.js
🛠️ How to Run Locally
Clone the repository

bash
Copy
Edit
git clone https://github.com/aherkaustubh16t/music-library-project.git
cd music-library-project
Install dependencies for both apps

bash
Copy
Edit
# In one terminal
cd main-app
npm install

# In another terminal
cd ../music-library-app
npm install
Run both apps

bash
Copy
Edit
# Terminal 1: Main App on http://localhost:5173
npm run dev

# Terminal 2: Music Library App on http://localhost:5001
npm run dev
☁️ Deployment (Vercel)
Main App
Build Command: npm run build

Output Directory: dist

Music Library App
Build Command: npm run build

Output Directory: dist

Exposed Module: ./SongLibrary

Ensure remote URL is correctly referenced in the main app's vite.config.js:

js
Copy
Edit
remotes: {
  musicApp: "https://music-library.vercel.app/assets/remoteEntry.js"
}
🔐 Authentication Logic
Authentication is handled using Context API and localStorage.
Simple role-based system with hardcoded users:

js
Copy
Edit
// Inside AuthContext
const users = {
  admin: "admin123",
  user: "user123"
};
When logged in, a mock JWT is stored in localStorage:

json
Copy
Edit
{ "role": "admin", "token": "mock-token-123" }
🧱 Micro Frontend Architecture
Implemented using @originjs/vite-plugin-federation.

The main app loads the SongLibrary component from the remote app.

Seamless integration allows the main app to stay modular and scalable.

💡 Features
🎶 Add/Delete songs (admin only)

🔍 Filter, Search, and Sort

🎨 Modern UI with TailwindCSS

✨ Role-based login experience

🧱 Module Federation setup with Vite

📦 Tech Stack
React

Vite

TailwindCSS

Context API

Module Federation

LocalStorage

🙌 Author
Kaustubh Aher
📧 aherkaustubh16t@gmail.com
🔗 GitHub: @aherkaustubh16t

📝 License
This project is intended for educational and demo purposes only.