
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const Terms = () => (
  <MainLayout>
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8 animate-fade-in">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#FFC900]">Terms of Service for UK Electrical Professionals</h1>
          <p className="text-[#FFC900]/80 text-lg">
            Last updated: April 21, 2025
          </p>
        </header>

        <section className="prose prose-lg max-w-none space-y-6">
          <p className="text-[#FFC900]/90 leading-relaxed">
            Welcome to Elec-Mate, the UK's premier digital platform for electrical professionals. By using our service, you agree to these Terms of Service tailored specifically for the British electrical industry.
          </p>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">1. Platform Usage</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                To use Elec-Mate, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Be at least 16 years old and within the UK electrical profession</li>
                <li>Use the platform legally and in accordance with UK professional standards</li>
                <li>Maintain accurate and verifiable professional information</li>
                <li>Protect your account credentials</li>
                <li>Report any unauthorized access immediately</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">2. Professional Account Registration</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                When creating a professional account, you commit to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Provide accurate and verifiable professional credentials</li>
                <li>Maintain the confidentiality of your login information</li>
                <li>Regularly update your professional profile</li>
                <li>Accept full responsibility for all account activities</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">3. Professional Platform Guidelines</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                Users must adhere to professional conduct:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Maintain professional integrity</li>
                <li>Refrain from malicious or harmful platform interactions</li>
                <li>Respect intellectual property and professional confidentiality</li>
                <li>Comply with UK electrical industry regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">4. Intellectual Property</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                All platform content is protected under UK intellectual property laws:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Respect Elec-Mate's and its licensors' intellectual property rights</li>
                <li>Do not reproduce or distribute protected professional content</li>
                <li>Use materials only as permitted within the platform</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">5. Platform Evolution</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Enhance and evolve our professional services</li>
                <li>Update terms to reflect industry changes</li>
                <li>Modify platform features and pricing</li>
                <li>Ensure continuous alignment with UK electrical industry standards</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">6. Contact Information</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                For inquiries about our Terms of Service, contact our UK support team at{" "}
                <a href="mailto:support@elec-mate.com" className="text-[#FFC900] hover:underline">
                  support@elec-mate.com
                </a>
              </p>
            </section>
          </div>
        </section>

        <footer className="pt-8 text-center">
          <Link to="/" className="text-[#FFC900] hover:underline inline-flex items-center gap-2">
            &larr; Return to Elec-Mate Dashboard
          </Link>
        </footer>
      </div>
    </div>
  </MainLayout>
);

export default Terms;
