
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const Terms = () => (
  <MainLayout>
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8 animate-fade-in">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#FFC900]">Terms of Service</h1>
          <p className="text-[#FFC900]/80 text-lg">
            Last updated: April 21, 2025
          </p>
        </header>

        <section className="prose prose-lg max-w-none space-y-6">
          <p className="text-[#FFC900]/90 leading-relaxed">
            Welcome to Elec-Mate. By using our platform, you agree to comply with and be bound by these Terms of Service. Please read them carefully.
          </p>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">1. Use of Service</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                You must be at least 18 years old to use Elec-Mate. By accessing our platform, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Use the service legally and responsibly</li>
                <li>Maintain accurate account information</li>
                <li>Protect your account credentials</li>
                <li>Report any unauthorized account access</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">2. Account Registration</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                When creating an account, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Provide accurate and complete information</li>
                <li>Keep your login credentials secure</li>
                <li>Update your information as needed</li>
                <li>Accept responsibility for account activities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">3. Platform Rules</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                Users must not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Engage in any harmful or malicious activities</li>
                <li>Attempt to breach platform security</li>
                <li>Share inappropriate or illegal content</li>
                <li>Impersonate other users or entities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">4. Intellectual Property</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                All content and materials on Elec-Mate are protected by intellectual property laws and belong to us or our licensors. Users agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Respect intellectual property rights</li>
                <li>Not copy or distribute protected content</li>
                <li>Only use materials as permitted</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">5. Service Modifications</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Modify or discontinue services</li>
                <li>Update these terms at any time</li>
                <li>Change pricing and features</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">6. Contact Information</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:support@elec-mate.com" className="text-[#FFC900] hover:underline">
                  support@elec-mate.com
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

export default Terms;
