import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { MouseEvent } from 'react';
import { 
  Share2, 
  Megaphone, 
  Search, 
  PenTool, 
  Target, 
  Globe, 
  Layers, 
  MessageCircle, 
  Video, 
  Database,
  Check,
  Zap,
  Cpu,
  Smartphone,
  Coins,
  Headphones,
  LineChart,
  Award,
  ArrowRight,
  ShieldAlert,
  Phone,
  Mail,
  ExternalLink,
  Code2,
  Lock,
  Star,
  Users2,
  CalendarCheck,
  Bot
} from 'lucide-react';

// Flash Card Type
interface FlashCard {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
}

// Pricing Card Type
interface PricingPlan {
  name: string;
  price: string;
  bestFor: string;
  features: string[];
  popular?: boolean;
}

export default function DigitalMarketingCampaigns() {
  const [activeTab, setActiveTab] = useState<'marketing' | 'website' | 'telecalling'>('marketing');

  // Flash cards data
  const flashCards: FlashCard[] = [
    {
      id: 1,
      title: 'Social Media Marketing',
      description: 'Instagram, Facebook & LinkedIn growth strategies to capture and engage your ideal audience.',
      icon: Share2,
      color: 'from-[#F5A300]/20 to-transparent'
    },
    {
      id: 2,
      title: 'Google & Meta Ads',
      description: 'Run laser-targeted, high-converting ad campaigns for maximum return on investment.',
      icon: Megaphone,
      color: 'from-blue-500/10 to-transparent'
    },
    {
      id: 3,
      title: 'SEO Optimization',
      description: 'Rank higher on Google search results and capture high-intent organic search traffic.',
      icon: Search,
      color: 'from-emerald-500/10 to-transparent'
    },
    {
      id: 4,
      title: 'Content Creation & Branding',
      description: 'Premium, creative, persuasive content that builds elite brand status and converts.',
      icon: PenTool,
      color: 'from-purple-500/10 to-transparent'
    },
    {
      id: 5,
      title: 'Lead Generation',
      description: 'Generate high-quality verified leads primed for your sales team to easily close.',
      icon: Target,
      color: 'from-[#F5A300]/20 to-transparent'
    },
    {
      id: 6,
      title: 'Website Growth Strategy',
      description: 'Engineer high-converting funnels to skyrocket website traffic and user conversions.',
      icon: Globe,
      color: 'from-cyan-500/10 to-transparent'
    },
    {
      id: 7,
      title: 'Sales Funnel Automation',
      description: 'Automate entire customer journeys, messaging sequences, and sales cycles effortlessly.',
      icon: Layers,
      color: 'from-[#E7C873]/10 to-transparent'
    },
    {
      id: 8,
      title: 'WhatsApp Marketing',
      description: 'Engage customers directly in chat with custom flows and instant direct notifications.',
      icon: MessageCircle,
      color: 'from-green-500/10 to-transparent'
    },
    {
      id: 9,
      title: 'AI Video Ads',
      description: 'Modern, dynamic, AI-powered promotional videos that capture immediate attention.',
      icon: Video,
      color: 'from-indigo-500/10 to-transparent'
    },
    {
      id: 10,
      title: 'CRM & Automation',
      description: 'Manage leads, set up smooth automated triggers, and orchestrate optimized workflows.',
      icon: Database,
      color: 'from-rose-500/10 to-transparent'
    }
  ];

  // Pricing Plans
  const marketingPlans: PricingPlan[] = [
    {
      name: 'BASIC PACKAGE',
      price: '₹4,999 – ₹7,999 / Mo',
      bestFor: 'Startups & Small Businesses',
      features: [
        'Social media setup & audit',
        '8 professional posts/month',
        'Basic graphic design & copy',
        '1 platform management',
        'Monthly performance report',
        'Standard customer support'
      ]
    },
    {
      name: 'STANDARD PACKAGE',
      price: '₹9,999 – ₹14,999 / Mo',
      bestFor: 'Growing Brands',
      popular: true,
      features: [
        '15 high-quality posts/month',
        'Facebook & Instagram management',
        'Basic local SEO configuration',
        'Ad campaign setup & targeting',
        'Content calendar coordination',
        'Monthly deep analytics & insights',
        'WhatsApp direct support'
      ]
    },
    {
      name: 'PREMIUM PACKAGE',
      price: '₹19,999 – ₹34,999 / Mo',
      bestFor: 'Businesses wanting strong growth',
      features: [
        '25 premium posts/month',
        'Multi-platform management (FB, IG, LI)',
        'Advanced local & on-page SEO',
        'Google & Meta ads strategy',
        'Reels & short-form video editing',
        'Dedicated lead generation setup',
        'Weekly reports & consultations',
        'Priority creative team access'
      ]
    },
    {
      name: 'COMPLETE CLOSER PACKAGE',
      price: '₹49,999+ / Mo',
      bestFor: 'Full business growth & sales conversion',
      features: [
        'Complete digital marketing ecosystem',
        'Unlimited creative requests',
        'Advanced paid ads scaling & tracking',
        'Custom high-converting funnel creation',
        'WhatsApp & Email automation',
        'Sales closing scripts & support',
        'Website speed & conversion audit',
        'Dedicated CMO / Account Manager',
        'Daily performance reviews & tuning'
      ]
    }
  ];

  const websitePlans: PricingPlan[] = [
    {
      name: 'BASIC WEBSITE PACKAGE',
      price: '₹8,000/-',
      bestFor: 'Local businesses, freelancers, portfolios',
      features: [
        '1–5 professional responsive pages',
        'Premium modern layout design',
        'Basic search engine (SEO) setup',
        'High-converting Contact Form',
        'Instant WhatsApp chat integration',
        'Social media linkages',
        'Free SSL certificate installation',
        '1-year hosting server setup support',
        'Rapid delivery in 3–5 days'
      ]
    },
    {
      name: 'STANDARD WEBSITE PACKAGE',
      price: '₹20,000/-',
      bestFor: 'Service companies, agencies, startups',
      popular: true,
      features: [
        '5–10 dynamic premium pages',
        'Custom premium design layout',
        'Advanced SEO optimization & structure',
        'High-performance Lead Generation forms',
        'WhatsApp chat integration with custom message',
        'Google Map location & review integration',
        'Lightning-fast page speed optimization',
        'Admin panel access with standard training',
        'Free business email setup',
        '1 year of dedicated technical support'
      ]
    },
    {
      name: 'PREMIUM WEBSITE PACKAGE',
      price: '₹45,000/-',
      bestFor: 'Growing brands, real estate, agencies',
      features: [
        '10–20 fully custom crafted pages',
        'Premium world-class UI/UX design',
        'Advanced SEO & full Schema Markup setup',
        'Seamless Blog integration & setup',
        'Interactive AI chat assistance module',
        'Premium Landing Page design included',
        'CRM & lead management linkage',
        'Google Analytics tracking integration',
        'Google Search Console indexing integration',
        'Priority 24/7 technical support response'
      ]
    },
    {
      name: 'CUSTOM WEBSITE PACKAGE',
      price: 'Starting From ₹50,000/-',
      bestFor: 'Custom platforms & complex functions',
      features: [
        'Bespoke tailormade design structure',
        'Complex third-party API integrations',
        'Automated Scheduling & Booking system',
        'Robust multi-language support',
        'Smart AI features & model integration',
        'Custom user & host dashboard',
        'Advanced business automation system',
        'Continuous optimization support'
      ]
    },
    {
      name: 'WOOCOMMERCE PACKAGE',
      price: 'Starting ₹35,000/-',
      bestFor: 'Flexible e-commerce with WordPress',
      features: [
        'WordPress & WooCommerce custom setup',
        'Full catalog product upload & organization',
        'Secure Payment Gateway integration',
        'Optimized cart & checkout process',
        'Easy order & invoice management system',
        'SEO-optimized product structures',
        'Full administrative training & guidelines'
      ]
    },
    {
      name: 'E-COMMERCE PACKAGE',
      price: 'Starting From ₹75,000/-',
      bestFor: 'Enterprise-grade custom online storefronts',
      features: [
        'Unlimited product capacities',
        'Ultra-premium custom e-commerce UI',
        'Razorpay / UPI & multiple payment modes',
        'Real-time automated inventory tracking',
        'End-to-end customer order tracking system',
        'Advanced marketing & coupon automation',
        'Automated WhatsApp purchase alerts',
        'Comprehensive, feature-rich admin dashboard'
      ]
    }
  ];

  const telecallingPlans: PricingPlan[] = [
    {
      name: 'BASIC TELECALLING PACKAGE',
      price: 'Starting From ₹20,000 / Mo',
      bestFor: 'Nurturing basic leads & follow-ups',
      features: [
        '1 dedicated trained professional telecaller',
        'Lead calling support & outreach campaigns',
        'Persistent customer follow-ups',
        'WhatsApp direct lead communication support',
        'Detailed daily outcome reports'
      ]
    },
    {
      name: 'STANDARD TELECALLING PACKAGE',
      price: 'Starting From ₹95,000 / Mo',
      bestFor: 'Middle-stage outreach & booking teams',
      popular: true,
      features: [
        '2–5 dedicated trained telecallers',
        'Strategic lead qualification & verification',
        'Priority appointment & consultation booking',
        'Direct CRM data entry & logging support',
        'Multi-channel WhatsApp & CRM SMS follow-ups'
      ]
    },
    {
      name: 'PREMIUM TELECALLING PACKAGE',
      price: 'Starting From ₹1,95,000 / Mo',
      bestFor: 'Elite outbound high-ticket solutions',
      features: [
        '5 dedicated elite telecallers',
        'Continuous expert sales team coordination',
        'Multilingual calling capability',
        'End-to-end CRM management & nurturing',
        'Personalized lead follow-up & trust building',
        'Comprehensive monthly analytics reports'
      ]
    },
    {
      name: 'LEAD GENERATION PACKAGE',
      price: 'Quote on Request',
      bestFor: 'Real estate, finance, insurance, B2B services',
      features: [
        '10 dedicated top-performing callers',
        'Continuous cold outreach volume campaigns',
        'Hot warm-up lead qualification sequences',
        'Instant appointment scheduling & hand-offs',
        'Multi-stage automated email sequences',
        'Strict lead verification guarantee'
      ]
    },
    {
      name: 'CUSTOM TELECALLING PACKAGE',
      price: 'Starting From ₹5 Lakh',
      bestFor: 'Enterprise 24/7 scaling support hubs',
      features: [
        'Flexible tailored team size setups',
        'Global international calling support',
        'Smart AI vocal agent calling integration',
        'Fully dedicated customer success teams',
        'Highly tier-specialized technical support lines',
        'Guaranteed round-the-clock 24/7 solutions'
      ]
    }
  ];

  // Why Choose Us
  const whyChooseUsData = [
    {
      title: 'SEO-Friendly Websites',
      description: 'Expert, valid schema structures and keyword layouts to ensure search crawlers position your site first.',
      icon: Search
    },
    {
      title: 'AI & Automation Support',
      description: 'Intelligent automation systems, automated follow-ups, and AI bots that scale customer acquisition effortlessly.',
      icon: Cpu
    },
    {
      title: 'Fast Loading Speed',
      description: 'Optimized pages with instant loading capabilities for maximum retention, conversion rates, and ranking power.',
      icon: Zap
    },
    {
      title: 'Mobile Optimized Design',
      description: 'Fully responsive designs adapted seamlessly to provide an elite presentation on any handheld device.',
      icon: Smartphone
    },
    {
      title: 'Affordable Pricing',
      description: 'Flexible packages constructed specifically to accommodate startups, SMBs, and scalable growth goals.',
      icon: Coins
    },
    {
      title: 'Dedicated Support',
      description: 'Consistent, direct help and customized consultations to ensure your growth engines remain functional daily.',
      icon: Headphones
    },
    {
      title: 'End-to-End Digital Solutions',
      description: 'A complete synergy of web development, copywriting, marketing, design, and outbound telecalling services.',
      icon: Code2
    },
    {
      title: 'High Conversion Strategies',
      description: 'Expert-molded landing pages, conversion funnels, and marketing campaigns made to turn visitors into buyers.',
      icon: LineChart
    },
    {
      title: 'Performance Marketing Experts',
      description: 'Analytical execution tracking CTR, CPC, CTR and ROAS precisely to guarantee absolute maximum efficiency.',
      icon: Award
    }
  ];

  // Interactive mouse move utility for card glow
  const handleMouseMoveGlow = (e: MouseEvent<HTMLDivElement>, mouseX: any, mouseY: any) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div className="text-white font-sans max-w-full overflow-hidden bg-[#071A1A]">
      
      {/* ----------------- SECTION 1: HERO SECTION ----------------- */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#021B1B] via-[#071A1A] to-[#071A1A]">
        {/* Background blobs */}
        <div className="absolute top-1/4 right-[2%] w-[450px] h-[450px] bg-[#F5A300]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Tag */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#F5A300]/30 bg-[#F5A300]/5 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A300] animate-pulse"></span>
              <span className="text-[#F5A300] tracking-widest text-[#B8C5C5] text-xs font-bold uppercase">TEKZIO DIGITAL MARKETING</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7.5xl font-extrabold font-heading text-white leading-tight mb-6 tracking-tight"
            >
              Scale Your Business With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A300] via-[#E7C873] to-[#F5A300]">
                Powerful Digital Marketing
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#B8C5C5] text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              At Tekzio, we help businesses grow faster, generate more leads, build stronger brand visibility, and convert visitors into paying customers through high-performance digital marketing strategies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A] font-bold text-sm tracking-wide shadow-lg shadow-[#F5A300]/25 hover:shadow-[#F5A300]/45 hover:scale-105 active:scale-95 transition-all duration-300">
                  Get Started
                </button>
              </Link>
              <a href="#packages" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#F5A300]/40 text-[#F5A300] hover:bg-[#F5A300]/10 font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all duration-300">
                  Talk To Experts
                </button>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto pt-6 border-t border-white/5"
            >
              {[
                { title: 'SEO Optimized', icon: Search },
                { title: 'Performance Marketing', icon: LineChart },
                { title: 'AI-Powered Growth', icon: Cpu },
                { title: 'Lead Generation Experts', icon: Target },
                { title: 'Fast Support', icon: Zap }
              ].map((badge, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center p-3 bg-[#0B2424]/40 h-full justify-center border border-white/5 rounded-2xl hover:border-[#F5A300]/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F5A300]/10 border border-[#F5A300]/20 flex items-center justify-center text-[#F5A300] mb-2">
                    <badge.icon size={16} />
                  </div>
                  <span className="text-white text-xs font-semibold leading-snug tracking-wide">{badge.title}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 2: DIGITAL MARKETING FLASH CARDS ----------------- */}
      <section className="py-24 relative overflow-hidden bg-[#071A1A]">
        {/* Decorative corner lines/shadows */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F5A300]"></span>
              <span className="text-xs uppercase font-bold tracking-widest text-[#B8C5C5]">Specialized Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Digital Marketing Flash Cards
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#F5A300] to-yellow-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-[#B8C5C5] mt-4 max-w-xl mx-auto text-sm md:text-base">
              Hover over cards to see gradient glow effects. We offer targeted systems to grow every vertical of your audience.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {flashCards.map((card, idx) => {
              const mouseX = useMotionValue(0);
              const mouseY = useMotionValue(0);

              const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => handleMouseMoveGlow(e, mouseX, mouseY);

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  onMouseMove={handleMouseMove}
                  className="group relative rounded-3xl bg-[#0B2424]/90 p-6 border border-white/5 hover:border-[#F5A300]/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-72 overflow-hidden"
                >
                  {/* Hover radial glow */}
                  <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
                    style={{
                      background: useMotionTemplate`
                        radial-gradient(
                          240px circle at ${mouseX}px ${mouseY}px,
                          rgba(245, 163, 0, 0.12),
                          transparent 70%
                        )
                      `,
                    }}
                  />

                  {/* Corner indicator banner style */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-3xl rounded-bl-3xl z-0" />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F5A300] group-hover:bg-[#F5A300]/10 group-hover:border-[#F5A300]/30 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-5">
                        <card.icon size={22} />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#F5A300] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-[#B8C5C5] text-xs leading-relaxed line-clamp-4 group-hover:text-white transition-colors duration-300">
                        {card.description}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <div className="pt-4 mt-auto">
                      <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5A300] tracking-wide group-hover:translate-x-1.5 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight size={12} strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 3, 4, 5: DIGITAL MARKETING PACKAGES ----------------- */}
      <section id="packages" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#071A1A] to-[#021B1B]">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#F5A300]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Premium Solutions Tailored to Your Growth
            </h2>
            <p className="text-[#B8C5C5] mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Explore professional plans constructed for startup velocity, high conversion rates, and scalable lead capturing.
            </p>

            {/* Premium Tab Switchers */}
            <div className="flex justify-center mt-10">
              <div className="inline-flex gap-2 p-1.5 bg-[#0B2424] rounded-full border border-white/5 backdrop-blur-md">
                <button
                  onClick={() => setActiveTab('marketing')}
                  className={`px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeTab === 'marketing'
                      ? 'bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A] shadow-md'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  Digital Marketing
                </button>
                <button
                  onClick={() => setActiveTab('website')}
                  className={`px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeTab === 'website'
                      ? 'bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A] shadow-md'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  Website Development
                </button>
                <button
                  onClick={() => setActiveTab('telecalling')}
                  className={`px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeTab === 'telecalling'
                      ? 'bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A] shadow-md'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  Outsource Telecalling
                </button>
              </div>
            </div>
          </div>

          {/* Render Active Tab's Pricing Table */}
          <div className="mt-12">
            
            {/* marketing TAB */}
            {activeTab === 'marketing' && (
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3.5xl font-bold font-heading text-[#F5A300] mb-2">
                    Tekzio Digital Marketing Packages
                  </h3>
                  <p className="text-[#B8C5C5] text-sm md:text-base">
                    Affordable growth-focused marketing solutions for every business.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                  {marketingPlans.map((plan, i) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className={`relative rounded-3xl p-[1px] flex flex-col ${plan.popular ? 'bg-gradient-to-b from-[#F5A300] to-transparent shadow-[0_0_25px_rgba(245,163,0,0.15)] md:-translate-y-2' : 'bg-white/5 border border-white/5'}`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A] text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full uppercase z-10 shadow-[0_4px_10px_rgba(245,163,0,0.3)]">
                          Most Popular
                        </div>
                      )}

                      <div className="flex-1 bg-[#0B2424]/95 rounded-3xl p-6 flex flex-col justify-between h-full">
                        <div>
                          <span className="text-[10px] font-bold tracking-widest text-[#B8C5C5] uppercase block mb-1">
                            {plan.bestFor}
                          </span>
                          <h4 className="text-lg font-black text-white leading-tight mb-3">
                            {plan.name}
                          </h4>
                          
                          <div className="py-4 border-y border-white/5 mb-6">
                            <span className="text-2xl font-black text-[#F5A300] block">{plan.price}</span>
                          </div>

                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#B8C5C5]">
                                <Check size={14} className="text-[#F5A300] shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8">
                          <a href="https://wa.me/919483004142" target="_blank" rel="noreferrer" className="w-full block">
                            <button className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A]' : 'bg-white/5 text-white hover:bg-[#F5A300]/10 hover:text-[#F5A300]'}`}>
                              Enquire Now
                            </button>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* website TAB */}
            {activeTab === 'website' && (
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3.5xl font-bold font-heading text-[#F5A300] mb-2">
                    Professional Website Development Packages
                  </h3>
                  <p className="text-[#B8C5C5] text-sm md:text-base">
                    Elite designs, seamless loading speeds, responsive frames, and integrated conversion triggers.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {websitePlans.map((plan, i) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className={`relative rounded-3xl p-[1px] flex flex-col ${plan.popular ? 'bg-gradient-to-b from-[#F5A300] to-transparent shadow-[0_0_25px_rgba(245,163,0,0.15)]' : 'bg-white/5 border border-white/5'}`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A] text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full uppercase z-10 shadow-[0_4px_10px_rgba(245,163,0,0.3)]">
                          Best Value Plan
                        </div>
                      )}

                      <div className="flex-1 bg-[#0B2424]/95 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full">
                        <div>
                          <span className="text-[10px] font-bold tracking-widest text-[#B8C5C5] uppercase block mb-1">
                            {plan.bestFor}
                          </span>
                          <h4 className="text-lg font-black text-white leading-tight mb-3">
                            {plan.name}
                          </h4>
                          
                          <div className="py-4 border-y border-white/5 mb-6">
                            <span className="text-2xl font-black text-[#F5A300] block">{plan.price}</span>
                          </div>

                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#B8C5C5]">
                                <Check size={14} className="text-[#F5A300] shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8">
                          <a href="https://wa.me/919483004142" target="_blank" rel="noreferrer" className="w-full block">
                            <button className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A]' : 'bg-white/5 text-white hover:bg-[#F5A300]/10 hover:text-[#F5A300]'}`}>
                              Choose Package
                            </button>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* telecalling TAB */}
            {activeTab === 'telecalling' && (
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3.5xl font-bold font-heading text-[#F5A300] mb-2">
                    Outsource Marketing & Telecalling Solutions
                  </h3>
                  <p className="text-[#B8C5C5] text-sm md:text-base">
                    Outsource outbound campaigns, qualification loops, scheduling, and direct closure tracking.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                  {telecallingPlans.map((plan, i) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className={`relative rounded-3xl p-[1px] flex flex-col ${plan.popular ? 'bg-gradient-to-b from-[#F5A300] to-transparent shadow-[0_0_25px_rgba(245,163,0,0.15)]' : 'bg-white/5 border border-white/5'}`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A] text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-full uppercase z-10 shadow-[0_4px_10px_rgba(245,163,0,0.3)]">
                          Recommended Outsourcing Scale
                        </div>
                      )}

                      <div className="flex-1 bg-[#0B2424]/95 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full">
                        <div>
                          <span className="text-[10px] font-bold tracking-widest text-[#B8C5C5] uppercase block mb-1">
                            {plan.bestFor}
                          </span>
                          <h4 className="text-lg font-black text-white leading-tight mb-3">
                            {plan.name}
                          </h4>
                          
                          <div className="py-4 border-y border-white/5 mb-6">
                            <span className="text-2xl font-black text-[#F5A300] block">{plan.price}</span>
                          </div>

                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#B8C5C5]">
                                <Check size={14} className="text-[#F5A300] shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8">
                          <a href="https://wa.me/919483004142" target="_blank" rel="noreferrer" className="w-full block">
                            <button className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A]' : 'bg-white/5 text-white hover:bg-[#F5A300]/10 hover:text-[#F5A300]'}`}>
                              Book Callers
                            </button>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ----------------- SECTION 6: WHY CHOOSE TEKZIO ----------------- */}
      <section className="py-24 relative overflow-hidden bg-[#071A1A]">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#F5A300]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 mb-4">
              <span className="w-2 h-2 bg-[#F5A300] rounded-full"></span>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#B8C5C5]">TEKZIO ADVANCED DIFFERENCE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tight">
              Why Choose Tekzio
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#F5A300] to-yellow-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-[#B8C5C5] mt-4 max-w-xl mx-auto text-sm md:text-base">
              At Tekzio, we combine state-of-the-art engineering tools with analytical marketing principles to produce mathematical certainty for your cashflow.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {whyChooseUsData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="group relative rounded-3xl bg-[#0B2424]/85 p-6 border border-white/5 hover:border-[#F5A300]/20 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(245,163,0,0.04)]"
              >
                <div className="flex gap-4 items-start">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A300]/10 border border-[#F5A300]/25 text-[#F5A300] group-hover:bg-[#F5A300] group-hover:text-[#071A1A] group-hover:shadow-[0_0_15px_rgba(245,163,0,0.4)] flex items-center justify-center shrink-0 transition-all duration-300">
                    <item.icon size={20} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#F5A300] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#B8C5C5] text-xs leading-relaxed group-hover:text-white/95 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 7: FINAL CTA SECTION ----------------- */}
      <section id="contact-footer" className="py-24 relative overflow-hidden bg-gradient-to-t from-[#021B1B] to-[#071A1A]">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5A300]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-dark border border-white/5 rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden bg-[#0B2424]/75 backdrop-blur-xl"
          >
            {/* Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F5A300]/5 to-transparent rounded-bl-[10rem]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5.5xl font-black font-heading text-white tracking-tight leading-tight mb-4">
                Ready To Grow Your Business?
              </h2>
              <p className="text-[#B8C5C5] max-w-2xl mx-auto mb-10 text-sm md:text-base lg:text-lg">
                Let Tekzio build powerful digital systems that help your business scale faster. Enquire today and unlock custom pricing for your growth plan.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a href="https://wa.me/919483004142" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5A300] to-yellow-600 text-[#071A1A] font-bold text-sm tracking-wide shadow-lg shadow-[#F5A300]/25 hover:scale-105 transition-all duration-300">
                    Contact Now
                  </button>
                </a>
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border border-[#F5A300]/30 text-[#F5A300] font-bold text-sm tracking-wide hover:bg-[#F5A300]/5 hover:scale-105 transition-all duration-300">
                    Start Your Project
                  </button>
                </Link>
              </div>

              {/* Contacts Line */}
              <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[#B8C5C5] text-xs md:text-sm">
                
                {/* Phone */}
                <a href="tel:+919483004142" className="flex items-center gap-2.5 hover:text-[#F5A300] transition-colors duration-300 group">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#F5A300] group-hover:bg-[#F5A300]/10 transition-all duration-300">
                    <Phone size={14} />
                  </div>
                  <span className="font-semibold tracking-wide">+91 9483004142</span>
                </a>

                {/* Domain */}
                <a href="https://tekzio.in" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-[#F5A300] transition-colors duration-300 group">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#F5A300] group-hover:bg-[#F5A300]/10 transition-all duration-300">
                    <Globe size={14} />
                  </div>
                  <span className="font-semibold tracking-wide">www.tekzio.in</span>
                </a>

                {/* Email */}
                <a href="mailto:info@tekzio.in" className="flex items-center gap-2.5 hover:text-[#F5A300] transition-colors duration-300 group">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#F5A300] group-hover:bg-[#F5A300]/10 transition-all duration-300">
                    <Mail size={14} />
                  </div>
                  <span className="font-semibold tracking-wide">info@tekzio.in</span>
                </a>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
