
import { Link } from "react-router-dom";

const Privacy = () => (
  <div className="min-h-screen flex flex-col items-center justify-start px-4 bg-[#f5f6fa] py-12">
    <div className="w-full max-w-2xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-[#232946]">
        Privacy Policy
      </h1>
      <p className="text-gray-800 mb-6">
        This is a placeholder Privacy Policy page. You can update this with your real privacy policy content.
      </p>
      <Link to="/" className="text-[#6E59A5] hover:underline font-semibold">Back to Home</Link>
    </div>
  </div>
);

export default Privacy;
