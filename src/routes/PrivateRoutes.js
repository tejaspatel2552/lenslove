import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("users");
  return auth ? <>{children}</> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
