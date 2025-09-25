"use client"

import { useState } from "react"

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "How can I update my registration documents?",
      answer:
        "You can update your registration documents through your account dashboard under the profile settings section.",
    },
    {
      question: "What is the process for procurement management?",
      answer:
        "Our procurement management system allows health facilities to streamline their purchasing processes through our platform.",
    },
    {
      question: "How do investment opportunities work?",
      answer:
        "We offer various investment opportunities in healthcare through our platform. Contact our investment team for details.",
    },
    {
      question: "Can I integrate MedPack with other hospital systems?",
      answer:
        "Yes, we provide API integrations to connect MedPack with existing hospital systems.",
    },
    {
      question: "Is there customer support available?",
      answer:
        "Yes, our support team is available 24/7 to assist you with any issues.",
    },
    {
      question: "How secure is the MedPack platform?",
      answer:
        "We use industry-standard encryption and comply with healthcare security regulations to ensure your data is safe.",
    },
    {
      question: "Do you provide training for new users?",
      answer:
        "Yes, we offer onboarding sessions and training materials to help your team get started quickly.",
    },
    {
      question: "Can I manage multiple facilities under one account?",
      answer:
        "Yes, you can manage multiple healthcare facilities from a single MedPack dashboard.",
    },
    {
      question: "What payment options are supported?",
      answer:
        "We support bank transfers, mobile money, and card payments depending on your location.",
    },
    {
      question: "How often is the platform updated?",
      answer: "We roll out regular updates and improvements every month.",
    },
  ]

  // Split FAQs into two columns
  const leftFaqs = faqs.slice(0, 5)
  const rightFaqs = faqs.slice(5, 10)

  // Inline AccordionItem
  const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      {/* Question bar */}
      <button
        onClick={onToggle}
        className="w-full text-left px-4 py-3 bg-white border-l-4 border-l-blue-500 font-medium text-gray-800 hover:bg-gray-50 transition"
      >
        {question}
      </button>

      {/* Answer bar */}
      {isOpen && (
        <div className="px-4 py-3 bg-white text-gray-700 border-t">
          {answer}
        </div>
      )}
    </div>
  )

  return (
    <section className="py-20 bg-[rgba(240,248,255,1)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small Top Label */}
        <h3 className="font-poppins font-medium text-[24px] leading-[100%] text-center text-black w-[301px] h-[38px] mx-auto flex items-center justify-center mb-6">
          FAQ
        </h3>

        {/* Main Heading */}
        <h2 className="font-poppins font-bold text-[36px] leading-[100%] text-center text-[#001540] mb-16">
          Frequently Asked Questions
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                onToggle={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {rightFaqs.map((faq, index) => {
              const realIndex = index + 5 // adjust index offset
              return (
                <AccordionItem
                  key={realIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={activeIndex === realIndex}
                  onToggle={() =>
                    setActiveIndex(
                      activeIndex === realIndex ? null : realIndex
                    )
                  }
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
