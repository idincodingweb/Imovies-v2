import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/style/Term.css';

const TermsOfService = () => {
  return (
  <section className="termofservices container-fluid">
    <div className="bg-black min-h-screen py-8 text-white">
      <Container>
        <div className="bg-zinc-900 rounded-lg shadow-2xl p-8">
          <h1 className="text-red-600 text-4xl font-bold mb-6 border-b border-red-600 pb-4">
            Terms of Service
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-red-500 text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Movies App, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-red-500 text-2xl font-semibold mb-4">2. User Account</h2>
              <p className="text-gray-300 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-red-500 text-2xl font-semibold mb-4">3. Content Usage</h2>
              <p className="text-gray-300 leading-relaxed">
                All content provided on Movies App is for informational purposes only. You may not reproduce, distribute, or modify any content without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-red-500 text-2xl font-semibold mb-4">4. Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section className="bg-zinc-800 rounded-lg p-6 mt-8">
              <h2 className="text-red-500 text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                <a href="mailto:support@moviesapp.com" className="text-red-400 hover:text-red-300">
                  support@moviesapp.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  </section>
  );
};

export default TermsOfService;