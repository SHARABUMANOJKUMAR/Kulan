import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <Pricing />
      <Testimonials />
    </div>
  );
}
