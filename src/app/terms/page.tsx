"use client";
import { useState } from "react";
import {
  Shield,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Mail,
} from "lucide-react";

// Color Constants
const COLORS = {
  primary: "#633B6F",
  secondary: "#F8A61C",
  white: "#FFFFFF",
  lightBg: "#F8F9FA",
  lightPurple: "#F3F4F6",
  lightOrange: "#FEF7E5",
  gray: "#6B7280",
  darkGray: "#374151",
};

const TermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "definitions", title: "Definitions" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "user-obligations", title: "User Obligations" },
    { id: "payments", title: "Payments & Orders" },
    { id: "shipping", title: "Shipping & Delivery" },
    { id: "returns", title: "Returns & Refunds" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "privacy", title: "Privacy Policy" },
    { id: "governing-law", title: "Governing Law" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.white }}>
      {/* HERO SECTION */}
      <section
        style={{ backgroundColor: COLORS.lightBg }}
        className="relative py-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, ${COLORS.primary} 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg border mb-8"
              style={{
                backgroundColor: COLORS.white,
                borderColor: COLORS.lightPurple,
              }}
            >
              <Shield className="w-5 h-5" style={{ color: COLORS.primary }} />
              <span
                className="text-sm font-semibold"
                style={{ color: COLORS.primary }}
              >
                Last Updated: December 2024
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span style={{ color: COLORS.primary }}>Terms &</span>
              <br />
              <span style={{ color: COLORS.secondary }}>Conditions</span>
            </h1>

            <p
              className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{ color: COLORS.gray }}
            >
              Please read these terms carefully before using our services. By
              accessing or using Choongshin Craftsmanship, you agree to be bound
              by these terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Clock
                  className="w-5 h-5"
                  style={{ color: COLORS.secondary }}
                />
                <span style={{ color: COLORS.darkGray }}>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText
                  className="w-5 h-5"
                  style={{ color: COLORS.secondary }}
                />
                <span style={{ color: COLORS.darkGray }}>10 sections</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* SIDEBAR NAVIGATION */}
            <div className="lg:w-1/4">
              <div
                className="rounded-2xl shadow-lg border p-6 sticky top-8"
                style={{
                  backgroundColor: COLORS.lightBg,
                  borderColor: COLORS.lightPurple,
                }}
              >
                <h3
                  className="font-bold text-lg mb-4"
                  style={{ color: COLORS.primary }}
                >
                  Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeSection === section.id
                          ? "font-semibold shadow-md"
                          : "hover:bg-white"
                      }`}
                      style={{
                        backgroundColor:
                          activeSection === section.id
                            ? COLORS.white
                            : "transparent",
                        color:
                          activeSection === section.id
                            ? COLORS.primary
                            : COLORS.darkGray,
                        borderColor: COLORS.lightPurple,
                      }}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* TERMS CONTENT */}
            <div className="lg:w-3/4">
              <div
                className="rounded-2xl shadow-lg border p-8"
                style={{
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.lightPurple,
                }}
              >
                {/* Introduction Section */}
                {activeSection === "introduction" && (
                  <div>
                    <h2
                      className="text-3xl font-bold mb-6"
                      style={{ color: COLORS.primary }}
                    >
                      Introduction
                    </h2>
                    <div
                      className="space-y-6"
                      style={{ color: COLORS.darkGray }}
                    >
                      <p>
                        Welcome to Choongshin Craftsmanship. These Terms and
                        Conditions govern your use of our website and services.
                        By accessing or using our platform, you agree to comply
                        with and be bound by these terms.
                      </p>

                      <div
                        className="p-4 rounded-lg border-l-4"
                        style={{
                          backgroundColor: COLORS.lightOrange,
                          borderLeftColor: COLORS.secondary,
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <AlertCircle
                            className="w-5 h-5 mt-0.5 shrink-0"
                            style={{ color: COLORS.secondary }}
                          />
                          <div>
                            <h4
                              className="font-semibold mb-2"
                              style={{ color: COLORS.primary }}
                            >
                              Important Notice
                            </h4>
                            <p className="text-sm">
                              These terms affect your legal rights and
                              obligations. Please read them carefully and
                              contact us if you have any questions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h3
                        className="text-xl font-semibold mt-8 mb-4"
                        style={{ color: COLORS.primary }}
                      >
                        Agreement to Terms
                      </h3>
                      <p>
                        By accessing or using Choongshin Craftsmanship, you
                        confirm that you are at least 18 years old and have the
                        legal capacity to enter into binding contracts. If you
                        are using our services on behalf of an organization, you
                        represent that you have the authority to bind that
                        organization.
                      </p>

                      <h3
                        className="text-xl font-semibold mt-8 mb-4"
                        style={{ color: COLORS.primary }}
                      >
                        Changes to Terms
                      </h3>
                      <p>
                        We reserve the right to modify these terms at any time.
                        We will notify you of significant changes by posting the
                        updated terms on our website. Your continued use of our
                        services after such changes constitutes acceptance of
                        the new terms.
                      </p>
                    </div>
                  </div>
                )}

                {/* Definitions Section */}
                {activeSection === "definitions" && (
                  <div>
                    <h2
                      className="text-3xl font-bold mb-6"
                      style={{ color: COLORS.primary }}
                    >
                      Definitions
                    </h2>
                    <div
                      className="space-y-6"
                      style={{ color: COLORS.darkGray }}
                    >
                      <p>
                        For the purposes of these Terms and Conditions, the
                        following definitions apply:
                      </p>

                      <div className="space-y-4">
                        <div
                          className="p-4 rounded-lg border"
                          style={{ borderColor: COLORS.lightPurple }}
                        >
                          <h4
                            className="font-semibold mb-2"
                            style={{ color: COLORS.primary }}
                          >
                            "Services"
                          </h4>
                          <p>
                            Refers to all products, websites, applications, and
                            services offered by Choongshin Craftsmanship.
                          </p>
                        </div>

                        <div
                          className="p-4 rounded-lg border"
                          style={{ borderColor: COLORS.lightPurple }}
                        >
                          <h4
                            className="font-semibold mb-2"
                            style={{ color: COLORS.primary }}
                          >
                            "User", "You", "Your"
                          </h4>
                          <p>
                            Refers to any individual or entity that accesses or
                            uses our Services.
                          </p>
                        </div>

                        <div
                          className="p-4 rounded-lg border"
                          style={{ borderColor: COLORS.lightPurple }}
                        >
                          <h4
                            className="font-semibold mb-2"
                            style={{ color: COLORS.primary }}
                          >
                            "Content"
                          </h4>
                          <p>
                            Includes all text, images, graphics, logos, and
                            other materials available through our Services.
                          </p>
                        </div>

                        <div
                          className="p-4 rounded-lg border"
                          style={{ borderColor: COLORS.lightPurple }}
                        >
                          <h4
                            className="font-semibold mb-2"
                            style={{ color: COLORS.primary }}
                          >
                            "Artisan Products"
                          </h4>
                          <p>
                            Handcrafted items created by skilled artisans and
                            offered for sale through our platform.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Intellectual Property Section */}
                {activeSection === "intellectual-property" && (
                  <div>
                    <h2
                      className="text-3xl font-bold mb-6"
                      style={{ color: COLORS.primary }}
                    >
                      Intellectual Property
                    </h2>
                    <div
                      className="space-y-6"
                      style={{ color: COLORS.darkGray }}
                    >
                      <p>
                        All intellectual property rights in our Services,
                        including but not limited to copyrights, trademarks, and
                        trade secrets, are owned by Choongshin Craftsmanship or
                        our licensors.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div
                          className="p-6 rounded-lg border"
                          style={{ borderColor: COLORS.lightPurple }}
                        >
                          <h4
                            className="font-semibold mb-3 flex items-center gap-2"
                            style={{ color: COLORS.primary }}
                          >
                            <CheckCircle
                              className="w-5 h-5"
                              style={{ color: COLORS.secondary }}
                            />
                            Permitted Uses
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li>
                              • Personal, non-commercial use of our content
                            </li>
                            <li>• Sharing content with proper attribution</li>
                            <li>• Downloading for personal reference</li>
                            <li>• Linking to our website</li>
                          </ul>
                        </div>

                        <div
                          className="p-6 rounded-lg border"
                          style={{ borderColor: COLORS.lightPurple }}
                        >
                          <h4
                            className="font-semibold mb-3 flex items-center gap-2"
                            style={{ color: COLORS.primary }}
                          >
                            <AlertCircle
                              className="w-5 h-5"
                              style={{ color: COLORS.secondary }}
                            />
                            Prohibited Uses
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Commercial reproduction of content</li>
                            <li>• Creating derivative works</li>
                            <li>• Removing copyright notices</li>
                            <li>• Reverse engineering our platform</li>
                          </ul>
                        </div>
                      </div>

                      <h3
                        className="text-xl font-semibold mt-8 mb-4"
                        style={{ color: COLORS.primary }}
                      >
                        Artisan Rights
                      </h3>
                      <p>
                        Individual artisans retain intellectual property rights
                        to their unique designs and craftsmanship techniques. By
                        selling through our platform, artisans grant Choongshin
                        Craftsmanship a limited license to display and market
                        their products.
                      </p>
                    </div>
                  </div>
                )}

                {/* Add more sections as needed */}

                {/* Quick Action Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t"
                  style={{ borderColor: COLORS.lightPurple }}
                >
                  <button
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                    style={{
                      backgroundColor: COLORS.primary,
                      color: COLORS.white,
                    }}
                  >
                    Download PDF Version
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border transition-all hover:scale-105"
                    style={{
                      backgroundColor: COLORS.white,
                      color: COLORS.primary,
                      borderColor: COLORS.primary,
                    }}
                  >
                    Contact Legal Team
                  </button>
                </div>

                {/* Last Updated Notice */}
                <div
                  className="mt-8 p-4 rounded-lg text-center"
                  style={{
                    backgroundColor: COLORS.lightBg,
                    color: COLORS.gray,
                  }}
                >
                  <p className="text-sm">
                    These Terms and Conditions were last updated on December 1,
                    2024.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section style={{ backgroundColor: COLORS.lightBg }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Questions About Our Terms?
          </h2>
          <p
            className="text-base mb-8 max-w-2xl mx-auto"
            style={{ color: COLORS.primary }}
          >
            Contact our legal team for clarification or concerns
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-6 shadow-xl inset-shadow-sm border flex-1 min-w-[200px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-white cursor-pointer"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <h3 className="font-bold text-lg mb-2">Legal Email</h3>
              <a
                href="mailto:legal@choongshin.example"
                className="hover:text-white transition-colors text-sm"
                style={{ color: COLORS.primary }}
              >
                legal@choongshin.example
              </a>
            </div>

            <div
              className="rounded-2xl p-6 shadow-xl inset-shadow-sm border flex-1 min-w-[200px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-white cursor-pointer"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.25)",
              }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText
                  className="w-6 h-6"
                  style={{ color: COLORS.primary }}
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Documentation</h3>
              <p className="text-sm" style={{ color: COLORS.primary }}>
                Full legal documentation available upon request
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
