
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

interface LoginPasswordInputProps {
  password: string;
  showPassword: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleShow: () => void;
}

const LoginPasswordInput: React.FC<LoginPasswordInputProps> = ({
  password,
  showPassword,
  error,
  onChange,
  onToggleShow
}) => (
  <div className="space-y-1">
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={onChange}
        aria-label="Password"
        className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${error ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-[#FFC900]'}`}
      />
      <button
        type="button"
        onClick={onToggleShow}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
    {error && (
      <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">
        {error}
      </p>
    )}
  </div>
);

export default LoginPasswordInput;
