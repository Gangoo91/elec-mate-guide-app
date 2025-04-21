
import { Input } from "@/components/ui/input";
import React from "react";

type LoginEmailInputProps = {
  email: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginEmailInput: React.FC<LoginEmailInputProps> = ({ email, error, onChange }) => (
  <div className="space-y-1 w-full">
    <Input
      type="email"
      placeholder="Email"
      value={email}
      onChange={onChange}
      aria-label="Email"
      autoComplete="username"
      className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4 shadow transition-all duration-300 w-full ${error ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-[#FFC900]'}`}
    />
    {error && (
      <p className="text-red-400 text-xs sm:text-sm mt-1 pl-2 animate-fade-in">
        {error}
      </p>
    )}
  </div>
);

export default LoginEmailInput;
