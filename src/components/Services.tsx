import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { MouseEvent } from 'react';
import { 
  MonitorSmartphone, 
  TrendingUp, 
  Headphones, 
  Megaphone, 
  Filter, 
  PenTool
} from 'lucide-react';

interface Service {
  num: string;
  title: string;
  icon: any;
  subtitle?: string;
  desc: string;
  features: string[];
}

const services: Service[] = [
  {
    num: '01',
    title: 'Web Development Services',
    icon: MonitorSmartphone,
    desc: 'We build all types of websites to match your business needs with premium UI/UX.',
    features: [
      'Dynamic websites with admin panel',
      'E-commerce & WordPress',
      'Landing pages & Custom solutions',
      'Mobile-first & SEO-friendly structure'
    ],
  },
  {
    num: '02',
    title: 'SEO Services',
    icon: TrendingUp,
    subtitle: 'Boost Your Google Rankings',
    desc: 'Drive organic traffic and win more customers with safe & proven white-hat strategies.',
    features: [
      'On-Page & Off-Page SEO',
      'Local SEO & Business Profile',
      'High-Quality Backlinks & Guest posting',
      'Monthly reporting & tracker'
    ],
  },
  {
    num: '03',
    title: 'Telecalling Service',
    icon: Headphones,
    subtitle: 'Outbound Marketing',
    desc: 'Professional multilingual telecalling solutions to generate quality leads and engagement.',
    features: [
      '50–60 connected calls daily',
      'B2B & B2C lead generation',
      'Multilingual (English, Hindi, Kannada...)',
      'Daily reports & Call recordings'
    ],
  },
  {
    num: '04',
    title: 'Digital Marketing',
    icon: Megaphone,
    desc: 'Result-driven marketing campaigns that increase brand awareness, traffic, and conversions.',
    features: [
      'Social media & Content marketing',
      'Google Ads & Meta promotions',
      'Funnel marketing strategies',
      'Audience targeting & awareness'
    ],
  },
  {
    num: '05',
    title: 'Pay Per Lead Services',
    icon: Filter,
    desc: 'Get high-quality verified leads for your business and pay only for real potential customers.',
    features: [
      'Verified business leads',
      'Industry-targeted extraction',
      'Real-time delivery & CRM integration',
      'Higher conversion opportunities'
    ]
  },
  {
    num: '06',
    title: 'Logo & Promotion Design',
    icon: PenTool,
    desc: 'Premium logos, branding materials, and promotional designs that make your business stand out.',
    features: [
      'Brand identity & Logo design',
      'Brochures, Flyers & Social posters',
      'Ad creatives & Banners',
      'Modern motion graphics'
    ],
  }
];

function ServiceCard({ service, idx }: { service: Service, idx: number, key?: number | string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-[2rem] bg-secondary-bg/95 p-8 lg:p-10 border border-white/5 overflow-hidden transition-all duration-500 hover:border-gold/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(231,200,115,0.15)] flex flex-col justify-between"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(231,200,115, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Floating Background Icon */}
      <motion.div 
        className="absolute -top-10 -right-10 text-white/5 group-hover:text-gold/10 transition-colors duration-500 z-0"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <service.icon size={160} strokeWidth={0.5} />
      </motion.div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:text-gold group-hover:border-gold/30 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(231,200,115,0.4)] group-hover:scale-110">
            <service.icon size={28} />
          </div>
          <span className="text-4xl font-bold font-heading text-white/5 group-hover:text-gold/20 transition-colors duration-300">{service.num}</span>
        </div>

        <h3 className="text-2xl font-bold font-heading mb-2 text-white group-hover:text-gold transition-colors duration-300">{service.title}</h3>
        {service.subtitle && (
          <p className="text-gold/90 text-sm font-semibold tracking-wide mb-3 uppercase">{service.subtitle}</p>
        )}
        <p className="text-text-gray leading-relaxed mb-6 text-sm">
          {service.desc}
        </p>

        <ul className="space-y-3 mb-8">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-gray/90 group-hover:text-white transition-colors duration-300">
              <span className="text-gold mt-[3px] text-[10px] shrink-0">✦</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative z-10 bg-primary-bg overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col mb-16 text-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-gold tracking-widest text-sm font-semibold uppercase">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Premium Digital Solutions<br className="hidden md:block"/> For Modern Businesses
            </h2>
            <p className="text-text-gray text-lg md:text-xl max-w-2xl mx-auto">
              We help businesses grow faster with powerful websites, SEO, telecalling, branding, and digital marketing solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 relative z-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
