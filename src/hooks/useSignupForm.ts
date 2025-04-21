
import { useState } from "react";

export const plans = [
  { value: "apprentice", label: "Apprentice" },
  { value: "electrician", label: "Electrician" },
  { value: "employer", label: "Employer" },
];

export function useSignupForm() {
  const [plan, setPlan] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    plan: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePlanChange = (value: string) => {
    setPlan(value);
    if (!value) {
      setErrors(prev => ({ ...prev, plan: "Membership plan is required" }));
    } else {
      setErrors(prev => ({ ...prev, plan: "" }));
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, email: "Email is required" }));
    } else if (!validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
    } else {
      setErrors(prev => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, password: "Password is required" }));
    } else if (value.length < 8) {
      setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters" }));
    } else {
      setErrors(prev => ({ ...prev, password: "" }));
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (value !== password) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
    } else {
      setErrors(prev => ({ ...prev, confirmPassword: "" }));
    }
  };

  const resetErrors = () =>
    setErrors({ plan: "", email: "", password: "", confirmPassword: "" });

  const validateAll = () => {
    let isValid = true;
    let nextErrors = { plan: "", email: "", password: "", confirmPassword: "" };

    if (!plan) {
      nextErrors.plan = "Membership plan is required";
      isValid = false;
    }
    if (!email) {
      nextErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      nextErrors.email = "Please enter a valid email";
      isValid = false;
    }
    if (!password) {
      nextErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }
    if (confirmPassword !== password) {
      nextErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(nextErrors);
    return isValid;
  };

  return {
    plan, email, password, confirmPassword, errors,
    handlePlanChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    resetErrors,
    validateAll,
    setPlan, setEmail, setPassword, setConfirmPassword
  };
}
