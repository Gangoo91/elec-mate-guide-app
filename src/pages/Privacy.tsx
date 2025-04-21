
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const Privacy = () => (
  <MainLayout>
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8 animate-fade-in">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#FFC900]">Privacy Policy for UK Electrical Professionals</h1>
          <p className="text-[#FFC900]/80 text-lg">
            Last updated: April 21, 2025
          </p>
        </header>

        <section className="prose prose-lg max-w-none space-y-6">
          <p className="text-[#FFC900]/90 leading-relaxed">
            At Elec-Mate, we are committed to protecting the privacy of electrical professionals across the United Kingdom. This Privacy Policy outlines our approach to collecting, using, and safeguarding your personal information within our UK-focused platform.
          </p>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">1. Information Collection</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                We collect essential information to provide tailored services for UK electrical professionals:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Professional account details (name, email, electrical credentials)</li>
                <li>Verified professional profile data (work history, certifications, specialisations)</li>
                <li>Platform interaction data (usage patterns, professional networking)</li>
                <li>Secure device and access information</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">2. Data Utilisation</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                Your information enables us to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Deliver specialised electrical industry services</li>
                <li>Personalise your professional development experience</li>
                <li>Send critical industry and platform updates</li>
                <li>Enhance platform features for electrical professionals</li>
                <li>Maintain platform security and prevent potential misuse</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">3. Data Protection Commitment</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                We implement industry-leading security measures aligned with UK data protection standards:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Advanced encryption of sensitive professional data</li>
                <li>Regular comprehensive security assessments</li>
                <li>Strict access controls for professional information</li>
                <li>Continuous monitoring of potential cyber threats</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">4. Your Professional Rights</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                As a UK electrical professional, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Access and review your professional profile</li>
                <li>Request corrections to your professional data</li>
                <li>Delete your account and associated professional information</li>
                <li>Opt-out of non-essential professional communications</li>
                <li>Export your professional data in a portable format</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">5. Contact Our Privacy Team</h2>
              <p className="text-[#FFC900]/80 leading-relaxed">
                For any privacy-related inquiries specific to UK electrical professionals, contact our dedicated Privacy Team at{" "}
                <a href="mailto:privacy@elec-mate.com" className="text-[#FFC900] hover:underline">
                  privacy@elec-mate.com
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

export default Privacy;
