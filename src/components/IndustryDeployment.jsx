import { motion } from 'framer-motion';
import { Scale, Heart, Home, ShoppingCart, Briefcase, Cloud, CheckCircle, Clock } from 'lucide-react';

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

export default function IndustryDeployment() {
  const industries = [
    { icon: Scale, title: 'Attorneys / Law Firms', status: 'confirmed', companies: '50K+ law firms' },
    { icon: Heart, title: 'Healthcare', status: 'pending', companies: '100K+ medical practices' },
    { icon: Home, title: 'Real Estate', status: 'pending', companies: '80K+ agencies' },
    { icon: ShoppingCart, title: 'E-commerce', status: 'pending', companies: '200K+ retailers' },
    { icon: Briefcase, title: 'Professional Services', status: 'pending', companies: '150K+ firms' },
    { icon: Cloud, title: 'SaaS Operations', status: 'pending', companies: '30K+ companies' }
  ];

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
              Target Industries for Specialist Deployment
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Where We Deploy Certified Specialists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deploy certified specialists into companies that need workflow automation but don't use LIDO yet
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isConfirmed = industry.status === 'confirmed';

            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`bg-white rounded-xl p-6 border-2 ${
                    isConfirmed ? 'border-emerald-200 shadow-lg shadow-emerald-100' : 'border-gray-200'
                  } hover:shadow-xl transition-all h-full`}
                >
                  {isConfirmed && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-4">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      CONFIRMED BY ANDRÉS
                    </div>
                  )}
                  {!isConfirmed && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold mb-4">
                      <Clock className="w-3 h-3 mr-1" />
                      AWAITING CONFIRMATION
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-lg ${
                    isConfirmed ? 'bg-emerald-100' : 'bg-gray-100'
                  } flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${
                      isConfirmed ? 'text-emerald-600' : 'text-gray-600'
                    }`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-gray-600 text-sm">{industry.companies}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              We Need Your Industry Priorities
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              During our call, you mentioned attorneys/law firms as one key vertical. Which other industries should we focus on? This determines where we recruit candidates and which companies they target for employment.
            </p>
            <a
              href="mailto:sherrod@innovativeautomations.dev?subject=LIDO%20Industry%20Priorities"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Share Your Industry List
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
