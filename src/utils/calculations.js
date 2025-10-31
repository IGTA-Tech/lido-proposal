// ROI Calculator Logic for LIDO Partnership Proposal

export function calculateROI(specialists, acv, currentCAC, salesCycle) {
  // Constants for Internal Sales Army model
  const INTERNAL_CAC = 4000;
  const INTERNAL_CYCLE_WEEKS = 3; // 2-4 weeks average
  const INTERNAL_WIN_RATE = 0.65;
  const TRADITIONAL_WIN_RATE = 0.175;

  // Calculate CAC reduction
  const cacReduction = Math.round(((currentCAC - INTERNAL_CAC) / currentCAC) * 100);

  // Calculate sales cycle reduction
  const currentCycleWeeks = salesCycle * 4.33; // Convert months to weeks
  const cycleReduction = Math.round(((currentCycleWeeks - INTERNAL_CYCLE_WEEKS) / currentCycleWeeks) * 100);

  // Calculate customers acquired
  const traditionalCustomers = specialists * TRADITIONAL_WIN_RATE;
  const internalCustomers = specialists * INTERNAL_WIN_RATE;

  // Calculate annual savings
  const traditionalCost = traditionalCustomers * currentCAC;
  const internalCost = internalCustomers * INTERNAL_CAC;
  const annualSavings = (traditionalCost - internalCost) * 12;

  // Calculate revenue
  const year1ARR = Math.round(internalCustomers * acv * 12);
  const year2ARR = Math.round(year1ARR * 1.3); // 30% expansion

  // Calculate 3-year ROI
  const threeYearRevenue = year1ARR + year2ARR + (year2ARR * 1.2);
  const threeYearCost = (specialists * 12 * 3) * INTERNAL_CAC;
  const roi = threeYearRevenue / threeYearCost;

  // Calculate total savings
  const totalSavings = Math.round((currentCAC - INTERNAL_CAC) * internalCustomers * 12 * 3);

  // Chart data
  const chartData = [
    {
      name: 'CAC',
      Traditional: currentCAC,
      Internal: INTERNAL_CAC
    }
  ];

  return {
    calculatedCAC: INTERNAL_CAC,
    cacReduction,
    newSalesCycle: INTERNAL_CYCLE_WEEKS,
    cycleReduction,
    annualSavings: Math.round(annualSavings),
    roi,
    year1ARR,
    year2ARR,
    totalSavings,
    chartData,
    internalCustomers: Math.round(internalCustomers)
  };
}
