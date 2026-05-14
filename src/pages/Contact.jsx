import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GlassCard from '../components/shared/GlassCard';
import PulseIndicator from '../components/shared/PulseIndicator';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'me@swiftrevenue.me', color: 'mint' },
  { icon: Phone, label: 'Phone', value: '+234 916 048 2233', color: 'mint' },
  { icon: MapPin, label: 'Address', value: '7 Prince Ajadi Olasunkanmi St, Lafewa, Ogun State', color: 'copper' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500));
    toast.success('Message sent! We\'ll get back to you shortly.');
    setForm({ name: '', email: '', interest: '', message: '' });
    setSending(false);
  };

  return (
    <div className="pt-20">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-obsidian">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-mint/3 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-copper/3 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-heading font-semibold tracking-wider uppercase text-mint mb-6">
                <PulseIndicator color="mint" size="sm" />
                Get in Touch
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-limestone leading-[0.95] mb-6" style={{ letterSpacing: '-0.04em' }}>
                Let's Build Your{' '}
                <span className="text-mint">Future</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body leading-relaxed">
                Whether you're interested in medical finance or agent-free housing, we're ready to help.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((c, i) => (
                <GlassCard key={c.label} delay={i * 0.1}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${c.color === 'mint' ? 'bg-mint/10' : 'bg-copper/10'}`}>
                      <c.icon className={`w-5 h-5 ${c.color === 'mint' ? 'text-mint' : 'text-copper'}`} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs font-heading uppercase tracking-wider">{c.label}</p>
                      <p className="text-foreground font-body font-medium">{c.value}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}

              <GlassCard delay={0.3}>
                <h4 className="font-heading font-bold text-foreground mb-3">Office Hours</h4>
                <div className="space-y-2 text-sm font-body text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </GlassCard>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-2xl p-6 md:p-10">
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider mb-2 block">Full Name</label>
                      <Input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider mb-2 block">Email</label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider mb-2 block">Interest</label>
                    <Select value={form.interest} onValueChange={(v) => setForm({ ...form, interest: v })}>
                      <SelectTrigger className="bg-secondary/50 border-border/50 text-foreground">
                        <SelectValue placeholder="What are you interested in?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medical">Medical Finance</SelectItem>
                        <SelectItem value="housing">Housing Solutions</SelectItem>
                        <SelectItem value="both">Both Services</SelectItem>
                        <SelectItem value="partnership">Business Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-xs text-muted-foreground font-heading uppercase tracking-wider mb-2 block">Message</label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your needs..."
                      required
                      rows={5}
                      className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-mint text-background font-heading font-bold py-6 rounded-xl hover:opacity-90 transition-opacity text-base"
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}