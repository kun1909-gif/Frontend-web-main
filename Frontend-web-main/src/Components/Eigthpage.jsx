import React, { useState } from "react";
import { Plus, X } from "lucide-react"; // Install lucide-react for icons

const faqs = [
  {
    question: "Why should I work with you?",
    answer:
      "I know how to use both creativity and logic to create apps and websites that are as easy to use as they are nice to look at. With a college education in visual design and a decade and a half working on digital products, you won’t have to choose one or the other with me. That being said, it has to be the right fit on both sides. Let's get to know each other!",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing transparency! We love it. But as with anything, it depends. I have web packages starting at $6k, and design retainer options starting at $3k/month. For UX projects, I charge an hourly rate with variable pricing depending on your stage of business. Get in touch, tell me what you need, and you'll get a ballpark quote.",
  },
  {
    question: "Do you offer any package?",
    answer:
      "Yes! Landing page sites start at $6k for design and development. Standard marketing sites begin at $12k. You can also add on services such as a brand refresh or copywriting help for an additional fee. For custom or more complex projects, I'm happy to provide a free quote.",
  },
  {
    question: "What UX services do you provide?",
    answer:
      "While I can certainly design an app from scratch, I typically work with startups that have an existing product. I provide UX audits and recommendations for improved UI design, usability, and user flow. I can also design new features for your app or redesign full pages or flows.",
  },
  {
    question: "Can you also do_____?",
    answer:
      "If it's design-related, chances are.... yes. I spent years in creative agencies and working with in-house marketing teams to design just about anything you need. Caveat – I'm not the best illustrator or motion designer, but I know people who can help.",
  },
  {
    question: "How do we get started?",
    answer:
      "We'll first connect over email with high-level project info. If it’s a good fit, we’ll have a 30m call to get to know each other. I’ll ask questions to provide you an accurate quote. Once aligned, I’ll send a proposal and contract. Sign, and we’ll get started!",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div
      className={`w-[95%] mx-auto p-6 rounded-2xl mb-4 cursor-pointer transition-all duration-300 ${
        isOpen ? "bg-yellow-400 shadow-lg" : "bg-[#FAEBC5]"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold text-[#10183A]">{faq.question}</p>
        {isOpen ? <X size={24} color="#10183A" /> : <Plus size={24} color="#10183A" />}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[#10183A] text-base">{faq.answer}</p>
      </div>
    </div>
  );
};

const Eigthpage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full pl-7 pt-10 mb-10">
      <h1 className="text-[60px] font-medium mb-10">FAQs</h1>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Eigthpage;
