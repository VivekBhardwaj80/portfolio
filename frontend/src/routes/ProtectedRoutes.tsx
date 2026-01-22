import { useEffect, useState, type JSX } from "react";
import { Navigate } from "react-router-dom";
import api from "../services/axios";

type Props = {
  children: JSX.Element;
};
const ProtectedRoutes = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const { data } = await api.get("verify");
        if (data.success) {
          setIsAuth(true);
        } else setIsAuth(false);
      } catch (error) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };
    verifyAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  if (!isAuth) {
    return <Navigate to={"/admin/login"} replace />;
  }
  return children;
};

export default ProtectedRoutes;
