import { Navigate, Outlet } from "react-router-dom";

// 유저 인증 정보가 있으면 Outlet 요청한 주소로 가고, 없으면 로그인 페이지
const ProtectedRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
