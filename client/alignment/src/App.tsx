import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import { alignmentSearch, login } from "./services/api";
import Home from "./components/Home";
// import Home from "./components/Home";
const App: React.FC = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState<boolean>(false);
  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
  // const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  useEffect(() => {
    login('test', 'test')
    alignmentSearch('ATGCC', ['NC_000852'])
  //   const user = AuthService.getCurrentUser();
  //   if (user) {
  //     setCurrentUser(user);
  //     setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //   }
  //   EventBus.on("logout", logOut);
  //   return () => {
  //     EventBus.remove("logout", logOut);
  //   };
  }, []);
  // const logOut = () => {
  //   AuthService.logout();
  //   setShowModeratorBoard(false);
  //   setShowAdminBoard(false);
  //   setCurrentUser(undefined);
  return (
    <div>
      <div className="container mt-3">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;