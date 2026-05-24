import Hero from '../components/Hero';
import PartnerLogos from '../components/PartnerLogos';
import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import HowItWorks from '../components/HowItWorks';
import Statistics from '../components/Statistics';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <PartnerLogos />
      <About />
      <CaseStudies />
      <HowItWorks />
      <Statistics />
    </div>
  );
}
