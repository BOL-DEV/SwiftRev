import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import StepIndicator from '../components/onboarding/StepIndicator';
import Step0TierSelection from '../components/onboarding/Step0TierSelection';
import Step1FacilityDetails from '../components/onboarding/Step1FacilityDetails';
import Step2Documentation from '../components/onboarding/Step2Documentation';
import Step3RevenuePreferences from '../components/onboarding/Step3RevenuePreferences';
import Step4Review from '../components/onboarding/Step4Review';
import SwiftRevLogo from '../components/shared/SwiftRevLogo';
import ThemeToggle from '../components/shared/ThemeToggle';

const TOTAL_STEPS = 5;

const stepTitles = {
  1: { title: 'Choose Your Tier', sub: "Select the service package that matches your facility's operational size." },
  2: { title: 'Facility Details', sub: 'Tell us about your hospital, clinic, or healthcare center.' },
  3: { title: 'Compliance Documentation', sub: 'Upload required documents for verification and KYC compliance.' },
  4: { title: 'Revenue & Bank Preferences', sub: 'Configure collection channels and automated settlement bank accounts.' },
  5: { title: 'Review & Submit', sub: 'Confirm all details before dispatching to SwiftRev onboarding team.' },
};

export default function HospitalOnboarding() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [selectedTier, setSelectedTier] = useState('pro');

  const [facilityData, setFacilityData] = useState({
    facilityName: '', facilityType: '', regNumber: '', yearEstablished: '',
    address: '', contactName: '', contactRole: '', email: '', phone: '', revenueRange: '',
  });

  const [docsData, setDocsData] = useState({
    cacCert: null, taxId: null, bankStatement: null,
    auditReport: null, licenseDoc: null, directorId: null,
  });

  const [prefsData, setPrefsData] = useState({
    collectionChannels: ['cash', 'pos'], settlementBank: 'Zenith Bank', accountNumber: '1012345678',
    accountName: 'Hospital Operations Treasury', reportingFrequency: 'daily', specialInstructions: '',
  });

  const canProceed = () => {
    if (step === 1) return !!selectedTier;
    if (step === 2) return facilityData.facilityName && facilityData.facilityType && facilityData.email && facilityData.phone && facilityData.contactName;
    if (step === 3) return true; // allow previewing without blocking file upload
    if (step === 4) return prefsData.collectionChannels.length > 0 && prefsData.settlementBank && prefsData.accountNumber;
    return true;
  };

  const tierLabel = { elite: 'Elite', pro: 'Pro', platinum: 'Platinum' }[selectedTier] || 'Pro';

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-3xl shadow-xl p-8 md:p-12 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mx-auto mb-6 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-foreground font-heading mb-2">Application Submitted!</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Thank you, <strong>{facilityData.facilityName || 'Facility Partner'}</strong>. Your <strong>{tierLabel} plan</strong> onboarding application has been logged.
          </p>
          <p className="text-muted-foreground text-xs leading-relaxed mb-8">
            A SwiftRev healthcare financial manager will review your facility details and contact you within <strong>24–48 hours</strong>.
          </p>
          <div className="space-y-2.5">
            <Link
              to="/hrms-demo"
              className="block w-full py-3 bg-pine text-white text-xs font-heading font-bold rounded-xl hover:bg-pine-hover transition-colors shadow-xs"
            >
              Explore Live HRMS Admin Demo
            </Link>
            <Link
              to="/"
              className="block w-full py-2.5 border border-border text-foreground text-xs font-semibold rounded-xl hover:bg-muted transition-colors"
            >
              Return to SwiftRev Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex text-foreground">
      {/* Left Panel — Form */}
      <div className="w-full lg:w-3/5 flex items-start justify-center p-6 md:p-12 overflow-y-auto">
        <div className="w-full max-w-xl py-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/hrms" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to HRMS Overview
            </Link>
            <ThemeToggle />
          </div>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-pine dark:text-teal-400 mb-1">
            SwiftRev And Technology Limited
          </p>
          <h1 className="text-3xl font-extrabold text-foreground font-heading mb-8">Hospital Onboarding</h1>

          <StepIndicator current={step} total={TOTAL_STEPS} />

          <div className="mb-6">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-pine dark:text-teal-400 mb-1">
              Step {step} of {TOTAL_STEPS}
            </p>
            <h2 className="text-xl font-bold text-foreground font-heading">{stepTitles[step].title}</h2>
            <p className="text-xs text-muted-foreground mt-1">{stepTitles[step].sub}</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-card border border-border rounded-2xl shadow-xs p-6 md:p-8"
            >
              {step === 1 && <Step0TierSelection selected={selectedTier} onSelect={setSelectedTier} />}
              {step === 2 && <Step1FacilityDetails data={facilityData} onChange={setFacilityData} />}
              {step === 3 && <Step2Documentation data={docsData} onChange={setDocsData} />}
              {step === 4 && <Step3RevenuePreferences data={prefsData} onChange={setPrefsData} />}
              {step === 5 && <Step4Review facility={facilityData} docs={docsData} prefs={prefsData} tier={tierLabel} />}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(s => s - 1)}
              disabled={step === 1}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-xs font-semibold text-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>

            {step < TOTAL_STEPS ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-pine text-white text-xs font-heading font-bold hover:bg-pine-hover transition-colors shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-pine text-white text-xs font-heading font-bold hover:bg-pine-hover transition-colors shadow-xs"
              >
                Submit Application <CheckCircle2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden lg:flex w-2/5 bg-card border-l border-border items-center justify-center relative overflow-hidden sticky top-0 h-screen p-10">
        <div className="relative z-10 text-center max-w-sm">
          <SwiftRevLogo className="justify-center mb-6" showTagline={true} />

          <h3 className="text-foreground font-extrabold text-xl font-heading mb-2">
            Hospital Revenue, 100% Accounted.
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed mb-8 font-body">
            Join healthcare facilities across Nigeria using SwiftRev HRMS to eliminate leakages, reconcile cash &amp; POS, and restore financial transparency.
          </p>

          <div className="space-y-2 text-left">
            {['Choose Your Tier', 'Facility Details', 'Documentation', 'Revenue Preferences', 'Review & Submit'].map((label, i) => (
              <div
                key={label}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  step === i + 1
                    ? 'bg-pine text-white shadow-xs'
                    : step > i + 1
                    ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                  step === i + 1 ? 'bg-white text-pine' : step > i + 1 ? 'bg-emerald-500 text-white' : 'bg-card text-muted-foreground'
                }`}>
                  {step > i + 1 ? '✓' : i + 1}
                </span>
                {label}
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-muted/60 border border-border text-left">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Selected Solution</p>
            <p className="text-foreground font-heading font-extrabold text-sm mt-0.5">HRMS • {tierLabel} Tier</p>
            <p className="text-[11px] text-muted-foreground mt-1">Includes cashier stations, POS terminals &amp; T+0 daily bank sweep.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
