import { motion } from 'framer-motion';
import { CheckCircle, Mail } from 'lucide-react';

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

export default function WhatWeNeed() {
  const requirements = [
    { title: 'Industry Focus Confirmation', time: '5 minutes', description: 'Email listing target industries beyond attorneys' },
    { title: 'Authorization Email', time: '5 minutes', description: 'Permission to create certification program' },
    { title: 'User Count', time: '1 minute', description: 'Approximate total LIDO users (e.g., "~50K users")' },
    { title: 'Verification Setup', time: '2 hours', description: 'API endpoint to verify certification badges (engineering task)' },
    { title: 'Partner Directory Listing', time: '30 minutes', description: 'Add certified specialists to LIDO partner directory' }
  ];

  return (
    <section id="what-we-need" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
              What We Need From LIDO
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Simple Requirements
            </h2>
            <p className="text-xl text-gray-600">
              Total setup time: ~3 hours one-time, then 5 minutes quarterly
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">One-Time Setup (~3 hours)</h3>

            <div className="space-y-6">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{req.title}</h4>
                      <span className="text-sm text-purple-600 font-medium">{req.time}</span>
                    </div>
                    <p className="text-gray-600">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing (5 minutes quarterly)</h3>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-emerald-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Specialist Updates</h4>
                <p className="text-gray-600">Import CSV of new certified specialists to keep partner directory current</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border-2 border-emerald-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get in Return</h3>
            <ul className="space-y-3 mb-6">
              {[
                'Quarterly pipeline of certified specialists for customer referrals',
                'Internal advocates at target companies (Trojan horse strategy)',
                '91% reduced customer acquisition costs',
                'Platform intelligence from expert users',
                'Zero cost, zero administration burden'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:sherrod@innovativeautomations.dev?subject=LIDO%20Partnership%20-%20Setup%20Call"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Schedule Setup Call
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
