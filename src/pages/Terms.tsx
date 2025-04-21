
import { Link } from "react-router-dom";

const Terms = () => (
  <div className="min-h-screen flex flex-col items-center justify-start px-4 bg-[#f5f6fa] py-12">
    <div className="w-full max-w-2xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-[#232946]">
        Terms of Service
      </h1>

      <p className="text-gray-800 mb-4">
        Welcome to THE ELECTRICAL INDUSTRY APP. These Terms of Service govern your use of our application. By accessing or using the app, you agree to comply with and be bound by these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#232946]">1. Use of the App</h2>
      <p className="text-gray-800 mb-4">
        You must be at least 18 years old to use this app. You agree to use the app only for lawful purposes and in a way that does not infringe the rights of others or restrict their use.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#232946]">2. Account Registration</h2>
      <p className="text-gray-800 mb-4">
        When creating an account, you agree to provide accurate information and keep your login credentials confidential. You are responsible for all activities under your account.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#232946]">3. Prohibited Conduct</h2>
      <p className="text-gray-800 mb-4">
        Users must not engage in any harmful or unauthorized activities such as hacking, spamming, or distributing malware. Violations may result in account suspension or termination.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#232946]">4. Intellectual Property</h2>
      <p className="text-gray-800 mb-4">
        All content and materials provided in the app are owned by THE ELECTRICAL INDUSTRY APP or its licensors and are protected by intellectual property laws.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#232946]">5. Disclaimer of Warranties</h2>
      <p className="text-gray-800 mb-4">
        The app is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or error-free performance.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#232946]">6. Limitation of Liability</h2>
      <p className="text-gray-800 mb-4">
        We are not liable for any indirect, incidental, or consequential damages arising from your use of the app.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#232946]">7. Changes to Terms</h2>
      <p className="text-gray-800 mb-8">
        We may update these terms from time to time. Continued use of the app constitutes acceptance of the new terms.
      </p>

      <p className="text-gray-800 mb-6">
        If you have any questions about these Terms, please contact us at support@electricalindustryapp.com.
      </p>

      <Link to="/" className="text-[#6E59A5] hover:underline font-semibold">
        Back to Home
      </Link>
    </div>
  </div>
);

export default Terms;
