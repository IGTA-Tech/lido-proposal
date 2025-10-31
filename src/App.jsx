import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import InternalSalesArmy from './components/InternalSalesArmy';
import Pipeline from './components/Pipeline';
import ROICalculator from './components/ROICalculator';
import IndustryDeployment from './components/IndustryDeployment';
import WhatWeNeed from './components/WhatWeNeed';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <InternalSalesArmy />
      <Pipeline />
      <ROICalculator />
      <IndustryDeployment />
      <WhatWeNeed />
      <Timeline />
      <FAQ />
      <CTA />
    </div>
  );
}

export default App;
