import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [formData.message]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return 'This field is required';
    }
    if (name === 'email' && !validateEmail(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const getFieldClass = (name: string) => {
    const isTouched = touched[name];
    const error = errors[name];
    
    const baseClass = "w-full bg-white/5 border rounded-2xl px-6 py-4 text-[#FFFFFF] placeholder:text-[#B8C5C5]/50 focus:outline-none transition-all duration-300 backdrop-blur-md shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]";
    
    if (!isTouched) {
      return `${baseClass} border-[rgba(255,255,255,0.08)] focus:border-[#14B8A6] focus:shadow-[0_0_15px_rgba(20,184,166,0.3)] focus:scale-[1.01] hover:bg-white/10`;
    }
    if (error) {
      return `${baseClass} border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)] focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.3)] focus:scale-[1.01]`;
    }
    return `${baseClass} border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.2)] focus:border-green-500 focus:shadow-[0_0_15px_rgba(34,197,94,0.3)] focus:scale-[1.01]`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    let isValid = true;
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxQAxTEGlXt4QphqrAEF21Vc6uGJvwVzeyB4EP6OqcK0DtOw1oL3f6vAEEmdaw-fg492w/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setTouched({});
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative z-10 bg-[#021B1B] overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-[#14B8A6] rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-[#0EA5E9] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-20">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-white/5 mb-6 text-[#14B8A6] text-sm font-semibold tracking-wider uppercase"
          >
            Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 tracking-tight"
          >
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#0EA5E9]">Project</span>
          </motion.h2>
          <p className="text-[#B8C5C5] text-lg max-w-2xl mx-auto">
            Ready to transform your digital presence? Fill out the form below and we'll be in touch.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[rgba(7,30,30,0.75)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-[32px] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative"
        >
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-[#B8C5C5] text-sm font-medium pl-1 block">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe" 
                  className={getFieldClass('fullName')}
                />
                <AnimatePresence>
                  {touched.fullName && errors.fullName && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-sm pl-2">
                      {errors.fullName}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[#B8C5C5] text-sm font-medium pl-1 block">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@example.com" 
                  className={getFieldClass('email')}
                />
                <AnimatePresence>
                  {touched.email && errors.email && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-sm pl-2">
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-[#B8C5C5] text-sm font-medium pl-1 block">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+1 (555) 000-0000" 
                  className={getFieldClass('phone')}
                />
                <AnimatePresence>
                  {touched.phone && errors.phone && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-sm pl-2">
                      {errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-[#B8C5C5] text-sm font-medium pl-1 block">Company Name</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Company Inc." 
                  className={getFieldClass('company')}
                />
                <AnimatePresence>
                  {touched.company && errors.company && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-sm pl-2">
                      {errors.company}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Service */}
            <div className="space-y-2">
              <label className="text-[#B8C5C5] text-sm font-medium pl-1 block">Service Interested In</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${getFieldClass('service')} appearance-none`}
              >
                <option value="" disabled>Select a service</option>
                <option value="Marketing Strategy">Marketing Strategy</option>
                <option value="Web Development">Web Development</option>
                <option value="Business Strategy">Business Strategy</option>
                <option value="Email Marketing">Email Marketing</option>
                <option value="App Development">App Development</option>
                <option value="Marketing Analysis">Marketing Analysis</option>
              </select>
              <AnimatePresence>
                {touched.service && errors.service && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-sm pl-2">
                    {errors.service}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-[#B8C5C5] text-sm font-medium pl-1 block">Message</label>
              <textarea 
                ref={textareaRef}
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your project requirements..." 
                rows={4}
                className={`${getFieldClass('message')} min-h-[120px] resize-none overflow-hidden`}
              ></textarea>
              <AnimatePresence>
                {touched.message && errors.message && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-sm pl-2">
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-center pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto min-w-[240px] bg-[linear-gradient(135deg,#14B8A6,#0EA5E9)] hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      🚀 Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </form>

          {/* Toast Messages */}
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-[rgba(20,184,166,0.15)] border border-[#14B8A6]/30 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_32px_rgba(20,184,166,0.2)] flex items-start gap-4 z-50 whitespace-nowrap"
              >
                <CheckCircle2 className="text-[#14B8A6] mt-0.5 shrink-0" size={20} />
                <div>
                  <p className="text-white font-medium">🚀 Message Sent Successfully!</p>
                  <p className="text-[#B8C5C5] text-sm mt-1">Our team will contact you within 2 hours.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-red-500/10 border border-red-500/30 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_32px_rgba(239,68,68,0.2)] flex items-center gap-3 z-50 whitespace-nowrap"
              >
                <XCircle className="text-red-400 shrink-0" size={20} />
                <div>
                  <p className="text-white font-medium">❌ Failed to send message.</p>
                  <p className="text-[#B8C5C5] text-sm mt-1">Please try again later.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

