import { motion } from 'framer-motion';
import { Users, Briefcase, Lightbulb, Code, CheckCircle, ShieldCheck, UserCheck, Folder, FileText } from 'lucide-react';

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

export default function InternalSalesArmy() {
  const flowSteps = [
    { icon: Users, title: 'Certify Specialists', description: '200 professionals tested, top 1% of 50K+ LIDO users get certified', color: 'purple' },
    { icon: Briefcase, title: 'Get Hired', description: 'Specialists interview at target companies, get hired as operations managers', color: 'cyan' },
    { icon: Lightbulb, title: 'Identify Opportunities', description: 'Specialists discover automation pain points and workflow inefficiencies', color: 'emerald' },
    { icon: Code, title: 'Build POC', description: 'Create internal LIDO proof-of-concept showing time/cost savings', color: 'amber' },
    { icon: CheckCircle, title: 'LIDO Adopted', description: 'Company becomes LIDO customer, specialist drives expansion', color: 'gradient' }
  ];

  const lockInMechanisms = [
    { icon: ShieldCheck, title: 'Visa Lock-In', description: 'Their EB-1A green card application depends on proving they\'re "top 1% LIDO experts." Switching to Make/Zapier invalidates their visa evidence.', color: 'purple' },
    { icon: UserCheck, title: 'Professional Identity', description: 'They\'re certified as "LIDO Workflow Specialists" on LinkedIn, resume, and portfolio. This is their career brand.', color: 'cyan' },
    { icon: Folder, title: 'Portfolio Requirements', description: 'Their case studies and implementations must showcase LIDO to prove extraordinary ability for visa.', color: 'emerald' },
    { icon: FileText, title: 'Certification Agreement', description: 'Specialists sign 24-month LIDO exclusivity as condition of certification.', color: 'amber' }
  ];

  const colorClasses = {
    purple: 'from-purple-50 to-purple-100 border-purple-200',
    cyan: 'from-cyan-50 to-cyan-100 border-cyan-200',
    emerald: 'from-emerald-50 to-emerald-100 border-emerald-200',
    amber: 'from-amber-50 to-amber-100 border-amber-200',
    gradient: 'from-purple-100 to-emerald-100 border-emerald-200'
  };

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-3">
              The Internal Sales Army Strategy
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How We Embed LIDO Champions Inside Your Target Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We certify industry professionals as "LIDO Workflow Specialists," they get hired at companies that need automation, then they drive LIDO adoption from the inside.
            </p>
          </div>
        </AnimatedSection>

        {/* Flow Diagram */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4 mb-20">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex-1 w-full lg:w-auto">
                  <div className={`bg-gradient-to-br ${colorClasses[step.color]} rounded-2xl p-6 text-center relative border-2 shadow-lg h-full`}>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Lock-In Section */}
        <AnimatedSection delay={0.4}>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-purple-600 mr-3" />
                Why Specialists Will ONLY Promote LIDO (Not Competitors)
              </h3>
              <p className="text-lg text-gray-600">
                Four mechanisms ensure specialists remain LIDO-exclusive for 24+ months
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {lockInMechanisms.map((mechanism, index) => {
                const Icon = mechanism.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {index + 1}. {mechanism.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{mechanism.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Real Example */}
        <AnimatedSection delay={0.6}>
          <div className="bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Real-World Deployment Example
              </h3>
              <p className="text-lg text-gray-600">
                How a certified specialist drives LIDO adoption at a medical practice
              </p>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { week: 'Week 1', action: 'Discovery', description: 'Specialist gets hired as Operations Manager at 25-doctor medical practice. Spends first week learning workflows.' },
                { week: 'Week 2-3', action: 'Analysis', description: 'Maps pain points and calculates current costs. Documents time savings opportunities.' },
                { week: 'Week 4-6', action: 'POC Development', description: 'Builds LIDO proof-of-concept (no procurement approval needed). Creates automated patient reminder workflow.' },
                { week: 'Week 7-8', action: 'Presentation', description: 'Presents business case to practice manager. Shows $3,200/month savings from reduced no-shows.' },
                { week: 'Week 9', action: 'Approval & Rollout', description: 'Practice approves LIDO license, becomes paying customer. $50,000 annual contract closed in 9 weeks.' }
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                    <span className="font-bold text-purple-600">{index + 1}</span>
                  </div>
                  <div>
                    <div className="text-purple-600 font-semibold mb-1">{step.week}: {step.action}</div>
                    <div className="text-gray-600">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-3">
                Result: $50,000 Annual Contract Closed in 9 Weeks
              </div>
              <div className="text-gray-600">
                <strong>Without specialist:</strong> Cold outreach → Ignored emails → No meeting<br />
                <strong>With specialist:</strong> Internal champion → Proven ROI → Approved in 9 weeks
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
