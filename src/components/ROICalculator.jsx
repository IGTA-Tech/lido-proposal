import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Clock, TrendingUp, Trophy } from 'lucide-react';
import { calculateROI } from '../utils/calculations';

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

export default function ROICalculator() {
  const [specialists, setSpecialists] = useState(50);
  const [acv, setACV] = useState(50000);
  const [currentCAC, setCurrentCAC] = useState(47000);
  const [salesCycle, setSalesCycle] = useState(6.5);

  const results = useMemo(
    () => calculateROI(specialists, acv, currentCAC, salesCycle),
    [specialists, acv, currentCAC, salesCycle]
  );

  return (
    <section id="roi" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="text-purple-400 font-semibold text-sm uppercase tracking-wide mb-3">
              Interactive ROI Calculator
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Calculate Your Exact Savings
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Adjust the inputs below to see how the Internal Sales Army strategy
              impacts your customer acquisition costs and revenue.
            </p>
          </div>
        </AnimatedSection>

        {/* Calculator Container */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border-2 border-gray-700 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side: Inputs */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Your Current Metrics</h3>
                  <p className="text-gray-400">Adjust sliders to match your business</p>
                </div>

                <div className="space-y-8">
                  {/* Slider 1 */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">Monthly Specialists Deployed</span>
                      <span className="text-purple-400 font-bold text-xl">{specialists}</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="5"
                      value={specialists}
                      onChange={(e) => setSpecialists(Number(e.target.value))}
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>10</span>
                      <span>100</span>
                    </div>
                  </div>

                  {/* Slider 2 */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">Average Contract Value (ACV)</span>
                      <span className="text-purple-400 font-bold text-xl">${acv.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="100000"
                      step="5000"
                      value={acv}
                      onChange={(e) => setACV(Number(e.target.value))}
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>$10K</span>
                      <span>$100K</span>
                    </div>
                  </div>

                  {/* Slider 3 */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">Your Current CAC</span>
                      <span className="text-purple-400 font-bold text-xl">${currentCAC.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="80000"
                      step="1000"
                      value={currentCAC}
                      onChange={(e) => setCurrentCAC(Number(e.target.value))}
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>$10K</span>
                      <span>$80K</span>
                    </div>
                  </div>

                  {/* Slider 4 */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium">Current Sales Cycle (months)</span>
                      <span className="text-purple-400 font-bold text-xl">{salesCycle}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      step="0.5"
                      value={salesCycle}
                      onChange={(e) => setSalesCycle(Number(e.target.value))}
                      className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>1 month</span>
                      <span>12 months</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Outputs */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Your Projected Savings</h3>
                  <p className="text-gray-400">With Internal Sales Army approach</p>
                </div>

                {/* Comparison Chart */}
                <div className="mb-8 bg-gray-900/50 rounded-xl p-4">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={results.chartData}>
                      <XAxis dataKey="name" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                        labelStyle={{ color: '#f9fafb' }}
                      />
                      <Bar dataKey="Traditional" fill="#ef4444" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="Internal" fill="#10b981" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Output Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    key={results.calculatedCAC}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6"
                  >
                    <DollarSign className="text-white mb-2 w-6 h-6" />
                    <div className="text-3xl font-bold text-white mb-1">
                      ${results.calculatedCAC.toLocaleString()}
                    </div>
                    <div className="text-emerald-100 text-sm mb-2">New CAC</div>
                    <div className="text-emerald-200 font-semibold text-sm">
                      -{results.cacReduction}% vs traditional
                    </div>
                  </motion.div>

                  <motion.div
                    key={results.newSalesCycle}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-6"
                  >
                    <Clock className="text-white mb-2 w-6 h-6" />
                    <div className="text-3xl font-bold text-white mb-1">
                      {results.newSalesCycle} weeks
                    </div>
                    <div className="text-cyan-100 text-sm mb-2">Sales Cycle</div>
                    <div className="text-cyan-200 font-semibold text-sm">
                      -{results.cycleReduction}% faster
                    </div>
                  </motion.div>

                  <motion.div
                    key={results.annualSavings}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6"
                  >
                    <TrendingUp className="text-white mb-2 w-6 h-6" />
                    <div className="text-3xl font-bold text-white mb-1">
                      ${results.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-purple-100 text-sm mb-2">Annual Savings</div>
                    <div className="text-purple-200 font-semibold text-sm">
                      Per {specialists} specialists
                    </div>
                  </motion.div>

                  <motion.div
                    key={results.roi}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-6"
                  >
                    <Trophy className="text-white mb-2 w-6 h-6" />
                    <div className="text-3xl font-bold text-white mb-1">
                      {results.roi.toFixed(1)}:1
                    </div>
                    <div className="text-amber-100 text-sm mb-2">3-Year ROI</div>
                    <div className="text-amber-200 font-semibold text-sm">
                      Investment vs return
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mt-12 pt-8 border-t-2 border-gray-700">
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                Financial Impact Summary
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-700/50 rounded-xl p-6 text-center">
                  <div className="text-gray-400 text-sm mb-2">Year 1 New ARR</div>
                  <div className="text-3xl font-bold text-white mb-2">
                    ${results.year1ARR.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {specialists} specialists × {results.internalCustomers} customers
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-6 text-center">
                  <div className="text-gray-400 text-sm mb-2">Year 2 New ARR</div>
                  <div className="text-3xl font-bold text-white mb-2">
                    ${results.year2ARR.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">With expansion revenue</div>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-6 text-center">
                  <div className="text-gray-400 text-sm mb-2">Total CAC Savings</div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    ${results.totalSavings.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">3-year cumulative</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
