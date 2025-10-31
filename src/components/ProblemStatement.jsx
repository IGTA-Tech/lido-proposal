import { motion } from 'framer-motion';
import { XCircle, CheckCircle, DollarSign, Clock, TrendingDown, TrendingUp, Lightbulb, X, Check, Zap } from 'lucide-react';

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

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
              The Traditional Sales Challenge
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Traditional SaaS Sales Don't Work for Your Target Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your prospects already use Make or Zapier. They think they're "fine with current tools."
              Cold outreach gets blocked, demos get ignored, and sales cycles drag for months.
            </p>
          </div>
        </AnimatedSection>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Traditional Sales - Red/Negative */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mr-4">
                  <XCircle className="text-red-600 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Traditional Sales</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-red-500 mr-4 mt-1">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">$47,000</div>
                    <div className="text-gray-600">Average CAC</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-red-500 mr-4 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">6-9 months</div>
                    <div className="text-gray-600">Sales Cycle Length</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-red-500 mr-4 mt-1">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">15-20%</div>
                    <div className="text-gray-600">Win Rate</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Cold outreach to skeptical buyers',
                  'Competing on features and pricing',
                  '"We already use Make/Zapier" objection',
                  'Long approval processes and procurement delays'
                ].map((problem, i) => (
                  <div key={i} className="flex items-start text-gray-700">
                    <X className="text-red-500 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Internal Sales Army - Green/Positive */}
          <AnimatedSection delay={0.4}>
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 shadow-xl border-2 border-emerald-200 h-full relative">
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                Our Approach
              </div>

              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mr-4">
                  <CheckCircle className="text-emerald-600 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Internal Sales Army</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-emerald-500 mr-4 mt-1">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">$4,000</div>
                    <div className="text-gray-700">
                      Average CAC <span className="text-emerald-600 font-semibold">(91% reduction)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-emerald-500 mr-4 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">2-4 weeks</div>
                    <div className="text-gray-700">
                      Sales Cycle Length <span className="text-emerald-600 font-semibold">(83% faster)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-emerald-500 mr-4 mt-1">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">60-70%</div>
                    <div className="text-gray-700">
                      Win Rate <span className="text-emerald-600 font-semibold">(4x improvement)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Internal champion already embedded',
                  'Warm recommendation from trusted colleague',
                  'POC built before procurement begins',
                  'Business case proven with internal data'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start text-gray-800">
                    <Check className="text-emerald-500 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Callout Box */}
        <AnimatedSection delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-600">
            <div className="flex items-start">
              <Lightbulb className="text-purple-600 mr-4 mt-1 flex-shrink-0 w-7 h-7" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  The Key Insight
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your competitors (Make, Zapier, n8n) compete on <strong>features and pricing</strong>.
                  You can compete on <strong>workforce distribution</strong>—embedding LIDO experts inside
                  potential customers before traditional sales even begins. They can't replicate this because
                  they don't solve immigration problems.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
