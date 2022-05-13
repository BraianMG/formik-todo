import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

const PrivateRoute: React.FC = ({ children }) => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [token]);

  return <>{children}</>;
};

export default PrivateRoute;
