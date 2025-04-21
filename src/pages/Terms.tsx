
import { Link } from "react-router-dom";
import BackButton from "@/components/navigation/BackButton";

const Terms = () => (
  <div className="min-h-screen flex flex-col items-center justify-start px-6 py-12 bg-background text-foreground">
    <div className="w-full max-w-3xl">
      <BackButton />
      <h1 className="text-4xl font-extrabold text-center mb-8 text-primary-foreground">
        Terms of Service
      </h1>

      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        Welcome to Elec-Mate. These Terms of Service govern your use of our application. By accessing or using the app, you agree to comply with and be bound by these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">1. Use of the App</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        You must be at least 18 years old to use this app. You agree to use the app only for lawful purposes and in a way that does not infringe the rights of others or restrict their use.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">2. Account Registration</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        When creating an account, you agree to provide accurate information and keep your login credentials confidential. You are responsible for all activities under your account.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">3. Prohibited Conduct</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        Users must not engage in any harmful or unauthorized activities such as hacking, spamming, or distributing malware. Violations may result in account suspension or termination.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">4. Intellectual Property</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        All content and materials provided in the app are owned by Elec-Mate or its licensors and are protected by intellectual property laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">5. Disclaimer of Warranties</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        The app is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or error-free performance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">6. Limitation of Liability</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        We are not liable for any indirect, incidental, or consequential damages arising from your use of the app.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">7. Changes to Terms</h2>
      <p className="text-base leading-relaxed mb-10 text-muted-foreground">
        We may update these terms from time to time. Continued use of the app constitutes acceptance of the new terms.
      </p>

      <p className="text-sm text-muted-foreground mb-8">
        If you have any questions about these Terms, please contact us at <a href="mailto:support@elec-mate.com" className="text-primary hover:underline">support@elec-mate.com</a>.
      </p>
      <Link to="/" className="block text-center text-primary font-semibold hover:underline">
        &larr; Back to Home
      </Link>
    </div>
  </div>
);

export default Terms;
