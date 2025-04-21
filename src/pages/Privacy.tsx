
import { Link } from "react-router-dom";

const Privacy = () => (
  <div className="min-h-screen flex flex-col items-center justify-start px-6 py-12 bg-background text-foreground">
    <div className="w-full max-w-3xl">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-primary-foreground">
        Privacy Policy
      </h1>

      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Elec-Mate. Please read this policy carefully to understand our views and practices regarding your personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">1. Information We Collect</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        We collect information that you provide directly when registering, logging in, or using our services. This may include your name, email address, password, and any other data you choose to provide.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">2. How We Use Your Information</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        Your information helps us provide, maintain, and improve our services. We use your data to authenticate your account, communicate important updates, customize your experience, and for security purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">3. Sharing Your Information</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        We do not sell or rent your personal data. We may share your information with trusted service providers that help operate our app, comply with legal requirements, or protect our rights.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">4. Security of Your Information</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">5. Your Choices</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        You may update or delete your account information by contacting support. You can also control how we communicate with you through notification settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">6. Children&apos;s Privacy</h2>
      <p className="text-base leading-relaxed mb-6 text-muted-foreground">
        This app is not intended for children under 13 years of age. We do not knowingly collect personal data from children under 13.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-primary-foreground">7. Changes to This Policy</h2>
      <p className="text-base leading-relaxed mb-10 text-muted-foreground">
        We may update this Privacy Policy from time to time. We encourage you to review it periodically for any changes.
      </p>

      <p className="text-sm text-muted-foreground mb-8">
        If you have questions or concerns about your privacy, please contact us at <a href="mailto:support@elec-mate.com" className="text-primary hover:underline">support@elec-mate.com</a>.
      </p>

      <Link to="/" className="block text-center text-primary font-semibold hover:underline">
        &larr; Back to Home
      </Link>
    </div>
  </div>
);

export default Privacy;
