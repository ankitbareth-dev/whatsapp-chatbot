"use client";

import { Check, IndianRupee } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-[#071018] text-white px-6 py-12">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-green-400">💎 Pricing Plans</h1>
        <p className="text-gray-400 mt-2">
          Choose the perfect plan for your WhatsApp Business needs.
          <br />
          Simple, transparent pricing with no hidden fees.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* SETUP CARD */}
        <PricingCard
          highlighted={false}
          title="Setup & Configuration"
          price="₹2,500"
          subtitle="One-time Setup Fee"
          features={[
            "WhatsApp Business API Setup",
            "1-Hour Configuration",
            "Basic Chatbot Setup",
            "Guided Training (30 minutes)",
          ]}
          buttonText="Get Started"
        />

        {/* MONTHLY SUBSCRIPTION */}
        <PricingCard
          highlighted={true}
          badge="MOST POPULAR"
          title="Monthly Subscription"
          price="₹1,000"
          subtitle="Per Month"
          features={[
            "Unlimited AI Responses",
            "AI Message Campaigns",
            "Analytics & Reports",
            "Regular Updates",
          ]}
          buttonText="Subscribe Monthly"
        />

        {/* ANNUAL PLAN */}
        <PricingCard
          highlighted={false}
          badge="SAVE 20%"
          title="Annual Subscription"
          price="₹9,600"
          subtitle="Per Year (Discounted)"
          features={[
            "Save On Costs",
            "Unlimited AI Responses",
            "Analytics & Reports",
            "Custom Integrations",
          ]}
          buttonText="Subscribe Annually"
        />
      </div>

      {/* FAQ SECTION */}
      <FAQSection />

      {/* Custom Solution Section */}
      <div className="text-center mt-16">
        <p className="text-gray-300 font-medium">Need a Custom Solution?</p>
        <p className="text-gray-400 text-sm mt-1">
          Have specific requirements or need enterprise-level features? Let’s
          discuss a custom plan that's perfect for your business needs.
        </p>

        <button className="mt-6 px-6 py-3 border border-green-500 text-green-400 rounded-xl hover:bg-green-500 hover:text-black transition">
          Contact Us for Custom Plans
        </button>
      </div>
    </div>
  );
}

/* Pricing Card Component */
function PricingCard({
  highlighted,
  badge,
  title,
  price,
  subtitle,
  features,
  buttonText,
}: any) {
  return (
    <div
      className={`p-6 rounded-2xl border shadow-xl ${
        highlighted
          ? "border-green-500 bg-[#0E1C25] scale-105"
          : "border-[#1A2A35] bg-[#0F1F2C]"
      } transition`}
    >
      {badge && (
        <p className="text-xs px-3 py-1 bg-green-500/20 text-green-400 rounded-full w-fit mb-3">
          {badge}
        </p>
      )}

      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-3xl font-bold flex items-center gap-1">{price}</p>
      <p className="text-gray-400 text-sm mb-6">{subtitle}</p>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-center gap-2 text-gray-300">
            <Check className="w-4 h-4 text-green-400" /> {f}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl text-sm font-semibold transition ${
          highlighted
            ? "bg-green-500 text-black hover:bg-green-400"
            : "bg-[#0D1720] border border-[#1A2A35] hover:bg-[#13212B]"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

/* FAQ Section */
function FAQSection() {
  const faqs = [
    {
      question: "What's included in the setup?",
      answer:
        "Full WhatsApp API setup, chatbot configuration, and onboarding assistance.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes! Monthly plans can be stopped anytime. Annual plans are billed once for full year.",
    },
    {
      question: "Is support included?",
      answer:
        "Yes, you receive 24/7 support for all technical and business-related queries.",
    },
    {
      question: "How can I pay?",
      answer:
        "Simply subscribe via RazorPay or direct bank transfer. You will receive an invoice instantly.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-16 bg-[#0F1F2C] border border-[#1A2A35] p-8 rounded-2xl">
      <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="p-4 border border-[#1A2A35] rounded-xl bg-[#0D1720]"
          >
            <p className="font-medium mb-2 text-white">{faq.question}</p>
            <p className="text-gray-400 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
