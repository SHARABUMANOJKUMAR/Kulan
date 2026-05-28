import Services from '../components/Services';
import DigitalMarketingCampaigns from '../components/DigitalMarketingCampaigns';
import Testimonials from '../components/Testimonials';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <DigitalMarketingCampaigns />
      <Testimonials />
    </div>
  );
}
