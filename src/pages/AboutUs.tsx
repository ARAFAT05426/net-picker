import { useState } from "react";
import { GoPlus } from "react-icons/go";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is Net Picker?",
      answer:
        "Net Picker is a product comparison platform powered by AI that helps consumers make informed purchasing decisions by providing real-time price comparisons and recommendations.",
    },
    {
      question: "How does AI improve the user experience?",
      answer:
        "AI personalizes shopping experiences, offers real-time price comparisons across various platforms, and predicts trending products based on user behavior.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes, Net Picker adheres to strict security protocols, including encryption technologies and GDPR compliance to ensure the privacy and safety of your data.",
    },
    {
      question: "Can I access Net Picker on mobile?",
      answer:
        "In the near future, we will be launching a dedicated mobile app that will allow users to seamlessly access all features on their devices.",
    },
  ];

  return (
    <section className="container text-secondary py-5 space-y-5">
      {/* Introduction Section */}
      <div className="relative overflow-hidden rounded-sm">
        <img
          className="w-full max-h-[60vh] object-cover"
          src="/about.jpg"
          alt="about-us"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

        <div className="absolute left-20 inset-y-1/4 h-fit max-w-xl bg-white/80 backdrop-blur-lg rounded-sm p-10 z-10">
          <h2 className="text-4xl font-bold mb-2.5">Our Vision</h2>
          <p className="opacity-75">
            Net Picker aims to become the leading product comparison platform,
            leveraging artificial intelligence (AI) to provide a seamless,
            transparent shopping experience. With a focus on affiliate
            marketing, our platform helps users make informed decisions while
            offering a secure, multilingual interface that appeals to both
            consumers and prominent brands worldwide.
          </p>
        </div>
      </div>

      {/* Objectives and AI Features */}
      <div className="space-y-2.5">
        <div className="p-3.5">
          <h2 className="text-3xl font-semibold mb-2">Our Objective</h2>
          <p className="opacity-75">
            Net Picker is committed to delivering a platform that simplifies
            the comparison of products across various categories. Our goal is
            to enhance the online shopping experience by providing a reliable,
            data-driven comparison system powered by AI.
          </p>
        </div>

        <div className="p-3.5">
          <h2 className="text-3xl font-semibold mb-2">Artificial Intelligence</h2>
          <p className="opacity-75">
            AI plays a central role in optimizing the user experience on Net
            Picker:
          </p>
          <ul className="list-disc pl-5 mt-2.5 opacity-75 space-y-1">
            <li>Personalized shopping experiences tailored to user behavior.</li>
            <li>
              Real-time price comparisons across major marketplaces to ensure
              the best deals.
            </li>
            <li>
              Predictive analytics to anticipate user needs and suggest trending
              products.
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="p-3.5">
        <h2 className="text-3xl font-semibold mb-2.5">
          Frequently Asked Questions (FAQs)
        </h2>
        <ul className="space-y-0.5">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="p-1.5 transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-medium">{faq?.question}</h3>
                <GoPlus
                  className={`text-sm transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45 text-primary" : ""
                  }`}
                />
              </div>
              <p
                className={`text-sm text-gray-600 overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "p-2.5 max-h-40 opacity-100" : "p-0 max-h-0 opacity-0"
                }`}
              >
                {faq?.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
