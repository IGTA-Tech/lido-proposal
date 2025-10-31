import { motion } from 'framer-motion';
import { Settings, Search, Award, Briefcase, CheckCircle, Target } from 'lucide-react';

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

export default function Timeline() {
  const timelineSteps = [
    { icon: Settings, week: 'Week 1-2', title: 'Industry Confirmation & Setup', description: 'Receive industry list, set up MyVisaJobs filters, configure assessments, create LIDO test', deliverable: 'Test platform ready' },
    { icon: Search, week: 'Week 3-4', title: 'Candidate Sourcing', description: 'Identify 100 candidates, pre-screen via phone, invite to AivisaEvaluation', deliverable: '40 pre-qualified candidates' },
    { icon: Award, week: 'Week 5-6', title: 'LIDO Certification', description: 'Administer 20-minute assessment, score and rank, certify top 1%', deliverable: '10 certified specialists' },
    { icon: Briefcase, week: 'Week 7-8', title: 'Placement Support', description: 'Resume optimization, interview prep, LinkedIn enhancement, apply to companies', deliverable: '7+ in interview pipeline' },
    { icon: CheckCircle, week: 'Week 9-10', title: 'Job Placement', description: 'Track interviews, support negotiations, coordinate start dates', deliverable: '7+ specialists hired' },
    { icon: Target, week: 'Week 11-12', title: 'Deployment Tracking', description: 'Monitor specialist activities, track LIDO POC development, measure adoption', deliverable: 'First ROI data' }
  ];

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
              12-Week Pilot Program Timeline
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              From Concept to First LIDO Customers
            </h2>
            <p className="text-xl text-gray-600">
              A clear week-by-week roadmap to deploy your internal sales army
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-emerald-600" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative flex items-start">
                    {/* Icon */}
                    <div className="absolute left-0 w-16 h-16 bg-white border-4 border-purple-600 rounded-full flex items-center justify-center z-10">
                      <Icon className="w-7 h-7 text-purple-600" />
                    </div>

                    {/* Content */}
                    <div className="ml-24 bg-gray-50 rounded-xl p-6 flex-1">
                      <div className="text-purple-600 font-semibold mb-1">{step.week}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {step.deliverable}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Result Box */}
        <AnimatedSection delay={0.8}>
          <div className="mt-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Success Criteria</h3>
            <p className="text-lg mb-6 text-white/90">
              7 of 10 specialists placed, 3+ LIDO POCs in progress
            </p>
            <div className="pt-6 border-t border-white/20">
              <div className="font-semibold mb-2">Next Step:</div>
              <div className="text-white/90">Scale to 200 specialists if pilot succeeds</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
