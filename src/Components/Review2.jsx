import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../assets/prospec1.jpg";
import img2 from "../assets/prospec2.jpg";

const reviewsData = [
  {
    name: "Aarav Mehta",
    date: "November 18 2023 at 15:35",
    verified: true,
    rating: 5,
    review:
      "The Ram Shankala Questionnaire helped me understand my personality traits and decision-making style in ways I never noticed before. The questions were thought-provoking and very well-structured. I’d definitely recommend it to anyone interested in self-awareness or research.",
    helpfulYes: 3,
    helpfulNo: 0,
  },
  {
    name: "Priya Nair",
    date: "November 18 2023 at 15:35",
    verified: true,
    rating: 5,
    review:
      "We used the Ram Shankala Questionnaire for a behavioral study in our college project. The structure and scoring model were clear, and the responses were easy to analyze. Only wish it had more diverse question sets.",
    images: [
      img1,
      img2,
    ],
    helpfulYes: 1,
    helpfulNo: 0,
  },
];

export default function Reviews() {
  const [ratingStats] = useState({
    avg: 4.65,
    total: 645,
    breakdown: {
      5: 239,
      4: 432,
      3: 53,
      2: 32,
      1: 13,
    },
  });

  // Animate progress bars on mount
  const [animateBars, setAnimateBars] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimateBars(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-12 px-6 text-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Reviews
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-0">
            ({ratingStats.avg}){" "}
            <span className="text-[#7a1d1f] font-medium cursor-pointer hover:underline">
              {ratingStats.total} Reviews
            </span>
          </p>
        </div>

        {/* Rating Summary */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">
            {ratingStats.avg} out of 5
          </h3>
          <div className="space-y-3 mt-4">
            {Object.entries(ratingStats.breakdown)
              .sort((a, b) => b[0] - a[0])
              .map(([stars, count]) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="w-2 text-sm">{stars}</span>
                  <Star className="w-4 h-4 text-[#7a1d1f] fill-[#7a1d1f]" />
                  <div className="w-48 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className="bg-[#7a1d1f] h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: animateBars
                          ? `${(count / ratingStats.total) * 100}%`
                          : 0,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">{count} reviews</span>
                </div>
              ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#7a1d1f] text-white px-5 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md transition"
          >
            Write a review
          </motion.button>
        </div>

        {/* Reviews List */}
        <div className="mt-10 divide-y divide-gray-200">
          {reviewsData.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="py-6"
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-[#7a1d1f] fill-[#7a1d1f]"
                  />
                ))}
              </div>

              {/* User info */}
              <div className="mt-2">
                <h4 className="font-semibold">{r.name}</h4>
                <p className="text-sm text-gray-500">{r.date}</p>
                {r.verified && (
                  <p className="text-[#7a1d1f] text-sm mt-1 font-medium">
                    ✔ Verified purchase
                  </p>
                )}
              </div>

              {/* Review text */}
              <p className="mt-3 leading-relaxed">{r.review}</p>

              {/* Review images */}
              {r.images && (
                <div className="flex gap-3 mt-4">
                  {r.images.map((img, j) => (
                    <motion.img
                      key={j}
                      src={img}
                      alt=""
                      className="w-28 h-28 object-cover rounded-xl border border-gray-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
              )}

              {/* Helpful */}
              <div className="mt-4 text-sm text-gray-600">
                Was it helpful to you?{" "}
                <label className="ml-2">
                  <input type="radio" name={`helpful-${i}`} /> Yes: {r.helpfulYes}
                </label>{" "}
                <label className="ml-4">
                  <input type="radio" name={`helpful-${i}`} /> No: {r.helpfulNo}
                </label>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
