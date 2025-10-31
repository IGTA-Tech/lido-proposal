import { motion } from 'framer-motion';
import { Database, ClipboardCheck, Award, ArrowRight, ArrowDown } from 'lucide-react';

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

export default function Pipeline() {
  const stages = [
    {
      badge: '1. Candidate Sourcing',
      title: 'MyVisaJobs.com Database',
      icon: Database,
      color: 'purple',
      subtitle: '500,000+ H-1B application records • Industry filtering • Visa status tracking',
      points: [
        'Filter by industry experience (Healthcare, Real Estate, E-commerce, etc.)',
        'Target 3-5 years proven experience in operations',
        'H-1B denied, OPT expiring, or seeking O-1/EB-1A pathway',
        'Located in target markets (SF, NYC, Chicago, Austin, Miami)'
      ]
    },
    {
      badge: '2. Pre-Screening',
      title: 'AivisaEvaluation.online Assessment',
      icon: ClipboardCheck,
      color: 'cyan',
      subtitle: 'Filter out weak candidates before LIDO certification',
      points: [
        'Two versions: AI/Tech roles + Business Operations',
        'Validates real experience and skills',
        '70%+ LIDO certification pass rate vs 15% random',
        'Ensures placement success (70% within 6 months)'
      ],
      link: 'https://www.aivisaevaluation.online'
    },
    {
      badge: '3. LIDO Certification',
      title: '20-Minute Assessment Test',
      icon: Award,
      color: 'emerald',
      subtitle: 'Top 1% of 50,000+ LIDO users get certified',
      points: [
        'Phase 1: Rapid Round (5 min) - 25% weight',
        'Phase 2: Build Challenge (10 min) - 50% weight',
        'Phase 3: Innovation Round (5 min) - 25% weight',
        'Third-party validated ranking methodology'
      ]
    }
  ];

  return (
    <section id="pipeline" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
              How We Build Your Specialist Pipeline
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              From H-1B Denied Professionals to Certified LIDO Champions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use a three-stage qualification process to ensure only the best candidates become certified LIDO specialists ready for strategic placement.
            </p>
          </div>
        </AnimatedSection>

        {/* Pipeline Stages */}
        <div className="space-y-16">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isLast = index === stages.length - 1;

            return (
              <div key={index}>
                <AnimatedSection delay={index * 0.2}>
                  <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                      <div>
                        <div className={`inline-flex items-center px-4 py-2 rounded-full ${
                          stage.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                          stage.color === 'cyan' ? 'bg-cyan-100 text-cyan-700' :
                          'bg-emerald-100 text-emerald-700'
                        } font-semibold mb-4`}>
                          <span className={`w-8 h-8 ${
                            stage.color === 'purple' ? 'bg-purple-600' :
                            stage.color === 'cyan' ? 'bg-cyan-600' :
                            'bg-emerald-600'
                          } text-white rounded-full flex items-center justify-center mr-3 text-sm`}>
                            {index + 1}
                          </span>
                          {stage.badge}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{stage.title}</h3>
                        <p className="text-lg text-gray-600">{stage.subtitle}</p>
                      </div>

                      <div className={`w-32 h-32 ${
                        stage.color === 'purple' ? 'bg-purple-50 border-purple-200' :
                        stage.color === 'cyan' ? 'bg-cyan-50 border-cyan-200' :
                        'bg-emerald-50 border-emerald-200'
                      } rounded-2xl flex items-center justify-center border-2 mt-6 lg:mt-0`}>
                        <Icon className={`${
                          stage.color === 'purple' ? 'text-purple-600' :
                          stage.color === 'cyan' ? 'text-cyan-600' :
                          'text-emerald-600'
                        } w-12 h-12`} />
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      {stage.points.map((point, i) => (
                        <div key={i} className="flex items-start">
                          <div className={`w-2 h-2 ${
                            stage.color === 'purple' ? 'bg-purple-600' :
                            stage.color === 'cyan' ? 'bg-cyan-600' :
                            'bg-emerald-600'
                          } rounded-full mr-3 mt-2`} />
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>

                    {stage.link && (
                      <div className="mt-6">
                        <a
                          href={stage.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                        >
                          View Assessment Tool
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    )}
                  </div>
                </AnimatedSection>

                {!isLast && (
                  <div className="flex justify-center my-8">
                    <ArrowDown className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pipeline Summary */}
        <AnimatedSection delay={0.8}>
          <div className="mt-20 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Pipeline Conversion Rates</h3>

            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-1 text-center">
                <div className="text-5xl font-bold mb-2">1,000</div>
                <div className="text-white/80 mb-4">MyVisaJobs Profiles Identified</div>
                <div className="text-emerald-300 font-semibold">100%</div>
              </div>

              <ArrowRight className="hidden md:block text-white/60 w-8 h-8" />
              <ArrowDown className="md:hidden text-white/60 w-8 h-8" />

              <div className="flex-1 text-center">
                <div className="text-5xl font-bold mb-2">400</div>
                <div className="text-white/80 mb-4">Pass AivisaEvaluation Pre-Screen</div>
                <div className="text-emerald-300 font-semibold">40% conversion</div>
              </div>

              <ArrowRight className="hidden md:block text-white/60 w-8 h-8" />
              <ArrowDown className="md:hidden text-white/60 w-8 h-8" />

              <div className="flex-1 text-center">
                <div className="text-5xl font-bold mb-2">280</div>
                <div className="text-white/80 mb-4">Attempt LIDO Certification</div>
                <div className="text-emerald-300 font-semibold">70% attempt rate</div>
              </div>

              <ArrowRight className="hidden md:block text-white/60 w-8 h-8" />
              <ArrowDown className="md:hidden text-white/60 w-8 h-8" />

              <div className="flex-1 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-bold mb-2 text-emerald-300">200</div>
                <div className="text-white mb-4 font-semibold">Certified LIDO Specialists</div>
                <div className="text-emerald-300 font-semibold">14% pass rate</div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-white/20 text-center">
              <div className="text-white/90 text-lg">
                From 1,000 prospects to 200 certified specialists in 12 weeks
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
