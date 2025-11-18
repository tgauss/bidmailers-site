"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";

const faqs = [
  {
    question: "How quickly will homeowners receive my bid?",
    answer: "Your custom roof estimates are mailed within 72 hours of marking properties in the app. Most homeowners receive them within 3-5 business days via USPS first-class mail."
  },
  {
    question: "What's included in each bid packet?",
    answer: "Each packet includes a professional estimate with your branding, detailed pricing, photos of the property (if uploaded), financing options, and your direct contact information - all in a premium envelope that gets opened."
  },
  {
    question: "How is this different from buying leads?",
    answer: "With Bid Mailers, you're not competing for shared leads. You're the only contractor putting a real price in the homeowner's hands. No bidding wars, no race to call first - just your estimate arriving when they're ready to make a decision."
  },
  {
    question: "What's the minimum order?",
    answer: "Our Starter plan requires a minimum of 100 mailers per campaign. Most contractors start with 250-500 mailers to test different neighborhoods and messaging."
  },
  {
    question: "Can I track which mailings convert to jobs?",
    answer: "Yes! Each bid packet includes a unique tracking code. Our dashboard shows you response rates, conversion metrics, and ROI by neighborhood so you can optimize future campaigns."
  },
  {
    question: "Do I need to know how to price roofs to use this?",
    answer: "Absolutely. Bid Mailers is for experienced roofing contractors who can accurately estimate repairs from street view. We handle the printing and mailing - you provide the expertise and pricing."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">
            Frequently <span className="text-[#188bf6]">Asked</span> Questions
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Got questions about how Bid Mailers works? We&apos;ve got answers. Learn how roofing contractors
            are using direct mail to land more jobs without buying shared leads.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 rounded-[22px] bg-[#DCDCDC] p-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[17px] border border-[#EBEBEB] bg-gradient-to-b from-[#F6F6F6] via-[#FDFDFD] to-[#F6F6F6] shadow-[0px_95px_27px_0px_rgba(0,0,0,0.00),_0px_61px_24px_0px_rgba(0,0,0,0.03),_0px_34px_21px_0px_rgba(0,0,0,0.11),_0px_15px_15px_0px_rgba(0,0,0,0.19),_0px_4px_8px_0px_rgba(0,0,0,0.22)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center gap-2 text-left"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <IconPlus size={20} className="text-[#188bf6]" />
                </motion.div>
                <span className="text-lg text-neutral-800">{faq.question}</span>
              </button>
              <AnimatePresence mode="sync">
                {openIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { 
                        height: "auto",
                        opacity: 1,
                        transition: { 
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                          mass: 1
                        }
                      },
                      collapsed: { 
                        height: 0,
                        opacity: 0,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                          mass: 1
                        }
                      }
                    }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-5">
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}