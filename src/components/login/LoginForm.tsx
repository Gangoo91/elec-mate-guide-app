
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import LoginEmailInput from "@/components/login/LoginEmailInput";
import LoginPasswordInput from "@/components/login/LoginPasswordInput";
import LoginSocialButtons from "@/components/login/LoginSocialButtons";
import { useLoginForm } from "@/hooks/useLoginForm";

const LoginForm = () => {
  const {
    email,
    password,
    showPassword,
    rememberMe,
    errors,
    isSubmitting,
    handleEmailChange,
    handlePasswordChange,
    handleToggleShowPassword,
    handleRememberMeChange,
    handleSubmit,
    handleSocialLogin
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="space-y-4">
        <LoginEmailInput
          email={email}
          error={errors.email}
          onChange={handleEmailChange}
        />
        <LoginPasswordInput
          password={password}
          showPassword={showPassword}
          error={errors.password}
          onChange={handlePasswordChange}
          onToggleShow={handleToggleShowPassword}
        />
      </div>
      <div className="flex items-center">
        <Checkbox
          id="remember-me"
          checked={rememberMe}
          onCheckedChange={handleRememberMeChange}
          className="border-[#FFC900] data-[state=checked]:bg-[#FFC900] data-[state=checked]:text-black"
        />
        <label
          htmlFor="remember-me"
          className="ml-2 text-gray-300 cursor-pointer select-none text-sm"
        >
          Remember me
        </label>
        <Link
          to="/forgot-password"
          className="text-[#FFC900] font-semibold hover:underline ml-auto text-sm"
        >
          Forgot password?
        </Link>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-6 h-auto mb-4 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 className="animate-spin mr-2" size={20} />
            LOGGING IN...
          </span>
        ) : (
          "LOG IN"
        )}
      </Button>
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-600" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#151812] px-2 text-gray-400">Or continue with</span>
        </div>
      </div>
      <LoginSocialButtons onSocialLogin={handleSocialLogin} isSubmitting={isSubmitting} />
      <div className="mt-8 text-center text-white text-base">
        Don't have an account?<br />
        <Link to="/signup" className="text-[#FFC900] font-semibold hover:underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
