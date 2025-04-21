
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151812] px-2">
      <form className="w-full max-w-md bg-transparent flex flex-col items-center relative">
        {/* Back button */}
        <button
          type="button"
          aria-label="Go back"
          className="absolute left-0 top-6 flex items-center px-2 py-2 rounded-full hover:bg-white/10 transition"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="text-[#FFC900]" size={28} />
        </button>

        <Logo size={80} />

        {/* Updated title styling with yellow color and shadow */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-8 mt-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          Elec-Mate
        </h1>

        <div className="w-full space-y-4 mb-6">
          <Input
            type="text"
            placeholder="Name"
            className="bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
          />
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
          <Input
            type="password"
            placeholder="Confirm Password"
            className="bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-3 mb-6 shadow-none border-none"
        >
          SIGN UP
        </Button>

        <div className="text-center text-gray-200 text-base mb-5">
          By signing up, you agree to our{" "}
          <Link
            to="/terms"
            className="font-semibold text-[#FFC900] hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="font-semibold text-[#FFC900] hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </div>
        <div className="text-center text-white text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FFC900] font-semibold hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;

