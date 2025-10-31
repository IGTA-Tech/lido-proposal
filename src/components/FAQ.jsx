import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between py-6 text-left hover:text-purple-700 transition-colors"
      >
        <span className="font-semibold text-lg pr-8">{question}</span>
        <span className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-6 h-6 text-purple-600" />
          ) : (
            <Plus className="w-6 h-6 text-gray-400" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What if specialists recommend Make or Zapier instead of LIDO?",
      answer: "They won't. Their visa evidence depends on proving 'top 1% LIDO expertise.' Switching platforms invalidates their EB-1A application. Plus, they sign a 24-month LIDO exclusivity agreement as condition of certification."
    },
    {
      question: "How do you ensure specialists actually get hired?",
      answer: "We only certify candidates with 3-5 years relevant industry experience who are currently employed or recently laid off from name-brand companies. We pre-screen for strong interview skills and provide placement support (resume optimization, interview prep, LinkedIn enhancement)."
    },
    {
      question: "What if the pilot fails?",
      answer: "If we don't place 7 of 10 specialists within 90 days, the program cancels at no cost to LIDO. If specialists get hired but don't drive LIDO adoption, we'll investigate why and adjust the strategy or cancel."
    },
    {
      question: "How do you calculate 'top 1% of 50,000 users'?",
      answer: "We use a four-step methodology: (1) Direct performance measurement on the 20-minute test, (2) Rank among all test-takers (500+ sample), (3) Extrapolate to active user population (test-takers represent top 10% of users), (4) Calculate global positioning (top 5% of top 10% = top 0.5%, we claim conservative 'top 1%'). This methodology has been validated by Ph.D. statisticians and accepted by USCIS."
    },
    {
      question: "What's the time commitment for LIDO?",
      answer: "One-time setup: ~3 hours (industry list, authorization email, user count, verification API, partner directory listing). Ongoing: 5 minutes quarterly to import new certified specialists."
    },
    {
      question: "Why can't Make or Zapier replicate this?",
      answer: "This strategy works because specialists need visa evidence of extraordinary ability. Make/Zapier don't solve immigration problems, so they have no mechanism to create the visa-motivated lock-in that ensures specialists promote LIDO exclusively."
    },
    {
      question: "What if USCIS views this as manufactured evidence?",
      answer: "The certification has legitimate business purpose FIRST: workforce development for LIDO ecosystem and career advancement for automation professionals. Visa evidence is a tertiary benefit (like AWS or Google certifications). 87% of test-takers will be US citizens/green card holders with no visa need, proving economic independence from immigration outcomes."
    },
    {
      question: "How do we track ROI?",
      answer: "We provide monthly reporting on: (1) Specialist placement status, (2) Companies where they're employed, (3) LIDO POC development progress, (4) Adoption outcomes, (5) Revenue attribution to specialist influence. You'll see exactly which specialists drive which customers."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Common Questions About the Partnership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about deploying LIDO specialists into target accounts
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ List */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gray-50 rounded-2xl p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Still have questions CTA */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="mailto:sherrod@innovativeautomations.dev"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
            >
              Email sherrod@innovativeautomations.dev
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
