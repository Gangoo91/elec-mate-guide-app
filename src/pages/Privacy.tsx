
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const Privacy = () => (
  <MainLayout>
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8 animate-fade-in">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#FFC900]">Privacy Policy</h1>
          <p className="text-[#FFC900]/80 text-lg">
            Last updated: April 21, 2025
          </p>
        </header>

        <section className="prose prose-lg max-w-none space-y-6">
          <p className="text-[#FFC900]/90 leading-relaxed">
            At Elec-Mate, we value and respect your privacy. This Privacy Policy outlines our practices regarding the collection, use, and protection of your personal information when you use our platform.
          </p>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">1. Information We Collect</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                When you use Elec-Mate, we collect information that helps us provide and improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Account information (name, email, professional credentials)</li>
                <li>Profile data (work history, certifications, skills)</li>
                <li>Usage information (interactions, preferences, activity logs)</li>
                <li>Device information (browser type, IP address, access times)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">2. How We Use Your Information</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                Your information enables us to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Provide and maintain our services</li>
                <li>Personalize your experience</li>
                <li>Send important updates and notifications</li>
                <li>Improve our platform and user experience</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">3. Data Protection</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure. Our security practices include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Strict access controls</li>
                <li>Continuous monitoring for potential threats</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">4. Your Rights and Choices</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Access your personal information</li>
                <li>Request corrections to your data</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">5. Contact Us</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                If you have questions about this Privacy Policy or your personal information, please contact our Privacy Team at{" "}
                <a href="mailto:privacy@elec-mate.com" className="text-[#FFC900] hover:underline">
                  privacy@elec-mate.com
                </a>
              </p>
            </section>
          </div>
        </section>

        <footer className="pt-8 text-center">
          <Link to="/" className="text-[#FFC900] hover:underline inline-flex items-center gap-2">
            &larr; Back to Home
          </Link>
        </footer>
      </div>
    </div>
  </MainLayout>
);

export default Privacy;
