import React from "react";
import prospec1 from "../assets/prospec1.jpg";
import prospec2 from "../assets/prospec2.jpg";
import prospec3 from "../assets/prospec3.jpg";

export default function ProductSpec() {
  const features = [
    { name: "Original Ramcharitmanas Sheet", description: "Traditional text — high quality print." },
    { name: "Numeral Version Sheet", description: "Simplified version with numbers for easy reading." },
    { name: "Answer Booklet", description: "Meanings and guidance for each number." },
    { name: "Pouch & Pen", description: "Elegant finish, ready as a gift." },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              About Product
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              The Ram Shalaka Questionnaire is based on a traditional method, repackaged beautifully for modern use.
              The set includes two sheets — the original Ramcharitmanas and a numeral (modern) version — along with
              an answer booklet, pouch, and pen. Perfect for personal use and gifting.
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-3">
                  <dt className="font-medium text-gray-900 text-lg">{feature.name}</dt>
                  <dd className="mt-1 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Side - Images */}
          <div>
            {/* Mobile: Horizontal scroll */}
            <div className="flex lg:hidden overflow-x-auto space-x-4 snap-x snap-mandatory pb-4">
              {[prospec1, prospec2, prospec3, prospec1].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Product"
                  className="w-64 h-64 flex-shrink-0 rounded-lg object-cover bg-gray-100 snap-center"
                />
              ))}
            </div>

            {/* Desktop: Grid */}
            <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img src={prospec1} alt="Product view" className="rounded-lg bg-gray-100 object-cover" />
              <img src={prospec2} alt="Product view" className="rounded-lg bg-gray-100 object-cover" />
              <img src={prospec3} alt="Product view" className="rounded-lg bg-gray-100 object-cover" />
              <img src={prospec1} alt="Product view" className="rounded-lg bg-gray-100 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
