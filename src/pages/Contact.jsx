import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Mail, label: 'Official Email', value: 'me@swiftrevenue.me' },
  { icon: Phone, label: 'Direct Line', value: '+234 916 048 2233' },
  { icon: MapPin, label: 'Corporate Office', value: '7 Prince Ajadi Olasunkanmi St, Lafenwa, Ogun State, Nigeria' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', solution: 'hrms', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success('Your message has been received! A SwiftRev representative will follow up promptly.');
    }, 1000);
  };

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-pine/10 text-pine dark:text-teal-300 border border-pine/20 mb-4">
            Connect With Us
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight">
            Let's Talk About Your Operations
          </h1>
          <p className="mt-4 text-base text-muted-foreground font-body">
            Whether you need to onboard a hospital onto HRMS or discuss fintech and proptech partnerships, our team is here.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-8 bg-card border border-border shadow-sm space-y-6">
              <h2 className="text-xl font-heading font-bold text-foreground">SwiftRev Technology Limited</h2>
              <p className="text-xs text-muted-foreground leading-relaxed font-body">
                We work directly with Chief Medical Directors, hospital boards, financial institutions, and partners across Nigeria.
              </p>

              <div className="space-y-4 pt-4 border-t border-border text-xs">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-pine dark:text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground mt-0.5">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-muted/40 border border-border flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-pine dark:text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-heading font-bold text-foreground">Immediate HRMS Consultations</h4>
                <p className="text-[11px] text-muted-foreground mt-1">
                  For urgent hospital revenue leakage assessments, our field officers can schedule an on-site audit within 48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 bg-card border border-border shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">Inquiry Submitted Successfully</h3>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto font-body">
                    Thank you. An operations specialist from SwiftRev Technology Limited will review your note and contact you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', solution: 'hrms', message: '' }); }}
                    className="mt-4 px-5 py-2 rounded-full bg-pine text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Dr. / Mr. / Mrs. Full Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-pine/30"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-foreground mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@organization.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-pine/30"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-foreground mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+234..."
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-pine/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-foreground mb-1.5">Area of Interest</label>
                    <select
                      value={form.solution}
                      onChange={(e) => setForm({ ...form, solution: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-pine/30"
                    >
                      <option value="hrms">HRMS — Hospital Revenue Management (Live Product)</option>
                      <option value="pos">Smart POS &amp; Fintech Infrastructure</option>
                      <option value="realestate">Real Estate &amp; Housing Solutions</option>
                      <option value="corporate">General Partnership / Investor Relations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-foreground mb-1.5">Your Message / Facility Details</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your facility or specific requirements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-pine/30"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-full bg-pine text-white font-heading font-bold text-xs hover:bg-pine-hover transition flex items-center justify-center gap-2 shadow-xs"
                  >
                    {submitting ? 'Sending Inquiry...' : 'Submit Inquiry'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}