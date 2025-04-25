
import { Route, Navigate } from "react-router-dom";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import ForgotPassword from "@/pages/ForgotPassword";
import { AuthWrapper } from "@/components/auth/AuthWrapper";

export const AuthRoutes = [
  <Route key="signup" path="/signup" element={<AuthWrapper><Signup /></AuthWrapper>} />,
  <Route key="login" path="/login" element={<AuthWrapper><Login /></AuthWrapper>} />,
  <Route key="forgot-password" path="/forgot-password" element={<ForgotPassword />} />,
];
