import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, password) => {
    const users = {
      admin: "admin123",
      user: "user123",
    };

    if (users[username] && users[username] === password) {
      const mockJWT = { role: username, token: "mock-token-123" };
      setUser(mockJWT);
      localStorage.setItem("authUser", JSON.stringify(mockJWT));
      return { success: true };
    } else {
      return { success: false, message: "Invalid username or password" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
