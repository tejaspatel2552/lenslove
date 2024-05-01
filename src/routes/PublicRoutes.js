import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const users = JSON.parse(localStorage.getItem("users"));
  const auth = localStorage.getItem(users);
  console.log(auth, "auth");
  return auth ? <Navigate to="/home" replace /> : <>{children}</>;
}

export default PublicRoute;
