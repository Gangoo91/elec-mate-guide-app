
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151812] px-2">
      <form className="w-full max-w-md bg-transparent flex flex-col items-center">
        <Logo size={80} />
        {/* Updated title styling with yellow color and shadow, similar to Signup */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-8 mt-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          Elec-Mate
        </h1>
        <div className="w-full space-y-4 mb-6">
          <Input
            type="email"
            placeholder="Email"
            className="bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
          />
          <Input
            type="password"
            placeholder="Password"
            className="bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-3 mb-6 shadow-none border-none"
        >
          LOG IN
        </Button>

        <div className="w-full text-center">
          <Link
            to="/forgot-password"
            className="text-[#FFC900] font-semibold hover:underline text-base"
          >
            Forgot password?
          </Link>
        </div>

        <div className="mt-20 text-center text-white text-base">
          Don’t have an account?<br />
          <Link to="/signup" className="text-[#FFC900] font-semibold hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
