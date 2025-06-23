🎵 Music Library Microfrontend App
🚀 Live Demo
• Main App (Container): https://main-app.vercel.app
• Music Library (Remote App): https://music-library.vercel.app
👤 Demo Credentials
Role: Admin
Username: admin
Password: admin123
Access: Add/Delete songs, full dashboard access
Role: User
Username: user
Password: user123
Access: View songs, filter/search only
🧩 Project Overview
This project showcases:
• 🎧 A full-featured Music Library UI
• 🧱 Micro Frontend Architecture using Module Federation
• 🔐 Basic authentication and role-based access
• ⚙️ Built with React, Vite, TailwindCSS, and Context API
🏗️ Folder Structure
music-library-project/
├── main-app/             # Main Container App
│   ├── public/
│   ├── src/
│   │   ├── context/      # Auth context
│   │   ├── pages/        # Login, Dashboard
│   │   └── ...
│   └── vite.config.js
├── music-library-app/    # Microfrontend Remote App
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── songs.js
│   └── vite.config.js
🛠️ How to Run Locally
1. Clone the repository:
   git clone https://github.com/aherkaustubh16t/music-library-project.git
   cd music-library-project
2. Install dependencies for both apps:
   # Terminal 1: Main App
   cd main-app
   npm install
   # Terminal 2: Music Library App
   cd ../music-library-app
   npm install
3. Run both apps locally:
   # Terminal 1: Run Main App on port 5173
   npm run dev
   # Terminal 2: Run Music Library App on port 5001
   npm run dev
☁️ Deployment (Vercel)
Main App:
- Build Command: npm run build
- Output Directory: dist
Music Library App:
- Build Command: npm run build
- Output Directory: dist
- Exposes ./SongLibrary
🔐 How Authentication Works
Auth is handled with Context API and LocalStorage.
Simple login system using hardcoded users:
  admin: admin123
  user: user123
Mock JWT is saved in localStorage:
{ "role": "admin", "token": "mock-token-123" }
🧱 How Micro Frontend Works
Built using @originjs/vite-plugin-federation
Main app loads SongLibrary from remote:
remotes: { musicApp: "https://music-library.vercel.app/assets/remoteEntry.js" }
💡 Features
• 🎶 Add/Delete songs (admin only)
• 🔍 Filter/Search/Sort
• 🎨 TailwindCSS UI
• ✨ Role-based access
📦 Tech Stack
React + Vite
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
