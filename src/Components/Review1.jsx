import { useState, useEffect } from "react";
import test1 from '../assets/prospec1.jpg'
import test2 from '../assets/prospec2.jpg'
import test3 from '../assets/prospec3.jpg' 

const testimonials = [
  {
    img: test1,
    headline: "“Exceptional Quality & Creativity”",
    text: "Working with Mehdi Design Studio was a game-changer. They listened carefully to my ideas, proposed even better solutions, and delivered beyond expectation. The attention to detail and creativity in the final design completely transformed our brand image.",
    role: "Information Technology Director, Jebsen Group",
  },
  {
    img: test2,
    headline: "“Professional Process, Beautiful Outcome”",
    text: "The quality and reliability of the audio devices have greatly improved our communication flow. The simple setup and consistent performance make a huge difference in our productivity.",
    name: "Aarav Sharma",
    role: "Operations Head, NexusTech Pvt. Ltd.",
  },
  {
    img: test3,
    headline: "“Amazing Turnaround & Great Value”",
    text: "From calls to conferences, Jabra products make connectivity easier and more natural, empowering our team to collaborate effectively no matter where we are.",
    name: "Priya Mehta",
    role: "Product Manager, Innovent Solutions",
  },
  {
    img: test2,
    headline: "“Professional Process, Beautiful Outcome”",
    text: "The quality and reliability of the audio devices have greatly improved our communication flow. The simple setup and consistent performance make a huge difference in our productivity.",
    name: "Aarav Sharma",
    role: "Operations Head, NexusTech Pvt. Ltd.",
  },{
    img: test2,
    headline: "“Professional Process, Beautiful Outcome”",
    text: "The quality and reliability of the audio devices have greatly improved our communication flow. The simple setup and consistent performance make a huge difference in our productivity.",
    name: "Aarav Sharma",
    role: "Operations Head, NexusTech Pvt. Ltd.",
    
  },{
    img: test2,
    headline: "“Professional Process, Beautiful Outcome”",
    text: "The quality and reliability of the audio devices have greatly improved our communication flow. The simple setup and consistent performance make a huge difference in our productivity.",
    name: "Aarav Sharma",
    role: "Operations Head, NexusTech Pvt. Ltd.",
    
  },{
    img: test2,
    headline: "“Professional Process, Beautiful Outcome”",
    text: "The quality and reliability of the audio devices have greatly improved our communication flow. The simple setup and consistent performance make a huge difference in our productivity.",
    name: "Aarav Sharma",
    role: "Operations Head, NexusTech Pvt. Ltd.",
    
  },{
    img: test2,
    headline: "“Professional Process, Beautiful Outcome”",
    text: "The quality and reliability of the audio devices have greatly improved our communication flow. The simple setup and consistent performance make a huge difference in our productivity.",
    name: "Aarav Sharma",
    role: "Operations Head, NexusTech Pvt. Ltd.",
    
  }
];

export default function Review() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-16 overflow-hidden bg-purple-400/30">
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Carousel container */}
        <div
          className="flex transition-transform duration-700 ease-in-out gap-5"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full flex flex-col md:flex-row items-center bg-white/40 rounded-3xl shadow-sm overflow-hidden"
            >
              {/* Left image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-[350px] md:h-[480px] object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                />
              </div>

              {/* Right content */}
              <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center text-left">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center">
                    <span className="text-xl">💬</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#4a3a28] mb-4">
                  {t.headline}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">{t.text}</p>
                <div>
                  <h4 className="font-semibold text-[#4a3a28]">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50"
        >
          ❮
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-black/70 scale-110" : "bg-black/20"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
