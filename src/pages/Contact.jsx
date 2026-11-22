import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, 
  Send, CheckCircle2, AlertCircle, MessageSquare 
} from 'lucide-react';
import { navigation } from '../data/navigation';

export default function Contact() {
  const info = navigation.companyInfo;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact Phone Number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.subject.trim()) errs.subject = 'Inquiry subject is required';
    if (!formData.message.trim()) errs.message = 'Please provide your message or product requirement';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Realistic simulation with clean state handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Hyderabad Crop Science Pvt. Ltd.</title>
        <meta 
          name="description" 
          content="Get in touch with Hyderabad Crop Science Pvt. Ltd. Customer Care: 8258808080, Email: hyderabadcropscience@gmail.com. Corporate Office in Surat, Gujarat." 
        />
      </Helmet>

      {/* Page Hero */}
      <PageHero
        eyebrow="GET IN TOUCH"
        title="We are Here to Support Your Growth."
        subtitle="Have inquiries regarding our crop protection formulations, commercial dealership partnerships, or technical agronomic recommendations? Our team is ready to assist."
        backgroundImage="/images/contact-hero.jpg"
        currentPage="Contact Us"
      />

      <section className="py-20 lg:py-24 bg-bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Information Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-6 h-[1.5px] bg-gold"></span>
                  <span className="text-xs uppercase font-display tracking-[0.25em] font-bold text-gold">
                    OFFICIAL CHANNELS
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest-dark mb-4">
                  Corporate Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans mb-6">
                  For distributor inquiries, bulk agrochemical orders, and agronomic support, reach out directly through our verified channels.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-5 bg-white rounded-sm border border-border shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-bg-soft text-forest flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-forest-dark mb-1">Corporate Office Address</h4>
                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    {info.address.line1},<br />
                    {info.address.line2},<br />
                    {info.address.city}, {info.address.state} - {info.address.pincode}, India
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 bg-white rounded-sm border border-border shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-bg-soft text-forest flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-forest-dark mb-1">Customer Helpline</h4>
                  <a href={`tel:${info.phone}`} className="text-sm font-display font-semibold text-forest hover:text-gold transition-colors">
                    {info.phone}
                  </a>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    Toll-Free Assistance for Farmers & Dealers
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 bg-white rounded-sm border border-border shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-bg-soft text-forest flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-forest-dark mb-1">Email Correspondence</h4>
                  <a href={`mailto:${info.email}`} className="text-xs sm:text-sm font-sans text-forest hover:text-gold transition-colors break-all">
                    {info.email}
                  </a>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    Official Inquiries & Commercial Proposals
                  </p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-5 bg-white rounded-sm border border-border shadow-soft flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-bg-soft text-forest flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-forest-dark mb-1">Operating Hours</h4>
                  <p className="text-xs text-text-primary font-medium">
                    {info.workingHours}
                  </p>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    Sunday: Closed (Except during monsoonal emergency dispatch)
                  </p>
                </div>
              </div>

              {/* Accreditation Badge */}
              <div className="p-4 bg-forest text-white rounded-sm border border-gold/40 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-display font-bold text-white">{info.iso}</div>
                  <div className="text-sage-muted text-[11px]">Govt. Reg. Company • CIN: {info.cin}</div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact & Dealer Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-sm border border-border shadow-soft-lg">
                <div className="mb-8">
                  <span className="text-xs uppercase font-display tracking-widest text-gold font-bold">
                    TRANSPARENT COMMUNICATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-forest-dark mt-1">
                    Send an Official Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted font-sans mt-1">
                    Please provide your contact details and message below. Our corporate agronomy team will respond within 24 business hours.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="p-6 bg-forest/5 border border-forest/30 rounded-sm text-center py-10 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-12 h-12 text-forest mx-auto mb-3" />
                    <h4 className="text-xl font-serif font-bold text-forest-dark mb-2">
                      Inquiry Successfully Received
                    </h4>
                    <p className="text-xs sm:text-sm text-text-muted max-w-md mx-auto mb-6">
                      Thank you for contacting Hyderabad Crop Science Pvt. Ltd. Your inquiry reference has been logged and our regional executive will connect with you promptly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-5 py-2.5 bg-forest text-white text-xs font-display font-semibold uppercase tracking-wider rounded-sm hover:bg-forest-light transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-display font-semibold uppercase tracking-wider text-forest-dark mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Patel"
                          className={`w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-bg-ivory border ${
                            errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-border'
                          } text-text-primary focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-display font-semibold uppercase tracking-wider text-forest-dark mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. contact@domain.com"
                          className={`w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-bg-ivory border ${
                            errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-border'
                          } text-text-primary focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-display font-semibold uppercase tracking-wider text-forest-dark mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className={`w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-bg-ivory border ${
                            errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-border'
                          } text-text-primary focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs font-display font-semibold uppercase tracking-wider text-forest-dark mb-1.5">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-bg-ivory border ${
                            errors.subject ? 'border-red-500 ring-1 ring-red-500' : 'border-border'
                          } text-text-primary focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors`}
                        >
                          <option value="">Select an Inquiry Type</option>
                          <option value="Product Formulation Query">Product Formulation Query</option>
                          <option value="Dealership / Distribution Network">Dealership / Distribution Network</option>
                          <option value="Bulk Order Requirements">Bulk Order Requirements</option>
                          <option value="Agronomy & Crop Advisory">Agronomy & Crop Advisory</option>
                          <option value="Other Corporate Inquiry">Other Corporate Inquiry</option>
                        </select>
                        {errors.subject && (
                          <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Body */}
                    <div>
                      <label className="block text-xs font-display font-semibold uppercase tracking-wider text-forest-dark mb-1.5">
                        Your Message / Formulation Requirement <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your crop protection needs, quantity requirements, or target state..."
                        className={`w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-bg-ivory border ${
                          errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-border'
                        } text-text-primary focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        loading={isSubmitting}
                        className="w-full sm:w-auto"
                      >
                        Submit Official Enquiry
                      </Button>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>

          {/* Interactive Google Map Embed (Surat, Gujarat Headquarters) */}
          <div className="mt-16 bg-white p-4 rounded-sm border border-border shadow-soft">
            <div className="mb-3 px-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-xs font-display font-bold text-forest-dark uppercase tracking-wider">
                  Location Map: Surat, Gujarat Corporate Base
                </span>
              </div>
              <span className="text-[11px] text-text-muted">
                Pin Code: 394210
              </span>
            </div>
            
            <div className="w-full h-80 rounded-sm overflow-hidden border border-border/80">
              <iframe
                title="Hyderabad Crop Science Corporate Location"
                src="https://maps.google.com/maps?q=Udhna%20Surat%20Gujarat%20394210&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
