import { motion } from 'framer-motion';
import { Mail, Phone, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6 border border-white/20"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          <span className="text-sm font-semibold">Let's Move Forward</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Ready to Build Your Specialist Pipeline?
        </motion.h2>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
        >
          Email me to confirm industry priorities and map out the certification test.
          We can have the first 10 specialists certified and deployed within 12 weeks.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <a
            href="mailto:sherrod@innovativeautomations.dev?subject=LIDO%20Partnership%20-%20Industry%20Focus%20%26%20Launch%20Plan"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <Mail className="w-5 h-5" />
            <span>Email Sherrod</span>
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-white mb-4">
            <div className="text-2xl font-bold mb-2">Sherrod Seward</div>
            <div className="text-white/80 mb-4">CEO, Innovative Automations</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <a
              href="tel:980-403-6587"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">980-403-6587</span>
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href="mailto:sherrod@innovativeautomations.dev"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">sherrod@innovativeautomations.dev</span>
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-6 pt-6 border-t border-white/20 text-white/70 text-sm">
            500+ O-1 visas filed, 94% approval rate. We know how to build evidence packages USCIS accepts.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
