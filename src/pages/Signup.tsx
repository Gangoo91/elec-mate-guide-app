
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151812] px-2">
      <form className="w-full max-w-md bg-transparent flex flex-col items-center">
        <Logo size={80} />
        <h1 className="text-3xl sm:text-4xl font-black text-white text-center mb-8 mt-6 leading-snug drop-shadow">
          THE ELECTRICAL<br />INDUSTRY APP
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
            className="bg-[#222822]\\/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
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
