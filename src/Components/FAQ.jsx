import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is it sanctified?",
      a: (
        <>
          <p className="mb-2 text-gray-600">
            Yes — every set is purified before dispatch.
          </p>
          
        </>
      ),
    },
    {
      q: "Return Policy?",
      a: (
        <>
          <p className="mb-2 text-gray-600">
            Returns allowed within 7 days in case of defect or wrong shipment.
          </p>
        </>
      ),
    },
     {
      q: "How does it work?",
      a: (
        <>
          <p className="mb-2 text-gray-600">
            The Prashnavali consists of a 15×15 grid of letters. While praying to Lord Rama, the user selects any letter at random. That letter corresponds to a chaupai (couplet) from the Ramcharitmanas, which is then interpreted as the answer.
          </p>
        </>
      ),
    },
    {
      q: "Can I use it online?",
      a: (
        <>
          <p className="mb-2 text-gray-600">
            Yes. The online version works by randomly selecting a letter digitally. The result is shown instantly with the relevant chaupai and its interpretation.
          </p>
        </>
      ),
    },
  ];

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white text-gray-900 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#7a1d1f]">
          Frequently Asked Questions
        </h2>

        <div className="border border-gray-200 rounded-2xl shadow-sm divide-y">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex justify-between w-full items-center p-5 text-left font-medium text-gray-700 hover:bg-gray-50 transition ${
                  openIndex === index ? "bg-gray-50" : ""
                }`}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#7a1d1f] transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 border-t border-gray-100 text-gray-700 leading-relaxed bg-white">
                      {faq.a}
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
