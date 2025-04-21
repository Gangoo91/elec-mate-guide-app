
import { Input } from "@/components/ui/input";
import React from "react";

interface LoginEmailInputProps {
  email: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginEmailInput: React.FC<LoginEmailInputProps> = ({ email, error, onChange }) => (
  <div className="space-y-1">
    <Input
      type="email"
      placeholder="Email"
      value={email}
      onChange={onChange}
      aria-label="Email"
      className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${error ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-[#FFC900]'}`}
    />
    {error && (
      <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">
        {error}
      </p>
    )}
  </div>
);

export default LoginEmailInput;
