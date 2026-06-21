import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Your email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email format seems invalid';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please type a message';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-bg border-b-2 border-brand-blue relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4" /> Outreach channel
          </h2>
          <h1 className="text-4xl md:text-5xl font-black font-display text-zinc-900 uppercase">
            Get In Touch
          </h1>
          <div className="h-[3px] w-24 bg-brand-blue mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="border-2 border-brand-blue bg-white rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(46,84,254,1)] flex-1 flex flex-col justify-center space-y-6">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2 block">Direct Parameters</span>
              
              <div className="space-y-4">
                {/* Email */}
                <a 
                  href="mailto:nihal.pm9633@gmail.com" 
                  className="flex items-center space-x-4 p-4 border-2 border-brand-blue rounded-2xl bg-white hover:bg-brand-bg shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all group"
                >
                  <div className="p-2.5 border-2 border-brand-blue rounded-xl bg-brand-bg text-brand-blue shadow-[2px_2px_0px_0px_rgba(46,84,254,1)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Email Address</div>
                    <div className="text-sm sm:text-base text-zinc-900 font-bold mt-0.5 truncate">
                      nihal.pm9633@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+919633443070" 
                  className="flex items-center space-x-4 p-4 border-2 border-brand-blue rounded-2xl bg-white hover:bg-brand-bg shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all group"
                >
                  <div className="p-2.5 border-2 border-brand-blue rounded-xl bg-brand-bg text-brand-blue shadow-[2px_2px_0px_0px_rgba(46,84,254,1)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Phone Number</div>
                    <div className="text-sm sm:text-base text-zinc-900 font-bold mt-0.5">
                      +91 9633443070
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-4 p-4 border-2 border-brand-blue rounded-2xl bg-white shadow-[3px_3px_0px_0px_rgba(46,84,254,1)]">
                  <div className="p-2.5 border-2 border-brand-blue rounded-xl bg-brand-bg text-brand-blue shadow-[2px_2px_0px_0px_rgba(46,84,254,1)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Current Base</div>
                    <div className="text-sm sm:text-base text-zinc-900 font-bold mt-0.5">
                      Kakkad, Kerala, India
                    </div>
                  </div>
                </div>

                {/* GitHub link */}
                <a 
                  href="https://github.com/Nihalpm123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 border-2 border-brand-blue rounded-2xl bg-white hover:bg-brand-bg shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all group"
                >
                  <div className="p-2.5 border-2 border-brand-blue rounded-xl bg-brand-bg text-brand-blue shadow-[2px_2px_0px_0px_rgba(46,84,254,1)]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">GitHub Profile</div>
                    <div className="text-sm sm:text-base text-zinc-900 font-bold mt-0.5">
                      github.com/Nihalpm123
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Postcard Outlined Contact Form */}
          <div className="lg:col-span-7 relative">
            <div className="border-2 border-brand-blue bg-white rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(46,84,254,1)] relative h-full">
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-6 block">Write Postcard</span>
              
              {isSuccess ? (
                <div className="h-[320px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-4 border-2 border-brand-blue rounded-full bg-brand-bg text-brand-blue shadow-[3px_3px_0px_0px_rgba(46,84,254,1)]">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-black font-display text-zinc-900 uppercase">Message Sent!</h3>
                  <p className="text-zinc-600 max-w-xs font-medium text-sm">
                    Your message has been posted. I will check my inbox and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 border-2 ${
                        errors.name ? 'border-brand-orange' : 'border-brand-blue'
                      } rounded-xl bg-brand-bg text-zinc-900 placeholder-zinc-400 focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] focus:outline-none transition-all duration-200`}
                      placeholder="Type your name here..."
                    />
                    {errors.name && <p className="text-brand-orange text-[10px] font-bold uppercase mt-1.5">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 border-2 ${
                        errors.email ? 'border-brand-orange' : 'border-brand-blue'
                      } rounded-xl bg-brand-bg text-zinc-900 placeholder-zinc-400 focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] focus:outline-none transition-all duration-200`}
                      placeholder="your.email@domain.com"
                    />
                    {errors.email && <p className="text-brand-orange text-[10px] font-bold uppercase mt-1.5">{errors.email}</p>}
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label htmlFor="message" className="block text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 border-2 ${
                        errors.message ? 'border-brand-orange' : 'border-brand-blue'
                      } rounded-xl bg-brand-bg text-zinc-900 placeholder-zinc-400 focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(46,84,254,1)] focus:outline-none transition-all duration-200 resize-none`}
                      placeholder="Hi Nihal, I'd like to collaborate..."
                    />
                    {errors.message && <p className="text-brand-orange text-[10px] font-bold uppercase mt-1.5">{errors.message}</p>}
                  </div>

                  {/* Submit button with cursor text */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 border-2 border-brand-blue rounded-xl font-bold uppercase tracking-wider text-xs text-white bg-brand-blue shadow-[4px_4px_0px_0px_rgba(46,84,254,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
                    data-cursor-text="SEND"
                  >
                    {isSubmitting ? (
                      <span className="flex h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span>Submit Postcard</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



