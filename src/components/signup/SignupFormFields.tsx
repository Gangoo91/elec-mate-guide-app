
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { plans } from "@/hooks/useSignupForm";

interface SignupFormFieldsProps {
  plan: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors: {
    plan?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  onPlanChange: (value: string) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupFormFields({
  plan, email, password, confirmPassword, errors,
  onPlanChange, onEmailChange, onPasswordChange, onConfirmPasswordChange
}: SignupFormFieldsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <Select value={plan} onValueChange={onPlanChange}>
          <SelectTrigger
            className={`bg-[#222822]/70 border-none text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${
              errors.plan ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-[#FFC900]"
            }`}
            aria-label="Select Membership Plan"
          >
            <SelectValue placeholder="Choose your membership plan" />
          </SelectTrigger>
          <SelectContent className="z-50 bg-[#1a1a1a] text-white">
            {plans.map((p) => (
              <SelectItem value={p.value} key={p.value} className="cursor-pointer">
                {p.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.plan && (
          <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.plan}</p>
        )}
      </div>

      <div className="space-y-1">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
          aria-label="Email"
          className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${
            errors.email ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-[#FFC900]"
          }`}
        />
        {errors.email && <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.email}</p>}
      </div>

      <div className="space-y-1">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
          aria-label="Password"
          className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${
            errors.password ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-[#FFC900]"
          }`}
        />
        {errors.password && <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.password}</p>}
      </div>

      <div className="space-y-1">
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          aria-label="Confirm Password"
          className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${
            errors.confirmPassword ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-[#FFC900]"
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.confirmPassword}</p>
        )}
      </div>
    </div>
  );
}

